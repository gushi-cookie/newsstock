<script setup lang="ts">
import * as LocaleService from '@/services/LocaleService'
import { closeModal } from '@/services/ModalService'

const props = defineProps<{
    name: string,
    languageCode: string,
    countryCode: string,
    icon: string,
}>();

function clickHandler(event: MouseEvent) {
    let locale = LocaleService.getLocale(props.countryCode, props.languageCode);
    if(locale) {
        LocaleService.setLocale(locale);
        closeModal();
    }
};
</script>

<template>
    <div class="locale-item" @click="clickHandler($event)">
        <span class="locale-item__icon" v-html="props.icon"></span>
        <span class="locale-item__country">{{ props.name }}</span>
        <span class="locale-item__lang">{{ props.languageCode }}</span>
    </div>
</template>

<style>
.locale-item {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
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
}
.locale-item__lang {
    font-size: 1.1em;
    margin-left: auto;
}
</style>