<template>
  <template v-if="isLoading">
    <Spinner />
  </template>

  <section id="results" v-if="shows?.length" class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
    <ShowCard v-for="show in shows" :show="show" :key="show.id" />
  </section>

  <div v-else-if="!shows?.length && !isLoading">
    No shows found
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useSearchShows } from '@/lib/services/useSearchShows';
import ShowCard from '@/components/ShowCard.vue';
import { toRef } from 'vue';
import Spinner from '@/components/Spinner.vue';

const route = useRoute();
const { isLoading, data: shows } = useSearchShows(toRef(route.params.query.toString()));
</script>
