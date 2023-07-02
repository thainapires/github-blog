import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { PostsContext } from "../../contexts/PostsContext";
import { PostPreview } from "./components/PostPreview";
import { Profile } from "./components/Profile";
import { SearchPostsForm } from "./components/SearchPostsForm";
import { BlogContainer, PostsContainer } from "./styles";
import axios from "axios";
import { useEffect } from "react";

export function Blog(){
    const postsPreviews = useContextSelector(PostsContext, (context) => {
        return context.postsPreviews;
    });

    return (
        <BlogContainer>
            <Profile/>
            <SearchPostsForm/>
            <PostsContainer>
                {postsPreviews?.map((postPreview) => (
                    <PostPreview
                        key={postPreview.id}
                        id={postPreview.number}
                        title={postPreview.title}
                        body={postPreview.body}
                        created_at={postPreview.created_at}
                        html_url={postPreview.html_url}
                    />
                ))}
            </PostsContainer>
        </BlogContainer>
    )
}