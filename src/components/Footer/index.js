import React from 'react';
import facebook from './assets/facebook.png';
import twitch from './assets/twitch.png';
import twitter from './assets/twitter.png';
import youtube from './assets/youtube.png';
import * as S from './styles';

const Footer = () => (
    <S.Wrapper>
        <S.Title>
            <S.White>BR</S.White>
            <S.Blue>Battles</S.Blue>
        </S.Title>
        <S.List>
            <S.ListItem>
                <S.FooterLink to="/">Home</S.FooterLink>
            </S.ListItem>
            <S.ListItem>
                <S.FooterLink to="/about">About</S.FooterLink>
            </S.ListItem>
            <S.ListItem>
                <S.FooterLink to="/">FAQ</S.FooterLink>
            </S.ListItem>
            <S.ListItem>
                <S.FooterLink to="/jobs">Jobs</S.FooterLink>
            </S.ListItem>
            <S.ListItem>
                <S.FooterLink to="/">Tournaments</S.FooterLink>
            </S.ListItem>
            <S.ListItem>
                <S.FooterLink to="/">Stats</S.FooterLink>
            </S.ListItem>
            <S.ListItem>
                <S.FooterLink to="/">Account</S.FooterLink>
            </S.ListItem>
            <S.ListItem>
                <S.FooterLink to="/signin">Sign In</S.FooterLink>
            </S.ListItem>
        </S.List>
        <S.LinkLegal>
            <S.FooterLink to="/">Privacy Policy</S.FooterLink>
        </S.LinkLegal>
        <S.LinkLegal>
            <S.FooterLink to="/">Terms of Use</S.FooterLink>
        </S.LinkLegal>
        <S.SocialWrapper>
            <S.Logo src={twitter} alt="twitter" />
            <S.Logo src={facebook} alt="facebook" />
            <S.Logo src={youtube} alt="youtube" />
            <S.Logo src={twitch} alt="twitch" />
        </S.SocialWrapper>
    </S.Wrapper>
);

export default Footer;
