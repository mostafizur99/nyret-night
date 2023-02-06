import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(0)
    return (
        <div className='container mx-auto py-10 flex justify-center gap-2'>
            <div className='w-fit px-4 py-2.5 text-center border border-rose-200 rounded'>
                <h1 className="text-rose-400 text-lg font-bold">{count}</h1>
                <button onClick={() => setCount(count + 1)}
                    className="mt-3 px-4 py-1.5 bg-rose-300 rounded"
                >Vote</button>
            </div>
            <div className='w-fit px-4 py-2.5 text-center border border-rose-200 rounded flex items-center'>
                <input
                    onChange={(e) => setAmount(parseInt(e.target.value))}
                    value={amount}
                    name="amount"
                    type="number"
                    className="text-rose-400 text-lg font-semibold bg-rose-100 py-1 px-2 rounded"
                />
                <button
                    onClick={() => setCount(amount)}
                    className="px-4 py-1.5 bg-rose-300 rounded"
                >Set</button>
            </div>
        </div>
    )
}

export default Counter