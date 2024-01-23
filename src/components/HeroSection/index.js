import React, {useState} from 'react'
import Video from '../../video/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElements'

  const handleClick = () => {
    window.location.href='https://play.google.com/store/games';
  }

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
        <HeroContent>
          <HeroH1>Paprasta kaip 1-2-3</HeroH1>
          <HeroP>Prisijunk prie mūsų jau šiandien!</HeroP>
          <HeroBtnWrapper>
            <Button onClick={handleClick} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>Atsisiųsti programėlę {hover ? <ArrowForward /> : <ArrowRight />}</Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
