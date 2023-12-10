import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      fetchedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.fetchedPosts = posts;
      },
    },
    actions: {
      nuxtServerInit(vuexContext) {
        vuexContext.commit("setPosts", [
          {
            id: 1,
            title: "Trial Title",
            subtitle: "Trial Subtitle",
            text: "Trial Main Text",
            author: "Rüştü Gökalp Beğen",
          },
          {
            id: 2,
            title: "Trial Title",
            subtitle: "Trial Subtitle",
            text: "Trial Main Text",
            author: "Rüştü Gökalp Beğen",
          },
        ]);
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
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
