import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptatem corrupti est iusto accusantium excepturi deleniti a libero
        quaerat quae reiciendis dolorum ipsam mollitia error debitis nisi,
        dolorem quasi reprehenderit.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
