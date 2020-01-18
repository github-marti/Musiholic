<template>
    <div>
        <h3>{{ ingredients }}</h3>
    </div>
</template>

<script>
export default {
    name: "IngredientsCard",
    props: ["ingredients"]
}
</script>