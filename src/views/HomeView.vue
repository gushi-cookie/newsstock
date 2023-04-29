<script setup lang="ts">
import NewsList from '../components/NewsList.vue'
import { onMounted } from 'vue'
import { search } from '@/services/SearchService'

onMounted(() => {
  search();
});
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

.news-list {
    width: 720px;
    margin: 0 auto;
}

@media (max-width: 1024px) {
  .news-list {
    width: 500px;
  }
}
@media (max-width: 630px) {
  .news-list {
    width: 400px;
  }
}
@media (max-width: 440px) {
  .news-list {
    width: 300px;
  }
}
</style>