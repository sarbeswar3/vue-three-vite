<script setup>
import {ref} from 'vue'
import GuestLayout from './components/layouts/GuestLayout.vue'
import AppLayout from './components/layouts/AppLayout.vue'
const isUser = ref(true);
</script>

<template>
  <v-app>
    <v-card>
      <div v-if="isUser">
        <AppLayout />
      </div>
      <div v-else>
        <GuestLayout />
      </div>
    </v-card>
  </v-app>
</template>

<style scoped>
</style>
