<template>
  <newPostForm @submit="savePost($event)" />
</template>

<script>
import newPostForm from "~/components/admin/newPostForm";
export default {
  components: {
    newPostForm,
  },
  methods: {
    savePost(post) {
      console.log(post);
    },
  },
};
</script>
