import{Image,Preptime,Ingredients,Instructions,Nutrition} from './Prep.jsx';
let Recipe = () => {
    return(
        <div className="container">
            <Image/>
            <h1>Simple Omelette Recipe</h1>
        <p>An easy and quick dish, perfect for any meal. 
            This classic omelette combines beaten eggs cooked to perfection, 
            optionally filled with your choice of cheese, vegetables, or meats.</p>
            <Preptime/>
            <Ingredients/>
            <Instructions/>
            <Nutrition/>
        </div>
    )
}
export default Recipe;