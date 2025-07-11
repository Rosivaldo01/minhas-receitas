import { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import Favorites from "./components/Favorites";
import recipesData from "./data/recipes";
import Header from "./components/Header";



function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (id) => {
    setFavorites((prev) =>
        prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const filteredRecipes = recipesData.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <>
            <Header />
            <div className="App">
                <div className="section">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>

                <div className="section">
                    <Favorites
                        recipes={recipesData}
                        favorites={favorites}
                        handleFavorite={handleFavorite}
                    />
                </div>

                <div className="section">
                    <RecipeList
                        recipes={filteredRecipes}
                        favorites={favorites}
                        handleFavorite={handleFavorite}
                    />
                </div>
            </div>
        </>
    );

}

export default App;
