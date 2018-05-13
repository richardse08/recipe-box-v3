import './style.css';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

Vue.component('recipe-component', {
    template: `
    <div class="recipe-component">
        <!-- including (item, key) so we know postion, other wise would use just item without parenthesis -->
        <div class="recipe__block" v-for="(item, key) in recipes">
            <p>Recipe: {{ item.recipe }}</p>
            <p>Ingredient: {{ item.ingredient }}</p>
            <button v-on:click="deleteRecipe(key)" type="button" class="btn btn-danger">Delete Recipe</button>
            <button v-on:click="editRecipe(key)" type="button" class="btn btn-primary">Edit Recipe</button>
        </div>
        <button v-on:click="toggleModal" class="btn btn-primary">add a recipe</button>
        <new-recipe
            :isActive="showModal"
            :recipe="showRecipe"
            :ingredient="showIngredient"
            @recipe-added="addNewRecipe($event)"
        ></new-recipe>
    </div>
    `,
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
})




Vue.component('new-recipe', {
    template: `
    <div>
        <form class="recipe-form" v-if="isActive" v-on:submit.prevent>
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <p>
                                <label for="recipe">Recipe:</label>
                                <input id="recipe" :value="recipe">
                            </p>
                            <p>
                                <label for="ingredient">Ingredients:</label>
                                <textarea id="ingredient" :value="ingredient"></textarea>
                            </p>
                            <p>
                                <button v-on:click="addRecipe()" class="button">Add New Recipe</button>
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
        </form>
    </div>
    `,
    props: ['isActive', 'recipe', 'ingredient'],
    data: function() {
        return {

        }
    },
    methods: {
        addRecipe() {
            this.$emit('recipe-added');
        }
    }
})




var app = new Vue({
    el: '#app'
})
