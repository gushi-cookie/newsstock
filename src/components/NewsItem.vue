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
    <div class="n-item">
        <div class="n-item__image" :style="{ backgroundImage: `url(${imageLink})` }"></div>
        <div class="n-item__main">
            <h3 class="n-item__title">{{ title }}</h3>
            <div class="n-item__footer">
                <div class="n-item__locale">
                    <span class="n-item__lang">{{ language }}</span>
                    <span class="n-item__country">{{ sourceCountry }}</span>
                </div>
                <div class="n-item__footer-br"/>
                <span class="n-item__domain">{{ domain }}</span>
                <div class="n-item__links">
                    <a class="n-item__link" target="_blank" :href="topicUrl">VIEW</a>
                    <a class="n-item__link" :class="{ 'n-item__link-unsafe': !isOriginSafe }" target="_blank" :href="originUrl">ORIGIN</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.n-item {
    width: 100%;
    background-color: #fff;
    border-radius: 3px;
    margin-bottom: 15px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

.n-item__image {
    width: 100%;
    height: 300px;
    background-size: cover;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.n-item__main {
    padding: 18px 7px 14px 14px;
}
.n-item__title {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 30px;
}

.n-item__footer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
}

.n-item__locale {
    color: #fff;
    font-weight: 500;
    background-color: #424242;
    font-size: 12px;
    border-radius: 15px;
    padding: 4px 12px;
}
.n-item__lang {
    border-right: 2px solid #fafafa;
    padding-right: 6px;
    margin-right: 6px;
}
.n-item__country {

}

.n-item__domain {
    text-decoration: underline;
}

.n-item__link:first-child {
    margin-right: 8px;
}
.n-item__link {
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    color: #fff !important;
    background-color: #2196f3;
    padding: 8px 8px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
.n-item__link:hover {
    filter: brightness(0.93);
}
.n-item__link:active {
    filter: brightness(0.85);
}
.n-item__link-unsafe {

}


@media (max-width: 630px) {
.n-item__main {
    padding-bottom: 18px;
}
.n-item__title {
    font-size: 15px;
}
.n-item__locale {
    order: 2;
    margin-top: 8px;
}
.n-item__footer-br {
    width: 100%;
    order: 1;
}
.n-item__domain {
    order: 0;
}
.n-item__links {
    order: 3;
    margin-top: 8px;
}
}
</style>