import PostCard from "./PostCard";
import type { Post } from "../types/Post";
interface PostListProps{
    posts: Post[];
    onPublish: (id: number) => void;
}

export default function PostList({ posts , onPublish } : PostListProps){
    return (
        <div>
            {
                posts
                .map(post => (
                    <PostCard key={post.id} post={post} onPublish={onPublish} />
                ))
            }
        </div>
    )
}