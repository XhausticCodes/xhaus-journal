type PostStatus = "DRAFT" | "PUBLISHED";

interface Post{
    id: number;
    title: string;
    content: string;
    status: PostStatus;
}
interface PostCardProps{
    post: Post;
    onPublish: (id: number) => void;
}

export default function PostCard({ post, onPublish } : PostCardProps ){
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.id}</p>
            <h3>{post.content}</h3>
            {post.status === "DRAFT" && <button onClick={() => onPublish(post.id)}>Publish Post</button>}
            <hr />
        </div>
    )
}