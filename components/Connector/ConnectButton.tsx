
import React, { useState } from 'react'
import { injected, network, walletconnect } from '../../utils/connectors'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { useEagerConnect, useInactiveListener } from '../../utils/hooks'
import { Web3Provider } from '@ethersproject/providers'
import { Button } from '@iotabots/components'

enum ConnectorNames {
    Injected = 'Connect',
    // Network = 'RPC Connect',
    // WalletConnect = 'WalletConnect'
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
    [ConnectorNames.Injected]: injected,
    // [ConnectorNames.Network]: network,
    // [ConnectorNames.WalletConnect]: walletconnect
}

const ConnectButton = function () {
    const context = useWeb3React<Web3Provider>()
    const { connector, library, chainId, account, activate, deactivate, active, error } = context

    const [activatingConnector, setActivatingConnector] = React.useState<any>()
    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useEagerConnect()

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector)

    const currentConnector = connectorsByName["Connect"]
    const activating = currentConnector === activatingConnector
    const connected = currentConnector === connector
    const disabled = !triedEager || !!activatingConnector || connected || !!error

    return (
        <Button
            disabled={disabled}
            key={"Connect"}
            size='small'
            onClick={() => {
                setActivatingConnector(currentConnector)
                activate(connectorsByName["Connect"])
            }}
        >
            <div>
                {activating && '⏳'}
                {connected && '✅'}
            </div>
            { 'Connect' }
        </Button>
    )

}


export default ConnectButton