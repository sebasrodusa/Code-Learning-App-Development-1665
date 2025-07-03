import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CodeEditor from '../components/CodeEditor';
import OutputPanel from '../components/OutputPanel';

const { FiPlay, FiRefreshCw, FiDownload, FiSettings } = FiIcons;

const Playground = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const languages = [
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'javascript', name: 'JavaScript', icon: '⚡' },
    { id: 'html', name: 'HTML', icon: '🌐' },
    { id: 'css', name: 'CSS', icon: '🎨' },
    { id: 'lua', name: 'Lua', icon: '🌙' }
  ];

  const getDefaultCode = (language) => {
    const defaults = {
      python: `# Welcome to Python Playground
print("Hello, World!")

# Try some basic Python
name = "CodeLearn"
print(f"Welcome to {name}!")

# Simple calculation
result = 10 + 5
print(f"10 + 5 = {result}")`,
      javascript: `// Welcome to JavaScript Playground
console.log("Hello, World!");

// Try some basic JavaScript
const name = "CodeLearn";
console.log(\`Welcome to \${name}!\`);

// Simple calculation
const result = 10 + 5;
console.log(\`10 + 5 = \${result}\`);`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Playground</title>
</head>
<body>
    <h1>Welcome to HTML Playground</h1>
    <p>This is a paragraph.</p>
    <button onclick="alert('Hello!')">Click Me</button>
</body>
</html>`,
      css: `/* Welcome to CSS Playground */
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

h1 {
    color: #333;
    text-align: center;
}`,
      lua: `-- Welcome to Lua Playground
print("Hello, World!")

-- Try some basic Lua
local name = "CodeLearn"
print("Welcome to " .. name .. "!")

-- Simple calculation
local result = 10 + 5
print("10 + 5 = " .. result)`
    };
    return defaults[language] || '';
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setCode(getDefaultCode(language));
    setOutput('');
  };

  const runCode = () => {
    setIsRunning(true);
    
    // Simulate code execution
    setTimeout(() => {
      if (selectedLanguage === 'javascript') {
        try {
          const logs = [];
          const originalLog = console.log;
          console.log = (...args) => logs.push(args.join(' '));
          
          // Simple evaluation for demo purposes
          eval(code);
          
          console.log = originalLog;
          setOutput(logs.join('\n') || 'Code executed successfully!');
        } catch (error) {
          setOutput(`Error: ${error.message}`);
        }
      } else if (selectedLanguage === 'html') {
        setOutput('HTML code is ready to preview!');
      } else if (selectedLanguage === 'css') {
        setOutput('CSS styles applied successfully!');
      } else {
        setOutput(`${selectedLanguage} code executed successfully!\n\nNote: This is a demo output. In a real environment, this would execute your ${selectedLanguage} code.`);
      }
      setIsRunning(false);
    }, 1000);
  };

  const resetCode = () => {
    setCode(getDefaultCode(selectedLanguage));
    setOutput('');
  };

  React.useEffect(() => {
    setCode(getDefaultCode(selectedLanguage));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Code Playground
            </h1>
            <p className="text-xl text-gray-600">
              Write, run, and experiment with code in real-time
            </p>
          </div>

          {/* Language Selector */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => handleLanguageChange(lang.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                    selectedLanguage === lang.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{lang.icon}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Toolbar */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="flex items-center space-x-2 px-4 py-2 bg-secondary-600 text-white rounded-md hover:bg-secondary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <SafeIcon icon={isRunning ? FiRefreshCw : FiPlay} className={`w-4 h-4 ${isRunning ? 'animate-spin' : ''}`} />
                  <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                </button>
                
                <button
                  onClick={resetCode}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  <SafeIcon icon={FiRefreshCw} className="w-4 h-4" />
                  <span>Reset</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <SafeIcon icon={FiDownload} className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <SafeIcon icon={FiSettings} className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Editor and Output */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b">
                <h3 className="font-semibold text-gray-900">Code Editor</h3>
              </div>
              <CodeEditor
                language={selectedLanguage}
                code={code}
                onChange={setCode}
              />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b">
                <h3 className="font-semibold text-gray-900">Output</h3>
              </div>
              <OutputPanel
                output={output}
                language={selectedLanguage}
                code={code}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Playground;