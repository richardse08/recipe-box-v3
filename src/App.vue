<template>
    <div id="app">
        <recipeComponent></recipeComponent>
    </div>
</template>

<script>
import './style.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import recipeComponent from './components/recipeComponent.vue';
import newRecipe from './components/newRecipe.vue';

export default {
    name: 'app',
    components: {
        recipeComponent,
        newRecipe
    }
}
</script>