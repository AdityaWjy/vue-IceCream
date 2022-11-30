<template>
  <div class="keranjang">
    <NavbarView :updateKeranjang="keranjangs" />

    <!-- Desktop Keranjang View Display -->
    <div class="container d-none d-md-block">
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
                Keranjang Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Ice Cream</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/images/' + keranjang.products.gambar"
                      class="img-fluid shadow"
                      width="150"
                      height="180"
                    />
                  </td>
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td>
                    {{ keranjang.keterangan ? keranjang.keterangan : '-' }}
                  </td>
                  <td>
                    {{ keranjang.jumlah_pemesanan }}
                  </td>
                  <td>
                    Rp.
                    {{ keranjang.products.harga }}
                  </td>
                  <td>
                    <strong>
                      Rp.
                      {{
                        keranjang.products.harga * keranjang.jumlah_pemesanan
                      }}
                    </strong>
                  </td>

                  <td class="text-danger">
                    <b-icon-trash
                      class="icon"
                      @click="hapusKeranjang(keranjang.id)"
                    ></b-icon-trash>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right" style="border-bottom: none">
                    <strong>Total Harga : </strong>
                  </td>
                  <td>
                    <strong> Rp. {{ totalHarga }} </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Form Checkout -->
      <div class="row justify-content-end">
        <div class="col md-4">
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="nama" class="mb-1">Nama</label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>
            <div class="form-group">
              <label for="noMeja" class="mb-1">Nomor Meja</label>
              <input type="text" class="form-control" v-model="pesan.noMeja" />
            </div>
            <button
              type="submit"
              class="btn btn-success mt-3"
              @click="checkout"
            >
              <b-icon-cart></b-icon-cart>Pesan
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Mobile Keranjang View Display -->
    <div class="container d-sm-block d-md-none">
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
                Keranjang Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table table-mobile">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Note</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/images/' + keranjang.products.gambar"
                      class="img-fluid shadow img-mobile"
                      width="150"
                      height="180"
                      style="width: 100px; height: 50px"
                    />
                  </td>
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td>
                    {{ keranjang.keterangan ? keranjang.keterangan : '-' }}
                  </td>
                  <td>
                    {{ keranjang.jumlah_pemesanan }}
                  </td>
                  <td>
                    Rp.
                    {{ keranjang.products.harga }}
                  </td>
                  <td>
                    <strong>
                      Rp.
                      {{
                        keranjang.products.harga * keranjang.jumlah_pemesanan
                      }}
                    </strong>
                  </td>

                  <td class="text-danger tong-sampah">
                    <b-icon-trash
                      @click="hapusKeranjang(keranjang.id)"
                    ></b-icon-trash>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right" style="border-bottom: none">
                    <strong>Total Harga : </strong>
                  </td>
                  <td colspan="10">
                    <strong> Rp. {{ totalHarga }} </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Form Checkout -->
      <div class="row justify-content-end">
        <div class="col md-4">
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="nama" class="mb-1">Nama</label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>
            <div class="form-group">
              <label for="noMeja" class="mb-1">Nomor Meja</label>
              <input type="text" class="form-control" v-model="pesan.noMeja" />
            </div>
            <button
              type="submit"
              class="btn btn-success mt-3"
              @click="checkout"
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
import NavbarView from '../components/NavbarView.vue';
import axios from 'axios';
export default {
  name: 'KeranjangView',
  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  components: { NavbarView },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    // Hapus keranjang
    hapusKeranjang(id) {
      axios
        //methods delete pada axios untuk menghapus array
        .delete('http://localhost:3000/keranjangs/' + id)
        .then(() => {
          // handle succes notification
          this.$toast.error('Sukses Hapus Pesanan.', {
            type: 'error',
            position: 'top',
            dismissible: true,
          });
          // Update data keranjang otomatis ketika dihapus
          axios
            .get('http://localhost:3000/keranjangs')
            .then((response) =>
              // handle success
              this.setKeranjangs(response.data)
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
    checkout() {
      if (this.pesan.nama && this.pesan.noMeja) {
        this.pesan.keranjangs = this.keranjangs;
        axios
          .post('http://localhost:3000/pesanans', this.pesan)
          .then(() => {
            // Hapus semua keranjang ketika dipesan
            this.keranjangs.map(function (item) {
              return (
                axios
                  //methods delete pada axios untuk menghapus array
                  .delete('http://localhost:3000/keranjangs/' + item.id)

                  .catch((error) =>
                    // handle error
                    console.log(error)
                  )
              );
            });

            this.$router.push({ path: '/pesanan-sukses' });
            this.$toast.success('Sukses Dipesan.', {
              type: 'success',
              position: 'top',
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error('Nomor dan Nomor Meja harus di isi.', {
          type: 'error',
          position: 'top',
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get('http://localhost:3000/keranjangs')
      .then((response) =>
        // handle success
        this.setKeranjangs(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
  },

  computed: {
    totalHarga() {
      return (this.keranjangs || []).reduce(function (items, data) {
        // Menggunakan + parseFloat untuk menambahkan total harga
        return items + parseFloat(data.products.harga * data.jumlah_pemesanan);
      }, 0);
    },
  },
};
</script>

<style scoped>
.tong-sampah {
  font-size: 25px;
}

.icon {
  font-size: 25px;
  margin-left: 15px;
  cursor: pointer;
}

.table-responsive {
  overflow-x: hidden;
}
</style>
