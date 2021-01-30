import React from "react";
import gSpinner from "../../gifs&svg/dreamstime_xs_113020302.gif";
import "./spinner.style.scss";

const Spinner = ({ loading, children }) => {
  return loading ? (
    <div className="spinner-container">
      <img alt="spinner" src={gSpinner} />
    </div>
  ) : (
    children
  );
};

export default Spinner;
