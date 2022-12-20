import React from 'react'

const Registration = () => {
  return (
    <div className="container mx-auto text-center py-5 bg-zinc-600">
      <div className="py-5">
        <h1 className="text-rose-400 text-lg font-bold mb-3">Registration Form</h1>
        <h2 className="text-rose-200 italic">Section 1</h2>
        <p className="text-rose-300">All fields are mandatory</p>
        <span title="close" className='text-end'>X</span>
        <div className='flex justify-center'>
          <img src="https://via.placeholder.com/150" alt="a laptop screen" />
        </div>
        <div data-testid="custom-element" className="text-rose-300">Custom HTML element</div>
        <form>
          <div className="mt-5 text-rose-100">
            <label htmlFor="fullName">Name</label>
            <input
              type="text"
              id="fullName"
              className="ml-2 text-rose-400"
              placeholder="Full Name"
              value="David"
              onChange={() => { }}
            />
          </div>
          <div className="mt-5 text-rose-100">
            <label htmlFor="overview">Overview</label>
            <textarea id="overview" className="ml-2 text-rose-400" />
          </div>
          <div className="mt-5 text-rose-100">
            <label htmlFor="dev-region">Region</label>
            <select id="dev-region" className="ml-2 text-rose-400">
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
            </select>
          </div>
          <div className="mt-5">
            <label className="text-rose-100">
              <input type="checkbox" id="terms" /> I agree to the terms and
              conditions
            </label>
          </div>
          <button disabled className="mt-5 px-4 py-1.5 bg-rose-300 rounded">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Registration