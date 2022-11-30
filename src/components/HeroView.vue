<template>
  <div class="hero">
    <!-- Desktop Hero Display -->

    <div class="d-none d-md-block">
      <!-- Div Display Desktop-->
      <div class="row mt-4 ml-3">
        <div class="col-md-6">
          <div class="flex d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong> Get Your Ice Cream Menu,</strong><br />
                In Your Gadget
              </h2>
              <p>Ayo segera pilih dan pesan es krim favorit Anda.</p>
              <!-- Button routerlink to FoodsView -->
              <router-link class="btn btn-lg btn-success" to="/foods">
                <b-icon-arrow-right></b-icon-arrow-right> Order
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" width="110%" />
        </div>
      </div>
    </div>

    <!-- Mobile Hero Display -->

    <div class="d-sm-block d-md-none">
      <!-- Div display mobile -->
      <div class="row mt-1">
        <div class="col-md-6 mb-2">
          <img src="../assets/images/hero.png" width="110%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong> Get Your Ice Cream Menu,</strong><br />
                In Your Gadget
              </h2>
              <p>Ayo segera pilih dan pesan es krim favorit Anda.</p>
              <!-- Button routerlink to FoodsView -->
              <router-link class="btn btn-lg btn-success" to="/foods">
                <b-icon-arrow-right></b-icon-arrow-right> Order
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroView',
  data() {
    return {};
  },
};
</script>

<style scoped>
.flex {
  margin-left: 2rem;
}
</style>
