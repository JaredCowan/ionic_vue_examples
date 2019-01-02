<template>
  <ion-menu [content]="content">
    <ion-header>

      <ion-navbar>
        <button ion-button icon-only menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>

        <ion-title>
          Page Title
        </ion-title>

        <ion-buttons end>
          <button ion-button icon-only>
            <ion-icon name="options"></ion-icon>
          </button>
        </ion-buttons>
      </ion-navbar>

    </ion-header>
  </ion-menu>
</template>

<script>
  export default {
    components: {},
    methods: {
      goBack() {
        window.history.back()
      }
    }
  }
</script>

<style lang="css">
</style>
