import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      fetchedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.fetchedPosts = posts;
      },
      addPost(state, post) {
        state.fetchedPosts.push(post);
      },
      updatePost(state, editedPost) {
        let postIndex = state.fetchedPosts.findIndex(
          (post) => post.id == editedPost.id
        );
        if (postIndex) {
          state.fetchedPosts[postIndex] = editedPost;
        }
      },
      deletePost(state, postId) {
        state.fetchedPosts = state.fetchedPosts.filter(
          (post) => post.id !== postId
        );
      },
    },
    actions: {
      nuxtServerInit(vuexContext) {
        return axios
          .get(
            "https://my-corner-post-app-default-rtdb.firebaseio.com/posts.json"
          )
          .then((response) => {
            let data = response.data;
            let postArray = [];
            for (let key in data) {
              postArray.push({ id: key, ...data[key] });
            }
            vuexContext.commit("setPosts", postArray);
          });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      addPost(vuexContext, post) {
        axios
          .post(
            "https://my-corner-post-app-default-rtdb.firebaseio.com/posts.json",
            post
          )
          .then((response) => {
            vuexContext.commit("addPost", { ...post, id: response.data.name });
            this.$router.push("/admin");
          });
      },
      updatePost(vuexContext, editedPost) {
        axios
          .put(
            `https://my-corner-post-app-default-rtdb.firebaseio.com/posts/${editedPost.id}.json`,
            editedPost
          )
          .then((response) => {
            vuexContext.commit("updatePost", editedPost);
            this.$router.push("/admin");
          })
          .catch((e) => console.log(e));
      },
      async deletePost({ commit }, postId) {
        try {
          const apiUrl = `https://my-corner-post-app-default-rtdb.firebaseio.com/posts/${postId}.json`;
          const response = await axios.delete(apiUrl);

          commit("deletePost", postId);
        } catch (error) {
          console.error("Silme işlemi sırasında bir hata oluştu.", error);
        }
      },
    },
    getters: {
      getPosts(state) {
        return state.fetchedPosts;
      },
    },
  });
};

export default createStore;
