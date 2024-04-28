<script setup lang="ts">
import { useShows } from '../../lib/services/useShows';
import ShowCard from '../ShowCard/ShowCard.vue';

const { data: showsInGenre, isLoading } = useShows();
</script>

<template>
  <div class="flex flex-col gap-6">
    <div
      v-for="genre in showsInGenre"
      :key="genre.genreName"
      class="flex flex-col gap-2"
    >
      <template v-if="genre.shows.length">
        <h2 class="text-2xl">{{ genre.genreName }}</h2>
        <div class="flex gap-4 overflow-x-auto">
          <ShowCard v-for="show in genre.shows" :show="show" :key="show.id" />
        </div>
      </template>
    </div>
  </div>
</template>
