import Input from './Input.jsx'

export default function InputContainer({onChange,inputData}){
    return (
        <form id='user-input'>
         <div className='input-group'>
          <Input name='initial investment' paramName='initialInvestment' value={inputData.initialInvestment} onChangeInput={onChange}/>
          <Input name='annual investment' paramName='annualInvestment'  value={inputData.annualInvestment} onChangeInput={onChange} />
         </div>
         <div className='input-group'>
          <Input name='expected return' paramName='expectedReturn'  value={inputData.expectedReturn} onChangeInput={onChange}/>
          <Input name='duration' paramName='duration'  value={inputData.duration} onChangeInput={onChange}/>
         </div>
      </form>
    )
}