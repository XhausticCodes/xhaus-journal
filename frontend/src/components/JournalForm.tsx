import { useState } from "react";

type PostStatus = "DRAFT" | "PUBLISHED";
interface Post{
    id: number;
    title: string;
    content: string;
    status: PostStatus  ;
}

interface JournalFormProps{
    onAddPost: (post: Post) => void;
}

export default function JournalForm({ onAddPost } : JournalFormProps){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>){
        setTitle(e.target.value);
    }

    function clear(){
        setTitle("");
        setContent("");
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(title);
        console.log(content);

        const newPost: Post ={
            id: 1,
            title,
            content,
            status: "DRAFT"
        };
        
        onAddPost(newPost);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input value={title} placeholder="Enter Title" onChange={handleTitleChange} />
            <p>Title: {title}</p>
            <br />
            <textarea value={content} placeholder="Enter Content" onChange={(e) => setContent(e.target.value)} />
            <p>Content: {content}</p>
            <br />
            <button type="button" onClick={clear}>Clear Form</button>
            <br />
            <button type="submit">Submit Form</button>
            </form>
        </div>
    )
}