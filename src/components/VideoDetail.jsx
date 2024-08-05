import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Videos } from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {

  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState({});
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,contentDetails,statistics&id=${id}`)
      .then(data=>{
        console.log(data.items[0])
        setVideoDetail(data.items[0])
      })

    fetchFromAPI(`search?part=snippet&ralatedToVideoId=${id}&type=video`)
      .then((data) => {
        console.log(data.items);
        setVideos(data.items)
      })
  }, [id])
  

  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
            <Box sx={{width: "100%", position: "sticky", top: "85px", height: "100%"}}>
              <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography
                variant='h5'
                fontWeight={"bold"}
                color={"white"}
                p={2}
              >
                {videoDetail?.snippet?.title}
              </Typography>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                sx={{ color: "#FFF", py: 1, px: 2 }}
              >
                <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                  <Typography
                    variant='subtitle2'
                    fontWeight={"bold"}
                    color={"white"}
                    p={2}
                  >
                    {videoDetail?.snippet?.channelTitle}
                    <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px"}} />
                  </Typography>
                </Link>
                <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
                  <Typography
                    variant='subtitle2'
                    fontWeight={"bold"}
                    color={"white"}
                    sx={{ opacity: 0.7 }}
                  >
                    {parseInt(videoDetail?.statistics?.viewCount)?.toLocaleString()} views
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    fontWeight={"bold"}
                    color={"white"}
                    sx={{ opacity: 0.7 }}
                  >
                    {parseInt(videoDetail?.statistics?.likeCount)?.toLocaleString()} liked
                  </Typography>
                </Stack>
              </Stack>
            </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Videos videos={videos} direction={"column"}/>
       </Box>
      </Stack>
      
    </Box>
  )
}

export default VideoDetail