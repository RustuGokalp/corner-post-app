<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center">
      <button class="btn btn-dark" @click="$router.push('/admin/new-post')">
        Yeni Bir Yazı Ekle
      </button>
    </div>
    <PostList :isAdmin="true" :posts="fetchedPosts" />
  </div>
</template>

<script>
import PostList from "~/components/post/postList";
export default {
  head: {
    title: "Admin | Köşe Yazısı",
  },
  layout: "admin",
  components: {
    PostList,
  },
  computed: {
    fetchedPosts() {
      return this.$store.getters.getPosts;
    },
  },
};
</script>

<style scoped></style>
