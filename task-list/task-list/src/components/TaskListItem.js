import React from "react";

function TaskListItem({ task, onComplete, onRemove }) {
  return (
    <div className="card mt-3">
      <h5 className="card-header">{task.title}</h5>
      <div className="card-body">
        <p className="card-text">{task.description}</p>
        <p className="card-text">
          <span className="badge badge-primary">1 hour ago</span>
        </p>

        {!task.completed && (
          <a
            className="btn btn-outline-success"
            onClick={() => onComplete(task.id)}
          >
            Complete
          </a>
        )}
        <a
          className="btn btn-outline-danger ml-2"
          onClick={() => onRemove(task.id)}
        >
          Remove
        </a>
      </div>
    </div>
  );
}

export { TaskListItem };
