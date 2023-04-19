<script setup lang="ts">
import Modal from './components/Modal.vue';
import Sidebar from './components/Sidebar.vue'
import { RouterLink, RouterView } from 'vue-router'
import { sidebarState } from './services/SidebarState';
</script>

<template>
  <button @click="sidebarState.isShrink = !sidebarState.isShrink">Toggle</button>
  <Sidebar/>
  <Modal/>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>