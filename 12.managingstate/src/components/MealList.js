import { useMealListContext } from "../providers/MealsProviders";

const MealList = () =>{
    const {meals} = useMealListContext();

    return(
    <div>
        <h1>Meal List using Context API</h1>
        {meals.map((meal, index) =>(
            <h2 key={index}>{meal}</h2>
        ))}
    </div>
    );
}

export default MealList;