import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Musinguzi Andrew 
      </h1>
      <p className="mb-4">
        {`I am a Physics researcher specilizing in Non Linear Optics and I am currently persuing his Masters Degree at University of Hyderabad. 
        My work focuses on studying how light interacts with matter where recent project is focusing on studying the atmosphere using lasers by mimicking 
        atmospheric conditions in the laboratory using aerosols of different refractive index and properties revealing the effect of matter on light and
        vice versa, with applications in the long range space communications using Ridars and Radars. I has received many Awards and scholarships
        and I actively engage in conferences and works that has helped me to acquire vast knowledge across all disciplines not necessarily Physics.
        Physics has always fascinated me because it involves beautiful and complex phenomenas that determine our perception to the world around us. 
        Whether it’s through experiments, theoretical models or simulations, I strive to deepen our understanding of how light and matter interact. 
        Beyond research, I enjoy Teaching, Collaboration with others and believe that physics is not just about equations but about uncovering nature’s mysteries.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
