import React from 'react'
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import { ModalWithTransition } from './ModalBodyWithTransition'

function SelectAccount(props) {
  return (
    <div className="bg-muney-100 rounded-custom overflow-y-auto px-7.5 pt-6 sm:pt-10 pb-8 md:pb-36 shadow-xl transform transition-all sm:max-w-sm sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div>
        <div className="flex items-start justify-start">
          <Logo className="h-24 w-24" />
        </div>
        <div className="mt-4 text-left sm:mt-5">
          <h3 className="text-4xl leading-10 font-black text-neutral-900" id="modal-headline">
            Muney links all <br/>your finance apps
          </h3>
          <div className="mt-5">
            <p className="text-base leading-5 text-neutral-900 opacity-50 font-medium">
              Click "Select Account" to continue.
            </p>
          </div>
        </div>
        <div className="bg-muney-200 rounded-btn mt-12 px-4 py-7.5">
          <ul>
            <li>
              <div className="flex flex-row items-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-muney-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="pl-2">
                  <span className="block text-neutral-900 opacity-40 font-bold text-sm">Select</span>
                  <span className="block text-neutral-900 font-black text-sm mt-1">100% data security on Mono app</span>
                </div>
              </div>
            </li>
            <li className="pt-6">
              <div className="flex flex-row items-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-muney-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="pl-2">
                  <span className="block text-neutral-900 opacity-40 font-bold text-sm">Private by design</span>
                  <span className="block text-neutral-900 font-black text-sm mt-1">Zero access to your details</span>
                </div>
              </div>
            </li>
            <li className="pt-6">
              <div className="flex flex-row items-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-muney-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="pl-2">
                  <span className="block text-neutral-900 opacity-40 font-bold text-sm">Finance protection</span>
                  <span className="block text-neutral-900 font-black text-sm mt-1">We don't have access to your funds</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <span className="flex w-full rounded-btn shadow-sm">
          <button onClick={props.next} type="button" className="inline-flex font-black justify-center w-full rounded-btn border border-transparent px-4 py-5 bg-muney-500 text-base leading-6 text-neutral-900 shadow-sm hover:bg-muney-500 focus:outline-none focus:border-muney-700 focus:shadow-outline-muney transition ease-in-out duration-150 sm:text-lg sm:leading-5">
            Select Account
          </button>
        </span>
      </div>
    </div>
  )
}

export default ModalWithTransition(SelectAccount)