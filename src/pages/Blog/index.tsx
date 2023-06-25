import { Header } from "../../components/Header";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchPostsForm } from "./components/SearchPostsForm";
import { BlogContainer, PostsContainer } from "./styles";

export function Blog(){
    return (
        <BlogContainer>
            <Header/>
            <Profile/>
            <SearchPostsForm/>
            <PostsContainer>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </PostsContainer>
        </BlogContainer>
    )
}