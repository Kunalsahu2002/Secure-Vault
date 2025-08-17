import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white flex flex-col justify-center items-center w-full py-4 px-4 shadow-lg'>
     <div className="logo font-bold text-white text-base sm:text-lg mb-2">
          <span className="text-blue-100">🔐</span>
          Secure
          <span className="text-blue-100">Vault</span>
        </div>
        <div className='flex justify-center items-center text-xs text-blue-100'>
            Built with <img className='w-4 sm:w-5 mx-1 animate-pulse' src="/icons/heart.png" alt="heart" /> by Kunal
        </div>
    </div>
  )
}

export default Footer
