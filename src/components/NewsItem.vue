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
const props = defineProps<Props>();
const isOriginSafe = (new URL(props.originUrl)).protocol === 'https:' ? true : false;
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
                <a class="origin" :class="{ 'origin-unsafe': !isOriginSafe }" target="_blank" :href="originUrl">Origin</a>
            </div>
        </div>
    </div>
</template>