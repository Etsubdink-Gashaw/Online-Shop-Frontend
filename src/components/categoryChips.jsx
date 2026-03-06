import ProductList from "./productlist";


export default function Chips ({categories, onSelectCategory, selectedCategory}){

    function handleClick(category){
        console.log("Clicked category:", category);
        onSelectCategory(category)
    }

    return(
        <div className="chips-container">
             {categories.map((category)=>(
                <div key={category} onClick={() => handleClick(category)} className={`chip ${selectedCategory === category ? "selected" : ""}`}>
                    {category}
                </div>
                
             ))}
        </div>
    )
}