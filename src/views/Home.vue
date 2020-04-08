<template>
  <div id="home">
    <div class="jumbotron" align="center">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1 class="display-3">Audiophile Store</h1>
      <p class="lead">To satisfy your desire for a good audio.</p>
      <hr class="my-4">
      <p>Best price for best product.</p>
      <p class="lead">
        <a class="btn btn-primary" href="#" role="button">Shop now</a>
      </p>
    </div>
    <Featuring/>
  </div>
</template>

<script>
  import Featuring from "@/components/Featuring"
  export default {
    name: 'Home',
    components: {
      Featuring
    }
  }
</script>

<style lang="scss">
  #home {
    .jumbotron {
      background-color: white;
    }
  }
</style>
