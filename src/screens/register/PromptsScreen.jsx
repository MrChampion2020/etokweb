import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TbPrompt } from "react-icons/tb";
import RegistrationTop from "../../components/RegistrationTop";
import { useLocation } from "react-router-dom";
import {
  saveRegistrationProgress,
  getRegistrationProgress,
} from "../../registrationUtils";

const PromptsScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prompts = location.state ? location.state.prompts : null;
  const handleNext = () => {
    saveRegistrationProgress("Prompts", { prompts });
    navigate("/pre-final");
  };

  return (
    <>
      <RegistrationTop logo={TbPrompt} title="Write your profile answers" />
      <div className="flex flex-col justify-center items-center mt-[2%] mx-[33%]">
        {prompts ? (
          prompts.map((item, index) => (
            <button
              className="w-[450px] p-[12px] mt-[20px] border-2 border-gray-400 border-dashed"
              onClick={() => navigate("/show-prompts")}
            >
              <div className="text-sm font-bold text-gray-500">
                {item?.question}
              </div>
              <div className="text-xs font-medium text-gray-600">
                {item?.answer}
              </div>
            </button>
          ))
        ) : (
          <div>
            <button
              className="w-[450px] p-[12px] mt-[20px] border-2 border-gray-400 border-dashed"
              onClick={() => navigate("/show-prompts")}
            >
              <div className="text-sm font-bold text-gray-500">
                Select a Prompt
              </div>
              <div className="text-xs font-medium text-gray-600">
                And write your own answer
              </div>
            </button>
            <button
              className="w-[450px] p-[12px] mt-[20px] border-2 border-gray-400 border-dashed"
              onClick={() => navigate("/show-prompts")}
            >
              <div className="text-sm font-bold text-gray-500">
                Select a Prompt
              </div>
              <div className="text-xs font-medium text-gray-600">
                And write your own answer
              </div>
            </button>
            <button
              className="w-[450px] p-[12px] mt-[20px] border-2 border-gray-400 border-dashed"
              onClick={() => navigate("/show-prompts")}
            >
              <div className="text-sm font-bold text-gray-500">
                Select a Prompt
              </div>
              <div className="text-xs font-medium text-gray-600">
                And write your own answer
              </div>
            </button>
          </div>
        )}
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

export default PromptsScreen;

// import React, { useContext, useState, useEffect } from "react"
// import { useNavigate, useLocation } from "react-router-dom"
// import { TbPrompt } from "react-icons/tb"
// import RegistrationTop from "../../components/RegistrationTop";
// import { saveRegistrationProgress, getRegistrationProgress } from "../../registrationUtils"


// const PromptsScreen = () => {
//   const navigate = useNavigate()
//   const location = useLocation()
//   const [prompts, setPrompts] = useState(location.state?.prompts || [])

//   useEffect(() => {
//     const progressData = getRegistrationProgress("Prompts")
//     if (progressData && progressData.prompts) {
//       setPrompts(progressData.prompts)
//     }
//   }, [])

//   const handleNext = () => {
//     saveRegistrationProgress("Prompts", { prompts })
//     navigate("/pre-final")
//   }

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '1rem',
//       maxWidth: '600px',
//       margin: '0 auto',
//       minHeight: '100vh',
//     }}>
//       <RegistrationTop logo={TbPrompt} title="Write your profile answers" />
//       <div style={{
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}>
//         {prompts.length > 0 ? (
//           prompts.map((item, index) => (
//             <button
//               key={index}
//               onClick={() => navigate("/show-prompts")}
//               style={{
//                 width: '100%',
//                 maxWidth: '450px',
//                 padding: '12px',
//                 marginTop: '20px',
//                 border: '2px dashed #9CA3AF',
//                 borderRadius: '8px',
//                 backgroundColor: 'transparent',
//                 cursor: 'pointer',
//                 textAlign: 'left',
//               }}
//             >
//               <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#6B7280' }}>
//                 {item?.question}
//               </div>
//               <div style={{ fontSize: '0.75rem', color: '#4B5563' }}>
//                 {item?.answer}
//               </div>
//             </button>
//           ))
//         ) : (
//           <>
//             {[1, 2, 3].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => navigate("/show-prompts")}
//                 style={{
//                   width: '100%',
//                   maxWidth: '450px',
//                   padding: '12px',
//                   marginTop: '20px',
//                   border: '2px dashed #9CA3AF',
//                   borderRadius: '8px',
//                   backgroundColor: 'transparent',
//                   cursor: 'pointer',
//                   textAlign: 'left',
//                 }}
//               >
//                 <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#6B7280' }}>
//                   Select a Prompt
//                 </div>
//                 <div style={{ fontSize: '0.75rem', color: '#4B5563' }}>
//                   And write your own answer
//                 </div>
//               </button>
//             ))}
//           </>
//         )}
//       </div>
//       <button
//         onClick={handleNext}
//         style={{
//           backgroundColor: '#3B82F6',
//           color: 'white',
//           border: 'none',
//           borderRadius: '9999px',
//           padding: '0.75rem 2rem',
//           fontSize: '1rem',
//           fontWeight: 'bold',
//           cursor: 'pointer',
//           marginTop: '2rem',
//           width: '100%',
//           maxWidth: '250px',
//         }}
//       >
//         Next
//       </button>
//     </div>
//   )
// }

// export default PromptsScreen