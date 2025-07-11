function RecipeCard({ recipe, isFavorite, handleFavorite }) {
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => handleFavorite(recipe.id)}>
                {isFavorite ? "★ Favorito" : "☆ Favoritar"}
            </button>
        </div>
    );
}

export default RecipeCard;
