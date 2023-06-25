import { styled } from "styled-components";

export const BlogContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 54rem;
    padding-bottom: 2rem;
    padding-top: 2rem;
`;