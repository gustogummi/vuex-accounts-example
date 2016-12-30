<template>
<div>
	<form @submit.prevent="submitForm">
		<h3>Register</h3>
		<label>username</label>
		<input v-model="formData.username"/>
    <label>email</label>
    <input v-model="formData.email"/>
		<label>password</label>
		<input v-model="formData.password" />
		<button>Register</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
  		this.$store.dispatch('submitRegisterForm', this.formData)
    }
  }
}
</script>