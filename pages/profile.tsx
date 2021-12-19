import * as React from 'react';
import Connector from '../components/Connector/Connector'
import { Box, Container, Typography, Grid, CardContent, Card } from '@iotabots/components'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'

import Web3 from 'web3';
import CardMedia from '@mui/material/CardMedia';
import BaseLayout from '../layout/BaseLayout';

const IOTABOTS_ABI = require('../contracts/iotabots.json')

declare global {
  interface Window {
    web3: any
    ethereum: any
  }
}

export default function Profile() {
  const [bots, setBots] = React.useState<Array<any>>([]);
  const [errorRetrievingBots, setErrorRetrievingBots] = React.useState(false)
  const context = useWeb3React<Web3Provider>()

  const { account, active } = context

  const IOTABOTS_ADR = "0x3a3c0D4BDAB6d0e9715Fa2eAA852af3038Bec342"
  interface Bot {
    attributes: Array<object>;
    date: number;
    description: string;
    dna: string;
    edition: number;
    image: string;
    name: string;
  }
  
  React.useEffect(() => {
    if (active) {
      const init = async () => {

        // window.ethereum.enable();
        /* eslint-disable */

        const web3 = new Web3(window.web3.currentProvider);
        window.ethereum.on('accountsChanged', function()
        {
          window.location.reload();
        })
        let contract = new web3.eth.Contract(IOTABOTS_ABI, IOTABOTS_ADR);

        /* eslint-enable */
        console.log("contract", contract)

        let data 
        try {
          data = await contract.methods.walletOfOwner(account).call();
        }
        catch (e) {
          setErrorRetrievingBots(true)
          console.log(e)
          return new Array<Bot> ();
        }
        console.log("i", init)

        const items: Array<Bot> = await Promise.all(data.map(async (i: any) => {
          // let token_index = i.toNumber()
          console.log("token_index", i)

          const metadata_url = await contract.methods.tokenURI(i).call()

          console.log("metadata_url:", metadata_url)

          const metadata_raw = await fetch(metadata_url)
          const metadata = await metadata_raw.json()

          console.log("metadata:", metadata)
          return metadata
        }))

        console.log("items:", items)
        setBots(items)

      };
      init()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  return (
    <BaseLayout>
      <Box py={11} className='flex-body'>
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography variant="h1" gutterBottom>
              Profile
            </Typography>
            <Connector />
          </Box>
          <Box sx={{ marginBottom:"10px", textAlign: 'center' }} >
            {errorRetrievingBots ?      
                <Typography gutterBottom variant="h6">
                  {"There was an error retrieving your IotaBots"}
                </Typography>
                :  bots.length === 0 ? 
                <Typography gutterBottom variant="h6">
                  {"You don't own any IotaBots yet :("}
                </Typography> :
            bots.map((bot, index) => (
              <Grid item key={index} xs={12} sm={12} md={12}>
                <Card>
                  <CardMedia
                    height="100%"
                    component="img"
                    image={bot.image}
                    alt="IOTABOT"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6">
                      {`IOTABOT ${bot.name}`}
                    </Typography>
                    <Typography gutterBottom variant="body1">
                      {`DNA ${bot.dna}`}
                    </Typography>
                    <Typography gutterBottom variant="body1">
                      {`Edition ${bot.edition}`}
                    </Typography>
                    <Typography gutterBottom variant="body1">
                      {`Created on ${new Date(bot.date).toLocaleDateString()}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Box>
        </Container>
      </Box>
    </BaseLayout>
  );
}