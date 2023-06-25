import { ProfileContainer, ProfileTextContent, Info, Title } from "./styles";
import profileImg from '../../../../assets/profile-image.jpeg';
import { GithubLogo, Buildings, Users, ArrowSquareUpRight } from 'phosphor-react';
export function Profile(){
    return (
        <ProfileContainer>
            <img src={profileImg} alt="" />
            <ProfileTextContent>
                <Title>
                    <h1>Thainá Pires</h1>
                    <a href="">GITHUB <ArrowSquareUpRight size={12}/></a>
                </Title>
                <span>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>
                <Info>
                    <span><GithubLogo size={16}/> thainapires</span>
                    <span><Buildings size={16}/>Rede Parcerias</span>
                    <span><Users size={16}/>32 seguidores</span>
                </Info>
            </ProfileTextContent>
        </ProfileContainer>
    )
}