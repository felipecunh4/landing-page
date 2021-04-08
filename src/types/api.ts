export type LogoProps = {
  alternativeText: string
  url: string
}

export type TechIcon = {
  id: string
  icon: LogoProps
  title: string
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type Buttons = {
  label: string
  url: string
}

export type SocialLinks = {
  title: string
  url: string
}

export type Authors = {
  name: string
  photo: {
    url: string
  }
  role: string
  socialLinks: SocialLinks[]
  description: string
}

export type Review = {
  id: string
  name: string
  text: string
  photo: {
    url: string
  }
}

export type Question = {
  question: string
  answer: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    url: string
    label: string
  }
  image: LogoProps
}

export type AboutProjectProps = {
  title: string
  description: string
  image: LogoProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{ title: string }>
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: Buttons[]
}

export type SectionAboutUsProps = {
  title: string
  authors: Authors[]
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
