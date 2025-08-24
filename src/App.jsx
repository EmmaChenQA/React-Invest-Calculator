import Header from './components/Header'
import InputContainer from './components/InputContanier';
import Result from './components/Result'

import {useState} from 'react';

const initInputData = {
    initialInvestment:15000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
  }

function App() {
  const [calcData,setCalcData] = useState(initInputData);

  function handleCalculateData(inputIndetifier, inputValue){
    setCalcData((prevData)=>{
      
      const updatedData = {
        ...prevData,
        [inputIndetifier]: inputValue,
      }
      return updatedData
    })
  }

  return (
    <>
      <Header />
      <InputContainer onChange={handleCalculateData} inputData={calcData}/>
      <Result inputData={calcData} />
    </>
    
  )
}

export default App
