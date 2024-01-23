import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, 
    Topline, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topline1, topline2, headline1, headline2, lightText,
                    darkText, description1, description2, buttonLabel, img1, img2, alt1, alt2,
                    primary, dark, dark2}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <Topline>{topline1}</Topline>
                        <Heading lightText={lightText}>{headline1}</Heading>
                        <Subtitle darkText={darkText}>{description1}</Subtitle>
                        <ImgWrap>
                            <Img src={img1} alt={alt1}/>
                        </ImgWrap>
                    </TextWrapper>
                    </Column1>
                      
                    <Column2>
                    <TextWrapper>
                    <Topline>{topline2}</Topline>
                        <Heading lightText={lightText}>{headline2}</Heading>
                        <Subtitle darkText={darkText}>{description2}</Subtitle>
                        <ImgWrap>
                            <Img src={img2} alt={alt2}/>
                        </ImgWrap>
                    </TextWrapper>
                    </Column2>
                </InfoRow>
                        <BtnWrap>
                            <Button to='home' smooth={true} duration={500} spy={true} exact="true" offset={-80} 
                                    primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                        </BtnWrap>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection
