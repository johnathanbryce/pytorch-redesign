import React from "react";
import Card from "./Card";

function ContentCard(props) {
  /* PyTorch & Your OS Display */
  if (props.title === "PyTorch" || props.title === "YourOS") {
    return (
      <Card>
        <h2> {props.title} </h2>
        <button onClick={props.clickHandler}> {props.option1}</button>
        <button onClick={props.clickHandler}> {props.option2}</button>
        <button onClick={props.clickHandler}> {props.option3}</button>
      </Card>
    );
  }

  /* Package & Compute Platform Display */
  if (props.title === "Package" || props.title === "Compute Platform") {
    return (
      <Card>
        <h2> {props.title} </h2>
        <button onClick={props.clickHandler}> {props.option1}</button>
        <button onClick={props.clickHandler}> {props.option2}</button>
        <button onClick={props.clickHandler}> {props.option3}</button>
        <button onClick={props.clickHandler}> {props.option4}</button>
      </Card>
    );
  }

  /* Language Display */
  if (props.title === "Language") {
    return (
      <Card>
        <h2> {props.title} </h2>
        <button onClick={props.clickHandler}> {props.option1}</button>
        <button onClick={props.clickHandler}> {props.option2}</button>
      </Card>
    );
  }

  /* Run This Command  Display */
  if (props.title === "Run This Command") {
    return (
      <Card>
        <h2> {props.title} </h2>
        <code> {props.command} </code>
        <button onClick={props.clickHandler} class="rtc-return-btn">
          Return to Start of Installer Guide
        </button>
      </Card>
    );
  }
}

export default ContentCard;
