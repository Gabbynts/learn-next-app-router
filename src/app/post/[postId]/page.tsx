import React from 'react'

type PostProps={
    params:{
        postId: string
    }
}

export async function generateStaticParams(){
  const posts = [
    'post-one',
    'post-two'
  ]

  return posts.map((post)=>({
    postId: post
  }))
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