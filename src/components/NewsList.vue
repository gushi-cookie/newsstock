<script setup lang="ts">
import NewsItem from './NewsItem.vue'
import type { Props as NewsItemProps } from './NewsItem.vue'
import { onMounted, ref, type Ref } from 'vue'
import GDELTProjectAPI, { type Article } from '@/services/GDELTProjectAPI'

const newsProps: Ref<NewsItemProps[]> = ref([]);

function toNewsItemProps(articles: Article[]): NewsItemProps[] {
    let result: NewsItemProps[] = [];
    for(let i = 0; i < articles.length; i++) {
        result.push({
            domain: articles[i].domain,
            imageLink: articles[i].socialimage,
            language: articles[i].language,
            originUrl: articles[i].url,
            sourceCountry: articles[i].sourcecountry,
            title: articles[i].title,
        });
    }
    return result;
}

onMounted(async () => {
    newsProps.value.push(...toNewsItemProps(await GDELTProjectAPI.fetchNews('Television', null, null)));
});
</script>

<template>
    <div class="news-container">
        <NewsItem v-for="prop in newsProps" v-bind="prop" />
    </div>
</template>