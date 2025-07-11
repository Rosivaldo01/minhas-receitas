function Favorites({ recipes, favorites, handleFavorite }) {
    const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

    return (
        <div>
            <h2>Meus Favoritos</h2>
            {favoriteRecipes.length === 0 && <p>Nenhuma receita favorita.</p>}
            {favoriteRecipes.map((recipe) => (
                <div key={recipe.id} style={{ border: "1px dashed pink",
                    margin: "5px",
                    padding: "5px", backgroundColor:"#ff914d"}}>
                    <h4>{recipe.title}</h4>
                    <button onClick={() => handleFavorite(recipe.id)}>Remover Favorito</button>
                </div>
            ))}
        </div>
    );
}

export default Favorites;
