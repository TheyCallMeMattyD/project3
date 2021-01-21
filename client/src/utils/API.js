import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  },
  // Saves member to the database
  saveMember: function(memberData) {
    return axios.post("/api/sign-up", memberData);
  },

  authenticateMember: function(memberData) {
    return axios.post("/api/auth/login", memberData);
  },
  // Gets all posts
  getMembers: function() {
    return axios.get("/api/sign-up");
  },
   // Gets the post with the given id
   getMember: function(id) {
    return axios.get("/api/sign-up/" + id);
  },
  // Deletes the post with the given id
  deleteMember: function(id) {
    return axios.delete("/api/sign-up/" + id);
  }

};
