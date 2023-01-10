import React, { useRef } from "react";
import BlogCard from "./BlogCard";
import {
  useGsapBottomToTop,
  useGsapTitleUnvail,
  useGsapUnvailCard,
} from "./hook/gsap";

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
    title:
      "Weather satellite sees European rocket blast off with its 'brother' aboard",
    body: " This image is not a piece of modern art but a photograph of cloud-covered central America taken by a weather forecasting",
    image:
      "https://cdn.mos.cms.futurecdn.net/S6NrjUc8ijJu9L8CB92wkL-970-80.jpg",
  },
  {
    id: 3,
    title:
      "Major breakthrough in pursuit of nuclear fusion unveiled by US scientists",
    body: "American researchers have achieved a major breakthrough paving the way toward nuclear fusion energy generation, but major hurdles remain.",
    image:
      "https://cdn.mos.cms.futurecdn.net/buDHhF7Q55G46Qs6AzWb6i-1200-80.jpg.webp",
  },
  {
    id: 4,
    title:
      "NASA's Mars Perseverance rover records 1st-ever audio of Red Planet dust devil",
    body: "Perseverance has captured the sound of dust grains impacting the NASA rover, and the recording could be key to understanding how dust is transported around Mars.",
    image:
      "https://cdn.mos.cms.futurecdn.net/DHYY3hgPpjKPU2cG3r33yB-1200-80.jpg.webp",
  },
  {
    id: 5,
    title:
      "Quantum time flip' makes light move simultaneously forward and backward in time",
    body: "The time-flipped photon can't be used to restage Back to the Future, but it could help us figure out some of the universe's most mysterious phenomena.",
    image:
      "https://cdn.mos.cms.futurecdn.net/iabvGPy4jjDLzxx78PsK54-1200-80.jpeg.webp",
  },
  {
    id: 6,
    title: "NASA's retired flying telescope heads to museum",
    body: "After eight years of science missions, the Stratospheric Observatory for Infrared Astronomy (SOFIA) aircraft has found permanent residence at the Pima Air & Space Museum in Arizona.",
    image:
      "https://cdn.mos.cms.futurecdn.net/fZm2yAe5MdFrANnkrQZrae-1200-80.jpg.webp",
  },
  {
    id: 7,
    title: "Pesky 'leap second' will be abolished by 2035",
    body: "An international group of experts has voted to retire the leap second by 2035.",
    image:
      "https://cdn.mos.cms.futurecdn.net/UpRRbtoZLL2yq9FoJRmwjj-1200-80.jpeg.webp",
  },
  {
    id: 8,
    title:
      "The Large Hadron Collider reveals how far antimatter can travel through the Milky Way",
    body: "The Large Hadron Collider reveals how far antimatter can travel through the Milky Way",
    image:
      "https://cdn.mos.cms.futurecdn.net/T7PBjMGuR6N2rH7igmGgt-1200-80.jpeg.webp",
  },
];

const Blog = () => {
  const blogRef = useRef(null);
  const blogcardRef = useRef(null);
  const sectionTitleRef = useRef(null);

  useGsapBottomToTop([blogcardRef], blogRef);
  useGsapTitleUnvail(sectionTitleRef, blogRef);

  return (
    <section className="blog" ref={blogRef}>
      <h2 className="section-title" ref={sectionTitleRef}>
        blog
      </h2>
      <div className="wrapper blog-wrapper" ref={blogcardRef}>
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} blogRef={blogRef} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
