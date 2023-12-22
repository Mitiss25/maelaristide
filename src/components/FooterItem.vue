<template>
    <div class="c-footer">
        <div class="col-1">
            <a href="#">twitter</a>
            <a href="#">github</a>
            <a href="#">instagram</a>
            <a href="#">dribble</a>
        </div>
        <div class="col-2">
            <p>paris, France</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                noir: '#232121',
                blanc: '#F4F3EF'
            }
        }
    }
</script>

<style scoped lang="scss">
a, p {
    color: v-bind(noir);
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    text-transform: uppercase;
}

.c-footer {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;

    .col-1 {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 5px;
    }

    .col-2 p {
        text-align: right;
    }
}
</style>