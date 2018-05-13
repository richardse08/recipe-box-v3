# recipe-box
Made with VueJS

TODO
* 1) Open prefilled form if edit recipe is clicked -- DONE
* 2) Open blank form if add a recipe is clicked -- DONE
* 3) If form has prefilled text, change that item in array and show it
* 4) If form doesn't have prefilled text, add a new item to the list

ISSUES
* only issue now is that edit recipe still needs to
* in comp B, addRecipe, you can fire this.$emit('recipe-added') without passing in the sentRecipe var


STATUS
* data is getting to the array
* new recipes are being added to array with text
* still need to replace array item when edit is used
* created clearForm() to make sure there were no recipes in the form unless editRecipe was hit