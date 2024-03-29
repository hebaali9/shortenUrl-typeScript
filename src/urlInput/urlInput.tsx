import React, { useState } from "react";
import { store } from "../store";
import { inputUrl } from "../actions";
import { useSelector } from "react-redux";
import { Button } from "antd";

type RootState = {
  token: string;
};

function UrlInput(props: { setShortUrl: (shortUrl: string) => void }) {
  const [longUrl, setLongUrl] = useState("");

  const token = useSelector((state: RootState) => state.token);

  function shortenUrl(event: React.FormEvent) {
    event.preventDefault();

    store.dispatch(inputUrl({ token, longUrl }, props.setShortUrl));
  }

  return (
    <>
      <section className="bg-slate-50 shadow shadow-slate-400 font-sans border border-solid border-slate-300 mt-6 md:mt-10 md:flex md:flex-col md:justify-center md:items-center md:mb-3 h-80 md:h-52 md:mx-52 mx-5	">
        <h1 className="font-sans text-blue-700 text-center mt-4 mb-1 md:my-4 md:text-2xl">
          Paste the URL to be shortened
        </h1>

        <form
          onSubmit={shortenUrl}
          className="url-form border-solid md:mt-1 md:pt-0 mt-9  pt-7 md:mb-6"
        >
          <input
            className="rounded border border-solid border-blue-800 md:w-96 w-80 h-12 md:mx-0 ml-1.5 mr-2.5 px-2 md:h-12 md:mt-3"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="  paste the link here"
          />
          <Button
            className="rounded border border-solid bg-blue-700 text-white font-sans md:w-36 w-80 md:h-12 h-12 md:mt-0 mt-3 ml-1.5 mr-2.5 md:mx-0 md:p-0  md:text-lg "
            type="primary"
            htmlType="submit"
          >
            Shorten URL
          </Button>
        </form>
        <h2 className="text-start text-xs md:text-sm md:mt-0 mt-10 mb-3 font-sans mx-3 md:mx-6 md:px-14 text-blue-700">
          ShortURL is a free tool to shorten a URL or reduce a link Use our URL
          Shortener to create a shortened link making it easy to remember
        </h2>
      </section>
    </>
  );
}

export default UrlInput;
