import * as React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@iotabots/components'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'

import CardMedia from '@mui/material/CardMedia'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const FakeIotabots = (props) => {
  const [bots, setBots] = React.useState<Array<any>>([])
  const [errorRetrievingBots, setErrorRetrievingBots] = React.useState(false)
  const context = useWeb3React<Web3Provider>()

  const { account, active } = context

  React.useEffect(() => {
    const { addresses } = props
    if (active && addresses) {
      const iotabots = []
      addresses.addresses.forEach((obj) => {
        if (obj.address === account) {
          iotabots.push(obj.id)
        }
      })
      setBots(iotabots)
    }
    return null
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])
  return (
    <Box sx={{ marginBottom: '10px' }}>
      <Typography gutterBottom variant='h4'>
        IOTABOTS
      </Typography>
      {/* eslint-disable-next-line no-nested-ternary */}
      {errorRetrievingBots ? (
        <Typography gutterBottom variant='h6'>
          There was an error retrieving your IOTABOTS
        </Typography>
      ) : bots.length === 0 ? (
        <Typography gutterBottom variant='h6'>
          You don&apos;t own any IotaBots yet :(
        </Typography>
      ) : (
        bots.map((bot) => (
          <Link href={`/bots/${bot}`}>
            <Grid item key={bot} xs={4} sm={4} md={4}>
              <Card sx={{ minWidth: '300px', cursor: 'pointer' }}>
                <CardMedia
                  height='100%'
                  width='100%'
                  component='img'
                  image={`https://assets.iotabots.io/compressed/${bot}.png`}
                  alt='IOTABOT'
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant='h6'>
                    {`IOTABOT #${bot}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Link>
        ))
      )}
    </Box>
  )
}

export default FakeIotabots
