import PostCard from "./PostCard";

type PostStatus = "DRAFT" | "PUBLISHED";
interface Post{
    id: number;
    title: string;
    content: string;
    status: PostStatus  ;
}
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