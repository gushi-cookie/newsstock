<script setup lang="ts">
import * as SearchService from '@/services/SearchService'
</script>

<template>
    <div class="search-bar">
        <input class="search-bar__input" v-model="SearchService.searchString.value" @keyup.enter="SearchService.search()">
        <img
            class="search-bar__reset-btn"
            src="/icons/round-close.svg"
            v-if="SearchService.searchString.value.length > 0"
            @click="SearchService.searchString.value = ''"
        >
        <div class="search-bar__search-wrap" @click="SearchService.search()">
            <img class="search-bar__search-btn" src="/icons/search.svg">
        </div>
    </div>
</template>

<style>
.search-bar {
    display: flex;
    align-items: center;
    background-color: #fafafa;
    border-radius: 50px;

    position: relative;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.search-bar__input {
    width: 250px;
    height: 35px;
    background-color: transparent;
    border: none;
    font-size: 14px;
    padding-left: 12px;
}
.search-bar__input:focus {
    outline: none;
}
.search-bar__reset-btn {
    position: absolute;
    width: 20px;
    right: 36px;
    cursor: pointer;
}
.search-bar__reset-btn:hover {
    filter: contrast(0.5);
}

.search-bar__search-wrap {
    background-color: #1976d2;
    border-radius: 50px;
    border: 2px solid white;
    width: 35px;
    height: 35px;
    cursor: pointer;
    text-align: center;
}
.search-bar__search-wrap:hover {
    filter: brightness(0.93);
}
.search-bar__search-wrap:active {
    filter: brightness(0.85);
}

.search-bar__search-btn {
    filter: invert(1);
    height: 22px;
    vertical-align: -9px;
}
</style>