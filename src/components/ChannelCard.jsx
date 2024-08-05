import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';


const ChannelCard = ({ channel, marginTop }) => {
  return (
    <Box
      sx={{ 
        boxShadow: "none", 
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: '356px', md: "300px" },
        height: "326px",
        margin: "auto",
        marginTop: {marginTop}
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent sx={{ color: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
          <CardMedia
            image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={"channel-image"}
            sx={{ borderRadius: "50%", height: "180px", width: "180px", mb: 2, border: "1px solid #e3e3e3"}}
          />
          <Typography variant="h6">
            {channel?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "white", ml: "2" }} />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard