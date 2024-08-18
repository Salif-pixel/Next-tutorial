import React from 'react';
import Link from "next/link";
import Image from "next/image";
import drinkimg from "./drink.jpg";
type SingleDrinkPageProps = {
    params: {
        id: string;
    };
};
const url="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
const getSingledrink = async(id:string) =>{
    const res = await fetch(`${url}${id}`)
    if(!res.ok){
        throw new Error('Faildes to fetch a drink...')
    }
    const data =res.json()
    return data;
}
const SingleDrinkPage: React.FC<SingleDrinkPageProps> = async({ params }) => {
    const data = await getSingledrink(params.id);
   const title = data?.drinks[0].strDrink;
    const imgsrc = data?.drinks[0].strDrinkThumb;

    return (
        <div>
            <Link href="/drinks" className={`btn btn-primary mt-8 mb-12`}>Back to drinks</Link>
             <Image width={300} height={300} src={imgsrc} className={`w-48 h-48 rounded-lg shadow-lg mb-4`}  priority alt={title} />
            {/*<Image src={drinkimg} className={`w-48 h-48 rounded`}  alt={title} />*/}
            <h1 className={`text-4xl mb-8`}>{title}</h1>

        </div>
    );
};

export default SingleDrinkPage;