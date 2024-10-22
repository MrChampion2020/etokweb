// import React, { useEffect, useState } from "react";
// import "core-js/stable/atob";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";
// import { IoSparkles } from "react-icons/io5";
// import { FaHeart } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
// import API_URL from "../../config"

// const HomeScreen = () => {
//   const navigation = useNavigate();
//   const [option, setOption] = useState("Compatible");
//   const [profilesData, setProfilesData] = useState([]);
//   const [userId, setUserId] = useState("");

//   const showToken = async () => {
//     const token = localStorage.getItem("token");
//     console.log("token", token);
//   };

//   useEffect(() => {
//     console.log("hi");
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         const decodedToken = jwtDecode(token);
//         const userId = decodedToken.userId;
//         setUserId(userId);
//       }
//     };

//     fetchUser();
//     showToken();
//   }, []);

//   console.log("userId", userId);

//   const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
//   // const [currentProfile, setCurrentProfile] = useState(profiles[0]);
//   const [currentProfile, setCurrentProfile] = useState(profilesData[0]);
//   /*const handleLike = () => {
//     navigateToNextProfile();
//   };*/

//   const handleCross = () => {
//     navigateToNextProfile();
//   };
//   const navigateToNextProfile = () => {
//     const nextIndex = currentProfileIndex + 1;
//     if (nextIndex <= profilesData.length) {
//       setCurrentProfileIndex(nextIndex);
//       setCurrentProfile(profilesData[nextIndex]);
//       // navigation.navigate("Animation");
//     } else {
//       // No more profiles to display
//       console.log("No more profiles");
//       alert("No more profiles");
//     }
//   };
//   console.log("next index", currentProfileIndex);

//   const fetchMatches = async () => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/matches?userId=${userId}`
//       );
//       const matches = response.data.matches;
//       setProfilesData(matches);
//       // Handle matches in the frontend (display, store in state, etc.)
//     } catch (error) {
//       console.error("Error fetching matches:", error);
//       // Handle error in the frontend
//     }
//   };
//   useEffect(() => {
//     // Update currentProfile when profilesData changes
//     if (profilesData.length > 0) {
//       setCurrentProfile(profilesData[0]);
//     }
//   }, [profilesData]);

//   useEffect(() => {
//     if (userId) {
//       fetchMatches();
//     }
//   }, [userId]);

