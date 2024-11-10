import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Video() {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" width="100%" height="400px">
      <Text fontSize="lg" fontWeight="bold" mb={2}>Video Tutorial</Text>
      <Box as="iframe"
        width="100%"
        height="320px"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
        title="Tutorial Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
}

export default Video;
