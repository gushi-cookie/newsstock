<script setup lang="ts">
import PublisherItem from './PublisherItem.vue'
import { publishers } from '../services/PublishersAPI'

defineProps<{ isShrink: boolean }>();
</script>

<template>
    <div class="publishers-list" :class="{ 'publishers-list__shrink': isShrink }">
        <PublisherItem v-for="p in publishers" :publisher="p" :is-shrink="isShrink" />
    </div>
</template>

<style>
.publishers-list {
    width: 100%;
    background-color: #2196f3;
}
</style>