//   let dayValue, monthValue, yearValue, age;
//   const dateOfBirth = currentProfile?.dateOfBirth;
//   useEffect(() => {
//     console.log("i call");
//     if (userId) {
//       fetchMatches();
//     }
//   }, [userId]);
//   console.log("matches", profilesData);
//   if (dateOfBirth) {
//     [dayValue, monthValue, yearValue] = dateOfBirth.split("/");
//     age = 2024 - yearValue;
//   }
//   return (
//     <>
//       <div className="flex flex-row gap-3 items-center justify-start ml-[1%] mt-[1%]">
//         <div className="p-[10px] bg-slate-300 text-xl rounded-full">
//           <IoSparkles />
//         </div>
//         <div
//           onClick={() => setOption("Compatible")}
//           style={{
//             borderColor: option === "Compatible" && "transparent",
//             backgroundColor: option === "Compatible" && "blue",
//             color: option === "Compatible" && "white",
//           }}
//           className="cursor-pointer border-2 border-slate-600 font-bold text-slate-600 p-[7px] rounded-3xl text-base"
//         >
//           Compatible
//         </div>
//         <div
//           onClick={() => setOption("Active Today")}
//           style={{
//             borderColor: option === "Active Today" && "transparent",
//             backgroundColor: option === "Active Today" && "black",
//             color: option === "Active Today" && "white",
//           }}
//           className="cursor-pointer border-2 border-slate-600 font-bold text-slate-600 p-[7px] rounded-3xl text-base"
//         >
//           Active Today
//         </div>
//         <div
//           onClick={() => setOption("New Here")}
//           style={{
//             borderColor: option === "New Here" && "transparent",
//             backgroundColor: option === "New Here" && "black",
//             color: option === "New Here" && "white",
//           }}
//           className="cursor-pointer border-2 border-slate-600 font-bold text-slate-600 p-[7px] rounded-3xl text-base"
//         >
//           New Here
//         </div>
//       </div>
//       <div className="font-bold text-3xl ml-[4%] mt-[1%]">
//         {currentProfile?.firstName} {currentProfile?.lastName}
//       </div>
//       <div className="flex flex-row justify-between">
//         <div className="flex flex-col">
//           <div className="flex flex-row items-center justify-center gap-4 w-[700px] ml-[7%] mt-[2%]">
//             {currentProfile?.imageUrls?.slice(0, 2).map((item, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={item}
//                   alt="profile"
//                   className="w-[300px] h-[400px] object-cover rounded-lg"
//                 />
//                 <div
//                   onClick={() => {
//                     navigation("/user/send-like", {
//                       state: {
//                         image: currentProfile?.imageUrls[index],
//                         name: currentProfile?.firstName,
//                         userId: userId,
//                         likedUserId: currentProfile?._id,
//                       },
//                     });
//                   }}
//                   className="absolute bottom-2 right-2 p-[3%] text-3xl bg-slate-300 rounded-full text-white"
//                 >
//                   <FaHeart />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-row items-center justify-center gap-4 w-[700px] ml-[7%] mt-[2%]">
//             {currentProfile?.imageUrls?.slice(2, 4).map((item, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={item}
//                   alt="profile"
//                   className="w-[300px] h-[400px] object-cover rounded-lg"
//                 />
//                 <div
//                   onClick={() => {
//                     navigation("/user/send-like", {
//                       state: {
//                         image: currentProfile?.imageUrls[index + 2],
//                         name: currentProfile?.firstName,
//                         userId: userId,
//                         likedUserId: currentProfile?._id,
//                       },
//                     });
//                   }}
//                   className="absolute bottom-2 right-2 p-[3%] text-3xl bg-slate-300 rounded-full text-white"
//                 >
//                   <FaHeart />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-row items-center justify-center gap-4 w-[700px] ml-[7%] mt-[2%]">
//             {currentProfile?.imageUrls?.slice(4, 6).map((item, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={item}
//                   alt="profile"
//                   className="w-[300px] h-[400px] object-cover rounded-lg"
//                 />
//                 <div
//                   onClick={() => {
//                     navigation("/user/send-like", {
//                       state: {
//                         image: currentProfile?.imageUrls[index + 4],
//                         name: currentProfile?.firstName,
//                         userId: userId,
//                         likedUserId: currentProfile?._id,
//                       },
//                     });
//                   }}
//                   className="absolute bottom-2 right-2 p-[3%] text-3xl bg-slate-300 rounded-full text-white"
//                 >
//                   <FaHeart />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col justify-start w-[400px] mr-[4%] mt-[2%] gap-4">
//           <div className="flex flex-row gap-2 font-bold text-xl">
//             Name:
//             <div className="font-semibold">
//               {currentProfile?.firstName} {currentProfile?.lastName}
//             </div>
//           </div>
//           <div className="flex flex-row gap-2 font-bold text-xl">
//             Age:
//             <div className="font-semibold">{age}</div>
//           </div>
//           <div className="flex flex-row gap-2 font-bold text-xl">
//             Gender:
//             <div className="font-semibold">{currentProfile?.gender}</div>
//           </div>
//           <div className="flex flex-row gap-2 font-bold text-xl">
//             Sexuality:
//             <div className="font-semibold">{currentProfile?.type}</div>
//           </div>
//           <div className="flex flex-row gap-2 font-bold text-xl">
//             Hometown:
//             <div className="font-semibold">{currentProfile?.homeTown}</div>
//           </div>
//           <div className="flex flex-row gap-2 font-bold text-xl">
//             Looking for:
//             <div className="font-semibold">{currentProfile?.lookingFor}</div>
//           </div>

//           <div>
//             {currentProfile?.prompts.slice(0, 3).map((prompt) => (
//               <div
//                 key={prompt.id}
//                 className="bg-slate-100 w-[360px] p-[5%] pl-[8%] border-2 border-slate-200 border-dashed rounded-md mb-[5%]"
//               >
//                 <div className="text-lg font-semibold ">{prompt.question}</div>
//                 <div className="text-xl font-bold">{prompt.answer}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div
//         onClick={handleCross}
//         className="sticky left-[2%] bottom-[5%] inline-block cursor-pointer p-[1%] bg-slate-300 text-xl rounded-full"
//       >
//         <ImCross />
//       </div>
//     </>
//   );
// };

// export default HomeScreen;




import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoSparkles } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import {useSwipeable} from 'react-swipeable';
import API_URL from "../../config";

