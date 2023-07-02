import { styled } from "styled-components";

export const PostHeaderContainer = styled.div`

    width: 54rem;
    height: 10.5rem;

    background: ${props => props.theme["base-profile"]};

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    //gap: 2rem;

    margin-top: -5.5rem;

    padding-left: 2.5rem;
    padding-right: 2rem;

`;

export const PostContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Info = styled.div`
    padding-top: 1rem;
    display: flex;
    gap: 1.5rem;

    span{
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }
`;

export const Links = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    a {
        outline: none;
        color: ${props => props.theme.blue};
        font-size: 0.75rem;
        line-height: 160%;

        display: flex;
        align-items: center;
        gap: 2px;
    }
`;

export const Title = styled.div`

    padding-top: 1.6rem;

    font-size: 1.5rem;
    line-height: 130%;

    color: ${props => props.theme["base-title"]};
`;

export const PostContentContainer = styled.div`
    width: 54rem;
    padding-top: 2rem;
`;


