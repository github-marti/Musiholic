<template>
    <div class="card">
        {{ drink.strDrink }}
    </div>
</template>

<script>
import { globalState } from '../main'

export default {
    name: "DrinkCard",
    data() {
        return {
            drink: globalState.selectedDrink
        }
    }
}
</script>