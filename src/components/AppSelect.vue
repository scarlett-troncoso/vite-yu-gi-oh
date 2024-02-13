
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
    <option v-for="(  type, index  ) in   types  " :value="type" :key="index"> {{ type }} </option>
</template>


<style scoped></style>