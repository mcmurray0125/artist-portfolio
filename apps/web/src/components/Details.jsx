import { PortableText } from '@portabletext/react'

export default function Details({ artwork }) {
    return (
        <>
            <h1 className="text-4xl text-gray-200 font-bold mb-4">{artwork.title}</h1>
            <p>Medium: {artwork.medium}</p>
            <p>Dimensions: {artwork.dimensions}</p>
            <p>Year: {artwork.year}</p>
            <p>Price: ${artwork.price?.toFixed(2)}</p>
            <PortableText value={artwork.description} />
        </>
    )
}