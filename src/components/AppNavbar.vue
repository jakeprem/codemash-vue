<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
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
        <!-- <a class="nav-item is-tab"><i class="fa fa-bell-o"></i> &nbsp; Notifications</a> -->
        <a class="nav-item is-tab"><i class="fa fa-envelope"></i> &nbsp; Messages</a>
      </div>

      <div class="nav-center">
        <a class="nav-item" href="#">
          <span class="icon">
            <i class="fa fa-code"></i>
          </span>
        </a>
      </div>

      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="nav-right nav-menu">
        <span class="nav-item">
          <a class="button" >
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
            <span>Tweet</span>
          </a>
        </span>
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
          name: 'MySchedule',
          icon: 'fa-bolt',
          text: 'My Schedule'
        },
        {
          name: 'NewSessions',
          icon: 'fa-home',
          text: 'New Sessions'
        }
      ]
    }
  }
}
</script>

<style>

</style>
