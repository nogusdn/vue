<template>
  <div>
    <h1>SignupView</h1>
    <form @submit.prevent="signup(credentials)">
      <div>
        <label for="username">아이디:</label>
        <input type="text" v-model="credentials.username" id="username" required />
      </div>
      <div>
        <label for="password1">비밀번호:</label>
        <input type="password" v-model="credentials.password1" id="password1" required />
      </div>
      <div>
        <label for="password2">비밀번호 확인:</label>
        <input type="password" v-model="credentials.password2" id="password2" required />
      </div>
      <button>회원가입</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name:'SignupView',
  data(){
    return{
      credentials:{
        username: '',
        password1: '',
        password2: '',
        sex: '',
        age: '',
      }
    }
  },
  computed:{
    ...mapGetters(['authError'])
  },
  methods:{
    ...mapActions(['signup'])
  }

}
</script>

<style>

</style>