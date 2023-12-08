<template>
  <div
    class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center"
  >
    <Post
      :post="post"
      v-for="post in posts"
      :isAdmin="isAdmin"
      :key="post.id"
    />
  </div>
</template>

<script>
import Post from "~/components/post/post";
export default {
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    Post,
  },
};
</script>
