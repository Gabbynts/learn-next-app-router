import { Metadata } from 'next'
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

type Post = {
  userId: number
  id: number
  title: string
  body: string
}


export async function generateMetada ({params}:PostProps):Promise<Metadata>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await res.json() as Post
  return {
    title: data.title
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