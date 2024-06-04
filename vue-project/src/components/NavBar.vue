<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
 
  data(){
    
    return{

      titulo:"teste de titulo"
    }
  }
})
</script>

<template>
    <nav class="bg-gray-700 text-white">
      <div class="text-white  flex gap-5">
        <a href="#home">HOME</a>
        <a href="#filmes">FILMES</a>
        <a href="#series">SÉRIES</a>
        <p>{{ titulo }}</p>
        

      </div>
    </nav>
</template>
