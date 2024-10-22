import React, { useEffect, useState } from "react";
import { PiNotebookBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import RegistrationTop from "../../components/RegistrationTop";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import {
  saveRegistrationProgress,
  getRegistrationProgress,
} from "../../registrationUtils";

const TypeScreen = () => {
  const [type, setType] = useState("");
  const navigation = useNavigate();
  useEffect(() => {
    const progressData = getRegistrationProgress("Type");
    if (progressData) {
      setType(progressData.type || "");
      console.log("TypeScreen: ", progressData, " loaded");
    }
  }, []);
  const handleNext = () => {
    if (type.trim() !== "") {
      saveRegistrationProgress("Type", { type });
    }
    navigation("/dating");
  };
  return (
    <>
      <RegistrationTop logo={PiNotebookBold} title="What's your sexuality?" />
      <div className="text-[16px] font-semibold text-gray-500"
      style={{
        padding: 20
      }}
      >
        Users are matched based on the sexuality available below. You can add
        more about your sexuality afterwards.
      </div>
      <div className="flex flex-col justify-center"
      style={{
        width: '80%',
        margin: '3% auto'
      }}>
        <div
          className="flex flex-row justify-between items-center mt-[10px] pt-[10px] "
          style={{
            borderBottom: '0.3px solid grey'
          }}
          onClick={() => setType("Straight")}
        >
          <div className="pl-[16px] text-lg font-bold">Straight</div>
          {type === "Straight" ? (
            <FaRegCheckCircle className="text-[20px] mr-[10px]" />
          ) : (
            <FaRegCircle className="text-[20px] mr-[10px]" />
          )}
        </div>
        <div
          className="flex flex-row justify-between items-center mt-[10px] pt-[10px]"
          style={{
            borderBottom: '0.3px solid grey'
          }}
          onClick={() => setType("Gay")}
        >
          <div className="pl-[20px] text-lg font-bold">Gay</div>
          {type === "Gay" ? (
            <FaRegCheckCircle className="text-[20px] mr-[10px]" />
          ) : (
            <FaRegCircle className="text-[20px] mr-[10px]" />
          )}
        </div>
        <div
          className="flex flex-row justify-between items-center mt-[10px] pt-[10px]"
          style={{
            borderBottom: '0.3px solid grey'
          }}
          onClick={() => setType("Lesbian")}
        >
          <div className="pl-[20px] text-lg font-bold">Lesbian</div>
          {type === "Lesbian" ? (
            <FaRegCheckCircle className="text-[20px] mr-[10px]" />
          ) : (
            <FaRegCircle className="text-[20px] mr-[10px]" />
          )}
        </div>
        <div
          className="flex flex-row justify-between items-center mt-[10px] pt-[10px] pb-[10px]"

          style={{
            borderBottom: '0.3px solid grey'
          }}          onClick={() => setType("Bisexual")}
        >
          <div className="pl-[20px] text-lg font-bold">Bisexual</div>
          {type === "Bisexual" ? (
            <FaRegCheckCircle className="text-[20px] mr-[10px]" />
          ) : (
            <FaRegCircle className="text-[20px] mr-[10px]" />
          )}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <button
        className="bg-blue-500"
          onClick={handleNext}
          style={{
            color: "white",
            border: "none",
            width: '50%',
            padding: "10px 5px",
            fontSize: "18px",
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
                
          Next
        </button>
      </div>
    </>
  );
};

export default TypeScreen;

