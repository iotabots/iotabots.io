/* eslint-disable max-len */
import React from 'react'
import {
  Container,
  Section,
  SectionHeader,
  Timeline,
} from '@ccdao/components'

const data = {
  title: '专业服务',
  subtitle:
    '借助我们安全、可扩展且现代的 Dapp 开发服务，成为区块链技术的创新者',
  data: [
    {
      title: 'NFT商城',
      description: 'NFT盲盒商城源码（数字藏品)',
      checked: true,
    },
    {
      title: '交易所',
      description:
        '16国语言中心化交易所',
      checked: true,
    },
    {
      title: 'DeFi去中心化借贷',
      description: 'DeFi去中心化借贷系统',
      checked: true,
    },
    {
      title: '流动性挖矿',
      description:
        '流动性挖矿 Dapp 搭建部署',
      checked: true,
    },
    {
      title: 'NFT加密艺术生成器',
      description:
        '提供各种类型的NFT加密艺术品生成器',
      checked: true,
    },
    {
      title: '爬虫系统',
      description:
        '区块链上数据采集分析系统构建',
      checked: true,
    },
    {
      title: 'Web3资讯系统',
      description:
        'Web3媒体资讯平台搭建',
      checked: true,
    },
    {
      title: '套利交易工具',
      description: '去中心化交易所套利工具, MEV机器人交易源码',
      checked: true,
    },
    {
      title: 'Gamefi',
      description: '边玩边赚Web3游戏平台搭建',
      checked: true,
    },
    {
      title: 'Web3电商网站搭建',
      description: '支持USDT交易支付的Web3电商交易平台',
      checked: true,
    },
    {
      title: '法币、交易所支付渠道',
      description: '提供知名交易所成熟法币、交易所支付渠道',
      checked: true,
    },
    {
      title: 'Web3招聘求职 ',
      description:
        'Web3人力资源系统构建,提供人才对接服务',
      checked: true,
    },
    {
      title: '海外KYC认证',
      description:
        '提供海外KYC认证服务',
      checked: true,
    },
    {
      title: '明星网红代言',
      description: '支持海外名人视频,知名网红,KOL视频推广宣传',
      checked: true,
    },
    {
      title: '海外公司/银行卡/对公账户代注册',
      description: '海外合规架构搭建, 海外公司/银行卡/对公账户代注册',
      checked: true,
    },
    {
      title: '海外社媒/纸媒资源代发/时代广场大屏',
      description: '海外社媒/纸媒资源代发/时代广场大屏',
      checked: false,
    },
    {
      title: '社交媒体增粉引流',
      description:
        '人工水军、Discord代肝、国外各大社交媒体增流上粉',
      checked: false,
    },
    {
      title: '匿名资源服务',
      description:
        '免实名认证服务器, Telegram增值业务, TG 机器人定制',
      checked: false,
    },
    {
      title: '清算机器人',
      description:
        'DeFi项目清算机器人',
      checked: false,
    },
    {
      title: '链上安全服务',
      description: '智能合约监听检测、链上报警机制服务',
      checked: false,
    },
    {
      title: '知名项目合约源码',
      description: '市面大部分智能合约源码提供',
      checked: false,
    },
    {
      title: '量化交易策略开发',
      description: '代写量化交易策略, 量化交易策略交易',
      checked: false,
    },
    {
      title: 'DAO治理框架搭建',
      description: '如何搭建去中心化的社区治理?',
      checked: false,
    },
    {
      title: '代币经济模型设计',
      description: '发行部署完整加密货币及后期维护.',
      checked: false,
    },
    {
      title: '流动性挖矿',
      description: '提供流动性挖矿策略、DeFi高收益率策略提供',
      checked: false,
    },
  ],
}

const RoadmapSection: React.FC = () => (
  <Section>
    <SectionHeader title={data.title} subtitle={data.subtitle} />
    <Container maxWidth='md'>
      {data.data.map(({ checked, title, description }) => (
        <Timeline checked={checked} title={title}>
          {description}
        </Timeline>
      ))}
    </Container>
  </Section>
)

export default RoadmapSection
