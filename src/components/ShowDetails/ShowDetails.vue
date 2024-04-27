<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useShow } from '../../lib/services/useShow';

const route = useRoute();
const { data: show } = useShow(route.params.id as string);
</script>

<template>
  <div>
    {{ show?.name }}
    <img :src="show?.imageUrl" :alt="show?.name" />
  </div>
</template>
