import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../components/card';

function Home() {
  const dispatch =useAppDispatch();
  const videos =useAppSelector((state)=>state.YoutubeApp.videos)
  useEffect(()=>{

    dispatch(getHomePageVideos(false));
    // console.log(videos);
  },[dispatch])
  return (
    <div className=' max-h-screen overflow-auto scrollbar-hide'>
      <div style={{height:"7.5vh"}}>
        <Navbar/>
      </div>
      <div className='flex' style={{height:"92.5vh"}}>
      <Sidebar/>
        {
          videos.length ? (
            <InfiniteScroll 
            dataLength={videos.length} 
            next={()=> dispatch(getHomePageVideos(true))}
            hasMore={videos.length<500}
            loader={<Spinner/>}
            height={650}
            >
              <div className="grid gap-x-4 grid-cols-4 py-3 pr-1 pl-8">
                {videos.map((item)=>{
                  return <Card data={item} key={item.videoId}/>
                })}
              </div>

            </InfiniteScroll>
          ):(
            <Spinner/>
          )
        }
      </div>
    </div>
  )
}

export default Home
