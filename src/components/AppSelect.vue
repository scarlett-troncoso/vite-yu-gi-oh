
<script>
import { state } from '../state';
export default {
    name: 'AppSelect',
    emits: ['filter'],
    data() {
        return {
            state
        }
    },
    created() {
        this.state.searchArchetypes('https://db.ygoprodeck.com/api/v7/archetypes.php')
    }
    /*
    props: {
        types: Array,
    }*/
}
</script>

<template>
    <select id="archetypeId" placeholder="Archetype" v-model="state.selected" @change="$emit('filter')">
        <!--prima era @change="filterResults" quando era in AppMain-->
        <!--Come si fa usare v-model con i props???-->
        <!-- <AppSelect :types="types"></AppSelect> -->
        <option value="" selected>All</option>
        <option :value="type.archetype_name" v-for="( type ) in state.types "> {{ type.archetype_name }}
        </option>

    </select>

    <!-- PRIMA ERA COSI QUANDO ERA TUTTO IN APPMAIN
   <option value="" selected>All</option>
    <option v-for="(  type, index  ) in   types  " :value="type.archetype_name" :key="index"> {{ type.archetype_name }}
    </option> -->
</template>


<style scoped></style>