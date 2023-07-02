import { useContextSelector } from "use-context-selector";
import { Header, SearchPostsFormContainer } from "./styles";
import axios from "axios";
import { PostsContext } from "../../../../contexts/PostsContext";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm} from "react-hook-form";
import { useState } from "react";

const searchPostsFormSchema = z.object({
    query: z.string(),
})

type SearchPostsFormInputs = z.infer<typeof searchPostsFormSchema>;

export function SearchPostsForm(){
    const postsPreviews = useContextSelector(PostsContext, (context) => {
        return context.postsPreviews;
    });

    const fetchPostsPreviews = useContextSelector(PostsContext, (context) => {
        return context.fetchPostsPreviews;
    });

    /*const {
        register, 
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchPostsFormInputs>({
        resolver: zodResolver(searchPostsFormSchema),
    });*/

    /*async function handleSearchPosts(data: SearchPostsFormInputs){
        await fetchPostsPreviews(data.query);
    }*/

    const [query, setQuery] = useState('');

    const handleSearchPosts = async (event: any) => {
        const searchTerm = event.target.value;
        setQuery(searchTerm);
    };

    const handleKeyDown = async (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            await fetchPostsPreviews(query);
        }
    };

    return (
        <SearchPostsFormContainer>
            <Header>
                <h4>Publicações</h4>
                <span>
                    {postsPreviews.length > 1
                    ? `${postsPreviews.length} publicações`
                    : `${postsPreviews.length} publicação`}
                </span>
            </Header>
            <input 
                value={query}
                type="text" 
                placeholder="Buscar Conteúdo" 
                onChange={handleSearchPosts}
                onKeyDown={handleKeyDown}
            />
        </SearchPostsFormContainer>
    )
}