<template>
  <div class="card mr-3 mb-3 card-success cardWrapper">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ post.subtitle }}</h6>
      <p class="card-text">
        {{ post.text }}
      </p>
      <div class="admin-button-container" v-if="isAdmin">
        <a
          href="#"
          @click.prevent="$router.push(`/admin/${post.id}`)"
          class="btn btn-outline-warning btn-sm"
          >Düzenle</a
        >
        <a
          @click.prevent="deletePost(post.id)"
          class="btn btn-outline-danger btn-sm"
          >Sil</a
        >
      </div>
      <a
        href="#"
        class="btn btn-outline-info btn-sm"
        @click.prevent="$router.push(`/posts/${post.id}`)"
        v-else
        >Görüntüle</a
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    post: {
      type: Object,
      required: true,
    },
  },

  methods: {
    deletePost(postId) {
      this.$store.dispatch("deletePost", postId);
    },
  },
};
</script>
<style scoped>
.cardWrapper {
  width: 18rem;
}
</style>
