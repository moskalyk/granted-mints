import React from 'react';
import logo from './crystal_ball.png';
import './App.css';

import { 
  Box, Button } from '@0xsequence/design-system'

import { sequence } from '0xsequence'

function App() {
  const [spell, setSpell] = React.useState<any>(100)
  const [success, setSuccess] = React.useState<any>(false)
  sequence.initWallet({defaultNetwork: 'polygon'})
  const spells = [
    '𓆟',
    '𓃕',
    '𓆦',
    '𓆉',
    '❀',
    '☮',
    '꩜',
    '▲'
  ]

  const revealSpell = async () => {
    const start = Date.now()
    try{
      await fetch('http://137.220.54.108:2000/')
    }catch(err){}
    const end = Date.now()
    if(!isNaN(spell)) setSpell(spells[(end-start)%spells.length])
  }

  const mint = () => {
    setSuccess(true)
  }

  React.useEffect(() => {
  }, [success])

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '30%'}}>
        <br/>
        <p style={{ fontSize: '23px', color: isNaN(spell) ? 'black' : 'white'}}>R A I S E D</p>
        <div className="octo">
          {spell}
          <div className="octo-label">
            { !isNaN(spell) ? <><strong>_</strong>FLORE</>: null}
          </div>
        </div>
        <Box>
          <Button onClick={() => revealSpell()} className="button" style={{marginLeft: '20px', marginTop: '10px',border: success ? !isNaN(spell) ? '1px solid hotpink' : '1px solid black' : '1px solid black' , fontFamily: 'Orbitron', fontWeight: '100', fontSize: '23px', color: success ? !isNaN(spell) ? 'hotpink' : 'black' : 'black' }} label="R E V E A L S P E L L ?"></Button>
        </Box>
        </div>
        <div style={{ flex: '30%' }}>
        <br/>
        <p style={{ fontSize: '23px', color: success ? 'lime' : 'black' }}>S U C C E S S</p>
        <br/>
        <img src={logo} width={'200px'} style={{ borderRadius: '100px', marginLeft: '20px' }} alt="logo" />
        <br/>
        <br/>
        <Box>
          <Button onClick={() => mint()} className="button" style={{marginLeft: '20px', border: !success ? '1px solid white' : '1px solid black', fontFamily: 'Orbitron', fontWeight: '100', fontSize: '23px', color: success ? 'black' : 'white'}} label='C O L L E C T'></Button>
        </Box>
        </div>
      </div>
    </div>
  );
}

export default App;
