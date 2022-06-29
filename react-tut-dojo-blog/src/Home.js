import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    // fetch our API
    fetch("https://localhost:8000/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      }) // data -> survey
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

      {/* <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p> */}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs"
      /> */}
    </div>
  );
};

export default Home;
