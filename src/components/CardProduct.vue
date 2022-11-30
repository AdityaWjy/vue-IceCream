<template>
  <div class="mb-2">
    <!-- Desktop Card Product Display  -->
    <div class="card shadow card-product d-none d-md-block">
      <img
        :src="'assets/images/' + product.gambar"
        class="card-img-top gambar-desktop"
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

    <!-- Mobile Card Product Display  -->

    <div class="card shadow card-product d-sm-block d-md-none card-mobile">
      <img
        :src="'assets/images/' + product.gambar"
        class="card-img-top gambar-mobile"
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
.gambar-desktop {
  height: 23rem;
  width: cover;
}

.card-mobile {
  width: 200px;
  height: cover;
}
</style>
