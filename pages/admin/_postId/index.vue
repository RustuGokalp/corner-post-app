<template>
  <newPostForm :isUpdate="true" />
</template>

<script>
import newPostForm from "~/components/admin/newPostForm";
export default {
  components: {
    newPostForm,
  },
};
</script>
