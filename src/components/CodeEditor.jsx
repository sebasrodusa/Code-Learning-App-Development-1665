import React from 'react';

const CodeEditor = ({ language, code, onChange }) => {
  const getLanguageClass = (lang) => {
    const classes = {
      python: 'language-python',
      javascript: 'language-javascript',
      html: 'language-html',
      css: 'language-css',
      lua: 'language-lua'
    };
    return classes[lang] || 'language-text';
  };

  return (
    <div className="h-96 relative">
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full h-full p-4 font-mono text-sm bg-gray-900 text-gray-100 border-none outline-none resize-none ${getLanguageClass(language)}`}
        placeholder={`Write your ${language} code here...`}
        spellCheck={false}
        style={{
          tabSize: 2,
          fontSize: '14px',
          lineHeight: '1.5'
        }}
      />
      <div className="absolute top-2 right-2 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
        {language.toUpperCase()}
      </div>
    </div>
  );
};

export default CodeEditor;