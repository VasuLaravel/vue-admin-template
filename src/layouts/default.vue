<template>
  <q-layout view="lHh Lpr lFf" class="layout-padding">
    <app-header></app-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import AppHeader from 'components/appHeader.vue'

export default {
  name: 'LayoutDefault',
  components: {
    AppHeader
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
</style>
