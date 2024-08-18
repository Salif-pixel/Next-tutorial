import React from 'react';
import {editTask} from "@/utils/actions";



const EditForm = ({task}:any) => {
    const {id,completed,content} = task;
    return (
        <form action={editTask} className={`max-w-sm p-12 border border-base-300 mt-8 rounded-lg`}>
            <input type={'hidden'} name={'id'} value={id}/>
            <input type={'text'} name={'content'} defaultValue={content} className={`input input-bordered w-full`} required/>
            <div className={`form-control`}>
                <label htmlFor={`completed`} className={`label cursor-pointer`}>
                    <span className={`label-text`}>completed</span>
                    <input type={'checkbox'} name={'completed'} id={`completed`} defaultChecked={completed}
                           className={`checkbox checkbox-primary checkbox-sm`}/>

                </label>
            </div>
            <button type={'submit'} className={`btn btn-primary btn-block btn-sm`}>
                update
            </button>
        </form>
    );
};

export default EditForm;