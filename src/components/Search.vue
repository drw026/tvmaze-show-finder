<script setup lang="ts">
import { ref } from 'vue';
import router from '../router';
import { useRoute } from 'vue-router';

const route = useRoute();
const searchQuery = ref(route.params.query as string || null);

const search = () => {
  if (searchQuery.value === null) return;
  router.push({ name: 'search', params: { query: searchQuery.value }  })
}
</script>

<template>
  <div class="flex gap-3">
    <input
      class="block w-full rounded-md border-gray-300 h-10 p-3"
      placeholder="Find your show"
      v-model="searchQuery"
    />
    <button
      @click="search"
      class="rounded px-3 py-2 font-bold bg-amber-300"
    >
      Search
    </button>
  </div>
</template>
