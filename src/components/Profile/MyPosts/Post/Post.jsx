import React from "react";
import styleProf from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styleProf.post}>
      <img src="https://abrakadabra.fun/uploads/posts/2021-12/1640528651_6-abrakadabra-fun-p-serii-chelovek-na-avu-7.png" />
      { props.message }
      <div>
          <img src="https://preview.free3d.com/img/2020/02/2279707444101776841/w3jnifkh-900.jpg">
          </img>
          {props.likes}
      </div>
    </div>
  );
};

export default Post;
