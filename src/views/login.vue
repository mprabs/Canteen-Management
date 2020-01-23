<template>
  <div class="Login">
      <v-content>
        <v-img
          src="../assets/canteen.jpg"
          gradient="to top right, rgba(255,255,255,.7), rgba(19,199,243,.33)"
          height="100vh">
              <v-container class="fill-height" fluid >
                  <v-spacer /><v-col cols="12" sm="8" md="3">
                  <v-card class="elevation-12" height="370">
                      <v-toolbar flat >
                        <v-spacer />
                        <v-img
                          src="../assets/aayulogic.png"
                          height="20"
                          width="20"
                        ></v-img>
                      </v-toolbar>
                      <hr color="blue" >
                      <v-card-text >
                        <v-form @submit="login()">
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
                          type="submit">Login</v-btn>
                          </v-card-actions>
                        </v-form>
                     </v-card-text>
                  </v-card>
                  </v-col>
              </v-container>
        </v-img>
      </v-content>
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
              localStorage.setItem('pageDetails', 'Admin')
            } else if (response.data.user.is_staff === true) {
              localStorage.setItem('pageDetails', 'Canteen')
            } else if (response.data.user.username) {
              localStorage.setItem('pageDetails', 'User')
            }
          }
          this.$router.replace({ name: 'home' })
        })
        .catch(e => {
          alert('The username and / or password is incorrect')
        })
    }
  }
}
</script>
