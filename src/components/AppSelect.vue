
<script>
export default {
    name: 'AppSelect',
    props: {
        types: Array,
    }
}
</script>

<template>
    <option value="" selected>All</option>
    <option v-for="(  type, index  ) in   types  " :value="type.archetype_name" :key="index"> {{ type.archetype_name }}
    </option>
</template>


<style scoped></style>