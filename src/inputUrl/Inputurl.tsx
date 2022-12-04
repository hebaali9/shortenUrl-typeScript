import React, { useState } from "react";
import "./InputURL.css";
import { store } from "../store";
import { Input_Url_Api } from "../actions";
import { useSelector } from "react-redux";

function UrlInput(props: any) {
  const [longUrl, setLongUrl] = useState("");
  //const token = store.getState().token;
  //const token = useSelector((state) => state.token);
  interface RootState {
    token: string;
  }
  const selectToken = (state: RootState) => state.token;
  const token = useSelector(selectToken);

  function shortenUrl(event: React.FormEvent) {
    event.preventDefault();

    // instead of sending props to the action, send the callback needed only. Use the same approach as in the register action
    store.dispatch(Input_Url_Api({ token, longUrl, props }));
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
