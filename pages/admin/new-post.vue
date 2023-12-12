<template>
  <newPostForm @submit="savePost($event)" />
</template>

<script>
import axios from "axios";
import newPostForm from "~/components/admin/newPostForm";
export default {
  components: {
    newPostForm,
  },
  methods: {
    savePost(post) {
      this.$store.dispatch("addPost", post);
    },
  },
};
</script>
