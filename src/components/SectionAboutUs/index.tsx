import React from 'react'

import { SectionAboutUsProps } from 'types/api'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'

const SectionAboutUs = (props: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{props.title}</Heading>

    <S.Content>
      {props.authors.map((profile) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          role={profile.role}
          photo={profile.photo}
          socialLinks={profile.socialLinks}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
