import { useState } from "react";
import InputUrl from "../urlInput/urlInput";
import { Header } from "../header/Header";

function ShortenUrlPage() {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div>
      <div className="app">
        <Header />
        <h1 className="font-sans font-bold text-blue-700 md:text-3xl text-base text-center">
          shorten your URL Site
        </h1>
        <InputUrl setShortUrl={setShortUrl} />

        {shortUrl ? (
          <a
            className=" ml-24 pt-4 md:pl-80 md:ml-72 md:pt-7 flex flex-col justify-center"
            href={shortUrl}
          >
            {shortUrl}
          </a>
        ) : (
          <p className=" md:text-center text-start mt-7 md:pl-0 pl-7 text-blue-700 md:text-lg text-xs ">
            Your URL will appear here
          </p>
        )}
      </div>
      <section className="text-start font-serif md:pt-16 pt-40 md:mx-12 mx-4 md:px-14 text-xs md:text-lg text-slate-800 font-bold">
        Shorten, share and track Your shortened URLs can be used in
        publications, documents, advertisements, blogs, forums, instant
        messages, and other locations. Track statistics for your business and
        projects by monitoring the number of hits from your URL with the click
        counter, you do not have to register.
      </section>
    </div>
  );
}

export default ShortenUrlPage;
