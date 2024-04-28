<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useSearchShows } from '../../lib/services/useSearchShows';
import ShowCard from '../ShowCard/ShowCard.vue';
import { toRef } from 'vue';

const route = useRoute();
const { data: shows } = useSearchShows(toRef(route.params.query.toString()));

</script>

<template>
  <div v-if="shows?.length" class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
    <ShowCard v-for="show in shows" :show="show" :key="show.id" />
  </div>
</template>
