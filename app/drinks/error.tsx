'use client'

import Link from "next/link";

const error=(error: any)=>{
    console.log(error);
    return (
        <section className="flex items-center h-screen p-16 bg-white ">
            <div className="container flex flex-col items-center ">
                <div className="flex flex-col gap-6 max-w-md text-center">
                    <h2 className="font-extrabold text-9xl text-gray-900 ">
                        <span className="sr-only">Error</span>404
                    </h2>
                        <p className="text-2xl md:text-3xl dark:text-gray-600">Sorry, we couldn't find this page.</p>
                    <Link href="/"
                       className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200">Back
                        to home</Link>
                </div>
            </div>
        </section>

)
    ;
}

export default error;