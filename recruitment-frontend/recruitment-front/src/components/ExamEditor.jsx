import React from 'react';
import { Editor } from '@monaco-editor/react'; // Utilisez 'Editor' au lieu de 'MonacoEditor'

// Fonction pour mapper les noms de langages avec les noms attendus par Monaco Editor
const mapLanguageToMonaco = (langage) => {
  switch (langage.toLowerCase()) {
    case 'java':
      return 'java';
    case 'python':
      return 'python';

    default:
      return 'plaintext'; // Défaut si le langage n'est pas supporté
  }
};

const ExamEditor = ({ code, setCode, language }) => {
  const mappedLanguage = mapLanguageToMonaco(language); // Transformer le langage ici

  return (
    <Editor
      height="500px"
      language={mappedLanguage} // Utilisez le langage mappé
      value={code}
      onChange={(newValue) => setCode(newValue)}
      options={{ selectOnLineNumbers: true }}
      theme="vs-dark"
    />
  );
};

export default ExamEditor;
