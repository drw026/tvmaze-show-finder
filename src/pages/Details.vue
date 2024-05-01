<template>
  <page>
    <template v-slot:search>
      <div class="flex justify-between gap-3">
        <Search />
        <HomeButton />
      </div>
    </template>
    <router-view :key="$route.params.id"></router-view>
  </page>
</template>

<script setup lang="ts">
import Search from '@/components/Search.vue';
import HomeButton from '@/components/HomeButton.vue';
</script>
