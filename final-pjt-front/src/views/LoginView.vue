<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login(credentials)">
      <div>
        <label for="username"></label>
        <input type="text" v-model="credentials.username" id="username" required />
      </div>
      <div>
        <label for="password"></label>
        <input type="password" v-model="credentials.password" id="password" required />
      </div>
      <button>로그인</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name:'LoginView',
  data(){
    return{
      credentials:{
        username: '',
        password: '',
      }
    }
  },
  computed:{
    ...mapGetters(['authError'])
  },
  methods:{
    ...mapActions(['login'])
  }

}
</script>

<style>

</style>