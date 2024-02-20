<script>
import CardItem from './CardItem.vue';
export default {
    name: 'AppCards',
    props: {
        characters: Array,
    },
    components: {
        CardItem,
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-3" v-for="character in characters">
                <CardItem :character="character"></CardItem>

            </div>
        </div>
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