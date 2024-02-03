import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Questions = (props) => {
  const [showAnswer, ChangeQuestionState] = useState(false);

  const toggleState = () => {
    ChangeQuestionState(!showAnswer);
  };

  return (
    <div onClick={toggleState} className="cursor-pointer flex flex-col border border-gray-300 rounded-md  mt-4 overflow-hidden">
      <div className="flex justify-between">
        <div>
          <p className="px-4 py-4 font-semibold tracking-wider">{props.question}</p>
        </div>
        <div>
          {showAnswer ? (
            <button
              onClick={toggleState}
              className="mr-4 rounded-md px-2 py-1 mt-3 "
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          ) : (
            <button
              onClick={toggleState}
              className="mr-4 rounded-md px-2 py-1 mt-3"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          )}
        </div>
      </div>
      <div
        style={{
          transitionProperty: "height, margin",
          transitionDuration: "1s",
          transitionTimingFunction: "ease-out",
          overflow: "hidden",
          height: showAnswer ? "auto" : "0px",
          margin: showAnswer ? "1rem 0" : "0",
        }}
      >
        <p className="px-4 pb-2 text-black font-normal tracking-wide">{props.answer}</p>
      </div>
    </div>
  );
};

export default Questions;
