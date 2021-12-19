
import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Button } from '@iotabots/components'
import { useEagerConnect, useInactiveListener } from '../../utils/hooks'
import { injected } from '../../utils/connectors'

enum ConnectorNames {
    Injected = 'Connect',
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
    [ConnectorNames.Injected]: injected,
}

const ConnectButton: React.FC = () => {
    const context = useWeb3React<Web3Provider>()
    const { connector, activate, error } = context

    const [activatingConnector, setActivatingConnector] = React.useState<any>()
    /* handle logic to eagerly connect to the injected ethereum provider, 
    if it exists and has granted access already */
    const triedEager = useEagerConnect()

    /* handle logic to connect in reaction to certain events on the injected
    ethereum provider, if it exists */
    useInactiveListener(!triedEager || !!activatingConnector)

    const currentConnector = connectorsByName.Connect
    const activating = currentConnector === activatingConnector
    const connected = currentConnector === connector
    const disabled =
        !triedEager ||
        !!activatingConnector ||
        connected ||
        !!error

    return (
        <Button
            disabled={disabled}
            key="Connect"
            size='small'
            onClick={() => {
                setActivatingConnector(currentConnector)
                activate(connectorsByName.Connect)
            }}
        >
            <div>
                {activating && '⏳'}
                {connected && '✅'}
            </div>
            Connect
        </Button>
    )
}

export default ConnectButton