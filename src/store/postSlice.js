import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FeedService } from "../services/FeedService";

const BASE_ACTION_NAME = "POSTS/";

const ACTION_FETCH_POSTS = `${BASE_ACTION_NAME}FETCH_POSTS`;
const ACTION_CREATE_POSTS = `${BASE_ACTION_NAME}CREATE_POST`;

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

const postSlice = createSlice({
  name: "posts",
  initialState: {
    value: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
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
      });
  },
});

export default postSlice.reducer;
