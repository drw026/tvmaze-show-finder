<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useSearchShows } from '../../lib/services/useSearchShows';

const route = useRoute();

const { data: shows } = useSearchShows(route.params.query as string);
</script>

<template>
  <div v-if="shows?.length" class="grid grid-cols-10 gap-4">
    <div v-for="show in shows">
      <router-link :key="show.id" :to="{ name: 'show', params: { id: show.id } }">
        {{ show.name }}
        <img :src="show.imageUrl" />
      </router-link>
    </div>
  </div>
</template>
