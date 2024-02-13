<script>
export default {
    name: 'AppHeader.vue',

    data() {
        return {
            logo: "https://images.ygoprodeck.com/images/assets/ygoprodeck_header_logo.png?v=1.13",
        }
    },
}
</script>

<template>
    <header>
        <div class="contLogoTitle">
            <img :src="logo" alt="ygoprodeck.com Logo">
            <span>Yu-Gi-Oh Api</span>
        </div>
    </header>
</template>



<style scoped>
header {
    background-color: var(--white-white);

    >.contLogoTitle {
        padding: 1.5rem;
        font-size: xx-large;
        vertical-align: middle;

        >img {
            margin-right: 1rem;
            height: 100%;
        }

        >span {
            line-height: 36px;
        }
    }

}
</style>