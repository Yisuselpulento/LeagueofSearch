/* eslint-disable import/no-absolute-path */
import AsaImage from '/images/AsaAbout.webp'
import picture from '/images/picture.webp'

const About = () => {
  return (
    <div className='flex gap-10 md:p-40 items-center flex-col md:flex-row'>
      <img src={AsaImage} className='w-[500px]' alt='imagen sobre nosotros 1' />
      <div className='flex items-center flex-col'>

        <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, esse! Repudiandae quibusdam quisquam provident! Odio, debitis, praesentium laudantium modi maiores perspiciatis aliquid, laboriosam harum ipsa odit sapiente laborum asperiores magni?
          Aliquam eligendi repudiandae, numquam reiciendis exercitationem consectetur molestias, magnam obcaecati iste tempore adipisci? Incidunt voluptates porro quisquam voluptatum maiores vitae! Quod ab necessitatibus sapiente, molestiae aperiam maxime praesentium porro minus?
          Aliquam molestiae beatae ex! Perferendis nostrum nihil tenetur aperiam voluptatem enim quam ad saepe iure neque vero deserunt nulla cumque harum voluptatum dicta, quia impedit tempore. Quasi id ipsam ex!
          Nam mollitia possimus blanditiis eligendi labore? Incidunt ipsum error facere iusto quam quaerat voluptatibus enim sit dolorem, recusandae placeat temporibus esse doloribus cum quos ullam nam perspiciatis laudantium. Ducimus, corporis.

        </p>
        <img src={picture} alt='imagen de nosotros 2' className='w-[200px]' />
      </div>

    </div>

  )
}

export default About
