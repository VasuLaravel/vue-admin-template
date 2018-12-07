<template>
  <q-layout>

    <q-page-container style="padding-top: 0px !important;">
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'authLayout',
  data () {
    return {}
  }
}
</script>

<style>
.q-layout-page-container {

}
</style>
