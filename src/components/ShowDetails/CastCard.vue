<template>
  <div :key="cast.person.id" class="flex gap-2">
    <img
      v-if="cast.person.imageUrl"
      :src="cast.person.imageUrl"
      :alt="cast.person.name"
      class="h-24 w-24 rounded-lg object-cover"
    />
    <div class="flex flex-col">
      <p class="text-lg font-semibold">{{ cast.person.name }}</p>
      <p>as {{ cast.character.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['cast']);
</script>
