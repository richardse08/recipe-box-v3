<template>
    <div class="recipeComponent">
        <div class="recipe__block" v-for="(item, key) in recipes">
            <p>Recipe: {{ item.recipe }}</p>
            <p>Ingredient: {{ item.ingredient }}</p>
            <button v-on:click="deleteRecipe(key)" type="button" class="btn btn-danger">Delete Recipe</button>
            <button v-on:click="editRecipe(key)" type="button" class="btn btn-primary">Edit Recipe</button>
        </div>
        <button v-on:click="toggleModal" class="btn btn-primary">add a recipe</button>
        <newRecipe
            :isActive="showModal"
            :recipe="showRecipe"
            :ingredient="showIngredient"
            @recipe-added="addNewRecipe($event)"
        ></newRecipe>
    </div>
</template>





<script>
    
import newRecipe from './newRecipe.vue'

export default {
    components: {
        newRecipe
    },
    data() {
        return {
            recipes: [
                {
                    recipe: 'Pizza',
                    ingredient: 'Cheese, pepperoni, sauce'
                },
                {
                    recipe: 'Salad',
                    ingredient: 'Lettuce, tomatos, dressing'
                }
            ],
            showModal: false,
            showRecipe: null,
            showIngredient: null
        }
    },
    methods: {
        editRecipe(key) {
            // target will get the name of the recipe/ingredient of THIS that was clicked
            let target = this.recipes[key];
            this.showRecipe = target.recipe;
            this.showIngredient = target.ingredient;
            this.toggleModal();
            this.recipes.splice(key, 1);
        },
        addNewRecipe(event) {
            let newRecipe = {
                recipe: recipe.value,
                ingredient: ingredient.value
            }
            this.recipes.push(newRecipe);
            this.toggleModal();
            this.clearForm();
        },
        clearForm() {
            this.showRecipe = null;
            this.showIngredient = null
        },
        deleteRecipe(key) {
            this.recipes.splice(key, 1);
        },
        toggleModal() {
            this.showModal = !this.showModal;
        },
        toggleEditor() {
            this.isEditorOn = !this.isEditorOn;
            console.log(this.isEditorOn);
        }
    }
}


</script>

