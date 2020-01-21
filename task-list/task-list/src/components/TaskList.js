import React from "react";
import { TaskListItem } from "./TaskListItem";

function TaskList({ tasks = [], onComplete, onRemove }) {
  return tasks.map(task => (
    <TaskListItem
      key={task.id}
      task={task}
      onComplete={onComplete}
      onRemove={onRemove}
    />
  ));
}

export { TaskList };
