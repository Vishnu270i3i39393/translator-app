import { useState } from 'react';
import axios from 'axios';

const Translator = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');
  const [lang, setLang] = useState('es');

  const handleTranslate = async () => {
    if (!text.trim()) {
      alert('Please enter text to translate.');
      return;
    }

    try {
      const response = await axios.post(
        'https://corsproxy.io/?https://libretranslate.de/translate',
        {
          q: text,
          source: 'en',
          target: lang,
          format: 'text'
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      setTranslated(response.data.translatedText);
    } catch (error) {
      console.error('Translation failed:', error);
      alert('Could not translate. Try again later.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Text Translator</h1>

      <textarea
        className="w-full p-3 border rounded mb-4"
        rows={4}
        placeholder="Enter English text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="mb-4">
        <label className="mr-2 font-semibold">Target Language:</label>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="es">Spanish</option>
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="ar">Arabic</option>
          <option value="ru">Russian</option>
        </select>
      </div>

      <button
        onClick={handleTranslate}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Translate
      </button>

      {translated && (
        <div className="mt-6 bg-white p-4 border rounded shadow">
          <h2 className="font-semibold mb-2">Translated Text:</h2>
          <p>{translated}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
