import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    /* Reactive object - global state */
    url_api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0',
    characters: [],

    types: [], //array di tutti archetype, senza essere ripetute
    selected: '', // per prendere il value della select deve sempre essere una stringa
    loading: true,

    searchCharacters(url) { //portato da Main
        axios
            .get(url) //this.url_api //prima di spostarlo in methods era cosi
            .then(response => {
                /*
                console.log(response.data);
                console.log(response.data.data);
                console.log(response.data.data[0].name);*/
                this.characters = response.data.data;
                /* PRIMA ERA COSI, NON GIUSTO ↓↓↓
                                    const typeOfMap = this.characters.map(character => character.archetype);
                                    this.types = [...new Set(typeOfMap)];
                                    console.log(this.types);
                                    if (this.selected) {
                                        this.characters = this.characters.filter((character) => {
                                            return character.archetype && character.archetype.includes(this.selected);
                                        });
                                    }*/
                this.loading = false;
            })
            .catch(error => {
                console.error(error);
            });
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
})