<template>
  <div class="Login">
     <v-app id="inspire" >
      <v-content>
        <v-img
          src="../assets/canteen.jpg"
          gradient="to top right, rgba(255,255,255,.7), rgba(19,199,243,.33)"
          height="100vh">
       <v-container class="fill-height" fluid >
           <v-card max-width="75%">
            <v-carousel hide-delimiter-background height="450" >
              <v-carousel-item
                src="../assets/canteen.jpg"
                >
              </v-carousel-item>
            </v-carousel>
          </v-card>

          <v-spacer />
          <v-col cols="12" sm="8" md="3">
          <v-card class="elevation-12" height="370">
              <v-toolbar flat >
                <v-spacer />
                <v-img
                  src="../assets/aayulogic.png"
                  height="20"
                  width="20"
                ></v-img>
              </v-toolbar><hr color="blue" >
              <v-card-text >
                <v-form>
                  <br>
                  <v-text-field
                    type="text"
                    v-model="input.username"
                    label="Username"
                  />
                  <v-text-field
                    type="password"
                    v-model="input.password"
                    label="Password"
                  /><br>
                  <v-card-actions>
                   <v-btn
                  block
                  color="primary"
                  v-on:click="login()">Login</v-btn>
                  </v-card-actions>
                </v-form>
            </v-card-text>
            </v-card>
            </v-col>
       </v-container>
       </v-img>
       <v-footer :fixed="true" :padless="true">
          <v-card flat tile width="100%" class="blue lighten-2 text-center">
          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Aayulogic</strong>
          </v-card-text>
          </v-card>
      </v-footer>
    </v-content>
    </v-app>
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
        .post('http://127.0.0.1:8000/token-auth/', {
          username: this.input.username,
          password: this.input.password })
        .then(response => {
          if (response.data) {
            console.log(response.data.user.username)
            this.user = response.data.token
            this.role = response.data
            localStorage.setItem('userdetails', JSON.stringify(response.data.token))
            if (response.data.user.is_superuser === true) {
              this.$router.replace({ name: 'admin' })
              localStorage.setItem('pageDetails', 'admin')
            } else if (response.data.user.is_staff === true) {
              this.$router.replace({ name: 'canteen' })
              localStorage.setItem('pageDetails', 'canteen')
            } else if (response.data.user.username) {
              this.$router.replace({ name: 'user' })
              localStorage.setItem('pageDetails', 'user')
            }
          }
        })
        .catch(e => {
          alert('The username and / or password is incorrect')
        })
    }
  }
}
</script>
