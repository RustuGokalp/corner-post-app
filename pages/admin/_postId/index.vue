<template>
  <newPostForm :isUpdate="true" :post="loadedPost" />
</template>

<script>
import newPostForm from "~/components/admin/newPostForm";
export default {
  components: {
    newPostForm,
  },
  data() {
    return {
      loadedPost: {
        id: 1,
        title: "Trial Title",
        subtitle: "Trial Subtitle",
        text: "Trial Main Text",
        author: "Rüştü Gökalp Beğen",
      },
    };
  },
};
</script>
