<template>
  <postDetail :post="fetchedPost" />
</template>
<script>
import postDetail from "~/components/post/postDetail";
export default {
  components: {
    postDetail,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPost: {
          id: 1,
          title: "Trial Title",
          subtitle: "Trial Subtitle",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta cursus arcu. Mauris sodales tortor non ex semper congue. Nulla.",
          author: "Gökalp Beğen",
        },
      });
    }, 1000);
  },
};
</script>
