import classes from "./TextInfo.module.css";
import React from "react";
const TextInfo = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className={classes.container}>
        <h3 className={classes.heading}>{props.heading}</h3>
        <h1 className={classes.subheading}>{props.subheading}</h1>
        <div className={classes.description}>{props.description}</div>
      </div>
    </>
  );
});

export default TextInfo;
