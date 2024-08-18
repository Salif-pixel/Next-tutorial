import {prisma} from  '@/utils/db'
import React from "react";

const prismaHandlers = async()=>{
    console.log('prismaexample')

    const allTasks = await prisma.task.findMany({
        orderBy:{
            createdAt:'desc',
        }
    });
    return allTasks;
}
const PrismaExample= async()=> {
    const tasks = await prismaHandlers();
    if(tasks.length === 0){
        return <h2 className={`mt-8 font-medium text-lg`}>
            No tasks to show...
        </h2>
    }
    return (
        <div >
            <h1 className={`text-7xl`}>PrismaExample</h1>
            {tasks.map((task)=>(

                    <h2 key={task.id}>{task.content}</h2>

            ))}
        </div>
    );
}
export  default PrismaExample;
