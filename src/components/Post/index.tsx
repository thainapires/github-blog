import axios from "axios";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Info, Links, PostContainer, PostContentContainer, PostHeaderContainer, Title } from "./styles";
import { ArrowSquareUpRight, Buildings, GithubLogo, CaretLeft, Users } from "phosphor-react";
import ReactMarkdown from "react-markdown";

interface Post{
    id: number;
    title: string;
    body: string
    html_url: string;
    user: string;
    comments: number;
    created_at: string;
}

export function Post(){
    const { id } = useParams();

    const [post, setPost] = useState<Post>();

    async function fetchPostById(id: string) {
        const response = await axios.get(
            `https://api.github.com/repos/thainapires/github-blog/issues/${id}`
        );
    
        setPost(response.data);
    }

    useEffect(() => {
        if (id) fetchPostById(id);
    }, []);

    let formatedDate: string;
    if(post?.created_at) {
        formatedDate = formatDistance(
            new Date(), new Date(post.created_at), {locale: ptBR, addSuffix: true}
        )
    }

    return (
        <PostContainer>
            <PostHeaderContainer>
                <Links>
                    <Link to="/"><CaretLeft size={16}/>VOLTAR</Link>
                    <a href={post?.html_url}>Ver no github <ArrowSquareUpRight size={12}/></a>
                </Links>
                <Title>
                    {post?.title}
                </Title>
                <Info>
                    <span><GithubLogo size={16}/>{post?.user.login}</span>
                    <span><Buildings size={16}/>{formatedDate}</span>
                    <span>
                        <Users size={16}/>
                        {post?.comments > 1
                        ? `${post?.comments} publicações`
                        : `${post?.comments} publicação`}
                    </span>
                </Info>
            </PostHeaderContainer>

            <PostContentContainer>
                <ReactMarkdown>{post?.body}</ReactMarkdown>
            </PostContentContainer>
        </PostContainer>
    )
}