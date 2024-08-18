'use server';

import {prisma} from "@/utils/db";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {z} from "zod";
export const getAllTasks = async () => {
    return prisma.task.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });

}
export const createTask = async (formData: { get: (arg0: string) => any; }) => {
    const content = formData.get('content');
    await prisma.task.create({
        data: {
            content,
        },
    });
    revalidatePath('/tasks');
}
export const createTaskCustom = async (prevState:{ message: string },formData: { get: (arg0: string) => any; }): Promise<{ message: string }> => {
     await new Promise((resolve)=>setTimeout(resolve,1000));
    const content = formData.get('content');
    const Task  = z.object({
        content: z.string().min(5),
    });

    try {
        Task.parse({content});
        await prisma.task.create({
            data: {
                content,
            },
        });
        revalidatePath('/tasks');
        revalidatePath('/prisma-example');
        return {message:'success'};
    }catch (error){
        console.log(error)
        return {message:'error'};

    }

}
export const deleteTask = async (formData: { get: (arg0: string) => any; }) => {
    await new Promise((resolve)=>setTimeout(resolve,1000));
    const id = formData.get('id');
    await prisma.task.delete({
        where: {
            id,
        },
    });
    revalidatePath('/tasks');
    revalidatePath('/prisma-example');
}
export const getTask = async (id: any) => {
    return prisma.task.findUnique({
        where: {
            id,
        },
    });
}
export const editTask = async (formData: { get: (arg0: string) => any; }) => {
    const content = formData.get('content');
    const id = formData.get('id');
    const completed = formData.get('completed') ;
    await prisma.task.update({
        where: {
            id,
        },
        data: {
            content,
            completed:completed === 'on' ? true : false,
        },
    });
    redirect('/tasks')
    //revalidatePath('/tasks');
}