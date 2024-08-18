'use client';
import React from 'react';
import {useFormStatus} from "react-dom";
import {deleteTask} from "@/utils/actions";
interface DeleteFormProps {
    id?: string
}
const SubmitBtn = () => {
    const {pending}=useFormStatus();
    return (
        <button type={'submit'} className={`btn btn-error btn-xs`} disabled={pending}>
            {pending ? 'pending...' : 'delete'}
        </button>
    );
}
const DeleteForm = ({id}: DeleteFormProps) => {
    return (
        <form action={deleteTask}>
<input type={'hidden'} name={'id'} value={id}/>
<SubmitBtn />
        </form>
    );
};

export default DeleteForm;