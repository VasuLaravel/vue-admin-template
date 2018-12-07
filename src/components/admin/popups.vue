<template>
  <div class="ABOUT" align="center">
  	<q-card class="bg-white q-mb-md">
  		<h6>Popups Component</h6>
  	</q-card>
		<div class="row gutter-sm q-mb-md">
  		<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
  			<q-card class="bg-white">
  				<q-card-title>
  					Dialogs
  				</q-card-title>
  				<q-card-main align="center">
		  			<q-btn color="primary" @click="showPopup('Alert')">Alert</q-btn>
		  			<q-btn color="secondary" @click="showPopup('Confirm')">Confirm</q-btn>
		  			<q-btn color="warning" @click="showPopup('Prompt')">Prompt</q-btn>
					</q-card-main>
				</q-card>
  		</div>
  		<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
  			<q-card class="bg-white">
  				<q-card-title>
  					Modals
  				</q-card-title>
  				<q-card-main align="center">
	  				<q-btn color="primary" @click="basic = !basic">basic</q-btn>
	  				<q-btn color="secondary" @click="layoutModal = !layoutModal">Layout</q-btn>
					</q-card-main>
				</q-card>
  		</div>
  	</div>
  	<div class="row gutter-sm q-mb-md">
  		<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
  			<q-card class="bg-white">
  				<q-card-title>
  					Popover
  				</q-card-title>
  				<q-card-main align="center">
		  			<q-btn color="primary" @click="popover = true" label="Show" />
    				<q-btn color="secondary" @click="popover = false" label="Hide" />
    				<q-popover v-model="popover">
    					<q-list>
    						<q-item v-for="i in 5">{{i}}</q-item>
    					</q-list>
    				</q-popover>
					</q-card-main>
				</q-card>
  		</div>
  		<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
  			<q-card class="bg-white">
  				<q-card-title>
  					Tooltip
  				</q-card-title>
  				<q-card-main align="center">
	  				<div class="group">
			        <q-btn color="indigo">
			          Hover
			          <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
			            <strong>Tooltip</strong> on <em>top</em> (<q-icon name="keyboard_arrow_up" />)
			          </q-tooltip>
			        </q-btn>
			        <q-btn color="red">
			          Over
			          <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
			            <strong>Tooltip</strong> on <em>right</em> (<q-icon name="keyboard_arrow_right" />)
			          </q-tooltip>
			        </q-btn>
			        <q-btn color="purple">
			          These
			          <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
			            <strong>Tooltip</strong> on <em>left</em> (<q-icon name="keyboard_arrow_left" />)
			          </q-tooltip>
			        </q-btn>
			        <q-btn color="amber">
			          Buttons
			          <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
			            <strong>Tooltip</strong> on <em>bottom</em> (<q-icon name="keyboard_arrow_down" />)
			          </q-tooltip>
			        </q-btn>
			      </div>
					</q-card-main>
				</q-card>
  		</div>
  	</div>

  	<blockquote align="left">
      <p>For More details see below link.</p>
      <small><a href="https://quasar-framework.org/components/dialog.html" target="_blank">https://quasar-framework.org/components/dialog.html </a></small>
      <small><a href="https://quasar-framework.org/components/modal.html" target="_blank">https://quasar-framework.org/components/modal.html </a></small>
      <small><a href="https://quasar-framework.org/components/popover.html" target="_blank">https://quasar-framework.org/components/popover.html </a></small>
      <small><a href="https://quasar-framework.org/components/tooltip.html" target="_blank">https://quasar-framework.org/components/tooltip.html</a></small>
    </blockquote>
  	
  	<!-- Basic Modal -->
  	<q-modal v-model="basic" no-backdrop-dismiss >
  		<div class="layout-padding">
		    <h6>Basic Modal</h6>
		    <q-btn
		      color="primary"
		      @click="basic = false"
		      label="Close"
		    />
		  </div>
	  </q-modal>

	  <!-- Modal with layouts -->
	  <q-modal v-model="layoutModal" no-backdrop-dismiss :content-css="{minWidth: '80vw', minHeight: '80vh'}">
		  <q-modal-layout>
		  	<q-toolbar slot="header" class="bg-secondary">
          <q-toolbar-title>
            Header
          </q-toolbar-title>
          <q-btn
            flat
            round
            dense
            @click="layoutModal = false"
            icon="close"
            style="float:right"
          />
        </q-toolbar>

        <q-toolbar slot="footer" class="bg-secondary" align="center">
          <q-toolbar-title>
            Footer
          </q-toolbar-title>
        </q-toolbar>

        <div class="layout-padding" align="center">
          <h6>Content goes here</h6>
        </div>
		  </q-modal-layout>
		</q-modal>
  </div>
</template>

<script>
export default {
  name: 'popups',
  data () {
    return {
    	basic: false,
    	layoutModal: false,
    	popover: false
    }
  },
  methods: {
  	showPopup (type) {
  		const that = this
  		if (type == 'Alert') {
	  		this.$q.dialog({
	        title: 'Alert',
	        message: 'Modern HTML5 front-end framework on steroids.'
	      })
  		} else if (type == 'Confirm') {
  			that.$q.dialog({
          title: 'Confirm',
          message: 'Modern HTML5 front-end framework on steroids.',
          ok: 'Agree',
          cancel: 'Disagree'
        }).then(() => {
          this.$q.notify('Agreed!')
        }).catch(() => {
          this.$q.notify('Disagreed...')
        })
  		} else if (type == 'Prompt') {
  			this.$q.dialog({
          title: 'Prompt',
          message: 'Modern front-end framework on steroids.',
          prompt: {
            model: '',
            type: 'text' // optional
          },
          cancel: true,
          color: 'secondary'
        }).then(data => {
          this.$q.notify(`You typed: "${data}"`)
        }).catch(() => {
          this.$q.notify('Ok, no mood for talking, right?')
        })
  		}
  	},
  },
  created () {}
}
</script>

<style>
</style>
