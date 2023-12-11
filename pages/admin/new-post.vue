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
      axios
        .post(
          "https://my-corner-post-app-default-rtdb.firebaseio.com/posts.json",
          post
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
