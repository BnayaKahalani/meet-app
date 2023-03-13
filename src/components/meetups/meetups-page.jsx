import React from "react"
import Image from "next/image"
import Link from "next/link"

const AllMeetups = ({ data }) => {
  return (
    <div className='meetups_page'>
      {data?.map((m) => (
        <Link
          key={m.id}
          href={`/meetups/${m.id}`}
          passHref
        >
          <Image
            src={m.image}
            alt={m.title}
            width={500}
            height={500}
          />{" "}
          <h2>{m.title} </h2>
        </Link>
      ))}
    </div>
  )
}

export default AllMeetups
