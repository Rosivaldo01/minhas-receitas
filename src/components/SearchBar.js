function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <input
            type="text"
            placeholder="Pesquisar receitas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SearchBar;
