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
        <a @click.prevent="deletePost()" class="btn btn-outline-danger btn-sm"
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
    async deletePost(context) {
      try {
        const apiUrl = `https://my-corner-post-app-default-rtdb.firebaseio.com/posts/${this.post.id}.json`;
        const response = await axios.delete(apiUrl);

        this.deleteResult = {
          success: true,
        };
      } catch (error) {
        this.deleteResult = {
          success: false,
          error: "Silme işlemi sırasında bir hata oluştu.",
        };
      }
    },
  },
};
</script>
<style scoped>
.cardWrapper {
  width: 18rem;
}
</style>
