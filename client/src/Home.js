import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container  mx-auto flex justify-center items-center h-screen">
      <Link to="/chat">
        <button className=" text-2xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-8 px-16 rounded">
          Start Chat on WorldCup.io  
        </button>
      </Link>
    </div>
  )
}

export default Home
