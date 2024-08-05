import React from 'react';
import { Link } from 'react-router-dom';
import { CardMedia, CardContent, Card, Typography, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet} }) => {

  
  return (
    <Card 
      sx={{ width: { xs: '100%', sm: '358px', md: "300px", }, boxShadow: "none", borderRadius: 3 }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          alt={snippet?.title}
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
          sx={{ height: 180, width: { xs: '100%'} }}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: "#1e1e1e",height: 108 }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography 
            variant='subtitle1' 
            fontWeight={"bold"}
            color="#FFF"
          >
            {snippet?.title?.length > 40 ? snippet?.title?.slice(0, 40).concat("...") : snippet?.title || demoVideoTitle}
          </Typography>
        </Link>
        <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <Typography 
            variant='subtitle2' 
            fontWeight={"bold"}
            color="gray"
            sx={{ mt: 1, "&:hover" : { color: "white" }}}
          >
             {snippet?.channelTitle || demoChannelTitle}
             <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          <Typography
            variant='subtitle2'
            fontWeight={"bold"}
            color="white"
            sx={{ backgroundColor: "red", mt: 1, textAlign: "center", width: "25%" }}
          >
            {snippet.liveBroadcastContent === "live" ? "LIVE" : ""}
          </Typography>
        </Link>
      </CardContent>

    </Card>
  )
}

export default VideoCard