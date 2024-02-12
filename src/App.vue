<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      url_api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0', //https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0&archetype=Alien',
      characters: [],
      types: [], //array di tutti archetype, senza essere ripetute
      selected: '', // per prendere il value della select deve sempre essere una stringa
    }
  },
  mounted() {
    this.getCards();
  },

  methods: {
    getCards() {
      axios
        .get(this.url_api)
        .then((response) => {
          /*
          console.log(response.data);
          console.log(response.data.data);
          console.log(response.data.data[0].name);*/
          this.characters = response.data.data
          console.log(this.characters);
          const typeOfMap = this.characters.map(character => character.archetype);
          this.types = [...new Set(typeOfMap)];
          console.log(this.types);

          if (this.selected) {
            this.characters = this.characters.filter((character) => {
              return character.archetype && character.archetype.includes(this.selected)
            });
          }
        })
    }
  }
}
</script>

<template>
  <main>
    <div class="container">
      <div class="filters">
        <!--<input type="" placeholder="Type a name to search">-->
        <select name="archetypeId" id="archetypeId" placeholder="Archetype" v-model="selected" @change="getCards">
          <option value="" selected>All</option>
          <option v-for="(type, index) in types" :value="type" :key="index"> {{ type }} </option>
        </select>

      </div>

      <div class="row">
        <div class="col-3">
          <div class="card" v-for="character in characters">
            <div class="cont-img">
              <img :src='character.card_images[0].image_url' alt="#">
            </div>
            <h3>{{ character.name }}</h3>
            <span>{{ character.archetype }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style ></style>
