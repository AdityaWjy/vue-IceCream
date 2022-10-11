<template>
  <div class="food-detail">
    <NavbarView />
    <div class="container">
      <!-- Breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark"
                  >Ice Cream</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Ice Cream Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="'../assets/images/' + product.gambar"
            class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong> {{ product.nama }}</strong>
          </h2>
          <hr />

          <h4>
            Harga : <strong>RP. {{ product.harga }}</strong>
          </h4>
          <form>
            <div class="form-group">
              <label for="jumlah_pemesanan" class="mb-1"
                >Jumlah Pesanan :</label
              >
              <input type="number" class="form-control" />
            </div>
            <div class="form-group mt-3">
              <label for="keterangan" class="mb-1">Keterangan :</label>
              <textarea
                class="form-control"
                placeholder="Keterangan"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success mt-3">
              <b-icon-cart></b-icon-cart>Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue';
import axios from 'axios';
export default {
  data() {
    return {
      product: [],
    };
  },

  name: 'foodDetail',
  components: { NavbarView },
  methods: {
    setProduct(data) {
      this.product = data;
    },
  },
  mounted() {
    axios
      .get('http://localhost:3000/products/' + this.$route.params.id)
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

<style scoped>
img {
  height: 20rem;
  width: auto;
}
</style>
