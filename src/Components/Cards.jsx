import React, { memo } from 'react'

function Cards() {

    const cards = [
        {
            id:101,
            src: "https://media.istockphoto.com/id/1163420035/photo/american-flag-waving-on-pole-with-bright-vibrant-red-white-and-blue-colors-against-blue-sky.webp?b=1&s=612x612&w=0&k=20&c=MomOMjdlOhAICpKcn21wgZoQPqr-lu_vz7tWRppPXDA=",
            title: "USA"
        },
        {
            id:102,
            src: 'https://cdn.pixabay.com/photo/2015/09/01/11/49/sweden-916799_1280.jpg',
            title: "USA"
        },
        {
            id:102,
            src: 'https://cdn.pixabay.com/photo/2017/08/11/07/23/switzerland-2629856_1280.jpg',
            title: "USA"
        }

    ]
  return (
    <div>
        <h3>Cards</h3>
        {
            cards.map((i,index)=>(
                <div key={index}>
                    <p>{i.title}</p>
                    <p>{i.id}</p>
                </div>
            ))
        }
    </div>
  )
}

export default memo (Cards)