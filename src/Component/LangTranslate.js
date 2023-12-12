import React from 'react'
import './Component.css';
import ComponentCart from "../Cart/ComponentCart";

export default function LangTranslate() {
  return (
    <div>
      <ComponentCart
        mainText="Language Translate"
        bodyText="Language Translate..."
      />
      <div className="ComponentBody">
      Language
      </div>
    </div>
  )
}
