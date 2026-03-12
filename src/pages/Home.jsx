import PageLayout from "../components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <h1 className="text-4xl font-bold mb-4">Welcome to My Art Portfolio</h1>
      <p className="text-lg text-gray-700">
        Explore my collection of artwork, including paintings, drawings, and digital art. Click on the gallery to see all my pieces or click on an individual artwork to learn more about it.
      </p>
    </PageLayout>
  )
}