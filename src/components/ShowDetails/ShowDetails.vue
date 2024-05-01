<template>
  <template v-if="isLoading">
    <Spinner />
  </template>

  <section id="show" v-if="show && !isLoading" class="flex flex-col gap-6">
    <h1 class="text-6xl">{{ show.name }}</h1>
    <div class="flex flex-wrap gap-4">
      <img
        v-if="show.imageUrl"
        :src="show.imageUrl"
        :alt="show.name"
        class="order-1 self-start rounded-xl"
      />
      <article v-html="show.summary" class="order-2 sm:flex-1 md:text-xl" />
      <section
        id="general-show-information"
        class="order-3 w-40 flex-auto shrink-0 sm:order-2 sm:flex-initial lg:w-80"
      >
        <h2 class="text-2xl font-semibold">Show Info</h2>
        <ul class="flex flex-col">
          <li class="flex gap-2">
            <span class="font-semibold">Premiered:</span>
            <span>{{ show.started ? show.started : 'unknown' }}</span>
          </li>
          <li class="flex gap-2">
            <span class="font-semibold">Status:</span>
            <span>{{ show.status }} {{ ended }}</span>
          </li>
          <li class="flex gap-2">
            <span class="font-semibold">Genre:</span>
            <span>{{ show.genre.join(' / ') }}</span>
          </li>
          <li class="flex gap-2">
            <span class="font-semibold">Type:</span>
            <span>{{ show.type }}</span>
          </li>
          <li class="flex gap-2">
            <span class="font-semibold">Language:</span>
            <span>{{ show.language }}</span>
          </li>
        </ul>
      </section>
    </div>
    <section id="cast" class="flex flex-col gap-2" v-if="show.cast.length">
      <h2 class="text-2xl font-semibold">Cast</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <CastCard v-for="cast in show.cast" :key="cast.person.id" :cast="cast" />
      </div>
    </section>
  </section>

  <div v-else-if="!show && !isLoading">No data</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useShow } from '../../lib/services/useShow';
import Spinner from '../Spinner.vue';
import CastCard from './CastCard.vue';
import { computed, toValue } from 'vue';

const route = useRoute();
const { isLoading, data: show } = useShow(route.params.id.toString());
const ended = computed(() => toValue(show)?.ended ? `(${toValue(show)?.ended})` : '')
</script>
