import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import CodeEditor from './components/CodeEditor';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box p={4} maxW="1200px" mx="auto">
        <CodeEditor />
      </Box>
    </ChakraProvider>
  );
}

export default App;
