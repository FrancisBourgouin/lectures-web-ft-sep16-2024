import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function PostList(props) {
  const { posts } = props;

  const parsedPosts =
    Array.isArray(posts) && posts.map((post) => <PostListItem key={post.id} {...post} />);

  if (!parsedPosts) {
    return <h1>NO POST HERE!</h1>;
  }
  return (
    <div>
      <h1>Post list...</h1>
      {parsedPosts}
    </div>
  );
}

function PostListItem(props) {
  const { title, content, created_at, author } = props;
  return (
    <div>
      <h1>
        {title} - By: {author.name}
      </h1>
      <p>{content}</p>
      <p>Created at: {created_at}</p>
    </div>
  );
}

function App() {
  const fakeAuthors = [
    {
      id: 1,
      name: "Bob",
      email: "bob@bob.com",
      created_at: "2024-11-21T18:36:54.943Z",
      updated_at: "2024-11-21T18:36:54.943Z",
    },
    {
      id: 2,
      name: "Pequeno Pollo",
      email: "pot@to.com",
      created_at: "2024-11-21T18:36:54.949Z",
      updated_at: "2024-11-21T18:36:54.949Z",
    },
  ];

  const fakePosts = [
    {
      id: 1,
      title: "Post #1",
      content: "OMG IT'S A POST",
      author_id: 1,
      created_at: "2024-11-21T18:36:54.980Z",
      updated_at: "2024-11-21T18:36:54.980Z",
    },
    {
      id: 2,
      title: "Post #2",
      content: "OMG IT'S A POST",
      author_id: 1,
      created_at: "2024-11-21T18:36:54.983Z",
      updated_at: "2024-11-21T18:36:54.983Z",
    },
    {
      id: 3,
      title: "Post #3",
      content: "OMG IT'S A POST",
      author_id: 1,
      created_at: "2024-11-21T18:36:54.986Z",
      updated_at: "2024-11-21T18:36:54.986Z",
    },
    {
      id: 4,
      title: "Post #1",
      content: "OMG IT'S A POST",
      author_id: 2,
      created_at: "2024-11-21T18:36:54.988Z",
      updated_at: "2024-11-21T18:36:54.988Z",
    },
    {
      id: 5,
      title: "Post #2",
      content: "OMG IT'S A POST",
      author_id: 2,
      created_at: "2024-11-21T18:36:54.990Z",
      updated_at: "2024-11-21T18:36:54.990Z",
    },
    {
      id: 6,
      title: "Post #3",
      content: "OMG IT'S A POST",
      author_id: 2,
      created_at: "2024-11-21T18:36:55.003Z",
      updated_at: "2024-11-21T18:36:55.003Z",
    },
  ];

  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState(null);

  const postsWithAuthors = fakePosts.map((post) => ({
    ...post,
    author: fakeAuthors.find((author) => author.id === post.author_id),
  }));

  const fetchInitialInfo = () => {
    Promise.all([axios.get("/api/authors"), axios.get("/api/posts")]).then((allRes) => {
      // const authorRes = allRes[0]
      // const postRes = allRes[1]

      const [authorRes, postRes] = allRes;

      const postsWithAuthors = postRes.data.map((post) => ({
        ...post,
        author: authorRes.data.find((author) => author.id === post.author_id),
      }));

      setPosts(postsWithAuthors);
    });
  };

  useEffect(() => {
    fetchInitialInfo();
  }, []);

  return (
    <>
      <header>
        <h1>Super blog of destiny!</h1>
      </header>
      <main>
        <PostList posts={posts} />
      </main>
    </>
  );
}

export default App;
