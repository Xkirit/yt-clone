import axios from 'axios';
import React from 'react';
import ConvertRawtoString from './convertRawtoString';
import { ParseVideoDuration } from './parseVideoDuration'; // Correct the import
import TimeSince from './timeSince';

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const ParseData = async (items) => {
  try {
    const videoIds = [];
    const channelIds = [];

    items.forEach(item => {
      channelIds.push(item.snippet.channelId);
      videoIds.push(item.id.videoId); // Corrected from videoIds to videoId
    });

    const channelIdsString = channelIds.join(",");
    const videoIdsString = videoIds.join(",");

    // Fetch channel data
    const {
      data: { items: channelsData },
    } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIdsString}&key=${API_KEY}`);

    const parsedChannelsData = channelsData.map(channel => ({
      id: channel.id,
      image: channel.snippet.thumbnails.default.url,
    }));

    // Fetch video data
    const {
      data: { items: videosData },
    } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIdsString}&key=${API_KEY}`);

    console.log('videosData:', videosData); // Debugging: Check the video data structure

    const parseData = items.map((item, index) => {
      const { image: channelImage } = parsedChannelsData.find(data => data.id === item.snippet.channelId) || {};

      const videoDuration = videosData[index]?.contentDetails?.duration;
      console.log('duration:', videoDuration); // Debugging: Check the duration

      return {
        videoId: item.id.videoId, // Corrected
        videoTitle: item.snippet.title,
        videoDescription: item.snippet.description,
        videoThumbnail: item.snippet.thumbnails.medium.url,
        videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        videoDuration: ParseVideoDuration(videoDuration),
        videoViews: ConvertRawtoString(videosData[index].statistics.viewCount),
        videoAge: TimeSince(new Date(item.snippet.publishedAt)),
        channelInfo: {
          id: item.snippet.channelId,
          image: channelImage,
          name: item.snippet.channelTitle,
        },
      };
    });

    return parseData;

  } catch (err) {
    console.log(err);
  }
};
