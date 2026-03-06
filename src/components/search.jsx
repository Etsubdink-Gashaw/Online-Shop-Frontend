export default function SearchBar({setSearch}) {
  return (
    <div className="search-bar">
      <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search products..." />
      <button >Search</button>
    </div>
  );
}