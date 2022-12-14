import React from "react";
import BlogCard from "./BlogCard";

const blogData = [
  {
    id: 1,
    title: "About the Telescope",
    body: "Orbiting high above the Earth, the Hubble Space Telescope has a clear view of the universe free from the blurring and absorbing effects of the",
    image:
      "https://images.pexels.com/photos/2101631/pexels-photo-2101631.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "About the Telescope",
    body: "Orbiting high above the Earth, the Hubble Space Telescope has a clear view of the universe free from the blurring and absorbing effects of the",
    image:
      "https://images.pexels.com/photos/2101631/pexels-photo-2101631.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "About the Telescope",
    body: "Orbiting high above the Earth, the Hubble Space Telescope has a clear view of the universe free from the blurring and absorbing effects of the",
    image:
      "https://images.pexels.com/photos/2101631/pexels-photo-2101631.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "About the Telescope",
    body: "Orbiting high above the Earth, the Hubble Space Telescope has a clear view of the universe free from the blurring and absorbing effects of the",
    image:
      "https://images.pexels.com/photos/2101631/pexels-photo-2101631.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "About the Telescope",
    body: "Orbiting high above the Earth, the Hubble Space Telescope has a clear view of the universe free from the blurring and absorbing effects of the",
    image:
      "https://images.pexels.com/photos/2101631/pexels-photo-2101631.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "About the Telescope",
    body: "Orbiting high above the Earth, the Hubble Space Telescope has a clear view of the universe free from the blurring and absorbing effects of the",
    image:
      "https://images.pexels.com/photos/2101631/pexels-photo-2101631.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "About the Telescope",
    body: "Orbiting high above the Earth, the Hubble Space Telescope has a clear view of the universe free from the blurring and absorbing effects of the",
    image:
      "https://images.pexels.com/photos/2101631/pexels-photo-2101631.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "About the Telescope",
    body: "Orbiting high above the Earth, the Hubble Space Telescope has a clear view of the universe free from the blurring and absorbing effects of the",
    image:
      "https://images.pexels.com/photos/2101631/pexels-photo-2101631.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <h2 className="section-title">blog</h2>
      <div className="wrapper blog-wrapper">
        {blogData.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
