import Drinklist from "@/components/Drinklist";

const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
 const fetchDrinks = async () => {
    await new Promise((resolve)=>setTimeout(resolve,1000));
     const response = await fetch(url);
     // throw error
     if(!response.ok) {
     throw new Error('Something went wrong while fetching');
     }
     const data = await response.json();
     return data;
 }
const DrinksPage =async()=> {
    const data = await  fetchDrinks();

    return (
        <div >
            <Drinklist drinks={data.drinks}/>
        </div>
    );
}
export default DrinksPage;