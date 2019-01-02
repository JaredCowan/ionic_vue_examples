<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Ionic 4 + Vue Application</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <ion-list>
          <ion-item v-for="item of items" v-bind:key="item.id">
            <ion-label full>
              {{item.name}}
            </ion-label>
          </ion-item>
        </ion-list>

        <ion-button @click="goToPage2" full>Go To Page II</ion-button>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      items: [{id: 0, name: 'Jared'}, {id: 1, name: 'Alex'}, {id: 2, name: 'Charlie'}, {id: 3, name: 'Nik'}]
    }
  },
  methods: {
    goToPage2 () {
      console.log(this)
      this.$router.push('page2')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
