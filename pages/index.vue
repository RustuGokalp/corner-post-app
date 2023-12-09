<template>
  <div>
    <PostList :posts="fetchedPosts" />
    <About />
  </div>
</template>

<script>
import PostList from "~/components/post/postList";
import About from "~/components/home/about";
export default {
  components: {
    PostList,
    About,
  },
  created() {
    this.$store.dispatch("setPosts", this.fetchedPosts);
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      resolve({
        fetchedPosts: [
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
        ],
      });
      reject(new Error());
    })
      .then((data) => {
        return data;
      })
      .catch((e) => {
        context.error(e);
      });
  },
};
</script>

<style scoped></style>
