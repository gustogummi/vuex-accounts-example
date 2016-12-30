<template>
<button @click="logout">Logout</button>
</template>

<script>
export default {
  name: 'logout',
  methods: {
  	logout() {
      this.$store.dispatch('logout')
  	}
  }
}
</script>