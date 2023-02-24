import Link from "next/link"
import Image from "next/image"

export const HomePage = ({ data }) => (
  <div className='home'>
    <main>
      {data.map((m) => (
        <Link
          key={m.id}
          href={`/meetups/${m.id}`}
        >
          <Image
            src={m.image}
            alt={m.title}
            width={600}
            height={400}
          />
          <h2>{m.title}</h2>
          <p>{m.description}</p>
        </Link>
      ))}
    </main>
  </div>
)
