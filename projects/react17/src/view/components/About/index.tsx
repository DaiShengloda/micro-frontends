import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import { Input } from 'antd'
import { mainApp } from '../../../store/mainApp'

const About: React.FC = observer(() => {

  const [iptValue, setIptValue] = useState<string>()

  useEffect(()=> {
    setIptValue(mainApp.iptValue)
  }, [])

  const handlerInputChange = (event: any) => {
    setIptValue(event.target.value)
    mainApp.setStore({
      'iptValue': event.target.value
    })
  }

  return (
    <React.Fragment>
      <h2 className="app-nav-item" style={{ borderColor: 'green' }}>About</h2>
      <Input value={iptValue} onChange={value => handlerInputChange(value)} />
      <div>{mainApp.iptValue}</div>
    </React.Fragment>
  )
})

export default About
