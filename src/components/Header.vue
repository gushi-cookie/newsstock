<script setup lang="ts">
import LocaleSettings from './LocaleSettings.vue'
import { RouterLink } from 'vue-router'
import { sidebarState } from '@/services/SidebarState'
import SearchBar from './SearchBar.vue'
</script>

<template>
    <header class="header">
        <div class="header__btn-toggle" @click="sidebarState.isShrink = !sidebarState.isShrink">
            <img src="/icons/menu.svg" :class="{ 'd-none': !sidebarState.isShrink }">
            <img src="/icons/round-close.svg" :class="{ 'd-none': sidebarState.isShrink }">
        </div>
        <div class="header__logo">
            <RouterLink to="/">News Stock</RouterLink>
        </div>
        <nav class="header__nav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
        <div class="header__break"></div>
        <SearchBar/>
        <LocaleSettings/>
    </header>
</template>

<style>
.header {
    display: flex;
    flex-flow: row wrap;
    background-color: #1976d2;
    height: 64px;
    color: #fff;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.header__btn-toggle {
    cursor: pointer;
    padding: 8px;
    margin-left: 24px;
    margin-right: 25px;
}
.header__btn-toggle img {
    display: block;
    width: 28px;
    filter: invert(1);
}

.header__logo a {
    color: #fff;
    text-decoration: none;
    padding: 8px;
    font-weight: 700;
}
.header__logo a:hover {
    color: #a2d1ff;
}

.header__nav {
    border-left: 1px solid #fff;
    margin-left: 10px;
}
.header__nav a {
    color: #fff;
    padding: 8px 16px;
    text-decoration: none;
}
.header__nav a:hover {
    color: #a2d1ff;
}

.header .locale-settings {
    margin-left: auto;
    margin-right: 20px;
}

.header .search-bar {
    margin-left: auto;
}


@media (max-width: 900px) {
.header {
    height: 90px;
    padding-bottom: 7px;
}
.header__break {
    order: 1;
    width: 100%;
}
.header .search-bar {
    order: 2;
    margin: 0 auto;
}
}

@media (max-width: 500px) {
.header__btn-toggle {
    margin: 0;
    margin-left: 8px;
}
.header__nav a {
    padding: 8px 8px;
}
.header .locale-settings {
    margin-right: 8px;
}
.locale-settings__lang {
    display: none;
}
}
</style>