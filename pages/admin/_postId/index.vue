<template>
  <newPostForm
    @submit="updatePost($event)"
    :isUpdate="true"
    :post="fetchedPost"
  />
</template>

<script>
import axios from "axios";
import newPostForm from "~/components/admin/newPostForm";
export default {
  components: {
    newPostForm,
  },
  asyncData(context) {
    return axios
      .get(
        `https://my-corner-post-app-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`
      )
      .then((response) => {
        return { fetchedPost: response.data };
      });
  },
  methods: {
    updatePost(editedPost) {
      axios
        .put(
          `https://my-corner-post-app-default-rtdb.firebaseio.com/posts/${this.$route.params.postId}.json`,
          editedPost
        )
        .then((response) => {
          this.$router.push("/admin");
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
