<script setup lang="ts">
import { modalState, closeModal } from '../services/ModalService'
</script>

<template>
    <Teleport to="body">
        <div class="main-modal__backdrop" :class="{ 'main-modal__closed': !modalState.isOpen }">
            <div class="main-modal__container card">
                <div class="main-modal__header card-header">
                    <span class="main-modal__title">{{ modalState.title }}</span>
                    <button class="main-modal__btn-close btn-close" @click="closeModal()"></button>
                </div>
                <div class="main-modal__body card-body">
                    <component :is="modalState.component" />
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
    max-width: 650px;
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