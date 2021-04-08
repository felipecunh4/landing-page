import React from 'react'

import { LogoProps, HeaderProps } from 'types/api'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'
import { getImageUrl } from '../../utils/getImageUrl'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type Props = {
  logo: LogoProps
  header: HeaderProps
}

const SectionHero = (props: Props) => (
  <S.Wrapper>
    <Container>
      <Logo url={props.logo.url} alternativeText={props.logo.alternativeText} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{props.header.title}</S.Title>
          <S.Description>{props.header.description}</S.Description>
          <S.ButtonWrapper>
            <Button href={props.header.button.url} onClick={onClick} wide>
              {props.header.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(props.header.image.url)}
          alt={props.header.image.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
