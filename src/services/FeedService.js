import axios from "axios";

export class FeedService {
  connection = axios.create({
    baseURL: "http://localhost:4000/",
  });

  getPostsByUserId(userId) {
    return this.connection.get(`posts?userId=${userId}`);
  }

  createPost(user_id, { text }) {
    return this.connection.post("posts", { text, user_id });
  }
}
