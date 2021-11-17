import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FeedService } from "../services/FeedService";

const BASE_ACTION_NAME = "POSTS/";

const ACTION_FETCH_POSTS = `${BASE_ACTION_NAME}FETCH_POSTS`;
const ACTION_FETCH_POST = `${BASE_ACTION_NAME}FETCH_POST`;
const ACTION_CREATE_POSTS = `${BASE_ACTION_NAME}CREATE_POST`;
const ACTION_DELETE_POSTS = `${BASE_ACTION_NAME}DELETE_POST`;
const ACTION_UPDATE_POSTS = `${BASE_ACTION_NAME}UPDATE_POST`;

export const fetchPostsById = createAsyncThunk(ACTION_FETCH_POSTS, async ({ userId, page, size }, { getState }) => {
  const feedService = new FeedService();
  const previousPosts = getState().posts.value;
  const response = await feedService.getPostsByUserId(userId, { page, size });
  return [...previousPosts, ...response.data];
});

export const createPost = createAsyncThunk(ACTION_CREATE_POSTS, async ({ userId, post }, { getState }) => {
  const feedService = new FeedService();
  const previousPosts = getState().posts.value;
  const response = await feedService.createPost(userId, post);
  return [response.data, ...previousPosts];
});

export const deletePost = createAsyncThunk(ACTION_DELETE_POSTS, async ({ postId }, { getState }) => {
  const feedService = new FeedService();
  const previousPosts = getState().posts.value;
  await feedService.deletePost(postId);
  return previousPosts.filter((post) => post.id !== postId);
});

export const fetchPost = createAsyncThunk(ACTION_FETCH_POST, async (postId) => {
  const feedService = new FeedService();
  const post = await feedService.getPostById(postId);
  return post.data;
});

export const updatePost = createAsyncThunk(ACTION_UPDATE_POSTS, async (post, { getState }) => {
  const feedService = new FeedService();
  // const previousPosts = getState().posts.value;
  const response = await feedService.updatePost(post);
  return response.data;
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    value: [],
    selectedPost: null,
    isLoading: false,
    hasError: false,
  },
  reducers: {
    cleanUp(state) {
      state.value = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsById.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchPostsById.fulfilled, (state, action) => {
        state.value = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(fetchPostsById.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.value = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(createPost.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.value = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(deletePost.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(fetchPost.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.selectedPost = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(fetchPost.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.selectedPost = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(updatePost.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { cleanUp } = postSlice.actions;

export default postSlice.reducer;
