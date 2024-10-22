// import React, { useEffect, useState } from "react";
// import { PiNotebookBold } from "react-icons/pi";
// import { useNavigate } from "react-router-dom";
// import RegistrationTop from "../../components/RegistrationTop";
// import { FaRegCircle } from "react-icons/fa";
// import { FaRegCheckCircle } from "react-icons/fa";
// import {
//   saveRegistrationProgress,
//   getRegistrationProgress,
// } from "../../registrationUtils";

// const GenderScreen = () => {
//   const [gender, setGender] = useState("");
//   const navigation = useNavigate();
//   useEffect(() => {
//     const progressData = getRegistrationProgress("Gender");
//     if (progressData) {
//       setGender(progressData.gender || "");
//       console.log("GenderScreen: ", progressData, " loaded");
//     }
//   }, []);
//   const handleNext = () => {
//     if (gender.trim() !== "") {
//       saveRegistrationProgress("Gender", { gender });
//     }
//     navigation("/type");
//   };
//   return (
//     <div
//       style={{
//         width: '100%',
//         margin: 'auto',
//       }}
//     >
//       <RegistrationTop
//         logo={PiNotebookBold}
//         title="Which gender describes you the best?"
//         style={{
//           fontSize: '16px'
//         }}
//       />
//       <div className="text-[16px] font-semibold text-gray-500"
//       style={{
//         width: '100%',
//         padding: 20
//       }}>
//         Users are matched based on these three gender groups. You can add more
//         about your gender afterwards.
//       </div>
//       <div className="flex flex-col justify-center w-[80%] mt-[3%]"
      
//       style={{
//         padding: 20,
//         margin: 'auto'
//       }}>
//         <div
//           className="flex flex-row justify-between items-center mt-[10px] pt-[10px]"
//           style={{
//             border: '0.3px solid grey'
//           }}
//           onClick={() => setGender("Men")}
//         >
//           <div className="pl-[20px] text-lg font-bold">Male</div>
//           {gender === "Men" ? (
//             <FaRegCheckCircle className="text-[20px] mr-[10px]" />
//           ) : (
//             <FaRegCircle className="text-[20px] mr-[10px]" />
//           )}
//         </div>
//         <div
//           className="flex flex-row justify-between items-center mt-[10px] pt-[10px]"
//           style={{
//             border: '0.3px solid grey'
//           }}
//           onClick={() => setGender("Women")}
//         >
//           <div className="pl-[20px] text-lg font-bold">Female</div>
//           {gender === "Women" ? (
//             <FaRegCheckCircle className="text-[20px] mr-[10px]" />
//           ) : (
//             <FaRegCircle className="text-[20px] mr-[10px]" />
//           )}
//         </div>
//         <div
//           className="flex flex-row justify-between items-center mt-[10px] pt-[10px]  pb-[10px]"
//           style={{
//             border: '0.3px solid grey'
//           }}
//           onClick={() => setGender("Non Binary")}
//         >
//           <div className="pl-[20px] text-lg font-bold">Non Binary</div>
//           {gender === "Non Binary" ? (
//             <FaRegCheckCircle className="text-[20px] mr-[10px]" />
//           ) : (
//             <FaRegCircle className="text-[20px] mr-[10px]" />
//           )}
//         </div>
//       </div>
//       <div 
//       style={{
//         width: '100',
//         margin: '3% auto'
//       }}>
//         <button
//           onClick={handleNext}
//           style={{
//             backgroundColor: 'blue',
//             width: '60%',
//             justifySelf: 'center'
//           }}
//        >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GenderScreen;





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

const GenderScreen = () => {
  const [gender, setGender] = useState("");
  const navigation = useNavigate();
  useEffect(() => {
    const progressData = getRegistrationProgress("Gender");
    if (progressData) {
      setGender(progressData.gender || "");
      console.log("GenderScreen: ", progressData, " loaded");
    }
  }, []);
  const handleNext = () => {
    if (gender.trim() !== "") {
      saveRegistrationProgress("Gender", { gender });
    }
    navigation("/type");
  };
  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      <RegistrationTop
        logo={PiNotebookBold}
        title="Which gender describes you the best?"
        style={{
          fontSize: "16px",
        }}
      />
      <div
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "gray",
          padding: "1rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        Users are matched based on these three gender groups. You can add more
        about your gender afterwards.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            border: "1px solid #ddd",
            borderRadius: "10px",
            marginBottom: "1rem",
            cursor: "pointer",
            width: '80%'

          }}
          onClick={() => setGender("Men")}
        >
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>Male</div>
          {gender === "Men" ? (
            <FaRegCheckCircle style={{ fontSize: "24px", color: "green" }} />
          ) : (
            <FaRegCircle style={{ fontSize: "24px", color: "#ccc" }} />
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            border: "1px solid #ddd",
            borderRadius: "10px",
            marginBottom: "1rem",
            cursor: "pointer",
            width: '80%'

          }}
          onClick={() => setGender("Women")}
        >
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>Female</div>
          {gender === "Women" ? (
            <FaRegCheckCircle style={{ fontSize: "24px", color: "green" }} />
          ) : (
            <FaRegCircle style={{ fontSize: "24px", color: "#ccc" }} />
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            border: "1px solid #ddd",
            borderRadius: "10px",
            marginBottom: "1rem",
            cursor: "pointer",
            width: '80%'
          }}
          onClick={() => setGender("Non Binary")}
        >
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>Non Binary</div>
          {gender === "Non Binary" ? (
            <FaRegCheckCircle style={{ fontSize: "24px", color: "green" }} />
          ) : (
            <FaRegCircle style={{ fontSize: "24px", color: "#ccc" }} />
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
    </div>
  );
};

export default GenderScreen;