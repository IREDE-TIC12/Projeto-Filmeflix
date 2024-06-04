<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
})
</script>

<template>
    <nav class="bg-gray-700 text-white flex gap-5">
      <div class="text-white">
        <a href="#home">HOME</a>
        <a href="#filmes">FILMES</a>
        <a href="#series">SÉRIES</a>

      </div>
    </nav>
</template>
