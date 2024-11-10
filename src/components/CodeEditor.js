import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { Box, Select, Button, Text, Grid, GridItem, VStack } from '@chakra-ui/react';
import ConsoleOutput from './ConsoleOutput';
import InstructionText from './InstructionText';
import Video from './Video';

function CodeEditor() {
  const [code, setCode] = useState('// Escribe tu código aquí');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('csharp');

  const getLanguageExtension = () => {
    switch (language) {
      case 'javascript':
        return javascript();
      case 'python':
        return python();
      case 'java':
        return java();
      case 'c':
      case 'cpp':
        return cpp();
      case 'csharp':
        return [];
      default:
        return [];
    }
  };

  const runCode = async () => {
    try {
      const response = await fetch('https://localhost:7098/api/ExecuteCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language })
      });
      const result = await response.json();
      setOutput(result.output);
    } catch (error) {
      setOutput('Error: ' + error.message);
    }
  };

  return (
    <Grid
      templateAreas={{
        base: `"left" "right" "bottom"`,
        md: `"left right" "bottom bottom"`
      }}
      gridTemplateRows={{ base: 'auto', md: '1fr auto' }}
      gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gap={4}
      p={4}
    >
      <GridItem area="left">
        <VStack spacing={4}>
          <Video />
          <InstructionText />
        </VStack>
      </GridItem>
      <GridItem area="right">
        <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold" mb={4}>Editor de Código</Text>
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            mb={4}
            placeholder="Selecciona el lenguaje"
          >
            <option value="csharp">C#</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
          </Select>
          <Box mb={4}>
            <CodeMirror
              value={code}
              height="352px"
              extensions={getLanguageExtension()}
              onChange={(value) => setCode(value)}
            />
          </Box>
          <Button colorScheme="teal" onClick={runCode} mb={4}>
            Ejecutar Código
          </Button>
        </Box>
      </GridItem>
      <GridItem area="bottom">
        <ConsoleOutput output={output} />
      </GridItem>
    </Grid>
  );
}

export default CodeEditor;
