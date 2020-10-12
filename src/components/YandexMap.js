import React from 'react'
import { YMaps, Map, ObjectManager } from 'react-yandex-maps'

const mapState = {
  center: [43.238949, 76.889709],
  zoom: 10,
}

const data = [
  { coordinates: [43.20075, 76.892876], color: 'yellow', text: 'Мега Парк' },
  { coordinates: [43.230525, 76.945932], color: 'orange', text: 'Нурлы Тау' },
]

export const CustomYandexMap = () => {
  return (
    <YMaps style={{ minWidth: '100%' }}>
      <Map
        width='100%'
        style={{ minHeight: '500px', minWidth: '100%' }}
        defaultState={mapState}
        modules={['geoObject.addon.balloon', 'layout.ImageWithContent']}
      >
        {/* <Placemark {...placeMarkBallon} />
        <Placemark {...placeMark} /> */}
        <ObjectManager
          objects={{
            openBalloonOnClick: true,
            // preset: 'islands#blueDotIcon',
          }}
          options={{
            // clusterize: true,
            gridSize: 32,
          }}
          defaultFeatures={{
            type: 'FeatureCollection',
            features: setFeatures(data),
          }}
          modules={[
            'objectManager.addon.objectsBalloon',
            'objectManager.addon.objectsHint',
          ]}
        />
      </Map>
    </YMaps>
  )
}

const setFeatures = (data) =>
  data.map((o, index) => {
    const preset =
      index === 0 ? 'islands#violetIcon' : 'islands#darkGreenCircleDotIcon'
    return {
      type: 'Feature',
      id: index,
      geometry: {
        type: 'Point',
        coordinates: o.coordinates,
      },
      options: {
        preset: preset,
        iconColor: o.color,
      },
      properties: {
        balloonContent: `
            <div>
             ${o.text}
            </div>
          `,
      },
    }
  })
