import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {ParseData} from "../../utils/parseData";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY

export const getHomePageVideos = createAsyncThunk(
  "youtube/app/homePageVideos",
  async (isNext, { getState }) => {
    const {
      YoutubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="penguinz0"&key=${API_KEY}&part=snippet&type=video`
    );
    const items= response.data.items;
    const parsedData= await ParseData(items);

    return {parsedData:[...videos,...parsedData],nextPageToken:nextPageTokenFromState}

    // const parsedData=await ParseData(response.data.items);
    // console.log('ParsedData',parsedData);
    
  }
  
 
);
