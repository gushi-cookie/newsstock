<script setup lang="ts">
import LocaleItem from './LocaleItem.vue'
import { ref, onMounted } from 'vue'
import { getLocales, type Locale } from '@/services/LocaleService'

const locales = ref<Locale[]>([]);

onMounted(() => {
    locales.value.push(...getLocales());
});
</script>

<template>
    <div class="locale-select list-group">
        <LocaleItem class="list-group-item list-group-item-action" v-for="l in locales" :icon="l.icon" :country="l.name" />
    </div>
</template>

<style>
.locale-select {
    width: 400px;
    max-height: 400px;
    overflow-x: hidden;
    padding-right: 4px;
}

.locale-select::-webkit-scrollbar {
    width: 4px;
}
.locale-select::-webkit-scrollbar-thumb {
    background-color: #f99003;
}
.locale-select::-webkit-scrollbar-track {
    border: 1px solid rgba(0, 0, 0, 0.125);
}

@media (max-width: 500px) {
.locale-select {
    max-height: none;
    width: 100%;
}
}
</style>