import React from 'react';
import { Editor } from '@monaco-editor/react'; 
const ExamEditor = ({ code, setCode, language }) => {
  return (
    <div className="editor-container">
      <Editor
        height="500px"
        width="500px"
        language={language.toLowerCase()}
        value={code}
        onChange={setCode}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
        theme="vs-dark"
        beforeMount={(monaco) => {
          monaco.editor.defineTheme('custom-dark', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
              'editor.background': '#1a1c20',
              'editor.lineNumbers': '#666',
            }
          });
        }}
        onMount={(editor) => {
          editor.updateOptions({ theme: 'custom-dark' });
        }}
      />
    </div>
  );
};

export default ExamEditor;