import React from 'react'
import { Map, Placemark, YMaps } from 'react-yandex-map'
export default function MapPage() {
    return (
    <div className="max-w-screen-xl mx-auto">

        <YMaps query={{
            ns: 'use-load-option',
            load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon'
          }}>
              <Map width={1290} height={380} defaultState={{
              center: [55.75, 37.57],
              zoom: 9,
              controls: ['zoomControl', 'fullscreenControl']
            }}>
                <Placemark defaultGeometry={[55.75, 37.57]} properties={{
                balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system'
              }} />
              </Map>
            </YMaps>
    </div>
        
     
    )
}
