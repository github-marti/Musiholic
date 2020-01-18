<template>
    <div class="instructions-card card mx-auto quicksand">
        <h4>Instructions</h4>
        {{ instructions }}
    </div>
</template>

<script>
export default {
    name: "InstructionsCard",
    props: [ 'instructions' ]
}
</script>

<style>
    .instructions-card {
        border-style: none;
        background: black;
        margin: 10px 0;
        color: #4dd5be;
        width: 80%
    }
</style>