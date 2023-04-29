<script setup lang="ts">
import Modal from './components/Modal.vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import * as LayoutService from '@/services/LayoutService'

const routerComponent = ref();
onMounted(() => {
  LayoutService.routerComponent.value = routerComponent.value;
});
</script>

<template>
  <Header/>
  <div class="app__wrap">
    <Sidebar/>
    <RouterView class="main" ref="routerComponent" />
  </div>
  <Footer/>
  <Modal/>
</template>

<style>
#app {
  display: flex;
  flex-flow: column nowrap;

  height: 100vh;
}

.app__wrap {
  display: flex;
  flex-flow: row nowrap;

  min-height: 0px;
  z-index: 1;
}
.sidebar {
  flex-shrink: 0;
}
.main {
  background-color: #fafafa;
  overflow-x: hidden;
  flex-grow: 1;
}
.main::-webkit-scrollbar {
    width: 9px;
}
.main::-webkit-scrollbar-thumb {
    background-color: #f99003;
    border-radius: 3px;
}
.main::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px 0.08px grey;
}

.header {
  z-index: 2;
  flex-shrink: 0;
}
.footer {
  z-index: 1;
  flex-shrink: 0;
}
</style>