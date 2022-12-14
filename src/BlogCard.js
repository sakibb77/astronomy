import React, { useRef } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const image = blog.image;
  const cardRef = useRef(null);

  return (
    <div
      className="blog-card"
      style={{ backgroundImage: `url(${image})` }}
      ref={cardRef}
    >
      <div className="blog-card-content-wrapper">
        <h2 className="blog-card-title">{blog.title}</h2>
        <p className="blog-card-description">{blog.body}</p>
        {/* <img src={blog.image} alt="" /> */}
        <Link className="blog-btn btn ">read more</Link>
      </div>
    </div>
  );
};

export default BlogCard;
