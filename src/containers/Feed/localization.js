import { defineMessages } from "react-intl";

export default defineMessages({
  feed: {
    id: "app.menu.feed",
    defaultMessage: "Feed",
  },
  messages: {
    id: "app.menu.messages",
    defaultMessage: "Messages",
  },
  noPostsLine1: {
    id: "app.feed.noposts.first",
    defaultMessage: "Oh, there's nothing here.",
  },
  noPostsLine2: {
    id: "app.feed.noposts.second",
    defaultMessage: "Try saying hi to your neighbors!",
  },
  createPostSuccess: {
    id: "app.feed.createPost.success",
    defaultMessage: "Post created",
  },
  createPostError: {
    id: "app.feed.createPost.error",
    defaultMessage: "An error occurred when trying to create this post",
  },
  deletePostSuccess: {
    id: "app.feed.deletePost.success",
    defaultMessage: "Post deleted",
  },
  deletePostError: {
    id: "app.feed.deletePost.error",
    defaultMessage: "An error occurred when trying to delete this post",
  },
  fetchPostsError: {
    id: "app.feed.fetchPosts.error",
    defaultMessage: "An error occurred when trying to fetch your feed",
  },
});
