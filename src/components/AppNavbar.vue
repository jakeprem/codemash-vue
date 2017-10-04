<template>
  <nav class="nav has-shadow" id="top">
    <div class="container">
      <div class="nav-left">
        <!-- <a class="nav-item" href="../index.html">
          <img src="../assets/logo.png" alt="Codemash Vue">
        </a> -->
        <!-- <p class="title">Codemash Vue</p> -->
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <router-link 
          v-for="link in navLinks"
          :key="link.name"
          :to="{name: link.name}"
          class="nav-item is-tab"
          active-class="is-active"
          :exact="link.exact"
        >
          <i class="fa" :class="link.icon"></i> 
          &nbsp; {{ link.text || link.name }}
        </router-link>
        <!-- <span class="nav-item">
          <a class="button">
            Log in
          </a>
          <a class="button is-info">
            Sign up
          </a>
        </span> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data () {
    return {
      navLinks: [
        {
          name: 'Sessions',
          icon: 'fa-home',
          text: 'Home',
          exact: true
        },
        {
          name: 'SessionsTable',
          icon: 'fa-table',
          text: 'Sessions Table'
        },
        {
          name: 'MySchedule',
          icon: 'fa-bolt',
          text: 'My Schedule'
        }
      ]
    }
  }
}
</script>

<style>

</style>
