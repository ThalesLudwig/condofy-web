import axios from "axios";

export class FeedService {
  connection = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
  });

  getPostsByUserId(userId, { page, size }) {
    return this.connection.get(`posts?userId=${userId}&size=${size}&page=${page}`);
  }

  createPost(user_id, { text }) {
    return this.connection.post("posts", { text, user_id });
  }

  deletePost(postId) {
    return this.connection.delete(`posts/${postId}`);
  }
}
