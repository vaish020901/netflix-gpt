import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black h-full w-screen z-10">
      <h1 className="text-6xl font-bold mb-4 ">
        {title}
      </h1>
      <p className="py-4 text-lg mb-4 w-1/3 line-clamp-5">
        {overview}
      </p>
      <div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md font-bold hover:bg-opacity-80">
           Play
        </button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded-md font-bold hover:bg-opacity-80 ml-4">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle