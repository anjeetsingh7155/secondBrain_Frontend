import { useEffect, useRef } from "react";

interface TwitterEmbedProps {
  url: string;
}

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (
          element?: HTMLElement | null
        ) => void;
      };
    };
  }
}

export default function TwitterEmbed({
  url,
}: TwitterEmbedProps) {
  const tweetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTweet = () => {
      if (!tweetRef.current) return;

      tweetRef.current.innerHTML = `
        <blockquote class="twitter-tweet">
          <a href="${url}"></a>
        </blockquote>
      `;

      if (!window.twttr) {
        const script = document.createElement("script");
        script.src =
          "https://platform.twitter.com/widgets.js";
        script.async = true;

        script.onload = () => {
          window.twttr?.widgets?.load(tweetRef.current);
        };

        document.body.appendChild(script);
      } else {
        window.twttr.widgets.load(tweetRef.current);
      }
    };

    loadTweet();
  }, [url]);

  return (
    <div
      ref={tweetRef}
      className="overflow-hidden"
    />
  );
}