import { useState } from "react";

const Greeting = () => {
    const [userJoined, setUserJoined] = useState(false)

    const joinHandler = () => {
        setUserJoined(!userJoined);
    }
    return (
        <div className="container mx-auto text-center py-5 bg-zinc-600">
            <h2 className="text-rose-400 text-lg font-bold">Welcome to Nyret Night!</h2>
            <p className="text-rose-200 italic">The dream night for coders</p>

            <div className="py-5">
                {!userJoined && <p className="text-rose-300">Join and Get Coding Idea</p>}
                {userJoined && <p className="text-rose-300">You Are Coder Member</p>}
                <button onClick={joinHandler} className="mt-5 px-4 py-1.5 bg-rose-300 rounded">
                    {userJoined ? 'Joined' : 'Join'}
                </button>
            </div>
        </div>
    )
}

export default Greeting;