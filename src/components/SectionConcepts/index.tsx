import React from 'react'

import { SectionConceptsProps } from 'types/api'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'

const SectionConcepts = (props: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{props.title}</Heading>
      <S.List>
        {props.concepts.map((item) => (
          <S.Item key={item.title}>{item.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
