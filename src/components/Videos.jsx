import React from 'react';
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index"

const Videos = ({ videos, direction }) => {
    console.log({ videos })
  return (
    <Stack direction={ direction || "row" } flexWrap={"wrap"} gap={2} justifyContent={"center"} alignItems={"center"} >
        {videos?.map((item, i) => (
            <Box key={i} >
               {item.id?.videoId && <VideoCard video={item} />}
               {item.id?.channelId && <ChannelCard channel={item} />} 
            </Box>
        ))}
    </Stack>
  )
}

export default Videos