<template>
  <div class="food-detail">
    <NavbarView />

    <!-- Desktop Food Detail Display  -->

    <div class="container d-none d-md-block">
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
        <div class="col-md-5">
          <h2>
            <strong> {{ product.nama }}</strong>
          </h2>
          <hr />

          <h4>
            Harga : <strong>RP. {{ product.harga }}</strong>
          </h4>
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan" class="mb-1"
                >Jumlah Pesanan :</label
              >
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_pemesanan"
              />
            </div>
            <div class="form-group mt-3">
              <label for="keterangan" class="mb-1">Keterangan :</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Keterangan"
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-success mt-3 mb-2"
              @click="pemesanan"
            >
              <b-icon-cart></b-icon-cart>Pesan
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Mobile Food Detail Display  -->

    <div class="container d-sm-block d-md-none">
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

      <div class="row mt-3 row-mobile">
        <div class="col img-container">
          <img
            :src="'../assets/images/' + product.gambar"
            class="img-fluid shadow img-mobile"
          />
        </div>
        <div class="col-md-6 form-container">
          <h2>
            <strong> {{ product.nama }}</strong>
          </h2>
          <hr />

          <h4>
            Harga : <strong>RP. {{ product.harga }}</strong>
          </h4>
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan" class="mb-1"
                >Jumlah Pesanan :</label
              >
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_pemesanan"
              />
            </div>
            <div class="form-group mt-3">
              <label for="keterangan" class="mb-1">Keterangan :</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Keterangan"
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-success mt-3"
              @click="pemesanan"
            >
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
      product: {},
      pesan: {},
    };
  },

  name: 'foodDetail',
  components: { NavbarView },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.products = this.product;
        axios
          .post('http://localhost:3000/keranjangs', this.pesan)
          .then(() => {
            this.$router.push({ path: '/keranjang' });
            this.$toast.success('Sukses masuk keranjang.', {
              type: 'success',
              position: 'top',
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error('Jumlah pemesanan harus diisi.', {
          type: 'error',
          position: 'top',
          dismissible: true,
        });
      }
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

.img-container {
  width: 200px;
  height: 200px;
  text-align: center;
}

.img-container img {
  width: cover;
  height: cover;
}

.form-container {
  margin-top: 150px;
}
</style>
