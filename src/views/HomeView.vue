<script setup lang="ts">
import NewsList from '../components/NewsList.vue'
</script>

<template>
  <main class="main__home">
    <NewsList/>
  </main>
</template>

<style>
.main__home {
  padding-top: 22px;
}

.news-container {
    width: 720px;
    margin: 0 auto;
}

@media (max-width: 1024px) {
  .news-container {
    width: 500px;
  }
}
@media (max-width: 630px) {
  .news-container {
    width: 400px;
  }
}
@media (max-width: 440px) {
  .news-container {
    width: 300px;
  }
}
</style>