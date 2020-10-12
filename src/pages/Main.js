import React from 'react'
import { Layout, Card, BannerCard } from '../components'
import car from '../assets/car.jpg'

const titles = ['Мои счета', 'Шаблоны операции']

export const Main = () => {
  return (
    <Layout>
      <div className={'d-lg-flex main-wrapper'}>
        <section>{renderCards()}</section>
        <div className={'d-sm-none d-md-none d-xl-block ml-2 wrapper-aside'}>
          {[
            { footer: null },
            { footer: 'Авто кредит', img: car },
            { footer: 'Депозиты', img: car },
          ].map((o) => (
            <BannerCard footer={o.footer} img={o.img} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

const renderCards = () => {
  let cards = []

  for (let i = 0; i < 4; i++) {
    cards.push(
      <div className={'d-xl-flex justify-content-xl-between'}>
        {titles.map((title) => (
          <Card title={title} />
        ))}
      </div>
    )
  }

  return cards
}
