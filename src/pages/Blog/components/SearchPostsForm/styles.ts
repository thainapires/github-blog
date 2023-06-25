import { styled } from "styled-components";

export const SearchPostsFormContainer = styled.form`
    width: 54rem;
    input{
        width: 100%;
        background-color: ${props => props.theme["base-input"]};
        color: ${props => props.theme["base-label"]};
        border-radius: 6px;
        border: 1px solid  ${props => props.theme["base-border"]}; 
        padding: 1rem;
        margin-top: 1rem;
    }
`;


export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    padding-top: 3rem;

    h4{
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.125rem;
        line-height: 160%
    }

    span{
        color: ${props => props.theme["base-span"]};
        font-size: 0.875rem;
        line-height: 160%
    }

`;