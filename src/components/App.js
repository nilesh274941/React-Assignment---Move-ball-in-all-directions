import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
	const [showBall,setShowBall] = useState(false);
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const moveBall = (evt) => {
	if(showBall)
	{
		let newX=x;
		let newY=y;
		if(evt.keyCode===39) {
			newX=x+5;
		}
		else if(evt.keyCode===40) {
			newY=y+5;
		}
		else if(evt.keyCode===38){
			newY=y-5;
		}
		else if(evt.keyCode===37) {
			newX=x-5;
		}
		else return;
		if(newX!=x)
		{
			setX(newX);			
			setBallPosition({
				left: newX+"px",
			});		
			return;
		}
		if(newY!=y)
		{
			setY(newY);
			setBallPosition({
				top: newY+"px",
			});			
		}
	}
 };
  document.addEventListener("keydown",moveBall);
  const reset = () => {
	setShowBall(false);
	setX(0);
	setY(0);
	setBallPosition({
    left: "0px",
    top: "0px",
  });
  };
  const startClicked = () => {
	setShowBall(true);
  };
  const renderChoice = () => {
	if(showBall) {
		return (<div className="ball" style={ballPosition}></div>);
	}
	else {
		return (<button className="start" onClick={startClicked}>Start</button>);
	}
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
