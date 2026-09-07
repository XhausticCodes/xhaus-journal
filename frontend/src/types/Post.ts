export type PostStatus = "DRAFT" | "PUBLISHED";

export interface Post {
    id: number;
    title: string;
    content: string;
    status: PostStatus;
}