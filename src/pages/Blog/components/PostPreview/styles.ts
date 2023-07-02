import { styled } from "styled-components";

export const PostContainer = styled.main`
    width: 26rem;
    height: 16.25rem;
    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;
    cursor: pointer;

    padding-right: 2rem;
    padding-left: 2rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

    h1{
        color: ${props => props.theme["base-title"]};
        font-size: 1.25rem;
        line-height: 160%;
    }

    span{
        font-size: 0.875rem;
        line-height: 160%;
    }
`;

export const Description = styled.div`
    font-size: 1rem;
    line-height: 160%;
    max-height: 6.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
`;
