
<template>
  <v-card v-if="movie" class="mt-4">
    <v-img
      v-if="movie.Poster && movie.Poster !== 'N/A'"
      :src="movie.Poster"
      :alt="`Póster de ${movie.Title}`"
      height="300"
      cover
    />

    <v-card-title class="text-wrap">
      {{ movie.Title }}
    </v-card-title>

    <v-card-subtitle>
      {{ movie.Year }} · {{ movie.Runtime || 'Duración desconocida' }}
    </v-card-subtitle>

    <v-card-text>
      <p><strong>Género:</strong> {{ movie.Genre || 'No disponible' }}</p>
      <p><strong>Director:</strong> {{ movie.Director || 'No disponible' }}</p>
      <p><strong>Actores:</strong> {{ movie.Actors || 'No disponibles' }}</p>
      <p><strong>Estreno:</strong> {{ movie.Released || 'No disponible' }}</p>
      <p><strong>Calificación IMDb:</strong> {{ movie.imdbRating || 'No disponible' }}</p>

      <v-divider class="my-4" />

      <p><strong>Sinopsis</strong></p>
      <p>{{ movie.Plot || 'Sinopsis no disponible.' }}</p>
    </v-card-text>

    <v-card-actions>
      <v-spacer />

      <v-btn
        color="primary"
        variant="outlined"
        @click="closeDetails"
      >
        Cerrar detalles
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close-details'])

const closeDetails = () => {
  emit('close-details')
}
</script>
