'use client'

import Link from "next/link"

const Error = ({
    error,
    reset
}: {
    error: Error
    reset: ()=> void
}) => {
  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <div className="">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-3xl text-blue-600 lg:text-6xl">
            404
          </h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-white md:text-3xl">
            <span className="text-red-500">Oops!</span> Page{" "}
            {error.message}
          </h6>
{/* 
          <p className="mb-4 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p> */}

          <Link
            href="/"
            className="px-5 py-2 rounded-md text-blue-100 bg-blue-600 hover:bg-blue-700"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default Error