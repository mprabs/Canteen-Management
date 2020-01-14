<template>
<div class="Login">
  <hr><h1> AAYULOGIC CANTEEN MANAGEMENT </h1><hr>
    <div id="loginBox">
        Enter your login details : <br><br>
        <input type="text" name="username" v-model="input.username" placeholder="Username" /><br><br>
        <input type="password" name="password" v-model="input.password" placeholder="Password" /><br><br>
        <button type="button" v-on:click="login()">Login</button>
    </div><br><br>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      },
      user: []
    }
  },
  methods: {
    login () {
      this.$axios
        .post('http://f641d72e.ngrok.io/token-auth/', {
          username: this.input.username,
          password: this.input.password })
        .then(response => {
          if (response.data) {
            this.user = response.data
            localStorage.setItem('user', JSON.stringify(response.data))
            this.$emit('authenticated', true)
            this.$router.replace({ name: 'secure' })
          } else {
            alert('The username and / or password is incorrect')
          }
        })
    }
  }
}
</script>

<style scoped>
#loginBox {
  width: 500px;
  border: 1px solid #CCCCCC;
  /* background-color: rgb(247, 247, 247); */
  margin: auto;
  margin-top: 20px;
  padding: 20px;
}

input {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
button {
  background-color: #404040;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
