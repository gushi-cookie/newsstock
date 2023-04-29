<script setup lang="ts">
import NewsItem from './NewsItem.vue'
import type { Props as NewsItemProps } from './NewsItem.vue'
import { ref, nextTick, watch, computed, type Ref } from 'vue'
import * as SearchService from '@/services/SearchService'
import type { Article } from '@/services/GDELTProjectAPI'

const NEWS_LIMIT = 20;
const NEWS_OFFSET = 5;

const listElement = ref<HTMLElement>();
const offsetIndex = ref<number>(0);
const newsProps: Ref<NewsItemProps[]> = ref([]);
const displayLoadButton = computed<boolean>(() => {
    let articlesAmount = SearchService.searchResult.value.length;
    if(articlesAmount <= NEWS_LIMIT) {
        return false;
    } else if((NEWS_LIMIT + NEWS_OFFSET * offsetIndex.value) < articlesAmount) {
        return true;
    } else {
        return false;
    }
});

watch(() => SearchService.searchResult.value, (newResult) => {
    offsetIndex.value = 0;
    newsProps.value = toNewsItemProps(newResult.slice(0, NEWS_LIMIT));
});

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
            seenDate: articles[i].seendate,
        });
    }
    return result;
}

function loadClickHandler() {
    let articlesAmount = SearchService.searchResult.value.length;
    if((NEWS_LIMIT + NEWS_OFFSET * offsetIndex.value) < articlesAmount) {
        let lastElement = listElement.value?.children[listElement.value.children.length - 1];

        offsetIndex.value++;
        let nextArticles = SearchService.searchResult.value.slice(offsetIndex.value * NEWS_OFFSET + NEWS_LIMIT - NEWS_OFFSET, offsetIndex.value * NEWS_OFFSET + NEWS_LIMIT);
        newsProps.value.splice(0, NEWS_OFFSET);
        newsProps.value.push(...toNewsItemProps(nextArticles));

        nextTick(() => {
            if(lastElement) lastElement.scrollIntoView();
        });
    }
}
</script>

<template>
    <div class="news-list">
        <div class="news-list__container" ref="listElement">
            <NewsItem v-for="prop in newsProps" v-bind="prop" />
        </div>
        <div class="news-list__more-btn" @click="loadClickHandler" v-if="displayLoadButton">Load More</div>
    </div>
</template>

<style>
.news-list {
    padding-bottom: 15px;
}
.news-list__more-btn {
    padding: 5px 0;
    border-radius: 1px;
    margin: 0 auto;
    width: 215px;
    background-color: rgba(1, 1, 1, 0.18);
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    cursor: pointer;
    transition: all 0.1s;
    user-select: none;
}
.news-list__more-btn:hover {
    background-color: rgba(1, 1, 1, 0.22);
}
.news-list__more-btn:active {
    background-color: rgba(1, 1, 1, 0.29);
}
</style>