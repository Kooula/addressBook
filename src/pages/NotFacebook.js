import React from 'react'
import PostsNavbar from '../components/Navbar/PostsNavbar'
import SideBar from '../components/side-bar-posts/SideBar'
import Posts from '../components/posts/Posts'
import { usePostData } from '../context/PostsConext'

const NotFacebook = () => {

  const {posts, handleLoadMore, currentPage} = usePostData()

  return (
    <div>
      <PostsNavbar/>
      <div style={{display: 'flex'}}>
        <SideBar/>
        <div style={{flex: 8}}>
          <Posts posts={posts} currentPage={currentPage}/>
        </div>
      </div>
      <div style={{ textAlign: 'center'  }} onClick={handleLoadMore}>View more posts</div>
    </div>
  )
  }
  
export default NotFacebook