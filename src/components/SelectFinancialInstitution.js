import React from 'react'
import BankIcon from '../assets/images/icons8-bank-100.png'
import GtbankLogo from '../assets/images/gtbank.png'
import PolarisBankLogo from '../assets/images/polarisbank.png'
import {ReactComponent as CowrywiseLogo} from '../assets/images/cowrywise.svg'
import {ReactComponent as PiggyvestLogo} from '../assets/images/piggybank.svg'
import { ModalWithTransition } from './ModalBodyWithTransition'

function SelectFinancialInstitution(props) {
  return (
    <div className="bg-muney-100 rounded-custom px-7.5 pt-10 pb-8 sm:pb-36 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div>
        <div onClick={props.prev} className="flex items-center justify-center h-8 w-8 bg-neutral-900 rounded-full" role="button" aria-label="go back">
          <svg className="w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
        </div>
        <div className="mt-7 text-left sm:mt-8">
          <h3 className="sm:text-4xl text-3xl leading-7 sm:leading-10 font-black text-neutral-900" id="modal-headline">
            Select a financial <br/>institution <img src={BankIcon} alt="bank icon" className="inline-block w-10 h-10" />
          </h3>
        </div>
        <div className="mt-3">
          <div>
            <div className="mt-1 relative rounded-tiny shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input id="text" className="form-input block w-full pl-10 sm:leading-5 rounded-tiny py-4 bg-muney-500 text-lg border-none bg-opacity-10 font-medium" placeholder="Search banks, fintech etc" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12">
        <div className="flex -mx-3">
          <div className="w-1/2 px-3">
            <div onClick={props.next} className="flex items-center justify-center w-full rounded-btn bg-gtbank bg-opacity-20 sm:py-10 py-6" role="button" aria-label="Select bank">
              <img src={GtbankLogo} alt="Guaranty trust bank logo" className="rounded-btn w-16 h-16"/>
            </div>
          </div>

          <div className="w-1/2 px-3">
            <div className="flex items-center justify-center w-full rounded-btn bg-polaris bg-opacity-20 sm:py-10 py-6">
              <img src={PolarisBankLogo} alt="Polaris bank logo" className="rounded-btn w-16 h-16"/>
            </div>
          </div>
        </div>

        <div className="flex -mx-3 mt-6">
          <div className="w-1/2 px-3">
            <div className="flex items-center justify-center w-full rounded-btn bg-cowrywise bg-opacity-20 sm:py-10 py-6">
              <div className="bg-cowrybule w-16 h-16 rounded-btn flex items-center justify-center">
                <CowrywiseLogo className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div className="w-1/2 px-3">
            <div className="flex items-center justify-center w-full rounded-btn bg-piggy bg-opacity-20 sm:py-10 py-6">
              <div className="bg-piggy w-16 h-16 rounded-btn flex items-center justify-center">
                <PiggyvestLogo className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalWithTransition(SelectFinancialInstitution)