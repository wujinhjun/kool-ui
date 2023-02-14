import { Switch } from 'kool-ui'
import React from 'react'
import './index.scss'

const App: React.FC = () => {
  return (
    <div className={'switchSize'}>
      <span style={{ marginRight: '20px' }}>
        <Switch size={'small'} />
      </span>
      <Switch />
    </div>
  )
}

export default App
