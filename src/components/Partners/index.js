import React from 'react'
import { PartnersContainer, PartnersH1, PartnersH2, 
        PartnersWrapper, PartnersCard, PartnersIcon, PartnersP } from './PartnersElements'
import Icon1 from '../../images/icon1.png'
import Icon2 from '../../images/icon2.png'
import Icon3 from '../../images/icon3.png'

const Partners = () => {
  return (
    <PartnersContainer id="partners">
      <PartnersH1>Mūsų partneriai</PartnersH1>
      <PartnersWrapper>

        <PartnersCard>
            <PartnersIcon src={Icon1}/>
            <PartnersH2>Kauno technologijos universitetas</PartnersH2>
            <PartnersP>viena iškiliausių bei lyderio pozicijas užimančių aukštųjų mokyklų Lietuvoje</PartnersP>
        </PartnersCard>

        <PartnersCard>
            <PartnersIcon src={Icon2}/>
            <PartnersH2>Heading2</PartnersH2>
            <PartnersP>Paragraph2</PartnersP>
        </PartnersCard>

        <PartnersCard>
            <PartnersIcon src={Icon3}/>
            <PartnersH2>Heading3</PartnersH2>
            <PartnersP>Paragraph3</PartnersP>
        </PartnersCard>

      </PartnersWrapper>
    </PartnersContainer>
  )
}

export default Partners
