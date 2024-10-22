// import React, { useState, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";
// import API_URL from "../../config"


// const LikesScreen = () => {
//   const navigation = useNavigate();
//   const [option, setOption] = useState("Recent");
//   const [userId, setUserId] = useState("");
//   const [likes, setLikes] = useState([]);
//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       const decodedToken = jwtDecode(token);
//       const userId = decodedToken.userId;
//       setUserId(userId);
//     };
//     fetchUser();
//   }, []);
//   const fetchReceivedLikes = async () => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/recieved-likes/${userId}`
//       );
//       const recievedLikes = response.data.recievedLikes;

//       setLikes(recievedLikes);
//     } catch (error) {
//       console.log("Error in fetching recieved likes ", error);
//     }
//   };
//   console.log("Likes", likes);

//   useEffect(() => {
//     if (userId) {
//       fetchReceivedLikes();
//     }
//   }, [userId]);

//   useEffect(() => {
//     if (userId) {
//       fetchReceivedLikes();
//     }
//   }, [userId]);
//   return (
//     <>
//       <div className="font-bold text-3xl ml-[4%] mt-[1%]">Likes You</div>
//       <div>
//         {likes.length === 0 && (
//           <div className="font-bold text-2xl flex justify-center mt-[1%]">
//             No likes yet
//           </div>
//         )}
//       </div>

//       <div className="flex flex-row justify-between">
//         <div>
//           {likes.length > 0 ? (
//             <div
//               className="flex flex-col justify-start mt-[5%] ml-[50%] border-2 border-black w-[400px] h-[500px] p-[10px] bg-slate-50"
//               onClick={() => {
//                 navigation("/user/handle-like", {
//                   state: {
//                     name: likes[0].userId?.firstName,
//                     image: likes[0].image,
//                     imageUrls: likes[0].userId?.imageUrls,
//                     prompts: likes[0].userId?.prompts,
//                     userId: userId,
//                     selectedUserId: likes[0].userId?._id,
//                     likes: likes?.length,
//                   },
//                 });
//               }}
//             >
//               <div className="text-lg font-semibold text-slate-600 bg-slate-200 border-2 border-slate-400 border-dashed p-[3px] pl-[10px] pr-[10px] w-[200px]">
//                 Liked your photo
//               </div>
//               <div className="text-3xl font-bold ml-[5%] mt-[2%] mb-[2%]">
//                 {likes[0].userId?.firstName}
//               </div>
//               <img
//                 className="h-[500px] w-[400px] object-cover"
//                 src={likes[0].userId?.imageUrls[0]}
//                 alt=""
//               />
//             </div>
//           ) : (
//             <></>
//           )}
//         </div>
//         <div className="flex flex-col items-center w-[500px] mr-[2%] mt-[1.5%]">
//           {likes.length > 0 ? (
//             <div className="mb-2 text-3xl font-semibold">Up Next</div>
//           ) : (
//             <></>
//           )}
//           <div className="grid grid-cols-2 gap-5">
//             {likes.slice(1).map((like, index) => (
//               <div
//                 onClick={() => {
//                   alert("You can only view the first like for now");
//                 }}
//                 className="border-2 border-black p-[10px] w-[250px] h-[350px] "
//               >
//                 {like.comment ? (
//                   <div className="text-base font-semibold text-slate-600 bg-slate-200 border-2 border-slate-400 border-dashed p-[2px] pl-[7px] pr-[7px] w-[150px]">
//                     {like?.comment}
//                   </div>
//                 ) : (
//                   <div className="text-base font-semibold text-slate-600 bg-slate-200 border-2 border-slate-400 border-dashed p-[2px] pl-[7px] pr-[7px] w-[150px]">
//                     Liked your photo
//                   </div>
//                 )}
//                 <div className="text-xl font-bold ml-[5%] mt-[2%] mb-[2%]">
//                   {like?.userId?.firstName}
//                 </div>
//                 <img
//                   key={index}
//                   className="h-[260px] w-[230px] object-cover"
//                   src={like.userId?.imageUrls[0]}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LikesScreen;



import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import API_URL from "../../config";

const LikesScreen = () => {
  const navigation = useNavigate();
  const [option, setOption] = useState("Recent");
  const [userId, setUserId] = useState("");
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };
    fetchUser();
  }, []);

  const fetchReceivedLikes = async () => {
    try {
      const response = await axios.get(`${API_URL}/recieved-likes/${userId}`);
      const recievedLikes = response.data.recievedLikes;
      setLikes(recievedLikes);
    } catch (error) {
      console.log("Error in fetching recieved likes ", error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchReceivedLikes();
    }
  }, [userId]);

  return (
    <div
      style={{
        padding: "2rem",
        boxSizing: "border-box",
        width: "100%",
        margin: "auto",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          fontWeight: "light",
          textAlign: 'center',
          marginBottom: "1rem",
        }}
      >
        persons who Likes You
      </div>
      {likes.length === 0 ? (
        <div
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          No likes yet
        </div>
      ) : null}
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
            maxWidth: "400px",
            margin: "1rem",
          }}
        >
          {likes.length > 0 ? (
            <div
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                navigation("/user/handle-like", {
                  state: {
                    name: likes[0].userId?.firstName,
                    image: likes[0].image,
                    imageUrls: likes[0].userId?.imageUrls,
                    prompts: likes[0].userId?.prompts,
                    userId: userId,
                    selectedUserId: likes[0].userId?._id,
                    likes: likes?.length,
                  },
                });
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  backgroundColor: "#f0f0f0",
                  padding: "0.5rem",
                  borderRadius: "5px",
                }}
              >
                Liked your photo
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  margin: "1rem 0",
                }}
              >
                {likes[0].userId?.firstName}
              </div>
              <img
                src={likes[0].userId?.imageUrls[0]}
                alt=""
                style={{
                  width: "100%",
                  height: "80%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          ) : null}
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            margin: "1rem",
          }}
        >
          {likes.length > 0 ? (
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Up Next
            </div>
          ) : null}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
            }}
          >
            {likes.slice(1).map((like, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "1rem",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  alert("You can only view the first like for now");
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    backgroundColor: "#f0f0f0",
                    padding: "0.5rem",
                    borderRadius: "5px",
                  }}
                >
                  {like.comment ? like.comment : "Liked your photo"}
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    margin: "1rem 0",
                  }}
                >
                  {like.userId?.firstName}
                </div>
                <img
                  src={like.userId?.imageUrls[0]}
                  alt=""
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikesScreen;