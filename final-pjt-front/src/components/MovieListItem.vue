<template>
  <div>        
    <div class="card m-3" style="height: 40em; width: 300px;">    
      <img :src="imgUrl" class="card-img-top" style="height: 400px; width: 295px;" alt="img">
        <div class="card-body">
          <h5 class="card-title fw-bold">{{movie.title}}</h5>
          <router-link :to=" { name: 'movie', params: { moviePk: movie.id } }" class="card-text">detail</router-link>
        </div>
    </div>
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