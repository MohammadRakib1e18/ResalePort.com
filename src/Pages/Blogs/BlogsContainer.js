import React, { useState } from "react";
import Blogs from "./Blogs";
import ReadMore from "./ReadMore";

const BlogsContainer = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Blogs setShow={setShow}></Blogs>
      <ReadMore setShow={setShow} show={show}></ReadMore>
    </div>
  );
};

export default BlogsContainer;
