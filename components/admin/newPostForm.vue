<template>
  <div
    class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center"
  >
    <form class="newPostForm" @submit.prevent="onSubmit()">
      <fieldset>
        <legend>
          {{ isUpdate ? "Yazıyı Düzenle" : "Yeni Köşe Yazısı" }}
        </legend>
        <div class="form-group">
          <label>Yazar Adı</label>
          <input
            v-model="post.author"
            type="text"
            class="form-control"
            placeholder="Yazarın adını giriniz.."
          />
        </div>
        <div class="form-group">
          <label>Baslık</label>
          <input
            v-model="post.title"
            type="text"
            class="form-control"
            placeholder="Yazının baslıgını giriniz.."
          />
        </div>
        <div class="form-group">
          <label>Alt Baslık</label>
          <input
            v-model="post.subtitle"
            type="text"
            class="form-control"
            placeholder="Yazının alt baslıgını giriniz.."
          />
        </div>
        <div class="form-group">
          <label>Köse Yazısı</label>
          <textarea
            class="form-control"
            rows="5"
            v-model="post.text"
          ></textarea>
        </div>
        <button class="btn btn-danger" @click.prevent="$router.push('/admin')">
          İptal
        </button>
        <button type="submit" class="btn btn-primary">Kaydet</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        subtitle: "",
        author: "",
        text: "",
      },
    };
  },
  props: {
    isUpdate: {
      type: Boolean,
      required: false,
      default: false,
    },
    post: {
      type: Object,
      required: false,
    },
  },

  methods: {
    onSubmit() {
      this.$emit("submit", this.post);
    },
  },
  created() {
    this.post = this.post
      ? this.post
      : {
          id: null,
          title: null,
          subtitle: null,
          author: null,
          text: null,
        };
  },
};
</script>

<style scoped>
.newPostForm {
  width: 500px;
}
</style>
