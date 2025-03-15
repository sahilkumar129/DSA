/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  const suppliesSet = new Set(supplies),
    requiredSet = new Set(),
    ingredientsMap = new Map(recipes.map((r, i) => [r, ingredients[i]])),
    ans = [];
  for (let i = 0; i < recipes.length; i++) {
    if (helper(recipes[i], ingredientsMap, suppliesSet, requiredSet)) ans.push(recipes[i]);
  }
  return ans;
};

var helper = function (ingredient, ingredientsMap, suppliesSet, requiredSet) {
  if (requiredSet.has(ingredient)) return false;
  let returnVal = false;
  requiredSet.add(ingredient);
  const ingArr = ingredientsMap.get(ingredient) ?? [];
  for (const i of ingArr) {
    if (!suppliesSet.has(i)) {
      if (!helper(i, ingredientsMap, suppliesSet, requiredSet)) return false;
    }
    returnVal = true;
  }
  requiredSet.delete(ingredient);
  suppliesSet.add(ingredient);
  return returnVal;
};

const recipes = ["bread"],
  ingredients = [["yeast", "flour"]],
  supplies = ["yeast", "flour", "corn"];
console.log(recipes, ingredients, supplies);
