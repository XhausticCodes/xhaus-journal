import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import JournalForm from './components/JournalForm'
import PostList from './components/PostList'
import type { Post } from './types/Post'

function App() {
  const[posts, setPosts] = useState<Post[]>([]);

  function addPost(post: Post){
    setPosts(prevPosts => [...prevPosts, post]);
  }

  function publishPost(id: number){
    setPosts(prevPosts => 
      prevPosts.map(post => {
        if(post.id === id){
          return {...post, status: "PUBLISHED"};
        }
        return post;
      })
    );
  }

  return (
    <>
    <Header title="Xhaus Journal" subtitle='Personal thoughts, experiences & stories' />

    <JournalForm onAddPost={addPost} />

    <PostList posts={posts} onPublish={publishPost} />
    </>
  )
}

export default App