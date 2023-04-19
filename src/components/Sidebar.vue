<script setup lang="ts">
import PublishersList from './PublishersList.vue'
import { sidebarState } from '../services/SidebarState'
</script>

<template>
    <div class="sidebar" :class="{ 'sidebar__shrink': sidebarState.isShrink }">
        <PublishersList :is-shrink="sidebarState.isShrink"/>
    </div>
</template>

<style>
.sidebar {
    width: 20%;
    overflow-x: hidden;
    transition: 0.5s;
    height: 500px;
}

.sidebar::-webkit-scrollbar {
    width: 6px;
}
.sidebar::-webkit-scrollbar-thumb {
    background-color: #f99003;
}
.sidebar::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px 0.08px grey;
}

.sidebar__shrink {
    width: 65px;
}
.sidebar__shrink::-webkit-scrollbar {
    display: none;
}
</style>