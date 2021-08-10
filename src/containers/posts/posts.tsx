import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";

import { search } from "../../utils";
import { Loader } from "../../components/loader";

type Data = { title: string; summary: string }[];

export function Posts() {
  const [data, setData] = useState<Data>([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/blogs").then(
      async (response) => {
        setData(await response.json());
        setLoading(false);
      }
    );
  }, []);

  const enhancedData = keyword ? search(data, keyword) : data;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="search"
          onChange={handleChange}
          className="p-1 border-2 border-gray-900 rounded"
          placeholder="Example: 10 years after launching"
        />
      </div>

      <Loader show={loading} data-testid="loader" />

      <section data-testid="posts" className="space-y-5">
        {enhancedData.map((post) => (
          <article
            key={post.title}
            className="border space-y-2 border-gray-900 p-4 rounded"
          >
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>{post.summary}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
