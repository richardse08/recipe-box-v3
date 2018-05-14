<template>
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
</template>



<script>
export default {
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
}
</script>



