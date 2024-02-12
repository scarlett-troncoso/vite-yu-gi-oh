<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      url_api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0', //https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0&archetype=Alien',
      characters: [],
      types: [],
    }
  },
  mounted() {
    console.log((this.url_api));

    axios
      .get(this.url_api)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.data);
        console.log(response.data.data[0].name);
        this.characters = response.data.data

        const typeOfMap = this.characters.map(character => character.archetype);
        this.types = [...new Set(typeOfMap)];
        console.log(this.types);

      })
  },


  methods:
  {
    filterArchetype(arrayDati, type) {
      if (!type) return this.arrayDati;
      return this.arrayDati.filter((dato) => dato.archetype.includes(type))
    },
  },
  /*
    created() {
      const typeId = document.getElementById('archetypeId');
      const type = typeId.value;
      this.filterArchetype(this.characters, type)
    }*/

}
</script>

<template>
  <main>
    <div class="container">
      <div class="filters">
        <!--<input type="" placeholder="Type a name to search">-->
        <select name="archetypeId" id="archetypeId" placeholder="Archetype">
          <option value="" selected>All</option>
          <option :value="types" v-for="type in types"> {{ type }}</option>
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
