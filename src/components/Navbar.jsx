import SearchBar from "./search";

export function Navbar({setSearch}) {
  return (
    <nav className="nav">
      <a href="/" className="nav-link">Home</a>
      <a href="/categories" className="nav-link">Explore</a>
      <a href="/cart" className="nav-link">Cart</a>
      <SearchBar setSearch={setSearch} />
    </nav>
  );
}