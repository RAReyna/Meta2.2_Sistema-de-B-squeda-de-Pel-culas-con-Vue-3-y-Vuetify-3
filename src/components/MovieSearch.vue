
<template>
  <v-card class="pa-4">
    <v-card-title>Buscar películas</v-card-title>

    <v-form @submit.prevent="handleSearch">
      <v-text-field
        v-model="query"
        label="Título"
        placeholder="Ej. Batman"
        required
        clearable
      />

      <v-select
        v-model="type"
        label="Tipo de contenido"
        :items="[
          { title: 'Película', value: 'movie' },
          { title: 'Serie', value: 'series' },
          { title: 'Episodio', value: 'episode' }
        ]"
      />

      <v-text-field
        v-model="year"
        label="Año de lanzamiento (opcional)"
        type="number"
        min="1"
        max="9999"
      />

      <v-text-field
        v-model.number="page"
        label="Página de resultados"
        type="number"
        min="1"
        max="100"
      />

      <div class="d-flex ga-2">
        <v-btn type="submit" color="primary">
          Buscar
        </v-btn>

        <v-btn variant="outlined" @click="handleClear">
          Limpiar
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>


<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search-movies', 'clear-results'])

const query = ref('')
const type = ref('movie')
const year = ref('')
const page = ref(1)

const handleSearch = () => {
  const title = query.value?.trim()

  if (!title) return

  emit('search-movies', {
    query: title,
    type: type.value,
    year: year.value.trim(),
    page: page.value
  })
}

const handleClear = () => {
  query.value = ''
  type.value = 'movie'
  year.value = ''
  page.value = 1

  emit('clear-results')
}
</script>


