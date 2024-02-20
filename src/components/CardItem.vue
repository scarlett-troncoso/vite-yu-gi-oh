<script>
export default {
    name: 'CardItem',
    props: {
        character: Object,
    }
}
</script>

<template>
    <div class="card">
        <div class="cont-img">
            <img :src='character.card_images[0].image_url' alt="#">
        </div>
        <div class="cont-text">
            <h3>{{ character.name }}</h3>
            <span>{{ character.archetype }}</span>
        </div>
    </div>
</template>

<style scoped>
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
</style>