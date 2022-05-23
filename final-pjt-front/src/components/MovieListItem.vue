<template>
  <div>        
      <router-link :to=" { name: 'movie', params: { moviePk: movie.id } }">
        <img :src="imgUrl" class="card-img-top" style="height: 300px; width: 200px;" alt="img">
      </router-link>     
          <h5 class="fw-bold">{{movie.title}}</h5>
  </div>
</template>

<script>
export default {
  name:'MovieListItem',
  props:{
    movie:Object,
  },
  methods:{
    
  },
  data: function(){
  return {
    imgUrl:`https://image.tmdb.org/t/p/w500${this.movie.poster_path}`,
    }
  },

}
</script>

<style>

</style>