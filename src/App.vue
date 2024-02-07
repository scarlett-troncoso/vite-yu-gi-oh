<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      url_api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
      characters: [],
    }
  },
  mounted() {
    console.log((this.url_api));

    axios
      .get(this.url_api)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.data);
        //name e archetype e imagine ygoprodeck_url
        this.characters = response.data.data

      })
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-5">
        <div class="card" v-for="character in characters">
          {{ character.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style ></style>
