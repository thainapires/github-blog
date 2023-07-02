import { useNavigate } from "react-router-dom";
import { Description, PostContainer } from "./styles";
import ReactMarkdown from 'react-markdown'
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostPreviewProps {
    id: number;
    title: string;
    body: string;
    created_at: string;
    html_url: string;
}

export function PostPreview({ id, title, body, created_at, html_url }: PostPreviewProps){
    const navigate = useNavigate();
    
    function handlePostClick() {
        navigate(`/post/${id}`);
    }

    const formateDate = formatDistance(
        new Date(), new Date(created_at), {locale: ptBR, addSuffix: true}
    )

    return (
        <PostContainer onClick={handlePostClick}>
            <h1>{title}</h1>
            <span>{formateDate}</span>
            <Description><ReactMarkdown>{body}</ReactMarkdown></Description>
        </PostContainer>
    )
}