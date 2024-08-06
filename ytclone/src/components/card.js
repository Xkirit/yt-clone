import React from 'react'

function Card(data) {
  // console.log(data)
  // // console.log(data.videoThumbnail)
  // console.log(data.data.videoDuration)
  return (
    <div className='w-55 h-50 flex-gap-1 flex-col'>
      <div className='relative'>
      
          <span className='absolute  text-sm bg-zinc-950 top-left-24 px-2 py-0.5 z-10'>
            {data.data.videoDuration}
          </span>
          <img src={data.data.videoThumbnail} alt="Thumbnail " className='h-50 w-60 rounded-xl'/>
        <div className='flex py-2'>
          <div>
            <a href='#'> <img src={data.data.channelInfo.image} alt="Channel Image" className=' size-7 rounded-full'/>
            </a>
          </div>
          <div className='pl-2'>
            <h1 className='text-sm'>
              <a href={data.data.videoLink}>
                {data.data.videoTitle}
              </a>
            </h1>
            <div className='text-zinc-300 text-xs'>
              <div>
                <a href="#">
                  {data.data.channelInfo.name}
                </a>
              </div>
              <div>
                <span>
                  {data.data.videoViews} views {data.data.videoAge}
                </span>
                {/* <span>
                  {data.data.videoAge}
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Card
