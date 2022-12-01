import React, { useState, useEffect } from 'react'

const Posts = () => {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setPostData(data)
            });
    }, []);

    return (
        <div className='container mx-auto py-10'>
            <h2 className='text-center text-lg font-bold mb-5'>Posts</h2>
            <ul className='flex gap-3'>
                {postData.slice(0, 10).map((postItem, index) => (
                    <li key={index} className="border p-2">{postItem?.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Posts