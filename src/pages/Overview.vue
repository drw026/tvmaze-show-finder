<template>
  <page>
    <template v-slot:search>
      <Search />
    </template>
    <router-view></router-view>
  </page>
</template>

<script setup lang="ts">
import Search from '@/components/Search.vue';
</script>
