<template>
	<div class="HEADER">
	  <q-layout-header>
	    <q-toolbar
	      color="primary"
	      :glossy="$q.theme === 'mat'"
	      :inverted="$q.theme === 'ios'"
	    >
	      <q-btn
	        flat
	        dense
	        round
	        @click="leftDrawerOpen = !leftDrawerOpen"
	        aria-label="Menu"
	      >
	        <q-icon name="menu" />
	      </q-btn>

	      <div class="row window-width">
	      	<div class="col-lg-10 col-md-10 col-sm-8 col-xs-8">
	      		<q-toolbar-title>
			        <h6>Application Title</h6>
			        <div slot="subtitle">Caption for Application</div>
			      </q-toolbar-title>
	      	</div>
	      	<div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 header-logo" align="right">
	      		<img src="statics/quasar-logo.png">
	      	</div>
	      </div>
	    </q-toolbar>
	  </q-layout-header>

	  <q-layout-drawer
	    v-model="leftDrawerOpen"
	    :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
	  >
	    <q-list
	      no-border
	      link
	      inset-delimiter
	    >
	      <q-list-header>NAVIGATION LINKS</q-list-header>
	      <q-item>
	        <q-item-side icon="home" />
	        <router-link class="navlink" :to="{ path: '/admin/dashboard' }" >Dashboard</router-link>
	        <!-- <q-item-main label="Docs" sublabel="quasar-framework.org" /> -->
	      </q-item>
	      <q-item>
	        <q-item-side icon="widgets" />
	        <router-link class="navlink" :to="{ path: '/admin/tables' }" >Tables</router-link>
	      </q-item>
	      <q-item>
	        <q-item-side icon="sms" />
	        <router-link class="navlink" :to="{ path: '/admin/popups' }" >Popups</router-link>
	      </q-item>
	      <q-item>
	        <q-item-side icon="tab" />
	        <router-link class="navlink" :to="{ path: '/admin/tabs' }" >Tabs</router-link>
	      </q-item>
	      <q-item>
	        <q-item-side icon="trending_up" />
	        <router-link class="navlink" :to="{ path: '/admin/listItems' }" >List Items</router-link>
	      </q-item>
	      <q-item>
	        <q-item-side icon="perm_media" />
	        <router-link class="navlink" :to="{ path: '/admin/notify' }" >Notify</router-link>
	      </q-item>
	      <q-item>
	        <q-item-side icon="schedule" />
	        <router-link class="navlink" :to="{ path: '/admin/chat' }" >Chat Box</router-link>
	      </q-item>
	      <q-item>
	        <q-item-side icon="assignment_return" />
	        <router-link class="navlink" :to="{ path: '/admin/inputs' }" >Input Types</router-link>
	      </q-item>
	      <q-item>
	        <q-item-side icon="layers" />
	        <router-link class="navlink" :to="{ path: '/admin/editor' }" >Rich-Text Editor</router-link>
	      </q-item>
	      <q-item>
	        <q-item-side icon="input" />
	        <a href="javascript:void(0)" @click="$router.push('/')">Logout</a>
	      </q-item>
	    </q-list>
	    <!-- Keep this always last -->
    	<div class="legal">
        <div class="copyright">
            © 2018 - 2019 <a href="javascript:void(0);"> - HEADRUN</a>.
        </div>
        <div class="version">
            <b>Version: </b> 0.1
        </div>
    	</div>
	  </q-layout-drawer>
	</div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
    	// leftDrawerOpen: this.$q.platform.is.desktop
    	leftDrawerOpen: true
    }
  },
  methods: {
  	changeState (uri) {
  		console.log(uri)
  		this.$router.push(uri)
  	}
  }
}
</script>

<style>
</style>
