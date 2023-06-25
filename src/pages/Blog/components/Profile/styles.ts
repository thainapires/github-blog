import { styled } from "styled-components";

export const ProfileContainer = styled.div`
    width: 54rem;
    height: 13.25rem;

    background: ${props => props.theme["base-profile"]};

    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 2rem;

    margin-top: -5.5rem;

    padding-left: 2.5rem;
    padding-right: 2rem;

    /*
    padding-top: 2rem;
    padding-left: 2.5rem;
    padding-right: 2rem;*/

    img {
        width: 9.25rem;
        height: 9.25rem;

        border-radius: 8px;
    }

`;

export const ProfileTextContent = styled.div`

    h1{
        font-size: 24px;
        line-height: 130%;
        color: ${props => props.theme["base-title"]}
    }

    span{
        font-size: 16px;
        line-height: 160%;
    }
   
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

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.7rem;

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