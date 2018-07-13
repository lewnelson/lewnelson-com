import React, { Component } from 'react'
import './socialLinks.scss'

export default class SocialLinks extends Component {
  socialLinks = [
    {
      image: '/images/octocat.png',
      alt: 'Octocat',
      title: 'GitHub',
      href: 'https://github.com/lewnelson'
    },
    {
      image: '/images/twitter.png',
      alt: 'Twitter',
      title: 'Twitter',
      href: 'https://twitter.com/lewisgnelson'
    },
    {
      image: '/images/stack-overflow.png',
      alt: 'Stack Overflow',
      title: 'My Stack Overflow story',
      href: 'https://stackoverflow.com/users/story/4112281'
    },
    {
      image: '/images/linkedin.png',
      alt: 'LinkedIn',
      title: 'LinkedIn',
      href: 'https://uk.linkedin.com/in/lewisgnelson'
    },
    {
      image: '/images/codewars.png',
      alt: 'Codewars',
      title: 'Join me on Codewars',
      href: 'https://www.codewars.com/r/aGPnsw'
    }
  ]

  render () {
    return (
      <div className='social-links'>
        {
          this.socialLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              title={link.title}
              target='_blank'
            >
              <img
                src={link.image}
                alt={link.alt}
              />
            </a>
          ))
        }
      </div>
    )
  }
}
