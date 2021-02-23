import React from "react";

/* Alert helper provided for invalid form submission 
    in Login, Signup, and Profile */
function Alert({ type = "danger", messages = [] }) {

  return (
      <div className={`alert alert-${type}`} role="alert">
        {messages.map(error => (
            <p className="mb-0 small" key={error}>
              {error}
            </p>
        ))}
      </div>
  );
}

export default Alert;