const HomeScreen = () => {
  const navigation = useNavigate();
  const [option, setOption] = useState("Compatible");
  const [profilesData, setProfilesData] = useState([]);
  const [userId, setUserId] = useState("");
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.userId);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchMatches();
    }
  }, [userId]);

  const fetchMatches = async () => {
    try {
      const response = await axios.get(`${API_URL}/matches?userId=${userId}`);
      setProfilesData(response.data.matches);
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  };

  const currentProfile = profilesData[currentProfileIndex];

  const navigateToNextProfile = () => {
    const nextIndex = currentProfileIndex + 1;
    if (nextIndex < profilesData.length) {
      setCurrentProfileIndex(nextIndex);
      setCurrentImageIndex(0);
    } else {
      alert("No more profiles");
    }
  };

  const handleLike = () => {
    navigation("/user/send-like", {
      state: {
        image: currentProfile?.imageUrls[currentImageIndex],
        name: currentProfile?.firstName,
        userId: userId,
        likedUserId: currentProfile?._id,
      },
    });
  };

  const handleSwipe = (dir) => {
    if (dir === "left") {
      const nextIndex = currentImageIndex + 1;
      if (nextIndex < currentProfile.imageUrls.length) {
        setCurrentImageIndex(nextIndex);
      }
    } else if (dir === "right") {
      const prevIndex = currentImageIndex - 1;
      if (prevIndex >= 0) {
        setCurrentImageIndex(prevIndex);
      }
    }
  };

  return (
    <div
      style={{
        padding: "60px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <div style={{ padding: "10px", backgroundColor: "#e0e0e0", borderRadius: "50%" }}>
          <IoSparkles />
        </div>
        {[ "Compatible", "Active Today", "New Here"].map((opt) => (
          <button
            key={opt}
            onClick={() => setOption(opt)}
            style={{
              padding: "10px 15px",
              borderRadius: "9999px",
              border: "none",
              backgroundColor: option === opt ? "#3B82F6" : "#e0e0e0",
              color: option === opt ? "white" : "black",
              cursor: "pointer",
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      {currentProfile && (
        <useSwipeable
          onSwipedLeft={() => handleSwipe("left")}
          onSwipedRight={() => handleSwipe("right")}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {currentProfile.firstName} {currentProfile.lastName}
            </h2>
            <div>
              <img
                src={currentProfile.imageUrls[currentImageIndex]}
                alt={`${currentProfile.firstName}'s photo`}
                style={{
                  width: "300px",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "300px",
              }}
            >
                            <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "300px",
                }}
              >
                <button
                  onClick={() => handleSwipe("right")}
                  style={{
                    backgroundColor: "#e0e0e0",
                    borderRadius: "50%",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <IoArrowBack />
                </button>
                <button
                  onClick={handleLike}
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    borderRadius: "50%",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FaHeart style={{ color: "#f44336" }} />
                </button>
                <button
                  onClick={() => handleSwipe("left")}
                  style={{
                    backgroundColor: "#e0e0e0",
                    borderRadius: "50%",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <IoArrowForward />
                </button>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
              }}
            >
              <div>
                <p>
                  <strong>Age:</strong> {2024 - parseInt(currentProfile.dateOfBirth.split('/')[2])}
                </p>
                <p>
                  <strong>Gender:</strong> {currentProfile.gender}
                </p>
                <p>
                  <strong>Sexuality:</strong> {currentProfile.type}
                </p>
              </div>
              <div>
                <p>
                  <strong>Hometown:</strong> {currentProfile.homeTown}
                </p>
                <p>
                  <strong>Looking for:</strong> {currentProfile.lookingFor}
                </p>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              {currentProfile.prompts?.slice(0, 3).map((prompt) => (
                <div
                  key={prompt.id}
                  style={{
                    backgroundColor: "#f0f0f0",
                    padding: "15px",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <p style={{ fontWeight: "bold" }}>{prompt.question}</p>
                  <p>{prompt.answer}</p>
                </div>
              ))}
            </div>
            <button
              onClick={navigateToNextProfile}
              style={{
                position: "fixed",
                left: "20px",
                bottom: "20px",
                padding: "15px",
                backgroundColor: "#e0e0e0",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
              }}
            >
              <ImCross />
            </button>
          </div>
        </useSwipeable>
      )}
    </div>
  );
};

export default HomeScreen;