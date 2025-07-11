import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, favorites, handleFavorite }) {
    return (
        <div>
            <h2>Receitas</h2>
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isFavorite={favorites.includes(recipe.id)}
                    handleFavorite={handleFavorite}
                />
            ))}
        </div>
    );
}

export default RecipeList;
