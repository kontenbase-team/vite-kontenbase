import { useEffect, useState } from "react";
import { kontenbaseClient } from "./libs";
import { Posts } from "./types";

export default function App() {
  const [posts, setPosts] = useState<Posts>([]);

  const getPosts = async () => {
    const { data, error } = await kontenbaseClient.service("posts").find();

    if (error) alert(error.message);
    else if (data) setPosts(data);
    else alert("Failed to get all posts");
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vite Kontenbase</h1>
      </header>
      <div>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </div>
    </div>
  );
}
