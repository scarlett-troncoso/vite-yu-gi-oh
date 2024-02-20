<script>
import CardItem from './CardItem.vue';
import Loader from './Loader.vue';
import { state } from '../state.js';
export default {
    name: 'AppCards',
    props: {
        characters: Array,
    },
    components: {
        CardItem,
        Loader,
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row" v-if="!state.loading">
            <div class="col-3" v-for="character in characters">
                <CardItem :character="character"></CardItem>
            </div>
        </div>
        <Loader v-else></Loader>
    </div>
</template>

<style scoped>
.row {
    /*
    margin: 0;
    display: flex;
    flex-wrap: wrap;*/
}
</style>