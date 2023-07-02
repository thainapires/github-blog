import axios from "axios";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

interface PostPreview {
    id: number;
    title: string;
    body: string;
    created_at: string;
    html_url: string;
    number: number;
}

interface PostProviderProps {
    children: ReactNode;
}

interface PostContextType {
    postsPreviews: PostPreview[];
    fetchPostsPreviews: (query?: string) => Promise<void>;
}

export const PostsContext = createContext({} as PostContextType);

export function PostsProvider({children} : PostProviderProps){

    const [postsPreviews, setPostsPreviews] = useState<PostPreview[]>([]);

    async function fetchPostsPreviews(query?: string) {
        const response = await axios.get(
            `https://api.github.com/search/issues?q=${query}%20repo:thainapires/github-blog`
        );
        setPostsPreviews(response.data.items);
    }

    useEffect(() => {
        fetchPostsPreviews('')
    }, [])

    return (
        <PostsContext.Provider value={{ 
            postsPreviews,
            fetchPostsPreviews
        }}>
            {children}
        </PostsContext.Provider>
    )
}