import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './CarouselArrowButton'
import { DotButton, useDotButton } from './CarouselDotButton'
import '../styles/carousel.css'
import CarouselTile from './CarouselTile'

export const HomePageCarousel = ({ featuredArtworks }) => {
  console.log(featuredArtworks);
  const options = {
    loop: true
  }
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {featuredArtworks?.map((artwork, index) => (
            <CarouselTile
              key={index}
              images={artwork.images}
              title={artwork.title}
              description={artwork.description}
              slug={artwork.slug}
            />
          ))}
        </div>
      </div>
    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  )
}
