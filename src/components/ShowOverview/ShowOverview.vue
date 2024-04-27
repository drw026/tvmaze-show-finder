<script setup lang="ts">
import { useShows } from '../../lib/services/useShows';

const {data: showsInGenre, isLoading} = useShows();
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
        <div
          class="grid grid-cols-[repeat(10,200px)] gap-4"
          :class="genre.shows.length < 10 ? 'overflow-x-hidden' : 'overflow-x-auto'"
        >
          <router-link
              :to="{ name: 'show', params: { id: show.id } }"
              :key="show.id"
              v-for="show in genre.shows"
              class="border-2 overflow-hidden"
          >
            <img
                :alt="show.name"
                :src="show.imageUrl"
                class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
            />
            <p>{{ show.name }}</p>
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>
