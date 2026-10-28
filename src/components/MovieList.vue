
<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="movie in movies"
        :key="movie.imdbID"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="h-100 d-flex flex-column">
          <v-img
            :src="movie.Poster !== 'N/A' ? movie.Poster : undefined"
            :alt="`Póster de ${movie.Title}`"
            height="350"
            cover
          >
            <template #error>
              <div
                class="d-flex align-center justify-center h-100 bg-grey-lighten-3"
              >
                <v-icon icon="mdi-movie-open" size="64" color="grey" />
              </div>
            </template>
          </v-img>

          <v-card-title class="text-wrap">
            {{ movie.Title }}
          </v-card-title>

          <v-card-subtitle>
            {{ movie.Year }} · {{ formatType(movie.Type) }}
          </v-card-subtitle>

          <v-spacer />

          <v-card-actions class="pa-4">
            <v-btn
              color="primary"
              variant="flat"
              block
              @click="selectMovie(movie.imdbID)"
            >
              Ver detalles
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps({
  movies: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['select-movie'])

const selectMovie = (imdbID) => {
  emit('select-movie', imdbID)
}

const formatType = (type) => {
  const types = {
    movie: 'Película',
    series: 'Serie',
    episode: 'Episodio'
  }

  return types[type] || type
}
</script>
