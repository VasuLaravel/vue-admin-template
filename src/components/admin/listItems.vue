<template>
  <div class="LIST" align="center">
  	<q-card class="bg-white q-mb-md">
  		<h6>List and List Items Component</h6>
  	</q-card>
		<div class="row gutter-md q-mb-md">
			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<q-card class="bg-white">
					<q-list link>
						<q-list-header>General</q-list-header>
			        <q-item tag="label" v-for="i in [1,2,3,4]" :key="i">
			          <q-item-side>
			            <q-checkbox v-model="checked_one" color="secondary" />
			          </q-item-side>
			          <q-item-main>
			            <q-item-tile label>Notifications {{i}}</q-item-tile>
			            <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile>
			          </q-item-main>
			        </q-item>
					</q-list>
				</q-card>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<q-card class="bg-white">
					<q-list link>
						<q-list-header>General</q-list-header>
			        <q-item tag="label" v-for="i in [1,2,3,4]" :key="i">
			          <q-item-side>
			            <q-checkbox v-model="checked_one" color="secondary" />
			          </q-item-side>
			          <q-item-main>
			            <q-item-tile label>Notifications {{i}}</q-item-tile>
			            <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile>
			          </q-item-main>
			        </q-item>
					</q-list>
				</q-card>
			</div>
		</div>

		<blockquote align="left">
	      <p>For More details see below link.</p>
	      <small><a href="https://quasar-framework.org/components/lists-and-list-items.html" target="_blank">
	        https://quasar-framework.org/components/lists-and-list-items.html
	      </a></small>
	    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
    	checked_one: true
    }
  }
}
</script>

<style>
</style>
