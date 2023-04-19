<script setup lang="ts">
import A from './A.vue'
import B from './B.vue'
import { shallowRef, watch, type Component, onMounted } from 'vue'
import { modalState, closeModal, openModal } from '../services/ModalService'

const selectedComponent = shallowRef<Component | null>(null);
const components = [
{ name: 'A', component: A },
{ name: 'B', component: B },
];

watch(() => modalState.componentName, (name, prevName) => {
    let compObj = null;
    for(let i = 0; i < components.length; i++) {
        compObj = components[i];
        if(components[i].name === name) {
            break;
        }
    }

    if(compObj) {
        selectedComponent.value = compObj.component;
        modalState.isOpen = true;
    } else {
        selectedComponent.value = null;
        modalState.isOpen = false;
    }
});

onMounted(() => {
    openModal('ASD', 'B');
});
</script>

<template>
    <Teleport to="body">
        <div class="main-modal__backdrop" :class="{ 'main-modal__closed': !modalState.isOpen }">
            <div class="main-modal__container card">
                <div class="main-modal__header card-header">
                    <span class="main-modal__title">{{ modalState.title }}</span>
                    <button class="btn btn-primary" @click="openModal('Title of A component.', 'A')">A open</button>
                    <button class="btn btn-primary" @click="openModal('Title of B component.', 'B')">B open</button>
                    <button class="main-modal__btn-close btn-close" @click="closeModal()"></button>
                </div>
                <div class="main-modal__body card-body">
                    <component :is="selectedComponent" />
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style>
.main-modal__backdrop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.6);
}
.main-modal__container {
    margin-top: -150px;
    width: 650px;
    height: auto;
}
.main-modal__closed {
    display: none;
}
.main-modal__header {
    display: flex;
    align-items: center;
}
.main-modal__title {
    margin-right: auto;
}
.main-modal__btn-close {
    margin-left: auto;
}
.main-modal__body {

}
</style>