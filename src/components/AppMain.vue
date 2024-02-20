<script>
import axios from 'axios';
import AppSelect from './AppSelect.vue';
import AppCards from './AppCards.vue';
import { state } from '../state.js';
export default {
    name: 'AppMain.vue',

    components: {
        AppSelect,
        AppCards,
    },

    data() {
        return {
            state,
            //url_api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0', //https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0&archetype=Alien',
            // ↑↑↑ prima abbiamo lavorato con questo urls finche non abbiamo cambiato al altro creato in filterResults
            // characters: [], spostato in state.js
            // types: [], //array di tutti archetype, senza essere ripetute //spostato in state.js
            // selected: '', // per prendere il value della select deve sempre essere una stringa //spostato in state.js

        }
    },


    methods: {
        filterResults() {
            let urlFilter;
            console.log(urlFilter);

            if (state.selected === '') {
                urlFilter = state.url_api;
            } else {
                urlFilter = `${state.url_api}&archetype=${state.selected}`
            }

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
        /* SPOSTATO IN STATE.JS
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
                },*/
    },

    mounted() {
        /* Get all archetypes */
        // this.searchArchetypes('https://db.ygoprodeck.com/api/v7/archetypes.php'); //spostato in created di altro componente AppSelect

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
            <AppSelect @filter="filterResults"></AppSelect>
        </div>

        <div class="found-cards container">
            <h3>{{ foundCards }} </h3> <!--potrebbe essere anche solo {{ state.characters.length }} -->
        </div>

        <AppCards :characters="state.characters"></AppCards>

    </main>
</template>



<style scoped>
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

.found-cards {
    background-color: #242424;
    color: var(--white-white);
    padding: 0.50rem;
    margin: auto;
}
</style>