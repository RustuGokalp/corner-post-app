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
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
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
    }, 1000);
  },
};
</script>

<style scoped></style>
