import React from 'react'

import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'

const SectionTech = (props: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{props.title}</Heading>
      <S.IconsContainer>
        {props.techIcons.map((item) => (
          <S.Icon key={item.id}>
            <S.Icons
              src={getImageUrl(item.icon.url)}
              alt={item.title}
              loading="lazy"
            />
            <S.IconsName>{item.title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
