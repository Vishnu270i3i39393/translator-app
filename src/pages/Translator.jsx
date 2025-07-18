const handleTranslate = async () => {
  if (!text.trim()) {
    alert('Please enter text to translate.');
    return;
  }

  try {
    const response = await axios.post(
      'https://libretranslate.com/translate',
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
