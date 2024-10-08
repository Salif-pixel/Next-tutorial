'use client';
import {useState} from "react";


export default function ClientPage() {
    const [count,setCount] = useState(0);
    return (
        <div>
            <h1 className={`text-7xl font-bold mb-4`}>{count}</h1>
            <div className={`flex flex-row mx-auto justify-evenly`}>
                <button className={`btn btn-primary`} onClick={() => setCount(count + 1)}>
                    increase
                </button>
                <button className={`btn btn-primary`} onClick={() => setCount(count - 1)}>
                    decrease
                </button>
            </div>
        </div>
    );
}
