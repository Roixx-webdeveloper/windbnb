<template>
  <div class="card">
      <div class="card-body">
          <img :src="stay.photo ? stay.photo : 'Loading'" :alt="stay.title" class="card-img-top">
          <h5>{{stay.title}}</h5>

      </div>
  </div>
</template>

<script>
export default {
    props:[
        'stay'
    ]
}
</script>

<style>
    .card{
        float: left;
        width: 33%;
        padding: 0 10px;
    }

    .card-img-top{
        width: 400px;
        height: 270px;
    }
</style>