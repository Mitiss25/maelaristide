<template>
    <div class="headerItem">
        <div class="s-container" v-if="windowWidth > 690">
            <div class="s-ligne1">
                <p>Maël Aristide</p>
                <p>Créateur indépendant</p>
            </div>
            <div class="s-ligne2">
                <div class="ss-container1">
                    <a href="#">Travaux</a>
                    <a href="#">à propos de moi</a>
                    <a href="#">Me contacter</a>
                </div>
                <div class="ss-container2">
                    <a href="#">Twitter</a>
                    <a href="#">Github</a>
                    <a href="#">Instagram</a>
                    <a href="#">Dribble</a>
                </div>
            </div>
        </div>
        <svg id="svgMenu" v-if="windowWidth <= 690" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="square" class="feather feather-menu"><line x1="3" y1="10" x2="21" y2="10"></line><line x1="3" y1="6" x2="12" y2="6"></line></svg>
        <p>Paris, France</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            noir: '#232121',
            blanc: '#F4F3EF'
        };
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
    }
}
   
</script>

<style scoped lang="scss">

    p, a {
        font-size: .8rem;
    }

    .headerItem {

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2dvh 1rem 0 1rem;

        .s-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 50px;

            .s-ligne1 {
                display: flex;
                justify-content: space-between;
                width: 464px;
                align-items: flex-start;
                gap: 50px;

                p {
                    color: v-bind(noir);
                    font-family: 'Inter', sans-serif;
                    font-weight: 700;
                    text-transform: uppercase;
                }
            }

            .s-ligne2 {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                width: 378px;

                .ss-container1, .ss-container2 {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 5px;

                    a {
                        color: v-bind(noir);
                        font-family: 'Inter', sans-serif;
                        font-weight: 700;
                        text-decoration: none;
                        text-transform: uppercase;
                    }
                }
            }
        }

        p {
            text-align: right;
            text-transform: uppercase;
            font-family: 'Inter', sans-serif;
            margin: 0;
            font-weight: 700;
        }
    }

    @media screen and (min-width: 1400px){
        .headerItem .s-container {
            flex-direction: row;
            gap: 17rem;
            align-items: flex-start;
        }
    }

    @media screen and (min-width: 690px) {
        .headerItem {
            align-items: flex-start;
        }
    }

    
</style>