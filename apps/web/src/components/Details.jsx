import { PortableText } from '@portabletext/react'

export default function Details({ artwork }) {
    return (
        <>
            {artwork.year && <p>Year: {artwork.year}</p>}
            {artwork.medium && <p>Medium: {artwork.medium}</p>}
            {artwork.dimensions && <p>Dimensions: {artwork.dimensions}</p>}
            {artwork.price !== undefined && <p>Price: ${artwork.price?.toFixed(2)}</p>}
            <PortableText value={artwork.description} />
        </>
    )
}