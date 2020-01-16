<template>
<div class="Login">
<img src="../assets/aayulogic.png" style="width:30%; height:30%;"><br><br><br><br>
    <div id="container">
    <div id="loginBox" style="font-family: calibri;">
      <div style=" background-color: #3f70c4">
      <h3 id="headLine" > AAYULOGIC  CANTEEN  MANAGEMENT </h3> <hr>
      </div> <br><br>
        <input type="text" name="username" v-model="input.username" placeholder="Username" /><br><br>
        <input type="password" name="password" v-model="input.password" placeholder="Password" /><br><br>
        <button type="button" v-on:click="login()" style="font-family: calibri; font-type: bold;">Login</button><br><br>
    </div><br><br>
    </div>
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
      user: [],
      role: []
    }
  },
  methods: {
    login () {
      this.$axios
        .post('http://66356871.ngrok.io/token-auth/', {
          username: this.input.username,
          password: this.input.password })
        .then(response => {
          if (response.data) {
            console.log(response.data.user.username)
            this.user = response.data.token
            this.role = response.data
            localStorage.setItem('userdetails', JSON.stringify(response.data.token))
            this.$emit('authenticated', true)
            if (response.data.user.is_superuser === true) {
              this.$router.replace({ name: 'admin' })
            } else if (response.data.user.is_staff === true) {
              this.$router.replace({ name: 'canteen' })
            } else if (response.data.user.username) {
              this.$router.replace({ name: 'user' })
            }
          // this.$axios.request({ url: 'http://66356871.ngrok.io/token-auth/', headers: { Authorization: 'sfdafasdf' } })
          // add header in url
          }
        })
        .catch(e => {
          alert('The username and / or password is incorrect')
        })
    }
  }
}
</script>

<style scoped>
#loginBox {
  width: 450px;
  border: 1px solid rgb(176, 199, 199);
  background-color: rgb(255, 255, 255);
  margin: auto;
}

#headLine {
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 0px;
  padding-top: 15px;
  font-size: 20px
}

input {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  }

button {
  background-color: #1655c2;
  border: none;
  color: rgb(243, 241, 245);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

</style>
