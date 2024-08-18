
import TaskList from "@/components/TaskList";
import TaskformCustom from "@/components/TaskformCustom";
export const dynamic = 'force-dynamic';
export default function TasksPage() {
    return (
        <div className={`max-w-lg`} >
            <TaskformCustom/>
            <TaskList/>
        </div>
    );
}
