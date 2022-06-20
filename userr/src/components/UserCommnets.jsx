import React from 'react'
import { useParams } from 'react-router-dom'
function UserCommnets() {
const {postId}=useParams()

  return (
    <div>
      {postId}
    </div>
  )
}

export default UserCommnets
