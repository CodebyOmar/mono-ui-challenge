import React from 'react'
import Transition from './Transition'
import LinkedSuccessfully from './LinkedSuccessfully'
import GtbankLogin from './GtbankLogin'
import SelectAccount from './SelectAccount'
import SelectFinancialInstitution from './SelectFinancialInstitution'

function Modal({show, close}){
  const [currentScreen, setCurrentScreen] = React.useState('select-account')

  function IsCurrentScreen(name) {
    return name === currentScreen
  }

  function NextScreen() {
    const currentRoute = routes.find(r => r.name === currentScreen)
    const screenIndex = routes.indexOf(currentRoute)
    const next = routes[screenIndex+1].name
    setCurrentScreen(next)
  }

  function PreviousScreen() {
    const currentRoute = routes.find(r => r.name === currentScreen)
    const screenIndex = routes.indexOf(currentRoute)
    const prev = routes[screenIndex-1].name
    setCurrentScreen(prev)    
  }

  return (
    <div className="fixed max-h-screen overflow-y-auto bottom-0 inset-x-0 px-1 pb-2 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
      <Transition show={show} {...{
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0"
      }}>
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
      </Transition>

      {IsCurrentScreen('select-account') ? (
        <SelectAccount 
          next={NextScreen} 
          show={show} />
      ) : null}

      {IsCurrentScreen('select-financial-institution') ? (
        <SelectFinancialInstitution 
          next={NextScreen} 
          prev={PreviousScreen} 
          show={show} />
      ) : null}

      {IsCurrentScreen('gtbank-login') ? (
        <GtbankLogin 
          next={NextScreen} 
          prev={PreviousScreen} 
          show={show} />
      ) : null}

      {IsCurrentScreen('account-linked') ? (
        <LinkedSuccessfully 
          close={close} 
          show={show} />
      ) : null}
    </div>
  )
}

const routes = [
  {name: 'select-account'},
  {name: 'select-financial-institution'},
  {name: 'gtbank-login'},
  {name: 'account-linked'}
]

export default Modal