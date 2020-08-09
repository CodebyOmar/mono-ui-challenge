import React from 'react'
import Modal from '../components/Modal'

function LaunchScreen() {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <React.Fragment>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg p-6 max-w-md">
          <span className="inline-flex rounded-md shadow-sm">
            <button onClick={() => setShowModal(true)} type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
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