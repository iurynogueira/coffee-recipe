import './App.css'
import { IonChip, IonButton } from '@brisanet/ion-react'
import Beans from "./assets/coffee-beans.png"
import { useState } from 'react'

function App() {
  const [minMl, setMinMl] = useState(14)
  const [gramRequired, setGramRequired] = useState(20)
  const [showFeedbackToSave, setShowFeedbackToSave] = useState(false)

  const minGramOptions = [10, 12, 14, 16]

  const handleChange = (value: string, setState: React.Dispatch<React.SetStateAction<any>>) => {
    setState(Number(value))
  }

  const showFeedback = (timer = 2000) => {
    setShowFeedbackToSave(true)
    setTimeout(() => {
      setShowFeedbackToSave(false)
    }, timer);
  }

  const saveRecipe = () => {
    const storageKey = 'recipes'
    const recipes = JSON.parse(localStorage.getItem(storageKey) || '[]')
    const newRecipe = {
      name: new Date(),
      grams: gramRequired,
      mls: minMl,
      result: {
        ml: gramRequired * minMl
      }
    }
    recipes.push(newRecipe)
    localStorage.setItem(storageKey, JSON.stringify(recipes))
    showFeedback()
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
              <div style={{gap: '10px', display: 'flex', paddingTop: '8px'}}>
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
              <input type="tel" name="gram" value={gramRequired} onChange={(event) => handleChange(event.target.value, setGramRequired)} />
              <div className='result-row'>
                <span>Você pode fazer</span>
                <span className='gram-value'>{gramRequired * minMl} mls</span>
              </div>
            </div>

          </div>
        </div>

        <div className='footer-actions'>
          <IonButton label="Salvar receita" handleClick={saveRecipe} />
        </div>

        <div className='footer-feedback'>
          {showFeedbackToSave && <span>Adicionado com sucesso!</span>}
          {/* Substituir depois que estiver fixed na lib */}
          {/* <IonAlert message="Example of alert message" /> */}
        </div>
      </div>
    </div>
  )
}

export default App