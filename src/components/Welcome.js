import React from "react";

function Welcome(props) {
  const menu = () => {
    props.history.push("/menu");
  };
  return (
    <div>
      <h1>WELCOME</h1>
      <button onClick={menu} className="btn bg-primary"> MENU'S</button>
    </div>
  );
}

export default Welcome;
