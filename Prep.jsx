let Image = () =>{
    return(
        <div>
            <img src='/download.jpg' alt="Omelette" className="header-img"/>
        </div>
    )
}
let Preptime = () =>{
    return(
        <div className="section highlight">
        <h2>Preparation time</h2>
        <p><strong>Total:</strong> Approximately 10 minutes</p>
        <p><strong>Preparation:</strong> 5 minutes</p>
        <p><strong>Cooking:</strong> 5 minutes</p>
        </div> 
    )
}
let Ingredients =()=>{
    return(
        <div className="section">
            <h2>Ingredients</h2>
            <ul>
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
        </div>
    )
}
let Instructions =()=>{
    return(
        <div className="section">
        <h2>Instructions</h2>
        <ol>
            <li><strong>Beat the eggs:</strong> In a bowl, beat the eggs with salt and pepper until well mixed. You can add water or milk for a fluffier texture.</li>
            <li><strong>Heat the pan:</strong> Use a non-stick frying pan over medium heat and add butter or oil.</li>
            <li><strong>Cook the omelette:</strong> Pour in the eggs and tilt the pan to spread them evenly.</li>
            <li><strong>Add fillings (optional):</strong> Once the eggs begin to set but are slightly runny, add your desired fillings on one half of the omelette.</li>
            <li><strong>Fold and serve:</strong> Carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide onto a plate.</li>
            <li><strong>Enjoy:</strong> Serve hot with additional seasoning if needed.</li>
        </ol>
    </div>
    )
}
let Nutrition = ()=>{
    return(
        <div class="section">
            <h2>Nutrition</h2>
            <table class="nutrition">
                <tr>
                    <th>Calories</th>
                    <td>277kcal</td>
                </tr>
                <tr>
                    <th>Carbs</th>
                    <td>0g</td>
                </tr>
                <tr>
                    <th>Protein</th>
                    <td>20g</td>
                </tr>
                <tr>
                    <th>Fat</th>
                    <td>22g</td>
                </tr>
            </table>
        </div>
    )
}
export{Image,Preptime,Ingredients,Instructions,Nutrition};
