import React, { useState } from 'react'
import { blogsData } from './BlogsComponent'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const BlogsContent = () => {
    const [blogs] = useState(blogsData)
    const truncateString  = (str,num) => {
      if(str.length>num){
        return str.slice(0,num) + "..."
      }else{
        return str;
      }
    }
  return (
    <div>
      <p>useParams hook use and dainamic routing create one page all data set but click learn more show other page data show</p>
      <section className='blogSection'>
        {blogs.map((blog)=>{
            const {id, title, description} = blog
            return(
            <article className='blogCard' key={id}>
                <h1>{title}</h1>
                <p>{truncateString(description,100)}</p>
                <Link to={title} state={{id,title,description}}>
                  <Button variant="primary" type="submit">
                    Learn More
                  </Button>
                </Link>
            </article>
        )})}
      </section>
    </div>
  )
}

export default BlogsContent
