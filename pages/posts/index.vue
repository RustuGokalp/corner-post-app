<template>
  <div>
    <PostList :posts="fetchedPosts" />
  </div>
</template>

<script>
import PostList from "~/components/post/postList";
export default {
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
