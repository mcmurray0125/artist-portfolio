import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './CarouselArrowButton'
import { DotButton, useDotButton } from './CarouselDotButton'
import '../styles/carousel.css'
import CarouselTile from './CarouselTile'
import QuickViewModal from './QuickViewModal'

export const HomePageCarousel = ({ featuredArtworks }) => {
  console.log(featuredArtworks);
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleTileClick = (artwork) => {
    setSelectedArtwork(artwork)
    setIsModalOpen(true)
    setCurrentImageIndex(0)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedArtwork(null)
    setCurrentImageIndex(0)
  }

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
              onClick={() => handleTileClick(artwork)}
            />
          ))}
        </div>
      </div>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      {isModalOpen && selectedArtwork && (
        <QuickViewModal
          artwork={selectedArtwork}
          currentImageIndex={currentImageIndex}
          onNextImage={() => {
            if (currentImageIndex < selectedArtwork.images.length - 1) {
              setCurrentImageIndex(currentImageIndex + 1)
            }
          }}
          onPrevImage={() => {
            if (currentImageIndex > 0) {
              setCurrentImageIndex(currentImageIndex - 1)
            }
          }}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}
