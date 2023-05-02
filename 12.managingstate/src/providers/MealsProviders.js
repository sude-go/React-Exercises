import React from "react";

const MealsContext = React.createContext();

// createContext();

const todaysMeals = ["Baked Beans","Baked Sweet Patotes","Baked Potatoes"];
const MealsProvider = ({children}) => {
    const [meals, setMealsList] = React.useState(todaysMeals)
    
    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealListContext = () => React.useContext(MealsContext);

export default MealsProvider;