import React from "react"
import Image from "next/image"
import Link from "next/link"

const CatMeetup = ({ data, pageName }) => {
  return (
    <div className='cat_meetups'>
      <h1>Meetups in {pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>
      <div className='content'>
        {data.map((m) => (
          <Link
            key={m.id}
            href={`/meetups/${m.city}/${m.id}`}
            passHref
          >
            <Image
              width={300}
              height={300}
              alt={m.title}
              src={m.image}
            />
            <h2>{m.title}</h2>
            <p>{m.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CatMeetup
