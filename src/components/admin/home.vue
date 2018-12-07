<template>
  <div class="HOME">
  	<q-card class="bg-white q-mb-md">
  		<p>Sample Breadcrumb</p>
  		<q-breadcrumbs
			  separator="/"
			  active-color="secondary"
			  color="light"
			>
			  <q-breadcrumbs-el label="Home" to="/admin/dashboard" />
			  <q-breadcrumbs-el label="Tables" to="/admin/tables" />
			  <q-breadcrumbs-el label="Popups" to="/admin/popups" />
			  <q-breadcrumbs-el label="Tabs" to="/admin/tabs" />
			</q-breadcrumbs>
  	</q-card>

  	<q-card class="bg-white q-mb-md" align="center">
  		<h6>Dashboard Component</h6>
  	</q-card>
  	<div class="row gutter-xs q-mb-md">
  		<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" v-for="i in 4">
  			<q-card class="bg-white">
  				<q-card-title>
  					Title {{i}}
  					<span slot="subtitle">Subtitle</span>
  				</q-card-title>
  				<q-card-main align="center">
		  			<q-knob
						  v-model="knobValues.value"
						  size="120px"
						  style="font-size: 1.4rem"
						  color="secondary"
						  track-color="yellow-{i}"
						  line-width="5px"
						  :min="knobValues.min"
						  :max="knobValues.max"
						  :step="knobValues.step"
						>
						  <q-icon class="on-left" name="euro_symbol" /> {{knobValues.value}}
						</q-knob>
						<div class="q-subheading q-mt-sm">Caption for Knob</div>
					</q-card-main>
				</q-card>
  		</div>
  	</div>

  	<blockquote>
      <p>For More details see below link.</p>
      <small><a href="https://quasar-framework.org/components/card.html" target="_blank">
        https://quasar-framework.org/components/card.html
      </a></small>
    </blockquote>

  	<q-fab
		  class="fixed fab-position"
		  color="primary"
		  icon="keyboard_arrow_up"
		  direction="up"
		>
			<q-fab-action
		    color="primary"
		    icon="mail"
		  />

		  <q-fab-action
		    color="secondary"
		    icon="alarm"
		  />
		</q-fab>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    	knobValues: {
    		min: 50,
    		max: 80,
    		step: 5,
    		value: 50
    	}
    }
  }
}
</script>

<style>
</style>
