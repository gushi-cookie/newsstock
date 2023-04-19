<script setup lang="ts">
import PublisherItem from './PublisherItem.vue'
import { getPublishers, type Publisher } from '../services/PublishersAPI'
import { onMounted, ref} from 'vue'

defineProps<{ isShrink: boolean }>();
const publishers = ref<Publisher[]>([]);

onMounted(async () => {
    publishers.value.push(...await getPublishers());
});
</script>

<template>
    <div class="publishers-list" :class="{ 'publishers-list__shrink': isShrink }">
        <PublisherItem v-for="p in publishers" v-bind="p" :is-shrink="isShrink" />
    </div>
</template>

<style>
.publishers-list {
    width: 100%;
    background-color: #2196f3;
}
</style>