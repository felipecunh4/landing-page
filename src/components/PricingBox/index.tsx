import React from 'react'

import { PricingBoxProps } from 'types/api'
import { gaEvent } from 'utils/ga'

import Button from 'components/Button'

import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = (props: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>{props.totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{props.numberInstallments}x de</span> R${props.priceInstallment}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: props.benefits }} />

    <Button href={props.button[0].url} onClick={onClick} withPrice>
      <p>{props.button[0].label}</p>
      <div>
        <S.ButtonFullPrice>R${props.totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          R${props.numberInstallments * props.priceInstallment}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
