import React, { useState } from "react";
//import "./InputURL.css";
import { store } from "../store";
import { inputUrl } from "../actions";
import { useSelector } from "react-redux";

type RootState = {
  token: string;
};
// type the props
function UrlInput(props: { setShortUrl: (shortUrl: string) => void }) {
  const [longUrl, setLongUrl] = useState("");

  const token = useSelector((state: RootState) => state.token);

  function shortenUrl(event: React.FormEvent) {
    event.preventDefault();

    store.dispatch(inputUrl({ token, longUrl }, props.setShortUrl));
  }

  return (
    <form onSubmit={shortenUrl} className="url-form">
      <input
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="paste the link here"
      />
      <button type="submit">Shorten URL</button>
    </form>
  );
}

export default UrlInput;
