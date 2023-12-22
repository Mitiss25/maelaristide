<template>
    <div class="titreMael">
        <h1>Mael</h1><span>©</span>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                noir: '#232121',
                blanc: '#F4F3EF'
            }
        }
    }
</script>

<style scoped lang="scss">

.titreMael {

    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 5px;
    width: 100%;

    h1 {
        font-family: 'Kihim', sans-serif;
        font-size: 33vw;
        color: v-bind(noir);
        margin: 0;
        text-transform: uppercase;
        font-weight: 400;
    }

    span {
        color: v-bind(noir);
        font-family: Inter;
        font-size: 1.28rem;
        font-weight: 400;
        padding-bottom: 1.5rem;
    }
}

@media screen and (min-width: 690px) {
    .titreMael {
        h1 {
            font-size: 36vw;
        }
        span {
            font-size: 2rem;
            padding-bottom: 6vw;
        }
    }
}

@media screen and (min-width: 1400px) {
    .titreMael {
        h1 {
            font-size: 34vw;
        }
    }
}

</style>