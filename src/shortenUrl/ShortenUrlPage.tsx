import React, { useState } from "react";
import "./App.css";
import InputUrl from "../inputUrl/Inputurl";
import { Header } from "../header/Header";

function ShortenUrlPage() {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div>
      <div className="app">
        <Header />
        <h1> shorten your URL here </h1>
        <InputUrl setShortUrl={setShortUrl} />

        <section>
          ShortURL is a free tool to shorten a URL or reduce a link Use our URL
          Shortener to create a shortened link making it easy to remember
        </section>

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
