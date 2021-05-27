<template>
  <form @submit.prevent="trySubmit" class="d-flex flex-column">
    <h4>Ajouter un produit :</h4>
    <hr class="w-100" />
    <div class="form-group">
      <label for="">Image :</label>
      <input v-model="form.img" class="form-control" type="text" />
    </div>
    <div class="form-group">
      <label for="">Titre :</label>
      <input v-model="form.title" class="form-control" type="text" />
    </div>
    <div class="form-group">
      <label for="">Description :</label>
      <textarea
        v-model="form.description"
        class="form-control"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="">Prix :</label>
      <input v-model.number="form.price" class="form-control" type="number" />
    </div>
    <ul v-if="errors.length">
      <li class="text-danger" v-for="error in errors" :key="error">
        {{ error }}
      </li>
    </ul>
    <button class="btn btn-primary" type="submit">Ajouter</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        img: "",
        title: "",
        description: "",
        price: "",
      },
      errors: [],
    };
  },
  methods: {
    trySubmit() {
      if (this.formIsValid()) {
        this.$store.dispatch("product/saveOne", { ...this.form });
        this.resetForm();
        this.$rooter.push("/shop");
      }
    },
    resetForm() {
      this.form = {
        img: "",
        title: "",
        description: "",
        price: "",
      };
    },
    formIsValid() {
      this.errors = [];
      if (!this.form.img) {
        this.errors.push("img required");
      }
      if (!this.form.title) {
        this.errors.push("title required");
      }
      if (!this.form.description) {
        this.errors.push("description required");
      }
      if (!this.form.price) {
        this.errors.push("price required");
      }
      return this.errors.length ? false : true;
    },
  },
};
</script>

<style>
</style>