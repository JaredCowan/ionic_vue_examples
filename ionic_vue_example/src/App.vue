<template>
  <ion-app>
    <app-navbar></app-navbar>
    <router-view/>
  </ion-app>
</template>

<script>
  import AppNavbar from './components/AppNavbar'

  export default {
    name: 'App',
    components: {
      AppNavbar
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,800,900|Lora:300,400,500,700');

  .application {
    font-family: "Raleway", sans-serif !important;
  }
</style>
