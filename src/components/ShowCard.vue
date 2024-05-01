<template>
  <router-link
    :to="{ name: 'show', params: { id: show.id } }"
    :key="show.id"
    class="flex flex-none basis-60 flex-col gap-2"
  >
    <div class="overflow-hidden rounded-xl">
      <img
        v-if="show.imageUrl"
        :alt="show.name"
        :src="show.imageUrl"
        class="aspect-[3/4] h-auto w-auto object-cover transition-all hover:scale-105"
      />
    </div>
    <p class="mb-2 text-center">{{ show.name }}</p>
  </router-link>
</template>

<script setup lang="ts">
const props = defineProps(['show']);
</script>
