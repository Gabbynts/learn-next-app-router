import React from 'react'

type PostProps={
    params:{
        postId: string
    }
}

const Post = async ({params}:PostProps) => {

  console.log(params)

  return (
    <div>
        <p>Post</p>
        <div>params: {params.postId}</div>
    </div>
  )
}

export default Post