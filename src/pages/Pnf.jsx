import React from 'react'

function Pnf() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-8xl font-bold text-white">404</h1>
        <p className="text-gray-400 text-lg mt-3">Oops! Page not found.</p>
        <p className="text-gray-500 text-sm mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="w-16 h-px bg-gray-700 mx-auto my-6" />

        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
        >
          ← Back to Home
        </a>

      </div>
    </div>
  )
}

export default Pnf
