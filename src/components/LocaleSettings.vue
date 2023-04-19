<script setup lang="ts">
import { openModal } from '@/services/ModalService'
import { getCurrentLocale } from '@/services/LocaleService'
</script>

<template>
    <div class="locale-settings" @click="openModal('Select search language.', 'LocaleSelect')">
        <span class="locale-settings__lang">Language:</span>
        <span class="locale-settings__icon" v-html="getCurrentLocale().icon"></span>
    </div>
</template>

<style>
.locale-settings {
    cursor: pointer;
}
.locale-settings__lang {
    margin-right: 5px;
}
.locale-settings__icon {
    display: inline-block;
    width: 14px;
}
</style>