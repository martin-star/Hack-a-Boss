import React from 'react';

function Field({ title, placeholder, id, type, value, onFieldChange }) {
  
  if (type === 'text') {
    return (
      <div className="form-group">
        <label>{title}</label>
        <input
          id={id}
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={e => onFieldChange(e.target.value)}
        />
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className="form-group">
        <label>{title}</label>
        <textarea
          id={id}
          type="text"
          className="form-control"
          placeholder={placeholder}
          rows={5}
          value={value}
          onChange={e => onFieldChange(e.target.value)}
        />
      </div>
    );
  }
}

export { Field };
