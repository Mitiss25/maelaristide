<template>
    <div class="c-skills" v-if="windowWidth>690">
        <div class="skill-item" v-for="(skill, index) in skills" :key="index">
            <p>{{ skill }}</p>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            windowWidth: window.innerWidth,
            noir: "#232121"
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
        skills: Array
    }
}
</script>

<style scoped lang="scss">
    .c-skills {
        display: flex;
        width: 616px;
        align-items: flex-end;
        align-content: flex-end;
        gap: 10px;
        flex-wrap: wrap;
        margin: 3rem 0;

        .skill-item {
            display: flex;
            padding: 10px 25px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 50px;
            border: 1px solid v-bind(noir);

            p {
                color: v-bind(noir);
                font-family: 'Inter', sans-serif;
                font-size: 1.5rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }
    }
</style>