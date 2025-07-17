import { useState, useCallback, useEffect } from 'react';

const RandomStringGenerator = () => {
  const [randomString, setRandomString] = useState('');

  const generateRandomString = useCallback(() => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
      const rand = Math.floor(Math.random() * charset.length);
      result += charset[rand];
    }
    setRandomString(result);
  }, []);

  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Random String Generator</h1>
      <div className="text-lg p-4 bg-white border rounded mb-4">{randomString}</div>
      <button onClick={generateRandomString} className="bg-green-600 text-white px-4 py-2 rounded">
        Generate Again
      </button>
    </div>
  );
};

export default RandomStringGenerator;
