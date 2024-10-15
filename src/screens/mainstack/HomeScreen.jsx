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


import React, { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { IoSparkles } from "react-icons/io5"
import { FaHeart } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import API_URL from "../../config"


export default function HomeScreen() {
  const navigate = useNavigate()
  const [option, setOption] = useState("Compatible")
  const [profilesData, setProfilesData] = useState([])
  const [userId, setUserId] = useState("")
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0)

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token")
      if (token) {
        const decodedToken = jwtDecode(token)
        setUserId(decodedToken.userId)
      }
    }

    fetchUser()
  }, [])

  useEffect(() => {
    if (userId) {
      fetchMatches()
    }
  }, [userId])

  const fetchMatches = async () => {
    try {
      const response = await axios.get(`${API_URL}/matches?userId=${userId}`)
      setProfilesData(response.data.matches)
    } catch (error) {
      console.error("Error fetching matches:", error)
    }
  }

  const currentProfile = profilesData[currentProfileIndex]

  const navigateToNextProfile = () => {
    const nextIndex = currentProfileIndex + 1
    if (nextIndex < profilesData.length) {
      setCurrentProfileIndex(nextIndex)
    } else {
      console.log("No more profiles")
      alert("No more profiles")
    }
  }

  const handleLike = (imageIndex) => {
    navigate("/user/send-like", {
      state: {
        image: currentProfile?.imageUrls[imageIndex],
        name: currentProfile?.firstName,
        userId: userId,
        likedUserId: currentProfile?._id,
      },
    })
  }

  const age = currentProfile?.dateOfBirth
    ? 2024 - parseInt(currentProfile.dateOfBirth.split("/")[2])
    : null

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
          <IoSparkles />
        </div>
        {["Compatible", "Active Today", "New Here"].map((opt) => (
          <button
            key={opt}
            className={`px-4 py-2 rounded-full ${
              option === opt
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
            onClick={() => setOption(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      {currentProfile && (
        <div className="bg-background shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{`${currentProfile.firstName} ${currentProfile.lastName}`}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentProfile.imageUrls?.slice(0, 6).map((url, index) => (
                <div key={index} className="relative">
                  <img
                    src={url}
                    alt={`${currentProfile.firstName}'s photo`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    className="absolute bottom-2 right-2 bg-secondary text-secondary-foreground p-2 rounded-full"
                    onClick={() => handleLike(index)}
                  >
                    <FaHeart className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Gender:</strong> {currentProfile.gender}</p>
                <p><strong>Sexuality:</strong> {currentProfile.type}</p>
              </div>
              <div>
                <p><strong>Hometown:</strong> {currentProfile.homeTown}</p>
                <p><strong>Looking for:</strong> {currentProfile.lookingFor}</p>
              </div>
            </div>
            <div className="mt-6">
              {currentProfile.prompts?.slice(0, 3).map((prompt) => (
                <div key={prompt.id} className="mb-4 p-4 bg-muted rounded-lg">
                  <p className="font-semibold">{prompt.question}</p>
                  <p className="text-lg">{prompt.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <button
          className="p-4 bg-secondary text-secondary-foreground rounded-full"
          onClick={navigateToNextProfile}
        >
          <ImCross className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}