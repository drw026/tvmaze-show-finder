<template>
  <div class="flex flex-1 gap-3">
    <button @click="search" class="flex gap-1 rounded bg-yellow px-3 py-2 font-bold hover:bg-yellow-light">
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <span class="hidden sm:flex">Search</span>
    </button>
    <input
      type="search"
      class="block h-10 w-full rounded-md border-gray-300 p-3"
      placeholder="Find your show"
      v-model="searchQuery"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';

const route = useRoute();
const searchQuery = ref((route.params.query as string) || null);

const search = () => {
  if (searchQuery.value === null) return;
  router.push({ name: 'search', params: { query: searchQuery.value } });
};
</script>
