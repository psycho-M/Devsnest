import React from 'react';
import { FaPinterest, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { ReactComponent as LogoSvg } from './assets/logo.svg';

export function Link({link}) {
    return (
            <a rel='noreferrer' target='_blank' href={link.url}>{link.name ? link.name : link.icon}</a>
    );
}

function SocialMediaLink({link}) {
    return(
        <section className='social-media-link'>
            <Link link={link} />
        </section>
    );
}

function LeftSide() {
    return (
        <section className='left-side'>
            <section className='logo'>
                < LogoSvg style={{
                    padding: '7px',
                }}/>
            </section>
            <section className="description">
                RoxxCart designs clothing for the young, old & everyone in between - but most importantly, for the fashionable
            </section>
            <section className="social-media-links">
                <SocialMediaLink 
                    link={{
                        url: 'https://www.facebook.com/',
                        icon: < FaFacebookF />
                    }} 
                />
                <SocialMediaLink 
                    link={{
                        url: 'https://www.instagram.com',
                        icon: <FiInstagram />
                    }} 
                />
                <SocialMediaLink 
                    link={{
                        url: 'https://www.pinterest.com',
                        icon: <FaPinterest />
                    }} 
                />
                <SocialMediaLink 
                    link={{
                        url: 'https://www.youtube.com/',
                        icon: <AiFillYoutube />
                    }} 
                />
                <SocialMediaLink 
                    link={{
                        url: 'https://www.twitter.com/',
                        icon: <FaTwitter/>
                    }} 
                />
            </section>
        </section>
    )
}

export default LeftSide;
