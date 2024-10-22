// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import API_URL from "../../config"


// const HandleLikeScreen = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   console.log(location?.state);
//   const createMatch = async () => {
//     try {
//       const currentUserId = location.state.userId; // Example currentUserId
//       const selectedUserId = location.state.selectedUserId; // Example selectedUserId
//       const response = await axios.post(
//         `${API_URL}/create-match`,
//         {
//           currentUserId,
//           selectedUserId,
//         }
//       );
//       if (response.status === 200) {
//         navigate(-1);
//         // Handle success, such as updating UI or showing a success message
//       } else {
//         console.error("Failed to create match");
//         // Handle failure, such as showing an error message
//       }
//     } catch (error) {
//       console.error("Error creating match:", error);
//       // Handle error, such as showing an error message
//     }
//   };
//   const match = () => {
//     const confirmMatch = window.confirm(
//       `Accept Request? Match with ${location.state.name}`
//     );
//     if (confirmMatch) {
//       createMatch();
//     } else {
//       console.log("Cancel Pressed");
//     }
//   };
//   const unlikeProfile = async () => {
//     try {
//       const currentUserId = location.state.userId; // Example currentUserId
//       const unlikedUserId = location.state.selectedUserId; // Example unlikedUserId
//       await axios.post(
//         `${API_URL}/unlike-profile`,
//         {
//           userId: currentUserId,
//           unlikedUserId: unlikedUserId,
//         }
//       );
//       navigate(-1);
//     } catch (error) {
//       console.error("Error unliking profile:", error);
//     }
//   };
//   return (
//     <>
//       <div className="font-bold text-3xl ml-[4%] mt-[1%]">
//         {location?.state?.name}
//       </div>
//       <div className="flex flex-row justify-between">
//         <div className="flex flex-col">
//           <div className="flex flex-row items-center justify-center gap-4 w-[700px] ml-[7%] mt-[2%]">
//             {location?.state?.imageUrls?.slice(0, 2).map((item, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={item}
//                   alt="profile"
//                   className="w-[300px] h-[400px] object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-row items-center justify-center gap-4 w-[700px] ml-[7%] mt-[2%]">
//             {location?.state?.imageUrls?.slice(2, 4).map((item, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={item}
//                   alt="profile"
//                   className="w-[300px] h-[400px] object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-row items-center justify-center gap-4 w-[700px] ml-[7%] mt-[2%]">
//             {location?.state?.imageUrls?.slice(4, 6).map((item, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={item}
//                   alt="profile"
//                   className="w-[300px] h-[400px] object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col justify-start w-[400px] mr-[4%] mt-[2%] gap-4">
//           <div>
//             {location?.state?.prompts.slice(0, 3).map((prompt) => (
//               <div
//                 key={prompt.id}
//                 className="bg-slate-100 w-[360px] p-[5%] pl-[8%] border-2 border-slate-200 border-dashed rounded-md mb-[5%]"
//               >
//                 <div className="text-lg font-semibold ">{prompt.question}</div>
//                 <div className="text-xl font-bold">{prompt.answer}</div>
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-row justify-center items-center gap-6">
//             <button
//               className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-[40px] rounded-full"
//               onClick={unlikeProfile}
//             >
//               Unlike
//             </button>
//             <button
//               className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-[40px] rounded-full"
//               onClick={match}
//             >
//               Match
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HandleLikeScreen;



import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../../config";
import { IoArrowBack } from "react-icons/io5";

const HandleLikeScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [showNextButton, setShowNextButton] = useState(true);
  const [showPrevButton, setShowPrevButton] = useState(false);

  const createMatch = async () => {
    try {
      const currentUserId = location.state.userId;
      const selectedUserId = location.state.selectedUserId;
      const response = await axios.post(`${API_URL}/create-match`, {
        currentUserId,
        selectedUserId,
      });
      if (response.status === 200) {
        navigate(-1);
      } else {
        console.error("Failed to create match");
      }
    } catch (error) {
      console.error("Error creating match:", error);
    }
  };

  const match = () => {
    const confirmMatch = window.confirm(
      `Accept Request? Match with ${location.state.name}`
    );
    if (confirmMatch) {
      createMatch();
    } else {
      console.log("Cancel Pressed");
    }
  };

  const unlikeProfile = async () => {
    try {
      const currentUserId = location.state.userId;
      const unlikedUserId = location.state.selectedUserId;
      await axios.post(`${API_URL}/unlike-profile`, {
        userId: currentUserId,
        unlikedUserId: unlikedUserId,
      });
      navigate(-1);
    } catch (error) {
      console.error("Error unliking profile:", error);
    }
  };

  const nextImage = () => {
    if (currentImage < location.state.imageUrls.length - 1) {
      setCurrentImage(currentImage + 1);
      setShowPrevButton(true);
      if (currentImage === location.state.imageUrls.length - 2) {
        setShowNextButton(false);
      }
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
      setShowNextButton(true);
      if (currentImage === 1) {
        setShowPrevButton(false);
      }
    }
  };

  return (
    <div
      style={{
        padding: '50px 10px',
        boxSizing: "border-box",
        width: "100%",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <button onClick={() => navigate(-1)}>
          <IoArrowBack size={24} color="#000" />
        </button>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          {location?.state?.name}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            margin: "1rem",
          }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <img
              src={location.state.imageUrls[currentImage]}
              alt="profile"
              style={{
                width: "100%",
                height: "80%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            {showPrevButton && (
              <button
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  border: "none",
                  padding: "1rem",
                  cursor: "pointer",
                }}
                onClick={prevImage}
              >
                Prev
              </button>
            )}
            {showNextButton && (
              <button
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  border: "none",
                  padding: "1rem",
                  cursor: "pointer",
                }}
                onClick={nextImage}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            margin: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {location?.state?.prompts.slice(0, 3).map((prompt) => (
              <div
                key={prompt.id}
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: 10,
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {prompt.question}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {prompt.answer}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 10,
              marginTop: "2rem",
            }}
          >
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "1rem 2rem",
                fontSize: "18px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={unlikeProfile}
            >
              Unlike
            </button>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "1rem 2rem",
                fontSize: "18px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={match}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleLikeScreen;