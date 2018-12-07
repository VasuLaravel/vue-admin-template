<template>
  <div class="LOGIN">
  	<div class="row window-height items-center justify-center">
      <q-card flat class="bigger bg-white login-card">
        <div class="" align="center">
          <img src="/statics/quasar-logo.png" class="login-logo" alt="LOGO">
        </div>
        <q-card-title align="center">
          <small>Login to start your session</small>
        </q-card-title>
        <q-card-main>
          <q-field>
            <q-input 
            	class="input-field" 
            	v-model="form.email" 
            	@keyup.enter="submit" 
            	type="email"  
            	placeholder="Email Id"
            	inverted
            />
            <div v-if="form.emailErrorMsg" class="errorMsg">
              Please Enter Email Id.
            </div>
          </q-field>
          <br>
          <q-field>
            <q-input 
            	class="input-field" 
            	v-model="form.password" 
            	@keyup.enter="submit" 
            	placeholder="Password"
            	type="password"
            	inverted
            />
            <div v-if="form.otpErrorMsg" class="errorMsg">
              Please Enter Password.
            </div>
          </q-field>
          <br>
          <q-field>
           <a href="javascript:void(0)" class="forgotPassword">forgot Password ?</a>
          </q-field>
          <br>
          <q-btn 
          	color="secondary" 
          	@click="submit()" 
          	class="btn full-width" 
          	size="md"
          	rounded
          >
             <q-spinner-hourglass v-if="btnLoading" class="on-left" />
             LOG IN
          </q-btn>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
    	btnLoading: false,
    	form: {
        email: '',
        password: '',
        emailErrorMsg: false,
        otpErrorMsg: false
      }
    }
  },
  methods: {
  	submit () {
      if (this.validationForLogin()) {
      	this.$q.notify('Success.')
      	this.$router.push('/admin/dashboard')
      }
    },
    validationForLogin () {
      if (this.form.email === '') {
        this.form.emailErrorMsg = true
        return false
      } else {
        this.form.emailErrorMsg = false
      }
      if (this.form.password === '') {
        this.form.otpErrorMsg = true
        return false
      } else {
        this.form.otpErrorMsg = false
      }
      return true
    },
  }
}
</script>

<style>
</style>
