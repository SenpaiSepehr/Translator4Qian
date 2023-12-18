// translator.js

async function translate() {
    const inputText = document.getElementById('inputText').value;

    const apiKey = 'YOUR_OPENAI_API_KEY';
    const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                prompt: `Translate the following English text to Japanese: "${inputText}"`,
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

// You can add more functions or code as needed for your app
