<script setup lang="ts">
import PublishersList from './PublishersList.vue'
import { sidebarState } from '../services/SidebarState'

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
if(vw <= 500) sidebarState.isShrink = true;
</script>

<template>
    <div class="sidebar" :class="{ 'sidebar__shrink': sidebarState.isShrink }">
        <PublishersList :is-shrink="sidebarState.isShrink"/>
    </div>
</template>

<style>
.sidebar {
    width: 275px;
    overflow-x: hidden;
    transition: 0.5s;
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


@media (max-width: 500px) {
.sidebar__shrink {
    width: 0;
}
}
</style>