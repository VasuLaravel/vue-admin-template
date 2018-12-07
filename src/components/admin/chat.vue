<template>
  <div class="CHAT" align="center">
  	<q-card class="bg-white q-mb-md">
  		<h6>Chat Box Component</h6>
  	</q-card>

  	<blockquote align="left" class="q-mb-md">
      <p>For More details see below link.</p>
      <small><a href="https://quasar-framework.org/components/chat.html" target="_blank">
        https://quasar-framework.org/components/chat.html
      </a></small>
    </blockquote>

  	<div class="row">
	  	<div class="col-lg-2 col-md-2"></div>
	  	<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
	  		<q-card class="bg-white">
		  		<q-chat-message
		        v-for="(msg, index) in messages"
		        :key="`reg-${index}`"
		        :label="msg.label"
		        :sent="msg.sent"
		        :text-color="msg.textColor"
		        :bg-color="msg.bgColor"
		        :name="msg.name"
		        :avatar="msg.avatar"
		        :text="msg.text"
		        :stamp="msg.stamp"
		      />
		      <q-chat-message
		        name="Vladimir"
		        avatar="statics/quasar-logo.png"
		      >
		        <q-spinner-dots size="2rem" />
		      </q-chat-message>

		      <div class="q-display-1 q-mt-xl q-mb-md text-grey">Chat using avatar slot</div>
		      <q-chat-message
		        name="Vladimir"
		        :text="['Use your own spacing or class q-message-avatar']"
		      >
		        <q-icon name="face" size="4em" slot="avatar"/>
		      </q-chat-message>

		      <div class="q-display-1 q-mt-xl q-mb-md text-grey">Chat without avatar</div>
		      <q-chat-message
		        v-for="(msg, index) in messages"
		        :key="`avatar-${index}`"
		        :label="msg.label"
		        :sent="msg.sent"
		        :text-color="msg.textColor"
		        :bg-color="msg.bgColor"
		        :name="msg.name"
		        :text="msg.text"
		        :stamp="msg.stamp"
		      />
		      <q-chat-message
		        name="Vladimir"
		      >
		        <q-spinner-dots size="2rem" />
		      </q-chat-message>
		  	</q-card>
	  	</div>
	  	<div class="col-lg-2 col-md-2"></div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
    	message: '',
      messages: [
        {
          label: 'Friday, 18th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/quasar-logo.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          textColor: 'white',
          bgColor: 'black',
          avatar: 'statics/quasar-logo.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'statics/quasar-logo.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Saturday, 19th'
        },
        {
          name: 'Vladimir',
          bgColor: 'amber',
          textColor: 'white',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'statics/quasar-logo.png',
          stamp: '13:55'
        },
        {
          label: 'Sunday, 20th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/quasar-logo.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          avatar: 'statics/quasar-logo.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'statics/quasar-logo.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Monday, 20th'
        },
        {
          name: 'Vladimir',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'statics/quasar-logo.png',
          stamp: '13:55'
        },
        {
          label: 'Tuesday, 21th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/quasar-logo.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          avatar: 'statics/quasar-logo.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'statics/quasar-logo.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Sunday, 19th'
        },
        {
          name: 'Vladimir',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'statics/quasar-logo.png',
          stamp: '13:55'
        },
        {
          label: 'Wednesday, 22th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/quasar-logo.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          avatar: 'statics/quasar-logo.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'statics/quasar-logo.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Thursday, 23th'
        },
        {
          name: 'Vladimir',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'statics/quasar-logo.png',
          stamp: '13:55'
        }
      ]
    }
  },
  created () {}
}
</script>

<style>
</style>
