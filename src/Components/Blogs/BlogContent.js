import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const BlogContent = () => {
    const {title} = useParams();
    const location = useLocation();    

  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.description.slice(0, 200)}</p>
      <p>{location.state.description.slice(201, 500)}</p>
    </div>
  )
}

export default BlogContent
