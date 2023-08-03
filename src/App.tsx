import React from 'react';
import logo from './crystal_ball.png';
import './App.css';

import { 
  Box, Button } from '@0xsequence/design-system'

function App() {
  const [spell, setSpell] = React.useState<any>(100)
  const [success, setSuccess] = React.useState<any>(false)

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

  const revealSpell = () => {
    if(!isNaN(spell)) setSpell(spells[Math.floor(Math.random()*(spells.length - 1))])
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
          <Button onClick={() => revealSpell()} className="button" style={{marginLeft: '20px', marginTop: '10px',border: success ? '1px solid hotpink' : '1px solid black' , fontFamily: 'Orbitron', fontWeight: '100', fontSize: '23px', color: success ? 'hotpink' : 'black' }} label="R E V E A L S P E L L"></Button>
        </Box>
        </div>
        <div style={{ flex: '30%' }}>
        <br/>
        <p style={{ fontSize: '23px', color: success ? 'lime' : 'black' }}>S U C E S S</p>
        <br/>
        <img src={logo} width={'200px'} style={{ borderRadius: '100px', marginLeft: '20px' }} alt="logo" />
        <br/>
        <br/>
        <Box>
          <Button onClick={() => mint()} className="button" style={{marginLeft: '20px', border: '1px solid white', fontFamily: 'Orbitron', fontWeight: '100', fontSize: '23px' }} label='C O L L E C T'></Button>
        </Box>
        </div>
      </div>
    </div>
  );
}

export default App;
