<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <app-navbar></app-navbar>
    <!-- <!-- <section class="hero"> -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            {{ $route.name }}
          </h1>
        </div>
      </div>
    </section>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'app',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
