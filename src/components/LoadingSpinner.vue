
<template>
  <div
    v-if="loading"
    class="d-flex flex-column align-center justify-center pa-6"
    role="status"
    aria-live="polite"
  >
    <v-progress-circular
      indeterminate
      color="primary"
      size="48"
      width="5"
    />

    <p class="mt-3">Cargando películas...</p>
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})
</script>
