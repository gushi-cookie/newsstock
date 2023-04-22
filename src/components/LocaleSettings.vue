<script setup lang="ts">
import { openModal } from '@/services/ModalService'
import { getCurrentLocale } from '@/services/LocaleService'
</script>

<template>
    <div class="locale-settings" @click="openModal('Select search language.', 'LocaleSelect')">
        <span class="locale-settings__lang">Search in</span>
        <span class="locale-settings__icon" v-html="getCurrentLocale().icon"></span>
    </div>
</template>

<style>
.locale-settings {
    cursor: pointer;
    padding: 5px;
    border: 1px solid #a2d1ff;
    border-radius: 6px;
    background-color: #2196f3;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
.locale-settings:hover {
    filter: brightness(0.93);
}
.locale-settings:active {
    filter: brightness(0.89);
}

.locale-settings__lang {
    margin-right: 5px;
}
.locale-settings__icon {
    display: inline-block;
    box-sizing: content-box;
    width: 14px;
    height: 14px;
    border: 3px solid #e6e6e6;
    border-radius: 6px;
    vertical-align: -5px;
}
.locale-settings__icon > svg {
    vertical-align: top;
}
</style>