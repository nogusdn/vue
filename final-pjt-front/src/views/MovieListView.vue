<template>
  <div>
  <div class='card-group d-flex justify-content-center'>        
    <movie-list-item v-for="movie in movies" :key="movie.id" :movie="movie"></movie-list-item>    
  </div>    
  </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name:'MovieListView',
  components:{
    MovieListItem
  },
  computed:{
    ...mapGetters(['movies'])
  },
  methods:{
    ...mapActions(['fetchmovies'])
  },
  created(){
    this.fetchmovies()
  }
}
</script>

<style>

</style>