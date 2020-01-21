import React, { useState } from "react";
import { Field } from "./Field";

function Form({ onAddTask }) {
  const [fields, setFields] = useState({});

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onAddTask({
          title: fields.title,
          description: fields.description
        });
        setFields({ title: "", description: "" });
      }}
    >
      <Field
        id="title"
        type="text"
        title="Title"
        placeholder="Enter your title"
        value={fields.title}
        onFieldChange={title => setFields({ ...fields, title })}
      />
      <Field
        id="description"
        type="textarea"
        title="Description"
        placeholder="Enter your description"
        value={fields.description}
        onFieldChange={description => setFields({ ...fields, description })}
      />
      <button
        type="submit"
        className="btn btn-success"
        disabled={!fields.title || (fields.title && fields.title.length < 5)}
      >
        Add task
      </button>
    </form>
  );
}

export { Form };
