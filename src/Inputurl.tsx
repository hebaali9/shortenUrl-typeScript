import React, { useState } from "react";
import "./InputURL.css";
import { store } from "./Store";
import { Input_Url_Api } from "./Actions";

function InputUrl(props: any) {
  const [longUrl, setLongUrl] = useState("");
  const token = store.getState().token;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // shortenUrl
    // instead of sending props to the action, send the callback needed only. Use the same approach as in the register action
    store.dispatch(Input_Url_Api({ token, longUrl, props }));

    // axios
    //   .post(
    //     `${baseurl}/url`,
    //     { url: longUrl },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     props.setShortUrl(response.data.short_url);
    //   });
  }

  return (
    // extra div
    <div>
      <form onSubmit={handleSubmit} className="url-form">
        <input
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="paste the link here"
        />
        <button type="submit">Shorten URL</button>
      </form>
    </div>
  );
}

export default InputUrl;
