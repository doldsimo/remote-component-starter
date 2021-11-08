import React from "react";

export const App = ({ type }) => {
  return (
    <div style={{backgroundColor: "red", height: "200px", width:"100%"}} className={type}></div>
  );
};
