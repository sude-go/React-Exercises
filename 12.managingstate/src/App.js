import MealsProvider from "./providers/MealsProviders";
import MealList from "./components/MealList";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <MealsProvider>
        <MealList/>
        <Counter/>
      </MealsProvider>
    </div>
    
  );
}

export default App;
