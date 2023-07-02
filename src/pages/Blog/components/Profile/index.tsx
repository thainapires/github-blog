import { ProfileContainer, ProfileTextContent, Info, Title } from "./styles";
import profileImg from '../../../../assets/profile-image.jpeg';
import { GithubLogo, Buildings, Users, ArrowSquareUpRight } from 'phosphor-react';
import axios from "axios";
import { useEffect, useState } from "react";

interface ProfileData {
    name: string;
    bio: number;
    username: string;
    profileUrl: string;
    work: string;
    followers: string;
    avatarUrl: string;
}

export function Profile(){

    const [data, setData] = useState<ProfileData>({
        name: '',
        bio: 0,
        username: '',
        profileUrl: '',
        work: '',
        followers: '',
        avatarUrl: ''
    });

    useEffect(() => {
        const fetchDataForProfile = async () => {
            try {
              const response = await axios.get('https://api.github.com/users/thainapires');
              setData({
                name: response.data.name,
                bio: response.data.bio,
                username: response.data.login,
                profileUrl: response.data.html_url,
                work: response.data.company,
                followers: response.data.followers + ' seguidores',
                avatarUrl: response.data.avatar_url
              });
            } catch (error) {
              console.error('Error:', error);
            }
        };
    
        fetchDataForProfile();
    }, []);

    return (
        <ProfileContainer>
            <img src={profileImg} alt="" />
            <ProfileTextContent>
                <Title>
                    <h1>{data.name}</h1>
                    <a href={`${data.profileUrl}`}>GITHUB <ArrowSquareUpRight size={12}/></a>
                </Title>
                <span>{data.bio}</span>
                <Info>
                    <span><GithubLogo size={16}/>{data.username}</span>
                    <span><Buildings size={16}/>{data.work}</span>
                    <span><Users size={16}/>{data.followers}</span>
                </Info>
            </ProfileTextContent>
        </ProfileContainer>
    )
}