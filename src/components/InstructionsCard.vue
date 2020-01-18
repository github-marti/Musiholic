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
        width: 80%
    }
</style>