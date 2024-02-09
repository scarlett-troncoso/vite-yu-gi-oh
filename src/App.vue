<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      url_api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0', //https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0&archetype=Alien',
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
        console.log(response.data.data[0].name);
        this.characters = response.data.data

      })
  }
}
</script>

<template>
  <main>
    <div class="container">
      <div class="filters">
        <!--<input type="" placeholder="Type a name to search">-->
        <select name="archetipo" id="archetipo">
          <option value="all" selected>All</option>
          <option value="alien">alien</option>
          <option value="Infernoble Arms">Infernoble Arms</option>
          <option value="Noble Knight
">Noble Knight</option>
        </select>
      </div>
      <div class="row">
        <div class="col-3">
          <div class="card" v-for="character in characters">
            <!-- COSI HO FATTO PRIMA MA NON ERA GIUSTO
            <div v-for="items in character.card_images" class="cont-img">
              <img :src='items.image_url' alt="#">
            </div>-->
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
