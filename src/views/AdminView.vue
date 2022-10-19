<template>
  <div>
    <NavbarView />
    <div class="container mb-5">
      <!-- Desktop Display -->
      <div class="d-none d-md-block">
        <div class="row justify-content-center mt-4">
          <div class="col col-lg-5 mt-5 login-form">
            <form v-on:submit.prevent class="form">
              <div class="form-group">
                <label for="login" class="mb-1">Login</label>
                <input
                  id="login"
                  name="login"
                  type="gmail"
                  class="form-control img-fluid"
                  placeholder="example@admin.com"
                  v-model="login.gmail"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <label for="password" class="mb-1">Password</label>
                <input
                  id="login"
                  name="login"
                  type="password"
                  class="form-control"
                  placeholder="******"
                  v-model="login.password"
                  required
                />
              </div>
              <div class="form-group">
                <div class="">
                  <b-form-checkbox
                    class="mt-3 mr-1"
                    id="checkbox-1"
                    v-model="status"
                    name="checkbox-1"
                    value="Terimakasih 🥰"
                    unchecked-value="Kok gitu sih 😑"
                  >
                    &nbsp; {{ status }}
                  </b-form-checkbox>
                </div>
              </div>
              <b-button
                type="submit"
                variant="success"
                class="mt-3 desktop"
                @click="perloginan"
              >
                <router-link to="/admin-detail"></router-link>
                <b-icon icon="person-fill"></b-icon> Login
              </b-button>
            </form>
          </div>
          <div class="col text-center mt-1">
            <img src="../assets/images/login.png" width="450" />
          </div>
        </div>
        <div class="row text-center">
          <br />
          <br />
        </div>
      </div>
    </div>

    <!-- Mobile Display -->
    <div class="d-sm-block d-md-none">
      <div class="row justify-content-center mt-4">
        <div class="col mt-1 login-form-mobile">
          <div class="col text-center mt-1">
            <img src="../assets/images/login.png" width="250" />
          </div>
          <form v-on:submit.prevent class="form">
            <div class="form-group">
              <label for="login" class="mb-1">Login</label>
              <input
                type="gmail"
                id="login"
                name="login"
                class="form-control img-fluid"
                placeholder="example@admin.com"
                required
              />
            </div>
            <div class="form-group mt-3">
              <label for="password" class="mb-1">Pasword</label>
              <input
                type="password"
                id="password"
                name="password"
                class="form-control"
                placeholder="******"
                required
              />
            </div>
            <div class="form-group">
              <div class="">
                <b-form-checkbox
                  class="mt-3 mr-1"
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="Terimakasih 🥰"
                  unchecked-value="Kok gitu sih 😑"
                >
                  &nbsp; {{ status }}
                </b-form-checkbox>
              </div>
            </div>
            <button type="submit" class="btn btn-success mt-3 mobile">
              <b-icon icon="person-fill"></b-icon> Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NavbarView from '@/components/NavbarView.vue';
export default {
  name: 'AdminView',
  components: { NavbarView },
  data() {
    return {
      login: {},
      account: {},
      status: 'Remember me 🥺',
    };
  },
  methods: {
    perloginan() {
      if (this.login.gmail && this.login.password) {
        this.login.admin = this.admin;

        const email = this.login.gmail;
        const password = this.login.password;
        const url = `http://localhost:3000/admin?gmail=${email}&password=${password}`;

        axios
          .get(url)
          .then((response) => {
            console.log(response);
            this.$router.push({ path: '/admin-detail' });
            this.$toast.success('Selamat datang.', {
              type: 'success',
              position: 'top',
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error('Gagal login.', {
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
.form {
  margin-top: 20px;
  max-width: 20rem;
}

.login-form {
  margin-left: 4rem;
}

.mobile {
  max-width: 30rem;
  width: 19rem;
  padding: 10px 50px;
}

button,
.desktop {
  max-width: 20rem;
  padding: 8px 124px;
}

.login-form-mobile {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
