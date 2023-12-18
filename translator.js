async function translate() {
    const inputText = document.getElementById('inputText').value;
    const inputLanguage = document.getElementById('inputLanguage').value;
    const outputLanguage = document.getElementById('outputLanguage').value;

    const apiKey = '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';
    const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                prompt: `Translate the following text from ${inputLanguage} to ${outputLanguage}: "${inputText}"`,
                max_tokens: 150, // Adjust as needed
            }),
        });

        const data = await response.json();
        const translatedText = data.choices[0].text.trim();
        document.getElementById('outputText').value = translatedText;
    } catch (error) {
        console.error('Translation error:', error);
    }
}
