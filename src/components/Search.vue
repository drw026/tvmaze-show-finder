<template>
  <div class="flex gap-3">
    <button @click="search" class="rounded bg-yellow px-3 py-2 font-bold hover:bg-yellow-light">
      Search
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
import router from '../router';
import { useRoute } from 'vue-router';

const route = useRoute();
const searchQuery = ref((route.params.query as string) || null);

const search = () => {
  if (searchQuery.value === null) return;
  router.push({ name: 'search', params: { query: searchQuery.value } });
};
</script>
