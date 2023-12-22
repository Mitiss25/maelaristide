<template>

    <div class="projetItem">
        <div class="c-image">
            <img :src="url" alt="image du projet"/>
        </div>
        <div class="s-container" v-if="windowWidth <= 690">
            <div class="col1">
                <p>{{ nom }}</p>
                <p>{{ contexte }}</p>
            </div>
            <div class="col2">
                <p v-for="(skill, index) in skills" :key="index">{{ skill }}</p>
            </div>
        </div>
        <div class="sl-container" v-if="windowWidth > 690">
            <div class="lg-col1">
                <div class="sm-col1">
                    <p class="top">{{ nom }}</p>
                    <div class="array">
                        <p v-for="(detail, index) in details" :key="index">{{ detail }}</p>
                    </div>
                </div>
                <div class="sm-col2">
                    <p class="top">{{ contexte }}</p>
                    <div class="array">
                        <p v-for="(skill, index) in skills" :key="index">{{ skill }}</p>
                    </div>
                </div>
            </div>
            <div class="lg-col2">
                <p>{{ date }}</p>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data(){

        return {
            windowWidth: window.innerWidth,
            noir: '#232121',
            blanc: '#F4F3EF'
        }
    }, 

    mounted() {
        window.addEventListener('resize', this.handleResize);
    },

    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        }
    },
    props: {
        url: String,
        nom: String,
        contexte: String,
        skills: Array,
        details: Array,
        date: String

    }
}

</script>

<style scoped lang="scss">

    p {
        font-size: .8rem;
        color: v-bind(noir);
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 2px;
    }
    .projetItem {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
        margin-bottom: 62px;
        .c-image {
            width: 100%;
            height: 600px;

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        .s-container {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            gap: 45px;

            .col1, .col2 {
                display: block;
            }
        }

        .sl-container{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            .lg-col1 {
                display: flex;
                align-items: flex-start;
                gap: 20vw;

                .top {
                    margin-bottom: 65px;
                }
            }
        }
    }

    @media screen and (min-width: 1400px){
        .projetItem .sl-container .lg-col1 .sm-col1, .projetItem .sl-container .lg-col1 .sm-col2 {
            display: flex;
            flex-direction: row;
            gap: 10vw;
        }

        .projetItem .image {
            height: 70dvh;
        }
    }
</style>