<script lang="ts">
export interface Props {
    originUrl: string,
    title: string,
    imageLink: string,
    language: string,
    sourceCountry: string,
    domain: string,
}
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<Props>();
const isOriginSafe = (new URL(props.originUrl)).protocol === 'https:' ? true : false;
const topicUrl = computed(() => `/topic?u=${props.originUrl}`);
</script>

<template>
    <div class="news-item">
        <div class="image-container">
            <img class="image" :src="imageLink">
        </div>
        <div class="content">
            <h2 class="title">{{ title }}</h2>
            <div class="footer">
                <div class="locale">
                    <span class="language">{{ language }}</span>
                    <span class="country">{{ sourceCountry }}</span>
                </div>
                <span class="domain">{{ domain }}</span>
                <a class="topic-link" target="_blank" :href="topicUrl">View</a>
                <a class="origin-link" :class="{ 'origin-unsafe': !isOriginSafe }" target="_blank" :href="originUrl">Origin</a>
            </div>
        </div>
    </div>
</template>