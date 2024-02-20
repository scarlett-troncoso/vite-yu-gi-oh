<script>
import { state } from '../state.js';
export default {
    name: 'FoundCards',
    computed: {
        foundCards() {
            return state.characters ? 'Found: ' + state.characters.length + ' cards' : 'No found cards'
        }
    }
}
</script>

<template>
    <div class="found-cards container">
        <h3>{{ foundCards }} </h3> <!--potrebbe essere anche solo {{ state.characters.length }} -->
    </div>
</template>



<style scoped>
.found-cards {
    background-color: #242424;
    color: var(--white-white);
    padding: 0.50rem;
    margin: auto;
}
</style>