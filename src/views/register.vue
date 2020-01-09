<template>
    <div id="register">
        <h1>{{ msg }}</h1>
        <input type="text" name="firstname" v-model="input.firstname" placeholder="firstname" />
        <input type="text" name="lastname" v-model="input.lastname" placeholder="lastname" />
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" /><hr>
        <button type="button" v-on:click="register()">register</button>
        <router-link to="/">back</router-link>
    </div>
</template>

<style scoped>
    #register {
        width: 800px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>

<script>
export default {
  name: 'register',
  data () {
    return {
      input: {
        firstname: '',
        lastname: '',
        username: '',
        password: ''
      },
      msg: ' Register '
    }
  },
  methods: {
    register () {
      if (this.input.firstname !== '' && this.input.lastname !== '' && this.input.username !== '' && this.input.password !== '') {
        if (this.input.username === this.$parent.mockAccount.username) {
          alert('The username is not available')
        } else {
          alert('You are registered to the system. Welcome')
          this.$emit('authenticated', true)
          this.$router.replace({ name: 'secure' })
        }
      } else {
        alert('All details must be present')
      }
    }
  }
}
</script>
