import Link from "next/link"
import Image from "next/image"

export const HomePage = ({ data }) => (
  <div className='home'>
    <main>
      {data.map((m) => (
        <Link
          className='card'
          key={m.id}
          href={`/meetups/${m.id}`}
        >
          <div className='image'>
            <Image
              src={m.image}
              alt={m.title}
              width={600}
              height={400}
            />
          </div>
          <div className='content'>
            <h2>{m.title}</h2>
            <p>{m.description}</p>
          </div>
        </Link>
      ))}
    </main>
  </div>
)
