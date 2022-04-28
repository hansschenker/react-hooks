export interface Post {
    id: number;
    title: string;
    description: string;
    category: string;
}

export interface PostState {
    posts: Post[]
}

export type PostAction =
    | { type: 'add', payload: Post }
    | { type: 'list', payload: Post[] }