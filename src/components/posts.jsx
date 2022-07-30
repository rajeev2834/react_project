import React from "react";
import { useParams, useSearchParams } from 'react-router-dom';

const Posts = () => {

  const [searchParams] = useSearchParams();

  const currentParam = Object.fromEntries([...searchParams]);
  console.log(currentParam);
  
  const{year, month} = useParams();

  return (
    <div>
      <h1>Posts</h1>
      Year: {year}, Month: {month}
    </div>
  );
};

export default Posts;
