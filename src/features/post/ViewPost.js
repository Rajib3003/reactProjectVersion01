import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice';

const ViewPost = () => {
    const {isLoading, posts, error} = useSelector((state)=>state.posts)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
    return (
    <div>
     {isLoading && <h3>Loading ...</h3>}
     {error && <h3>{error.message}</h3>}
     <section>
        {posts.map((post)=>
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </article>
        )}
     </section>
     
    </div>
  )
}

export default ViewPost
