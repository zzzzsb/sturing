import Calendar from '@/components/(suwan)/my-study/common/Calendar';
import Todos from '@/components/(suwan)/my-study/my-todo/Todos';

import { studyMemberTodo } from '@/dummy/studyMemberTodo';

export default function MyTodoContainer() {
  return (
    <div className="bg-gray-100 w-full felx justify-center">
      <Calendar />
      <Todos todos={studyMemberTodo[0].todos} />
    </div>
  );
}
