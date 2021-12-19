import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Box, Container, Link, Typography } from '@mui/material'
import { Button, ContentBox } from '@iotabots/components'
import BackgroundVideo from '../components/BackgroundVideo' 
import BaseLayout from '../layout/BaseLayout';

export default function Home() {

  const cards = [0, 1, 2, 3, 4, 5];

  const scrollToBottom = () => {
    const bottomEle = document.getElementById("what");
    if (bottomEle) bottomEle.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <BaseLayout>
    <Box className='flex-body'>
      <Box>
        <BackgroundVideo
          blur={0}
          videoSource="assets/TEASER.mp4"
        >
          <Box className='content'>
            <Box className='sub-content' sx={{ px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography
                variant="h2"
                align="center"
                color="#ffffff"
                gutterBottom
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                {'IOTABOTS'}
              </Typography>


              <Typography variant="h5" align="center" color="#ffffff" paragraph>
                {'First PFP NFTs on IOTA'}
              </Typography>

              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  onClick={scrollToBottom}
                  size="large"
                  sx={{color: "primary.contrastText", mt: {sm:2}, boxShadow: 2 }}
                >
                  {"Let's go!"}
                </Button>
              </Box>
            </Box>
          </Box>
        </BackgroundVideo>
      </Box>

      <main>
        <Box sx={{ bgcolor: 'background.light'}} py={8}>
          <Container>
            <ContentBox
              image="http://assets.iotabots.io/9.png"
              text="An IOTABOT is a NFT in the form of a profile picture (PFP) that gives you access to the IOTABOTVERSE. At this time they are NFTs (ERC721 Tokens) on the public IOTA Smart Contract EVM Testnet."
              title="WHAT IS AN IOTABOT?!"
            />
          </Container>
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <div id="what" className="anchor" />
            <Typography
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              {'IOTABOTS'}
            </Typography>

            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              {'*BEE* *BOB* *BOO*'}
            </Typography>

            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              {'#On the 2nd November 2021, the first 500 IOTABOTS were minted for free on the public IOTA Smart Contracts EVM Testnet. More drops soon!'}
            </Typography>

            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              {'*BEE* *BOB* *BOO*'}
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href="/nfts">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{color: "primary.contrastText", mt: {sm:2}}}
                >
                  {'Discover NFTs'}
                </Button>
              </Link>
            </Stack>
          </Container>
        </Box>

        <Box sx={{bgcolor: 'background.light'}}>
          <Container
            maxWidth="md"
            sx={{py: 8}}
          >
            <Typography
              variant="h3"
              align="center"
              sx={{ pb: 6 }}
            >
              {'Available Bots'}
            </Typography>

            <Grid container spacing={6}>
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

                    <CardContent
                      sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', p: 2.4 }}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                      >
                        {`IOTABOT #${index + 1}`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </main>
    </Box></BaseLayout>
  );
}