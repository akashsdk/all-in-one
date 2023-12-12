import React, { useState } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

export default function LangTranslate() {
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translateText = async () => {
    // Replace 'YOUR_API_KEY' with your actual Google Cloud API key
    const apiKey = "YOUR_API_KEY";
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: textToTranslate,
          target: "bn", // 'bn' is the language code for Bangla
        }),
      });

      const data = await response.json();
      setTranslatedText(data.data.translations[0].translatedText);
    } catch (error) {
      console.error("Error translating:", error);
    }
  };

  return (
    <div>
      <ComponentCart
        mainText="Language Translate"
        bodyText="Language Translate..."
      />
      <div className="ComponentBody">
        <div>
          <h2>English to Bangla Translator</h2>
          <textarea
            value={textToTranslate}
            onChange={(e) => setTextToTranslate(e.target.value)}
            placeholder="Enter text to translate..."
            rows={4}
            cols={50}
          ></textarea>
          <br />
          <button onClick={translateText}>Translate</button>
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      </div>
    </div>
  );
}
