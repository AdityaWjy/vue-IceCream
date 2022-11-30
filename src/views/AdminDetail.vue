<template>
  <div>
    <NavbarView />

    <!-- Desktop display table -->

    <div class="container mt-3 d-none d-md-block">
      <div class="row">
        <div class="col">
          <h2>Tambahkan <strong>Menu</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Kode</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Product</th>
                  <th scope="col">Gambar</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-pertama">
                  <th>
                    <b-form-input
                      type="number"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-number"
                      placeholder="1"
                      v-model="menu.id"
                    />
                  </th>
                  <td>
                    <b-form-input
                      type="text"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-kode"
                      placeholder="K-01"
                      v-model="menu.kode"
                    />
                  </td>
                  <td>
                    <strong
                      ><b-form-input
                        type="text"
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-0 input-nama"
                        placeholder="Nama ice cream"
                        v-model="menu.nama"
                    /></strong>
                  </td>
                  <td>
                    <b-form-input
                      type="number"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-harga"
                      placeholder="Harga Product"
                      v-model="menu.harga"
                    />
                  </td>
                  <td>
                    <select
                      class="form-select input-ready"
                      aria-label="Default select example"
                      v-model="menu.is_ready"
                    >
                      <option disabled>Ready/Kosong</option>
                      <option value="Ready">Ready</option>
                      <option value="Limited">Limited</option>
                    </select>
                  </td>
                  <td>
                    <div class="mb-3">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Gambar product"
                        id="formFile"
                        v-model="menu.gambar"
                      />
                    </div>
                  </td>

                  <td class="text-success">
                    <b-button
                      variant="success"
                      class="mb-2"
                      @click="tambahMenu"
                    >
                      submit
                    </b-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile display table  -->

    <div class="container mt-3 d-sm-block d-md-none">
      <div class="row">
        <div class="col">
          <h2>Tambahkan <strong>Menu</strong></h2>
          <div class="justify-content-center mt-3">
            <!-- Form id nama -->
            <form>
              <div class="row">
                <div class="col">
                  <label for="id" class="mb-1 label-mobile">Id Product :</label>
                  <input
                    type="number"
                    class="form-control mb-2"
                    placeholder="1"
                    v-model="menu.id"
                  />
                </div>
                <div class="col">
                  <label for="kode" class="mb-1 label-mobile"
                    >Kode Product</label
                  >
                  <input
                    type="text"
                    class="form-control mb-2"
                    placeholder="K-01"
                    v-model="menu.kode"
                  />
                </div>
              </div>
            </form>
            <!-- Form nama harga  -->

            <form>
              <div class="row">
                <div class="col">
                  <label for="nama" class="mb-1 label-mobile"
                    >Nama Product :</label
                  >
                  <input
                    type="text"
                    class="form-control mb-2"
                    placeholder="Nama ice cream"
                    v-model="menu.nama"
                  />
                </div>
                <div class="col">
                  <label for="harga" class="mb-1 label-mobile"
                    >Harga Product</label
                  >
                  <input
                    type="number"
                    class="form-control mb-2"
                    placeholder="Harga Product"
                    v-model="menu.harga"
                  />
                </div>
              </div>
            </form>

            <!-- Form Product Gambar -->
            <form>
              <div class="row">
                <div class="col">
                  <label for="" class="mb-1 label-mobile"
                    >Detail Product :</label
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
                </div>
                <div class="col">
                  <label for="nama" class="mb-1 label-mobile"
                    >Gambar Product</label
                  >
                  <input
                    type="text"
                    class="form-control mb-2"
                    placeholder="Gambar Product"
                    v-model="menu.gambar"
                  />
                </div>
              </div>
            </form>
            <div class="row justify-content-between mt-2">
              <div class="col">
                <router-link
                  :to="'/foods'"
                  class="btn btn-danger mobile-button-left"
                >
                  Cancel</router-link
                >
              </div>
              <div class="col">
                <b-button
                  variant="success"
                  class="mb-2 mobile-button-right"
                  @click="tambahMenu"
                >
                  submit
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu display Desktop -->

    <div class="container d-none d-md-block">
      <div class="row mt-4">
        <div class="col">
          <h2>Ice Cream <strong>Admin menu</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari ice cream"
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
          <CardAdmin :product="product" />
        </div>
      </div>
    </div>

    <!-- Menu display Mobile -->

    <div class="container d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col">
          <h2>Ice Cream <strong>Admin menu</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari ice cream"
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

      <div class="row mb-2">
        <div
          class="col-6 col-sm-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardAdmin :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NavbarView from '@/components/NavbarView.vue';
import CardAdmin from '@/components/CardAdmin.vue';
export default {
  name: 'AdminDetail',
  data() {
    return {
      product: {},
      products: [],
      search: '',
      menu: {},
    };
  },

  components: { NavbarView, CardAdmin },
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
  methods: {
    // penampilan data pada axios
    setProduct(data) {
      this.products = data;
    },

    // Update products otomatis ketika Input

    // Logika untuk input search
    searchIce() {
      axios // ?q= adalah untuk melakukan pencarian pada input
        .get('http://localhost:3000/products?q=' + this.search)
        .then((response) =>
          // handle success
          this.setProduct(response.data)
        );
    },

    tambahMenu() {
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
            this.$toast.success('Sukses masuk daftar menu.', {
              type: 'success',
              position: 'top',
              dismissible: true,
            });
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
  },
};
</script>

<style scoped>
.input-number {
  max-width: 5rem;
}

.input-kode {
  max-width: 6rem;
}
.input-nama {
  max-width: 15rem;
}

.input-harga {
  max-width: 10rem;
}

.label-mobile {
  font-size: 17px;
  font-weight: 500;
}

.mobile-button-left {
  max-width: 16rem;
  width: 13rem;
  margin-left: 1px;
}

.mobile-button-right {
  max-width: 16rem;
  width: 13rem;
  margin-left: 1px;
}
</style>
