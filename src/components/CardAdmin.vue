<template>
  <div>
    <!-- Desktop Card Admin Display -->
    <div class="card shadow card-product d-none d-md-block">
      <img
        :src="'assets/images/' + product.gambar"
        class="card-img-top gambar-desktop"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.nama }}</h5>
        <p class="card-text">Harga : RP. {{ product.harga }}</p>

        <!-- Action button delete product -->
        <button
          class="btn btn-danger delete-icon"
          @click="hapusMenu(product.id)"
        >
          Delete <b-icon-trash></b-icon-trash>
        </button>

        <!-- EDIT CARD -->
        <!-- Button trigger modal -->
        <b-button @click="show = true" variant="primary"
          >Edit Product <b-icon-pencil></b-icon-pencil
        ></b-button>

        <b-modal
          v-model="show"
          title="Modal Variants"
          :header-bg-variant="headerBgVariant"
          :header-text-variant="headerTextVariant"
          :body-bg-variant="bodyBgVariant"
          :body-text-variant="bodyTextVariant"
          :footer-bg-variant="footerBgVariant"
          :footer-text-variant="footerTextVariant"
        >
          <b-container fluid>
            <form ref="form" @submit="editMenu(product.id)">
              <label for="id">Id Product : {{ product.id }}</label>
              <input class="form-control" type="number" v-model="menu.id" />

              <label for="kode">Kode Product : {{ product.kode }}</label>
              <input class="form-control" type="text" v-model="menu.kode" />

              <label for="nama">Nama Product : {{ product.nama }} </label>
              <input class="form-control" type="text" v-model="menu.nama" />

              <label for="harga">Harga Product : {{ product.harga }}</label>
              <input class="form-control" type="number" v-model="menu.harga" />

              <label for="detail"
                >Detail Product : {{ product.is_ready }}</label
              >
              <select
                class="form-select input-ready-mobile"
                aria-label="Default select example"
                v-model="menu.is_ready"
              >
                <option disabled>Ready/Kosong</option>
                <option value="Ready">Ready</option>
                <option value="Limited">Limited</option>
              </select>

              <label for="gambar">Gambar Product : {{ product.gambar }}</label>
              <input class="form-control" type="text" v-model="menu.gambar" />
            </form>
          </b-container>

          <template #modal-footer>
            <div class="button-action">
              <b-button
                variant="danger"
                size="md"
                class="float-right"
                @click="show = false"
              >
                Close
              </b-button>
              <b-button
                variant="success"
                size="md"
                class="m-2"
                @click="editMenu(product.id)"
              >
                Submit
              </b-button>
            </div>
          </template>
        </b-modal>
      </div>
    </div>

    <!-- Mobile Card Admin Display -->
    <div class="card shadow card-product d-sm-block d-md-none card-mobile">
      <img
        :src="'assets/images/' + product.gambar"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.nama }}</h5>
        <p class="card-text">Harga : RP. {{ product.harga }}</p>

        <!-- Action Button delete product -->
        <b-button variant="danger" size="sm">
          Delete <b-icon-trash @click="hapusMenu(product.id)"></b-icon-trash>
        </b-button>
        <!-- Action Button edit product -->
        <b-button @click="show = true" variant="primary" size="sm" class="mx-2"
          >Edit <b-icon-pencil></b-icon-pencil
        ></b-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      menu: {},
      products: [],
      show: false,
      variants: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'info',
        'light',
        'dark',
      ],
      headerBgVariant: 'warning',
      headerTextVariant: 'dark',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'light',
      footerTextVariant: 'dark',
    };
  },

  name: 'CardAdmin',
  props: ['product'],

  methods: {
    // Edit Menu

    editMenu(id) {
      if (
        this.menu.id &&
        this.menu.kode &&
        this.menu.nama &&
        this.menu.harga &&
        this.menu.is_ready &&
        this.menu.gambar
      ) {
        this.menu.products;
        axios
          .post('http://localhost:3000/products', this.menu)
          .then(() => {
            this.$toast.success('Sukses edit menu.', {
              type: 'success',
              position: 'top',
              dismissible: true,
            });
            axios
              .delete('http://localhost:3000/products/' + id)
              .then((response) =>
                // handle success
                this.setProduct(response.data)
              )
              .catch((error) =>
                // handle error
                console.log(error)
              );
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
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error('Gagal pengisian tidak benar.', {
          type: 'error',
          position: 'top',
          dismissible: true,
        });
      }
    },

    setProduct(data) {
      this.products = data;
    },
    // Hapus keranjang
    hapusMenu(id) {
      axios
        //methods delete pada axios untuk menghapus array
        .delete('http://localhost:3000/products/' + id)
        .then(() => {
          // handle succes notification
          this.$toast.success('Sukses Hapus Product.', {
            type: 'success',
            position: 'top',
            dismissible: true,
          });
          // Update data daftar menu otomatis ketika dihapus
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
        })
        .catch((error) =>
          // handle error
          console.log(error)
        );
    },
  },
};
</script>

<style scoped>
.gambar-desktop {
  height: 20rem;
  width: cover;
}

.card-mobile {
  width: cover;
  height: cover;
}

.delete-icon {
  margin-right: 10px;
}
</style>
