import axios from 'axios'
import React from 'react'

const DashboardPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        // cache: 'no-store'
        next:{revalidate: 10}
    })

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    const queryData = await res.json()

  return (
    <div>DashboardPage
        <p>{JSON.stringify(queryData)}</p>
    </div>
  )
}

export default DashboardPage