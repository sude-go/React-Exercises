import { useMealListContext } from "../providers/MealsProviders";

const Counter = () => {

    const { meals} = useMealListContext();
    return (
        <div>
            <h3>Number of meals today: {meals.length}</h3>
        </div>
    );
}

export default Counter;