<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue"
</script>

<template>
        <div class="header">
          <Header />
        </div>
        <div class="content">
          <RouterView />
        </div>
</template>

<style scoped lang="scss">
.header{
  width:100vw;
  height:13vh;
  font-family: 'Darumadrop One', sans-serif;
}

.content{
  width:100vw;
  height:87vh;
  text-align: center;
  background-color: #FDF6F0;
  color: #8d6d52;
  font-family: 'Montserrat', sans-serif;
}
</style>
