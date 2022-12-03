import React from 'react'

const SubBanner = () => {
    return (
        <div className='bg-zinc-300 py-10'>
            <div className='container mx-auto flex items-center'>
                <div className='w-6/12'>
                    <h2 className="text-rose-400 text-lg font-bold">Subscribe and get pro codes</h2>
                </div>
                <div className='w-6/12'>
                    <button className="mt-5 px-4 py-1.5 bg-rose-300 rounded">
                        Subcsribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SubBanner