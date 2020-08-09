import React from 'react'
import GtbankLogo from '../assets/images/gtbank.png'
import { ModalWithTransition } from './ModalBodyWithTransition'

function GtbankLogin(props) {
  const [userId, setUserId] = React.useState("John Doe")
  const [password, setPassword] = React.useState("111111111111")

  return (
    <div className="bg-gtbank rounded-custom px-7.5 pt-10 pb-6 sm:pb-36 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div>
        <div onClick={props.prev} className="flex items-center justify-center h-8 w-8 bg-neutral-900 rounded-full" role="button" aria-label="go back">
          <svg className="w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
        </div>
        <div className="mt-8">
          <div className="bg-white rounded-btn w-16 h-16">
            <img src={GtbankLogo} alt="Guaranty trust bank logo" className="w-16 h-16 border-4 border-white rounded-btn"/>
          </div>
        </div>
        <div className="mt-6 text-left sm:mt-6">
          <h3 className="sm:text-4xl sm:leading-10 text-3xl leading-7 font-black text-white" id="modal-headline">
            GTBank Internet <br/>Banking 
          </h3>
        </div>
        <div className="sm:mt-6 mt-6">
          <div>
            <div className="mt-1 relative rounded-btn shadow-sm bg-white bg-opacity-10">
              <label htmlFor="userId" className="block text-sm font-medium leading-5 text-white text-opacity-40 px-5 pt-2">GTBank User ID</label>
              <input 
                id="userId" 
                type="text"
                onChange={e => setUserId(e.target.value)}
                className="form-input block w-full sm:leading-5 rounded-btn pb-3 pt-1 focus:outline-none focus:shadow-none px-5 bg-transparent text-lg text-white border-none font-black" 
                value={userId} />
            </div>
          </div>

          <div className="mt-4">
            <div className="mt-1 relative rounded-btn shadow-sm bg-white bg-opacity-10">
              <label htmlFor="password" className="block text-sm font-medium leading-5 text-white text-opacity-40 px-5 pt-2">Password</label>
              <input 
                id="password" 
                type="password"
                onChange={e => setPassword(e.target.value)}
                className="form-input block w-full sm:leading-5 rounded-btn pb-3 pt-1 focus:outline-none focus:shadow-none px-5 bg-transparent text-lg text-neutral-900 border-none font-black" 
                value={password} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 sm:pb-20 pb-12">
        <span className="flex w-full rounded-btn shadow-sm">
          <button onClick={props.next} type="button" className="inline-flex font-black justify-center w-full rounded-btn border border-transparent px-4 py-5 bg-white text-base leading-6 text-neutral-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:border-gray-100 focus:shadow-outline-gray transition ease-in-out duration-150 sm:text-lg sm:leading-5">
            Link Account
          </button>
        </span>
      </div>
    </div>
  )
}

export default ModalWithTransition(GtbankLogin)