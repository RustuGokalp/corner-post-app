<template>
  <postDetail :post="fetchedPost" />
</template>
<script>
import axios from "axios";
import postDetail from "~/components/post/postDetail";
export default {
  components: {
    postDetail,
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
};
</script>
