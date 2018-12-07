<template>
  <q-layout class="q-pt-lg q-pl-lg q-pr-lg" style="background: #f9faff">
    <div class="row">
      <div class="col">
        <img src="statics/quasar-logo.png" class="logo" alt="logo" style="width: 55px;">
      </div>
      <div class="col" align="right">
        <q-btn class="login-btn" @click.native="goToLogin" >Login</q-btn>
      </div>
    </div>
    <div class="banner-content layout-padding" align="center">
      <h6 class="banner-text">
        Welcome to Headrun
      </h6>
    </div>
  </q-layout>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  methods: {
  	goToLogin () {
      this.$router.push('/login')
    },
  }
}
</script>

<style>
</style>
