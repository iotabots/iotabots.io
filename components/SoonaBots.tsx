import { Box, Card, CardContent, Grid, Typography } from '@ccdao/components'
import CardMedia from '@mui/material/CardMedia'
import Link from 'next/link'
import * as React from 'react'
import { useWeb3React } from '@web3-react/core'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Soonabots = () => {
  const [bots, setBots] = React.useState<Array<any>>([])
  const { account, library } = useWeb3React()

  React.useEffect(() => {
    if (account) {
      if (process.browser && bots.length === 0) {
        console.log('gogo Soonabots')
        // client-side-only code
        window.soon.getNftsByEthAddress(account).then((obj) => {
          // soonabots collection "0xeb47806ef8d4c908179bd05eeabc20bc3de8c81a"
          const filteredBots = obj.filter(
            (e) => e.collection === '0xeb47806ef8d4c908179bd05eeabc20bc3de8c81a'
          )
          console.log('filteredBots', filteredBots)
          setBots(filteredBots)
        })
      }
    }
  }, [account])
  return (
    <Box sx={{ marginBottom: '10px' }}>
      <Typography gutterBottom variant='h4'>
        SOONABOTS
      </Typography>
      {/* eslint-disable-next-line no-nested-ternary */}
      {/* {errorRetrievingBots && (
      <Typography gutterBottom variant='h6'>
        There was an error retrieving your SOONABOTS
      </Typography>
    )} */}
      {bots?.length === 0 ? (
        <Typography gutterBottom variant='h6'>
          You don&apos;t own any SOONABOTS yet :(
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {bots.flatMap((bot) => (
            <Grid item key={bot.position} xs={4} sm={4} md={4}>
              <Link href={`https://soonaverse.com/nft/${bot.uid}`}>
                <Card
                  sx={{
                    minWidth: '100%',
                    cursor: 'pointer',
                    bgcolor: 'rgba(0,0,0,0.5)',
                  }}
                >
                  <CardMedia
                    height='100%'
                    width='100%'
                    component='img'
                    image={bot.media}
                    alt='IOTABOT'
                  />
                  <CardContent sx={{ p: 4, pb: '12px !important' }}>
                    <Typography variant='h6' mb={0}>
                      {`${bot.name}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default Soonabots
