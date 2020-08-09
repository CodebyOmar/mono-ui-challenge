import React from 'react'
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import {ReactComponent as Confetti} from '../assets/images/confetti.svg'
import {ReactComponent as LinkIcon} from '../assets/images/link.svg'
import {ReactComponent as Connector} from '../assets/images/connector.svg'
import GtbankLogo from '../assets/images/gtbank.png'
import { ModalWithTransition } from './ModalBodyWithTransition'

function LinkedSuccessfully(props) {
  return (
    <div className="flex items-center justify-center flex-col bg-muney-100 rounded-custom px-7.5 sm:pt-24 pt-16 pb-10 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div>
        <div className="flex items-center justify-center relative">
          <Confetti className="sm:h-44 sm:w-44 w-32 h-32 relative" />
          <LinkIcon className="sm:w-28 w-20 absolute"/>
        </div>
        <div className="sm:mt-8 mt-5 flex items-center justify-center">
          <div>
            <Logo className="w-16 h-16 inline-block" />
            <Connector className="w-20 inline-block" />
            <img src={GtbankLogo} alt="Guaranty trust bank logo" className="w-12 h-12 rounded-tiny inline-block"/>
          </div>
        </div>
        <div className="mt-5 text-center sm:mt-5">
          <h3 className="sm:text-4xl sm:leading-10 text-3xl leading-7 font-black text-neutral-900" id="modal-headline">
            Account Linked!
          </h3>
          <div className="sm:mt-4 mt-2">
            <p className="sm:text-lg text-base sm:leading-7 leading-5 text-neutral-900 opacity-50 font-medium sm:px-10 px-5">
              Your bank account has been successfully linked to <span className="font-black">Muney.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="sm:mt-8 mt-6 w-full">
        <span className="flex w-full rounded-btn shadow-sm">
          <button onClick={props.close} type="button" className="inline-flex font-black justify-center w-full rounded-btn border border-transparent px-4 sm:py-5 py-4 bg-muney-500 text-base leading-6 text-neutral-900 shadow-sm hover:bg-muney-500 focus:outline-none focus:border-muney-700 focus:shadow-outline-muney transition ease-in-out duration-150 sm:text-lg sm:leading-5">
            Continue
          </button>
        </span>
      </div>
      <div className="sm:mt-24 mt-12">
        <span className="flex w-full rounded-midi">
          <button onClick={props.close} type="button" className="inline-flex font-black justify-center w-full rounded-midi border border-transparent px-6 sm:py-4 py-3 bg-neutral-900 bg-opacity-10 text-base leading-6 text-neutral-900 shadow-sm focus:outline-none focus:border-gray-100 focus:shadow-outline-gray-100 transition ease-in-out duration-150 sm:text-base sm:leading-5">
            Link another account
          </button>
        </span>
      </div>
    </div>
  )
}

export default ModalWithTransition(LinkedSuccessfully)