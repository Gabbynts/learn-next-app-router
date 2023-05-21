import React from 'react'
import axios from 'axios'
import { AuthRequiredError } from '@/app/lib/exceptions'

const wait = (ms:number)=> new Promise((resolve) => setTimeout(resolve, ms))

const DashboardPage = async () => {

  await wait(1000)

  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

  const session = null

  if(!session){
    throw new AuthRequiredError()
  }

  return (
    <div>
      <p>Data</p>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default DashboardPage