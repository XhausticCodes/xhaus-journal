import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import JournalForm from './components/JournalForm'
import PostList from './components/PostList'

type PostStatus = "DRAFT" | "PUBLISHED";
interface Post{
    id: number;
    title: string;
    content: string;
    status: PostStatus  ;
}

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