<template>
  <div class="HOME">
  	<q-card class="bg-white q-mb-md" align="center">
  		<h6>Tabs Component</h6>
  	</q-card>
  	<div class="row gutter-sm q-mb-md">
  		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
  			<q-tabs align="justify" color="secondary">
          <!-- Tabs - notice slot="title" -->
          <q-tab default count="5" slot="title" name="tab-1" icon="message" />
          <q-tab disable slot="title" name="tab-2" icon="fingerprint" />
          <q-tab alert slot="title" name="tab-3" icon="account_box" />
          <q-tab slot="title" name="tab-4" icon="accessibility" />
          <q-tab slot="title" name="tab-5" icon="build" />

          <!-- Targets -->
          <q-tab-pane name="tab-1">
            <h6>Tab One</h6>
          </q-tab-pane>
          <q-tab-pane name="tab-2">
            <h6>Tab two</h6>
          </q-tab-pane>
          <q-tab-pane name="tab-3">
            <h6>Tab Three</h6>
          </q-tab-pane>
          <q-tab-pane name="tab-4">
            <h6>Tab Four</h6>
          </q-tab-pane>
          <q-tab-pane name="tab-5">
            <h6>Tab FIve</h6>
          </q-tab-pane>
        </q-tabs>
  		</div>
  	</div>
    <blockquote>
      <p>For More details see below link.</p>
      <small><a href="https://quasar-framework.org/components/tabs.html" target="_blank">
        https://quasar-framework.org/components/tabs.html
      </a></small>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    	model: ''
    }
  }
}
</script>

<style>
.q-tab-pane {
  background: #fff;
  text-align: center;
}
</style>
