import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Musinguzi Andrew 
      </h1>
      <p className="mb-4">
        {`Mr. Musinguzi Andrew is a Physics researcher specilizing Non Linear Optics currently persuing his Masters Degree at University of Hyderabad. 
        His work focuses on studying how light interacts with matter.His recent project is focusing on study the atmosphere using lasers by mimicking 
        atmospheric conditions in the laboratory using aerosols of different refractive index and properties revealing the effect of matter on light and
        vice versa, with applications in the long range space communications using Ridars and Radars. Mr. Andrew has received many Awards and scholarships 
        and actively engage in conferences and Teaching.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
