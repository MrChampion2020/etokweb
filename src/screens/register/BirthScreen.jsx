// import React, { useEffect, useRef, useState } from "react";
// import { LiaBirthdayCakeSolid } from "react-icons/lia";
// import { useNavigate } from "react-router-dom";
// import RegistrationTop from "../../components/RegistrationTop";
// import {
//   saveRegistrationProgress,
//   getRegistrationProgress,
// } from "../../registrationUtils";
// const BirthScreen = () => {
//   const [day, setDay] = useState("");
//   const [month, setMonth] = useState("");
//   const [year, setYear] = useState("");
//   const monthRef = useRef(null);
//   const yearRef = useRef(null);
//   const buttonRef = useRef(null);
//   const navigation = useNavigate();

//   const handleDayChange = (text) => {
//     setDay(text);
//     if (text.length === 2) {
//       monthRef.current.focus();
//     }
//   };

//   const handleMonthChange = (text) => {
//     setMonth(text);
//     if (text.length === 2) {
//       yearRef.current.focus();
//     }
//   };

//   const handleYearChange = (text) => {
//     setYear(text);
//     if (text.length === 4) {
//       buttonRef.current.focus();
//     }
//   };
//   useEffect(() => {
//     const progressData = getRegistrationProgress("Birth");
//     if (progressData) {
//       const { dateOfBirth } = progressData;
//       if (dateOfBirth) {
//         const [d, m, y] = dateOfBirth.split("/");
//         setDay(d);
//         setMonth(m);
//         setYear(y);
//         console.log("BirthScreen: ", progressData, " loaded");
//       }
//     }
//   }, []);
//   function handleNext() {
//     if (day.trim() !== "" && month.trim() !== "" && year.trim() !== "") {
//       const dateOfBirth = `${day}/${month}/${year}`;
//       saveRegistrationProgress("Birth", { dateOfBirth });
//       console.log("BirthScreen: ", { dateOfBirth }, " saved");
//     }
//     navigation("/location");
//   }
//   return (
//     <div
//       style={{
//         width: '100%',
//         margin: 'auto'
//       }}
//     >
//       <RegistrationTop
//         logo={LiaBirthdayCakeSolid}
//         title="What's your date of birth"
//       />

//       <div className="mt-6 w-[50%] flex flex-row justify-center items-center"
//       style={{
//         margin: 'auto'
//       }}>
//         <input
//           type="number"
//           name="day"
//           className="w-[25%] m-[1%] text-sm p-2 mt-5 border-b-1 border-b-black focus:outline-none"
//           id="day"
//           autoFocus={true}
//           value={day}
//           onChange={(e) => handleDayChange(e.target.value)}
//           placeholder="DD"
//         />
//         <input
//           ref={monthRef}
//           type="number"
//           name="month"
//           className="w-[25%] m-[1%] text-sm p-2 mt-5 border-b-1 border-b-black focus:outline-none"
//           id="month"
//           value={month}
//           onChange={(e) => handleMonthChange(e.target.value)}
//           placeholder="MM"
//         />
//         <input
//           ref={yearRef}
//           type="number"
//           name="year"
//           className="w-[40%] m-[1%] text-sm p-2 mt-5 border-b-1 border-b-black focus:outline-none"
//           id="year"
//           value={year}
//           onChange={(e) => handleYearChange(e.target.value)}
//           placeholder="YYYY"
//         />
//       </div>
     
//         <button
//           ref={buttonRef}
//           onClick={handleNext}
//           //className="bg-blue-500 h-12 border-none rounded-full justify-center items-center self-center text-white text-lg font-bold font-sans"
//           style={{
//             backgroundColor: '#3B82F6',
//             color: 'white',
//             border: 'none',
//             borderRadius: '9999px',
//             padding: '0.75rem 2rem',
//             fontSize: '1rem',
//             fontWeight: 'bold',
//             cursor: 'pointer',
//             marginTop: '2rem',
//             width: '100%',
//             maxWidth: '250px',
//           }}>
//           Next
//         </button>
      
//     </div>
//   );
// };

// export default BirthScreen;



import React, { useEffect, useRef, useState } from "react";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import RegistrationTop from "../../components/RegistrationTop";
import {
  saveRegistrationProgress,
  getRegistrationProgress,
} from "../../registrationUtils";

const BirthScreen = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const buttonRef = useRef(null);
  const navigation = useNavigate();

  const handleDayChange = (text) => {
    setDay(text);
    if (text.length === 2) {
      monthRef.current.focus();
    }
  };

  const handleMonthChange = (text) => {
    setMonth(text);
    if (text.length === 2) {
      yearRef.current.focus();
    }
  };

  const handleYearChange = (text) => {
    setYear(text);
    if (text.length === 4) {
      buttonRef.current.focus();
    }
  };

  useEffect(() => {
    const progressData = getRegistrationProgress("Birth");
    if (progressData) {
      const { dateOfBirth } = progressData;
      if (dateOfBirth) {
        const [d, m, y] = dateOfBirth.split("/");
        setDay(d);
        setMonth(m);
        setYear(y);
        console.log("BirthScreen: ", progressData, " loaded");
      }
    }
  }, []);

  function handleNext() {
    if (day.trim() !== "" && month.trim() !== "" && year.trim() !== "") {
      const dateOfBirth = `${day}/${month}/${year}`;
      saveRegistrationProgress("Birth", { dateOfBirth });
      console.log("BirthScreen: ", { dateOfBirth }, " saved");
    }
    navigation("/location");
  }

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
        logo={LiaBirthdayCakeSolid}
        title="What's your date of birth"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "2rem auto",
          flexWrap: "wrap",
          padding: 20,
          width: '100%'
        }}
      >
        <input
          type="number"
          name="day"
          style={{
            width: "20%",
            margin: "1%",
            padding: "0.5rem",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "0.25rem",
            outline: "none",
          }}
          id="day"
          autoFocus={true}
          value={day}
          onChange={(e) => handleDayChange(e.target.value)}
          placeholder="DD"
        />
        <input
          ref={monthRef}
          type="number"
          name="month"
          style={{
            width: "20%",
            margin: "1%",
            padding: "0.5rem",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "0.25rem",
            outline: "none",
          }}
          id="month"
          value={month}
          onChange={(e) => handleMonthChange(e.target.value)}
          placeholder="MM"
        />
        <input
          ref={yearRef}
          type="number"
          name="year"
          style={{
            width: "30%",
            margin: "1%",
            padding: "0.5rem",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "0.25rem",
            outline: "none",
          }}
          id="year"
          value={year}
          onChange={(e) => handleYearChange(e.target.value)}
          placeholder="YYYY"
        />
      </div>

      <button
        ref={buttonRef}
        onClick={handleNext}
        style={{
          backgroundColor: "#3B82F6",
          color: "white",
          border: "none",
          borderRadius: "9999px",
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
          marginTop: "2rem",
          width: "100%",
          maxWidth: "250px",
          margin: "auto",
          display: "block",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default BirthScreen;