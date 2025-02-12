// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import LoginRoute from "./LoginRoute";
// import UserRoute from "./UserRoute";
// import {
//   ChatScreen,
//   HandleLikeScreen,
//   HomeScreen,
//   LikesScreen,
//   ProfileScreen,
//   Edit,
//   SendLikeScreen,
//   BasicInfo,
//   BirthScreen,
//   DatingType,
//   EmailScreen,
//   GenderScreen,
//   HomeTownScreen,
//   LocationScreen,
//   LoginScreen,
//   LookingFor,
//   NameScreen,
//   PasswordScreen,
//   PhotoScreen,
//   PreFinalScreen,
//   PromptsScreen,
//   ShowPromptsScreen,
//   TypeScreen,
//   ChatRoom,
//   AdminDashboard,
//   Call,
//   CreatePost,
//   Withdraw,
//   ViewPosts,
//   Transfer,
//   Recharge,
// } from "../screens/index";

// const Navigation = () => {
//   return (
//     <BrowserRouter>

//       <Routes>

//         <Route path="/" element={<LoginRoute />}>
//           <Route path="" element={<LoginScreen />} />
//           {/* <Route path="login" element={<LoginScreen />} /> */}
//           <Route path="basic" element={<BasicInfo />} />
//           <Route path="birth" element={<BirthScreen />} />
//           <Route path="dating" element={<DatingType />} />
//           <Route path="email" element={<EmailScreen />} />
//           <Route path="gender" element={<GenderScreen />} />
//           <Route path="hometown" element={<HomeTownScreen />} />
//           <Route path="location" element={<LocationScreen />} />
//           <Route path="looking-for" element={<LookingFor />} />
//           <Route path="name" element={<NameScreen />} />
//           <Route path="password" element={<PasswordScreen />} />
//           <Route path="photo" element={<PhotoScreen />} />
//           <Route path="pre-final" element={<PreFinalScreen />} />
//           <Route path="prompts" element={<PromptsScreen />} />
//           <Route path="show-prompts" element={<ShowPromptsScreen />} />
//           <Route path="type" element={<TypeScreen />} />
//         </Route>

//         <Route path="/login" element={<LoginRoute />} />
//         <Route path="/user" element={<UserRoute />}>
//           <Route path="" element={<HomeScreen />} />

//           <Route path="chat" element={<ChatScreen />} />
//           <Route path="handle-like" element={<HandleLikeScreen />} />

//           {/* <Route path="home" element={<HomeScreen />} /> */}
//           <Route path="likes" element={<LikesScreen />} />
//           <Route path="profile" element={<ProfileScreen />} />
//           <Route path="Edit" element={<Edit />} />
//           <Route path="send-like" element={<SendLikeScreen />} />
//           <Route path="chat-room" element={<ChatRoom />} />
//           <Route path="chat-room" element={<ChatRoom />} />
//           <Route path="chat-room" element={<ChatRoom />} />
//           <Route path="chat-room" element={<ChatRoom />} />
//           <Route path="chat-room" element={<ChatRoom />} />

//           {/* admin routes defined*/}
//           <Route path="/admin" element={<AdminDashboard />} />
          
            
    


//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Navigation;



import React from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginRoute from "./LoginRoute";
import UserRoute from "./UserRoute";

// Import screens for admin routes
import AdminAuth from "./adminAuth";



// Import other user screens as before
import {
  ChatScreen,
  HandleLikeScreen,
  HomeScreen,
  LikesScreen,
  ProfileScreen,
  Edit,
  SendLikeScreen,
  BasicInfo,
  BirthScreen,
  DatingType,
  EmailScreen,
  GenderScreen,
  HomeTownScreen,
  LocationScreen,
  LoginScreen,
  LookingFor,
  NameScreen,
  PasswordScreen,
  PhotoScreen,
  PreFinalScreen,
  PromptsScreen,
  ShowPromptsScreen,
  TypeScreen,
  ChatRoom,
  Call,
  CreatePost,
  Withdraw,
  ViewPosts,
  Transfer,
  Recharge,
  AdminDashboard,
} from "../screens/index";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User routes */}
        <Route path="/" element={<LoginRoute />}>
          <Route path="" element={<LoginScreen />} />
          <Route path="basic" element={<BasicInfo />} />
          <Route path="birth" element={<BirthScreen />} />
          <Route path="dating" element={<DatingType />} />
          <Route path="email" element={<EmailScreen />} />
          <Route path="gender" element={<GenderScreen />} />
          <Route path="hometown" element={<HomeTownScreen />} />
          <Route path="location" element={<LocationScreen />} />
          <Route path="looking-for" element={<LookingFor />} />
          <Route path="name" element={<NameScreen />} />
          <Route path="password" element={<PasswordScreen />} />
          <Route path="photo" element={<PhotoScreen />} />
          <Route path="pre-final" element={<PreFinalScreen />} />
          <Route path="prompts" element={<PromptsScreen />} />
          <Route path="show-prompts" element={<ShowPromptsScreen />} />
          <Route path="type" element={<TypeScreen />} />
        </Route>

        <Route path="/login" element={<LoginRoute />} />
        <Route path="/user" element={<UserRoute />}>
          <Route path="" element={<HomeScreen />} />
          <Route path="chat" element={<ChatScreen />} />
          <Route path="handle-like" element={<HandleLikeScreen />} />
          <Route path="likes" element={<LikesScreen />} />
          <Route path="profile" element={<ProfileScreen />} />
          <Route path="edit" element={<Edit />} />
          <Route path="send-like" element={<SendLikeScreen />} />
          <Route path="chat-room" element={<ChatRoom />} />
          <Route path="call" element={<Call />} />
          <Route path="createPost" element={<CreatePost />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="view-posts" element={<ViewPosts />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="recharge" element={<Recharge />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin">
          <Route path="login" element={<AdminAuth />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="CreatePost" element={<CreatePost/>} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
