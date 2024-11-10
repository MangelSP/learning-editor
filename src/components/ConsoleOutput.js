import React from 'react';
import { Box, Text, Textarea } from '@chakra-ui/react';

function ConsoleOutput({ output }) {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" mt={4}>
      <Text fontSize="lg" fontWeight="bold" mb={2}>Console Output:</Text>
      <Textarea
        value={output}
        isReadOnly
        placeholder="Output will appear here"
        height="150px"
      />
    </Box>
  );
}

export default ConsoleOutput;
