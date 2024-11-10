import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function InstructionText() {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
      <Text fontSize="lg" fontWeight="bold" mb={2}>Instructions</Text>
      <Text>
        Follow the instructions to write and run your code in the editor. Choose the language from the dropdown, enter your code, and press "Run Code" to see the output.
      </Text>
    </Box>
  );
}

export default InstructionText;
