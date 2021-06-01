<template>
  <div class="home">
    <SearchBar />
    <div class="container">
    <CardList />

    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import CardList from '@/components/CardList.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'Home',
  components: {
    CardList,
    SearchBar
  }
}
</script>

<style >
.home{
  display: flex;
  flex-direction: column;
  width: 1200px;
  box-sizing: border-box;
}

.container{
  max-width: 1100px;
  margin: 0 auto;
}
</style>
