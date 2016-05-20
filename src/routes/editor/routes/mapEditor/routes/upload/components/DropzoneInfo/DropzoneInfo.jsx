import React, { PropTypes } from 'react'

import mapsConfig from 'config/maps'
import style from './DropzoneInfo.css'
import CSVExample from '../CSVExample/CSVExample'

const DropzoneInfo = (props) => {
  const { mapType } = props
  const displayMapName = mapsConfig.types.find((item) =>
    item.code === mapType
  ).displayName

  return (
    <div className={style.container}>
      <p>CSV file has to include two columns:</p>
      <ul className={style.list}>
        <li className={style['list-item']}>code (state code)</li>
        <li className={style['list-item']}>value</li>
      </ul>

      <a href={`/data/csv/${mapType}.csv`} download={`${mapType}-data`}>
        example {displayMapName} csv
      </a>

      <CSVExample type={mapType} />
    </div>
  )
}

DropzoneInfo.propTypes = {
  mapType: PropTypes.string.isRequired,
}

export default DropzoneInfo
