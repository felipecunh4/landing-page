import React from 'react'

import { LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const Logo = (props: LogoProps) => (
  <S.LogoWrapper src={getImageUrl(props.url)} alt={props.alternativeText} />
)

export default Logo
