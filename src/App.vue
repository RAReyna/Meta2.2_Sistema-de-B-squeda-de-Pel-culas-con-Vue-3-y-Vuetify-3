<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>Buscador de Películas</v-app-bar-title>

      <v-btn to="/">Inicio</v-btn>
      <v-btn to="/about">About</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>