import './App.css'
import { IonChip } from '@brisanet/ion-react'
import Beans from "./assets/coffee-beans.png"
import { useState } from 'react'

function App() {
  const [minMl, setMinMl] = useState(14)
  const [gramRequired, setGramRequired] = useState(20)

  const minGramOptions = [10, 12, 14, 16]

  const handleChange = (value: string, setState: React.Dispatch<React.SetStateAction<any>>) => {
    setState(Number(value))
  }

  return (
    <div className='page-container'>
      <h1>Coffee Recipe</h1>
      <div className='inner-page'>
        <div className='row-container'>
          <div className='option-circle'>
            <img src={Beans} alt="" style={{height: '40px'}}/>
          </div>

          <p className='read-the-docs'>Informe abaixo as proporções</p>
        </div>
        <div className='main-container'>
          <div className='form-container'>
            <div className='form-inner'>
              <span className='gram-value'>1g </span>
              <span>para </span>
              <div style={{gap: '10px', display: 'flex'}}>
                {minGramOptions.map((value: number) => {
                  return (
                    <IonChip
                      key={value}
                      handleClick={() => setMinMl(value)}
                      selected={minMl === value}
                      label={String(value)}
                      size={'md'}
                    />
                  )
                })}
              </div>
            </div>

            <div className='form-inner'>
              <div>
                <p className='read-the-docs'>Quantas gramas deseja fazer?</p>
              </div>
              <input type="number" name="gram" value={gramRequired} onChange={(event) => handleChange(event.target.value, setGramRequired)} />
              <div className='result-row'>
                <span>Você pode fazer</span>
                <span className='gram-value'>{gramRequired * minMl} mls</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App