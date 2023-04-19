<script setup lang="ts">
defineProps<{
    country: string,
    icon: string,
}>();
</script>

<template>
    <div class="locale-item">
        <span class="locale-item__icon" v-html="icon"></span>
        <span class="locale-item__country">{{ country }}</span>
    </div>
</template>

<style>
.locale-item {
    cursor: pointer;
}

.locale-item__icon {
    display: inline-block;
    font-size: 0;
    width: 35px;
    border: 3px solid rgba(0, 0, 0, 0.125);
    border-radius: 4px;
    margin-right: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.locale-item__country {
    font-size: 1.1em;
    vertical-align: -6px;
}
</style>