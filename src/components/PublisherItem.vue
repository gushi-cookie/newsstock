<script setup lang="ts">
defineProps<{
    iconUrl: string,
    name: string,
    isShrink: boolean,
}>();
</script>

<template>
    <div class="publisher" :title="name" :class="{ 'publisher__shrink': isShrink }">
        <img class="icon" :src="iconUrl">
        <span class="name">{{ name }}</span>
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