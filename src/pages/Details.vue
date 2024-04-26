<template>
  <page>
    <router-view v-slot="{ Component }">
      <Transition
        mode="out-in"
        enter-from-class="opacity-0 translate-y-[-30px]"
        leave-to-class="opacity-0"
        enter-active-class="transition-all duration-200 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-to-class="opacity-1 translate-y-0"
        leave-from-class="opacity-1 translate-y-0"
      >
        <component :is="Component" />
      </Transition>
    </router-view>
  </page>
</template>
