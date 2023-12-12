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
    },
    getters: {
      getPosts(state) {
        return state.fetchedPosts;
      },
    },
  });
};

export default createStore;
