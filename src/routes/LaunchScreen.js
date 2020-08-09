import React from 'react'
import Modal from '../components/Modal'

function LaunchScreen() {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <React.Fragment>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg p-6 max-w-md">
          <div className="text-center py-4">
            <h1 className="text-neutral-900 font-bold text-2xl text-opacity-75">Get Started</h1>
            <p className="text-sm text-gray-400 font-medium">
              Click the button below to connect your bank account to our app. It takes only a few seconds. Powered and secured by Mono.
            </p>
          </div>
          <span className="inline-flex rounded-md justify-center w-full">
            <button onClick={() => setShowModal(true)} type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-lg leading-6 font-bold rounded-btn text-neutral-900 bg-muney-500 hover:bg-muney-600 focus:outline-none focus:border-muney-600 focus:shadow-outline-blue active:bg-muney-600 transition ease-in-out duration-150">
              Link your bank account
            </button>
          </span>
        </div>
      </div>
      {showModal ? <Modal show={showModal} close={() => setShowModal(false)}/> : null}
    </React.Fragment>
  )
}

export default LaunchScreen