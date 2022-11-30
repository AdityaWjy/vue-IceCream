<template>
  <div class="home">
    <NavbarView />
    <div class="container">
      <!-- Import Hero Component -->
      <HeroView />
      <div class="row mt-3">
        <div class="col">
          <h2>Best <strong>Ice Cream</strong></h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-end"
            ><b-icon-eye></b-icon-eye>Lihat semua
          </router-link>
        </div>
      </div>

      <!-- Import Card Product Component -->
      <div class="row mb-3">
        <div class="col mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue';
import HeroView from '@/components/HeroView.vue';
import CardProduct from '@/components/CardProduct.vue';
import axios from 'axios';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    NavbarView,
    HeroView,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },

  methods: {
    setProduct(data) {
      this.products = data;
    },
  },

  mounted() {
    axios
      .get('http://localhost:3000/best-products')
      .then((response) =>
        // handle success
        this.setProduct(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
  },
};
</script>
