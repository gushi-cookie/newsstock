<script setup lang="ts">
import Modal from './components/Modal.vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Header/>
  <Sidebar/>
  <RouterView/>
  <Modal/>
</template>

<style>

</style>