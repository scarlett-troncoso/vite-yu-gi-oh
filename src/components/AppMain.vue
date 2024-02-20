<script>
import axios from 'axios';
import AppSelect from './AppSelect.vue';
import { state } from '../state.js';
export default {
    name: 'AppMain.vue',

    components: {
        AppSelect,
    },

    data() {
        return {
            state,
            //url_api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0', //https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0&archetype=Alien',
            // ↑↑↑ prima abbiamo lavorato con questo urls finche non abbiamo cambiato al altro creato in filterResults
            // characters: [], spostato in state.js
            types: [], //array di tutti archetype, senza essere ripetute
            selected: '', // per prendere il value della select deve sempre essere una stringa

        }
    },


    methods: {
        filterResults() {
            const urlFilter = `${state.url_api}&archetype=${this.selected}`

            console.log(urlFilter);

            state.searchCharacters(urlFilter)

            /// axios
            ///   .get(urlFilter)
            ///   .then(response => {
            /*
            console.log(response.data);
            console.log(response.data.data);
            console.log(response.data.data[0].name);*/
            ///      this.characters = response.data.data;
            /* PRIMA ERA COSI, NON GIUSTO ↓↓↓
                                const typeOfMap = this.characters.map(character => character.archetype);
                                this.types = [...new Set(typeOfMap)];
                                console.log(this.types);
                                if (this.selected) {
                                    this.characters = this.characters.filter((character) => {
                                        return character.archetype && character.archetype.includes(this.selected);
                                    });
                                }*/
            ///  })
            /// .catch(error => {
            ///  console.error(error);
            ///  })
        },

        searchArchetypes(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data);
                    this.types = response.data
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },

    mounted() {
        /* Get all archetypes */
        this.searchArchetypes('https://db.ygoprodeck.com/api/v7/archetypes.php');

        /* Get all cards */
        state.searchCharacters(state.url_api);
    },

    computed: {
        foundCards() {
            return state.characters ? 'Found: ' + state.characters.length + ' cards' : 'No found cards'
        }
    }

}

</script>

<template>
    <main>
        <div class="filters">
            <select id="archetypeId" placeholder="Archetype" v-model="selected" @change="filterResults">
                <!--Come si fa usare v-model con i props???-->
                <AppSelect :types="types"></AppSelect>
            </select>
        </div>

        <div class="container">
            <div class="found-cards">
                <h3>{{ foundCards }} </h3>
            </div>
            <div class="row">
                <div class="col-3" v-for="character in state.characters">
                    <div class="card">
                        <div class="cont-img">
                            <img :src='character.card_images[0].image_url' alt="#">
                        </div>
                        <div class="cont-text">
                            <h3>{{ character.name }}</h3>
                            <span>{{ character.archetype }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>



<style scoped>
.found-cards {
    background-color: #242424;
    color: var(--white-white);
    padding: 0.50rem;
    margin: 0 0.5rem;
}

.filters {
    width: 80%;
    margin: auto;
    padding: 1.75rem 1.25rem;

    &>select {
        padding: 0.5rem;
        border-radius: 5px;
        border-color: #8b8a8a;
    }
}

.row {
    /*
    margin: 0;
    display: flex;
    flex-wrap: wrap;*/

    & .card {
        background-color: var(--primary-orange);

        & .cont-img {
            & img {
                max-width: 100%;
            }
        }

        >.cont-text {
            text-align: center;
            padding: 1rem 0.25rem 1rem 0.25rem;
            height: 110px;

            >h3 {
                font-size: 1.25em;
                line-height: 1.40rem;
                margin-bottom: 0.75rem;
                color: white;
            }

            >span {
                color: #242424;
                font-size: large;

            }
        }


    }
}
</style>