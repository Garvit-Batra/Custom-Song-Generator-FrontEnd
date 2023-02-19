import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-light btn-sm my-2"
        onClick={props.handleClick}
        disabled={!props.formValid}
      >
        {props.title}
      </button>
    </div>
  );
}
