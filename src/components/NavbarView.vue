<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="navbar">
      <div class="container mt-3">
        <b-navbar-brand href="#">MiCream</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/foods">Menu</router-link>
            </li>
          </b-navbar-nav>

          <!-- Right aligned nav items -->

          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang"
                >Keranjang <b-icon-bag></b-icon-bag>
                <span class="badge text-bg-success">{{
                  updateKeranjang
                    ? updateKeranjang.lenght
                    : jumlah_pesanans.length
                }}</span>
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'NavbarView',
  data() {
    return {
      jumlah_pesanans: [],
    };
  },
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
  },

  mounted() {
    axios
      .get('http://localhost:3000/keranjangs')
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error));
  },
  props: ['updateKeranjang'],
};
</script>

<style scoped>
.badge {
  margin-left: 3px;
}

.navbar {
  font-size: 20px;
}
</style>
