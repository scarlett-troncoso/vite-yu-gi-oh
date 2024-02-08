<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      url_api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0&archetype=Alien',
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
        this.characters = response.data.data

      })
  }
}
//non ho capito bene come diminuire il numero di risultati con num e offset
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <div class="card" v-for="character in characters">
          <div v-for="items in character.card_images" class="cont-img">
            <img :src='items.image_url' alt="#">
          </div>
          <h3>{{ character.name }}</h3>
          <span>{{ character.archetype }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style ></style>
