<template>
<h1>Cards</h1>
  <div class="card-list">
      <div class="col-4" v-for="stay in stays" :key="stay.title">
          <Card :stay="stay" />
      </div>
  </div>

</template>

<script>
import { computed, onMounted } from 'vue';

import {useStore} from 'vuex'

import Card from '../components/Card'

export default {
    components:{
        Card
    },
    setup() {
        const store = useStore();
        
        const stays = computed( () => {
            return  store.getters.topRated;
        })

        onMounted(() => {
             store.dispatch('fetchData')
        })
    
        return {stays}
    }

}
</script>

<style>
.card-list{
    display: flex;
    flex-direction: row;
    width: 33%;
}

</style>