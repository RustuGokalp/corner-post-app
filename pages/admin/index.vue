<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center">
      <button class="btn btn-dark" @click="$router.push('/admin/new-post')">
        Yeni Bir Yazı Ekleeeeeeee
      </button>
    </div>
    <PostList :isAdmin="true" />
  </div>
</template>

<script>
import PostList from "~/components/post/postList";
export default {
  layout: "admin",
  components: {
    PostList,
  },
};
</script>

<style scoped></style>
