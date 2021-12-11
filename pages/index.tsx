import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { ContentBox } from '@iotabots/react-nft-components'


import BackgroundVideo from '../components/BackgroundVideo'

export default function Home() {

  const cards = [0, 1, 2, 3, 4, 5];

  const scrollToBottom = () => {
    const bottomEle = document.getElementById("what");
    if (bottomEle) bottomEle.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <CssBaseline />
      <BackgroundVideo
        blur={0}
        videoSource="assets/TEASER.mp4" >
        <div className='content'>
          <div className='sub-content' >
            <h1>IOTABOTS</h1>
            <p>First PFP NFTs on IOTA</p>
            <button
              className="btn btn-outline-dark"
              onClick={scrollToBottom}>
              {"Let's go!"}
            </button>
            {/* <img
                      className="view-image"
                      src="https://www.jing.fm/clipimg/detail/139-1394959_panda-cartoon-png-cute-cartoon-panda-bear.png"
                      alt="profile" /> */}
          </div>
        </div>
      </BackgroundVideo>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container id="what" maxWidth="sm">
            {/* {process.browser &&
              <ContentBox
                backgroundColor="#2B2B2B"
                breakPoint={620}
                edgeRightBottomSize={50}
                hasImage
                headerBackgroundColor="#02c692"
                imageSize={150}
                imageSource="http://assets.iotabots.io/9.png"
                text="An IOTABOT is a NFT in the form of a profile picture (PFP) that gives you access to the IOTABOTVERSE. At this time they are NFTs (ERC721 Tokens) on the public IOTA Smart Contract EVM Testnet."
                textMarginBottom="30px"
                textMarginLeft="10px"
                textMarginRight="10px"
                title="WHAT IS AN IOTABOT?!"
                topBarHeight="20px"
                topBarMarginLeft="75px"
              />} */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#fff"
            gutterBottom
          >
            Available Bots
          </Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      // pt: '56.25%',
                    }}
                    image={`https://assets.iotabots.io/${index + 1}.png`}
                    alt="IOTABOT"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h3">
                      {`IOTABOT #${index + 1}`}
                    </Typography>

                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container>
        <Container sx={{ py: 8 }} maxWidth="md"  >
          <Typography align="center" gutterBottom variant="button" component="h1">

          </Typography>
        </Container>

      </main>
    </>
  );
}