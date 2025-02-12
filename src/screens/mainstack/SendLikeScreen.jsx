import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import Lottie from "react-lottie"
import loveAnimation from "../../assets/love.json"
import API_URL from "../../config"

const SendLikeScreen = () => {
  const [comment, setComment] = useState("")
  const navigation = useNavigate()
  const location = useLocation()
  const userId = location.state.userId

  const likeProfile = async () => {
    try {
      const response = await axios.post(`${API_URL}/like-profile`, {
        userId: location.state.userId,
        likedUserId: location.state.likedUserId,
        image: location?.state?.image,
        comment: comment,
      })
      if (response.status === 200) {
        navigation(-1)
      }
    } catch (error) {
      console.error("Error liking profile:", error)
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loveAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div style={{
      padding: '70px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <h1 style={{
        fontSize: '16px',
        fontWeight: 'bold',
        padding: 20,
      }}>
        {location?.state?.name}
      </h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        <img
          src={location?.state?.image}
          alt={`${location?.state?.name}'s photo`}
          style={{
            width: '100%',
            maxWidth: '350px',
            height: '450px',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '400px',
        }}>
          <Lottie
            options={defaultOptions}
            height={260}
            width={310}
          />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
            style={{
              width: '100%',
              padding: '10px 15px',
              marginBottom: '10px',
              border: '2px solid #ccc',
              borderRadius: '8px',
              fontSize: '16px',
            }}
            autoFocus
          />
          <button 
            onClick={likeProfile}
            style={{
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '9999px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          >
            Send Like
          </button>
        </div>
      </div>
    </div>
  )
}

export default SendLikeScreen