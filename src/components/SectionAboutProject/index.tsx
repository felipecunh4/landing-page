import React from 'react'

import { AboutProjectProps } from 'types/api'
import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { getImageUrl } from '../../utils/getImageUrl'

export type Props = {
  about: AboutProjectProps
}

const SectionAboutProject = (props: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(props.about.image.url)}
          alt={props.about.image.alternativeText}
          loading="lazy"
        />
        <div>
          <Heading>{props.about.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{ __html: props.about.description }}
          />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
