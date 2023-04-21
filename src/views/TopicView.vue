<script lang="ts">
/**
 * Extract a query param from the current URL.
 */
 function extractQueryParam(name: string): string | null {
    return new URLSearchParams(window.location.search).get(name);
}
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { sidebarState } from '@/services/SidebarState';

sidebarState.isShrink = true;
const url = ref<string>('');
const urlExtracted = ref<boolean>(true);

let uParam = extractQueryParam('u');
try {
    if(uParam) {
        new URL(uParam);
        url.value = uParam;
    } else {
        urlExtracted.value = false;
    }
} catch(error) {
    console.log(error);
    urlExtracted.value = false;
}

onMounted(() => {
    let iframe: any = document.getElementById('frame');
    if(iframe && urlExtracted.value) {
        iframe.contentDocument?.location.replace(url.value);
    }
});
</script>


<template>
<main class="main__topic">
    <iframe v-if="urlExtracted" id="frame"></iframe>
    <div v-if="!urlExtracted" class="fail">
        <h1>Couldn't extract the url.</h1>
    </div>
</main>
</template>

<style>
.main__topic iframe {
    width: 100%;
    height: 97%;
}
</style>