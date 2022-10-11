<template>
  <div class="card shadow card-product">
    <img
      :src="'assets/images/' + product.gambar"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Harga : RP. {{ product.harga }}</p>

      <!-- router link untuk mengarah ke food detail -->
      <router-link :to="'/foods/' + product.id" class="btn btn-success">
        <b-icon-cart></b-icon-cart>Pesan</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: ['product'],
  components: {},
};
</script>

<style scoped>
img {
  height: 23rem;
  width: cover;
}
</style>
