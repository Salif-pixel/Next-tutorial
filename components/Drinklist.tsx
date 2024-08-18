import React from 'react';
import Link from "next/link";
import Image from "next/image";
type Drink = {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: string | null;
    strTags: string | null;
    strVideo: string | null;
    strCategory: string;
    strIBA: string | null;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string | null;
    strInstructionsES: string | null;
    strInstructionsDE: string | null;
    strInstructionsFR: string | null;
    strInstructionsIT: string | null;
    'strInstructionsZH-HANS': string | null;
    'strInstructionsZH-HANT': string | null;
    strDrinkThumb: string;
    strIngredient1: string | null;
    strIngredient2: string | null;
    strIngredient3: string | null;
    strIngredient4: string | null;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strIngredient7: string | null;
    strIngredient8: string | null;
    strIngredient9: string | null;
    strIngredient10: string | null;
    strIngredient11: string | null;
    strIngredient12: string | null;
    strIngredient13: string | null;
    strIngredient14: string | null;
    strIngredient15: string | null;
    strMeasure1: string | null;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
    strMeasure7: string | null;
    strMeasure8: string | null;
    strMeasure9: string | null;
    strMeasure10: string | null;
    strMeasure11: string | null;
    strMeasure12: string | null;
    strMeasure13: string | null;
    strMeasure14: string | null;
    strMeasure15: string | null;
    strImageSource: string | null;
    strImageAttribution: string | null;
    strCreativeCommonsConfirmed: string | null;
    dateModified: string | null;
};
type DrinklistProps = {
    drinks: Drink[];
};
const Drinklist: React.FC<DrinklistProps> = ({ drinks }) => {
    return (
        <ul className={`grid sm:grid-cols-2 gap-6 mt-6 pl-0`}>
            {drinks.map((drink) => (
                <li key={drink.idDrink}>
                    <Link href={`/drinks/${drink.idDrink}`} className={`text-xl font-bold`}>
                        <div className={`relative h-48 mb-4`}>
                            <Image src={drink.strDrinkThumb} fill sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw'  alt={drink.strDrink} className={`rounded-md object-cover`} />

                        </div>
                        {drink.strDrink}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Drinklist;