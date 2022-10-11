<template>
  <div>
    <NavbarView />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Ice cream <strong>menu</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Ice Cream Kesukaan Anda"
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchIce"
            />
            <span class="input-group-text" id="basic-addon1">
              <b-icon-search></b-icon-search>
            </span>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue';
import CardProduct from '@/components/CardProduct.vue';
import axios from 'axios';
export default {
  name: 'FoodsView',
  data() {
    return {
      products: [],
      search: '',
    };
  },

  methods: {
    // penampilan data pada axios
    setProduct(data) {
      this.products = data;
    },
    // Logika untuk input search
    searchIce() {
      axios // ?q= adalah untuk melakukan pencarian pada input
        .get('http://localhost:3000/products?q=' + this.search)
        .then((response) =>
          // handle success
          this.setProduct(response.data)
        );
    },
  },

  mounted() {
    axios
      .get('http://localhost:3000/products')
      .then((response) =>
        // handle success
        this.setProduct(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
  },
  components: {
    NavbarView,
    CardProduct,
  },
};
</script>

<style scoped></style>
