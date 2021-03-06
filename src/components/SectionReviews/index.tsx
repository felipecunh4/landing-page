import React from 'react'
import Slider from 'react-slick'

import { SectionReviewsProps } from 'types/api'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

import * as S from './styles'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const SectionReviews = (props: SectionReviewsProps) => (
  <Container>
    <Heading reverseColor>Junte-se a mais de 200 mil alunos</Heading>

    <S.Content>
      <Slider {...settings}>
        {props.reviews.map(({ name, photo, text, id }, index) => (
          <ReviewCard
            key={index}
            name={name}
            photo={photo}
            text={text}
            id={id}
          />
        ))}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
