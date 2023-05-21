import React from 'react'
import axios from 'axios'

const wait = (ms:number)=> new Promise((resolve) => setTimeout(resolve, ms))

const DashboardPage = async () => {

  await wait(5000)

  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

  return (
    <div>
      <p>Data</p>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default DashboardPage