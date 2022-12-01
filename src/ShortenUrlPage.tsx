import React, { useState } from "react";
import "./App.css";
import InputUrl from "./Inputurl";
import { Header } from "./Header";

function ShortenUrlPage() {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div>
      <div className="App">
        <Header />
        {/* shorten */}
        <h1>Short your URL here </h1>

        <InputUrl setShortUrl={setShortUrl} />

        <section>
          ShortURL is a free tool to shorten a URL or reduce a link Use our URL
          Shortener to create a shortened link making it easy to remember
        </section>

        {/* unary operator */}
        {shortUrl ? (
          <a href={shortUrl}>{shortUrl}</a>
        ) : (
          <p>Your URL will appear here</p>
        )}
      </div>
    </div>
  );
}

export default ShortenUrlPage;
