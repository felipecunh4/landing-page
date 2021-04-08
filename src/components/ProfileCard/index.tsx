import React from 'react'

import { Authors } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribble: <FaDribbble />
}

const ProfileCard: React.FC<Authors> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image src={getImageUrl(photo.url)} />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.url}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
