<template>
  <div>
    <PostList :posts="fetchedPosts" />
  </div>
</template>

<script>
import PostList from "~/components/post/postList";
export default {
  head: {
    title: "Yazılar | Köşe Yazısı",
  },
  components: {
    PostList,
  },
  computed: {
    fetchedPosts() {
      return this.$store.getters.getPosts;
    },
  },
};
</script>

<style scoped></style>
