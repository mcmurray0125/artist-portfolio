import React from 'react'
import { urlFor } from '../sanity/utilities'

const QuickViewModal = ({
  artwork,
  currentImageIndex,
  onNextImage,
  onPrevImage,
  onClose
}) => {
  const hasMultipleImages = artwork.images && artwork.images.length > 1

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image Container */}
          <div className="flex items-center justify-center bg-white p-8 min-h-[500px]">
            {artwork.images && artwork.images[currentImageIndex] && (
              <img
                src={urlFor(artwork.images[currentImageIndex])
                  .width(800)
                  .height(600)
                  .fit('max')
                  .url()}
                alt={`${artwork.title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>

          {/* Navigation Controls */}
          {hasMultipleImages && (
            <div className="flex items-center justify-between px-4 py-4 bg-gray-100">
              {/* Previous Button */}
              <button
                onClick={onPrevImage}
                disabled={currentImageIndex === 0}
                className={`p-2 rounded transition ${
                  currentImageIndex === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-300'
                }`}
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <span className="text-gray-700 font-medium">
                {currentImageIndex + 1} / {artwork.images.length}
              </span>

              {/* Next Button */}
              <button
                onClick={onNextImage}
                disabled={currentImageIndex === artwork.images.length - 1}
                className={`p-2 rounded transition ${
                  currentImageIndex === artwork.images.length - 1
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-300'
                }`}
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default QuickViewModal
