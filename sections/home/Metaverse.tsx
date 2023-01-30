/* eslint-disable max-len */
import React from 'react'
import { Box } from '@mui/material'
import {
  Container,
  Grid,
  Section,
  SectionHeader,
  Typography,
} from '@iotabots/components'

const data = {
  title: 'Web3 业务',
  subtitle: 'NFTs | DEFI | DAO | GAMES | P2E | 100% 源码提供',
  data: [
    {
      headline: '去中心化咨询',
      text: '我们的 Dapp 开发专家始终了解 Dapp 市场的最新趋势，从而帮助您分析项目创意的成功前景。获得有关项目技术和业务方面的快速咨询和指导。',
      image: '/assets/metaverse/iotabots.png',
    },
    {
      headline: 'Web3产品设计开发',
      text: '在 Dapp 设计方面，我们创建了直观、简单且引人入胜的前端，以提供卓越和最佳的用户体验。为广泛的业务设计和开发强大的去中心化应用程序。',
      image: '/assets/metaverse/tradingcards.png',
    },
    {
      headline: '智能合约安全检测',
      text: '机构级别的资金管理, 实时扫描漏洞安全威胁, 合约安全威胁检测.',
      image: '/assets/metaverse/gameboy.png',
    },
    {
      headline: '国际化市场运营方案',
      text: '品牌运营、 合规框架搭建、 社交媒体运营、 媒体服务、  产品收录、合约审计',
      image: '/assets/metaverse/soonabot.svg',
    },
  ],
}

const Metaverse: React.FC = () => (
  <Section id='metaverse'>
    <SectionHeader title={data.title} subtitle={data.subtitle} />
    <Container>
      <Grid container spacing={8}>
        {data.data.flatMap((item, index) => (
          <Grid
            key={item.headline}
            item
            xs={12}
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems='center'
            direction={index % 2 === 0 ? 'row' : 'row-reverse'}
          >
            <Grid item xs={12} sm={8} md={6}>
              <Typography
                variant='h2'
                sx={{
                  fontSize: { xs: '32px', md: '48px' },
                }}
              >
                {item.headline}
              </Typography>
              <Typography variant='subtitle2' color='rgba(255,255,255,0.66)'>
                {item.text}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={6}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Box
                component='img'
                src={item.image}
                sx={{
                  maxWidth: '100%',
                  maxHeight: { xs: '200px', sm: '400px' },
                }}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
)

export default Metaverse
