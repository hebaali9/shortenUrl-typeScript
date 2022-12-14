import React, { useState } from "react";
import "./InputURL.css";
import { store } from "../store";
import { Input_Url_Api } from "../actions";
import { useSelector } from "react-redux";

type RootState = {
  token: string;
};
// type the props
function UrlInput(props: any) {
  const [longUrl, setLongUrl] = useState("");

  const token = useSelector((state: RootState) => state.token);

  function shortenUrl(event: React.FormEvent) {
    event.preventDefault();

    store.dispatch(Input_Url_Api({ token, longUrl }, props.setShortUrl));
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
