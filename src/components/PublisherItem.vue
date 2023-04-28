<script setup lang="ts">
import * as SearchService from '@/services/SearchService'
import type { Publisher } from '@/services/PublishersAPI'

const props = defineProps<{
    publisher: Publisher,
    isShrink: boolean,
}>();

function clickHandler(event: MouseEvent) {
    if(SearchService.selectedPublisher.value === props.publisher) {
        SearchService.selectedPublisher.value = null;
    } else {
        SearchService.selectedPublisher.value = props.publisher;
    }
    SearchService.search();
};
</script>

<template>
    <div
        class="publisher"
        :title="publisher.name"
        :class="{ 'publisher__shrink': isShrink, 'publisher__selected': SearchService.selectedPublisher.value === publisher }"
        @click="clickHandler($event)"
    >
        <img class="icon" :src="publisher.iconUrl">
        <span class="name">{{ publisher.name }}</span>
    </div>
</template>

<style>
.publisher {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    transition: padding 0.5s;
    padding: 6px 0 6px 19px;
    font-weight: 600;
    font-size: 15px;

    letter-spacing: -0.5px;
    overflow: hidden;
    cursor: pointer;
    white-space: nowrap;
}
.publisher:hover {
    background-color: #0d7bd3;
}
.publisher:active {
    filter: brightness(0.96);
}
.publisher__selected {
    background-color: #2686d3;
}
.publisher__shrink {
    padding-left: 12px;
}
.icon {
    flex-shrink: 0;
    margin-right: 28px;
    width: 40px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.name {
    color: #fff;
}
</style>