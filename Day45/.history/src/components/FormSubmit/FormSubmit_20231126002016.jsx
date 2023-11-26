import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../../store/countContext/CountContext";
import handleSubmit from "../../helpers/handleSubmit";
import Button from "../Button/Button";
import isNumberInRange from "../../helpers/checkInputNumber";

function FormSubmit() {
  const [state, dispatch] = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  const { numberOfAttempt, fromNumber, toNumber, randomNumber } = state;
  const count = useRef(numberOfAttempt);
  const btnFormRef = useRef();
  const inputFormRef = useRef();

  useEffect(() => {
    dispatch({
      type: "randomNumber/renew",
    });
  }, []);

  const handleInputChange = (e) => {
    if (isNumberInRange(e.target.value, fromNumber, toNumber)) {
      setInputValue(e.target.value);
    }
  };

  const handleKeyDown = (e) => {
    inputFormRef.current?.focus();
    switch (e.key) {
      case "ArrowUp":
        if (
          inputValue < toNumber &&
          !document.activeElement.isEqualNode(btnFormRef.current)
        ) {
          setInputValue((prevValue) => +prevValue + 1);
        }
        break;
      case "ArrowDown":
        if (
          inputValue > fromNumber &&
          !document.activeElement.isEqualNode(btnFormRef.current)
        ) {
          setInputValue((prevValue) => +prevValue - 1);
        }
        break;
      case "Enter":
        if (
          !document.activeElement.isEqualNode(inputFormRef.current) &&
          !document.activeElement.isEqualNode(btnFormRef.current)
        ) {
          btnFormRef.current.click();
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [inputValue]);

  return (
    <>
      <form
        action=""
        className="flex flex-col gap-4 mt-4"
        onSubmit={(e) => {
          handleSubmit(
            e,
            numberOfAttempt,
            count,
            dispatch,
            inputValue,
            randomNumber,
            setInputValue
          );
        }}
      >
        <label htmlFor="inputNumber">
          Chọn một số từ {fromNumber} đến {toNumber}
        </label>
        {numberOfAttempt >= 1 && (
          <div className="flex items-center gap-2">
            <input
              type="range"
              className="w-full outline-none"
              min={fromNumber}
              max={toNumber}
              value={inputValue}
              onChange={handleInputChange}
              id="inputNumber"
              ref={inputFormRef}
            />
            <span>{inputValue}</span>
          </div>
        )}
        <Button
          text={numberOfAttempt >= 1 ? "Submit" : "Chơi Lại"}
          color="emerald"
          ref={btnFormRef}
        />
      </form>
    </>
  );
}

export default FormSubmit;
