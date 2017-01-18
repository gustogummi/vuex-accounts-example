<template>
  <div>
    <div v-if="user">
      <p>Hello {{user.username}}</p>
      <logout v-if="user"></logout>
    </div>
    <div class="auth" v-if="!user">
      <login></login>
      <register></register>
    </div>
  </div.auth>
</template>

<script>
import Login from '/imports/ui/auth/Login.vue'
import Logout from '/imports/ui/auth/Logout.vue'
import Register from '/imports/ui/auth/Register.vue'

export default {
  components: {
    login: Login,
    logout: Logout,
    register: Register
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    }
  }
}
</script>

<style>
.auth > div {
  display: inline-flex;
}
.auth > div:first-child {
  padding-right: 1rem;
}
input, label {
  display: block;
}
</style>
