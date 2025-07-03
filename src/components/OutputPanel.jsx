import React from 'react';

const OutputPanel = ({ output, language, code }) => {
  const renderOutput = () => {
    if (!output) {
      return (
        <div className="text-gray-500 italic p-4">
          Click "Run Code" to see output here...
        </div>
      );
    }

    if (language === 'html') {
      return (
        <div className="h-full">
          <iframe
            srcDoc={code}
            className="w-full h-full border-none"
            title="HTML Preview"
            sandbox="allow-scripts"
          />
        </div>
      );
    }

    if (language === 'css') {
      const htmlWithCSS = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>${code}</style>
        </head>
        <body>
          <div class="container">
            <h1>CSS Preview</h1>
            <p>This is how your CSS looks when applied!</p>
            <button>Sample Button</button>
          </div>
        </body>
        </html>
      `;
      
      return (
        <div className="h-full">
          <iframe
            srcDoc={htmlWithCSS}
            className="w-full h-full border-none"
            title="CSS Preview"
            sandbox="allow-scripts"
          />
        </div>
      );
    }

    return (
      <pre className="p-4 font-mono text-sm bg-gray-900 text-green-400 h-full overflow-auto whitespace-pre-wrap">
        {output}
      </pre>
    );
  };

  return (
    <div className="h-96 relative">
      {renderOutput()}
    </div>
  );
};

export default OutputPanel;