<template>
  <div class="about">
    <div class="container mt-3">
      <b-navbar toggleable="sm" type="light">
        <b-navbar-brand>MiCream</b-navbar-brand>

        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/foods">Menu</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
