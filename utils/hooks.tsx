import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'

import { injected } from './connectors'

export const useEagerConnect = (): boolean => {
  const { activate, active } = useWeb3React()

  const [tried, setTried] = useState(false)

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true)
        })
      } else {
        setTried(true)
      }
    })
  }, [activate])

  /* if the connection worked, wait until we get confirmation of that to 
  flip the flag */
  useEffect(() => {
    if (!tried && active) {
      setTried(true)
    }
  }, [tried, active])

  return tried
}

interface InactiveListenerProps {
  suppress: boolean
}

export const useInactiveListener = (
  { suppress = false }: InactiveListenerProps
): void => {
  const { active, error, activate } = useWeb3React()

  // eslint-disable-next-line consistent-return
  useEffect((): any => {
    const { ethereum } = window as any
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      const handleConnect = () => {
        console.log('Handling \'connect\' event')
        activate(injected)
      }
      const handleChainChanged = (chainId: string | number): void => {
        console.log('Handling \'chainChanged\' event with payload', chainId)
        activate(injected)
      }
      const handleAccountsChanged = (accounts: string[]): void => {
        console.log('Handling \'accountsChanged\' event with payload', accounts)
        if (accounts.length > 0) {
          activate(injected)
        }
      }
      const handleNetworkChanged = (networkId: string | number): void => {
        console.log('Handling \'networkChanged\' event with payload', networkId)
        activate(injected)
      }

      ethereum.on('connect', handleConnect)
      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)
      ethereum.on('networkChanged', handleNetworkChanged)

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect)
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
          ethereum.removeListener('networkChanged', handleNetworkChanged)
        }
      }
    }
  }, [active, error, suppress, activate])
}