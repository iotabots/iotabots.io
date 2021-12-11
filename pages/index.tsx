import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


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
          <div className='sub-content mui--text-center'>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#ffffff"
              gutterBottom
            >
              {'IOTABOTS'}
            </Typography>

            <Typography variant="h5" align="center" color="#ffffff" paragraph>
              {'First PFP NFTs on IOTA'}
            </Typography>

            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="outlined"
                onClick={scrollToBottom}
                size="large"
                sx={{color: "primary.contrastText", mt: {sm:2}}}
              >
                {"Let's go!"}
              </Button>
            </Box>
          </div>
        </div>
      </BackgroundVideo>

      <main>
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
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
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

        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#fff"
            gutterBottom
          >
            {'Available Bots'}
          </Typography>

          <Grid container spacing={2}>
            {cards.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={`http://assets.iotabots.io/${index + 1}.png`}
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

        {/* <Container sx={{ py: 8 }} maxWidth="md"  >
          <Typography align="center" gutterBottom variant="button" component="h1"></Typography>
        </Container> */}

      </main>
    </>
  );
}