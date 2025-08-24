function Input({name,onChangeInput,paramName,value}) {

  return (
    <p>
      <label htmlFor={paramName}>{name}</label>
      <input type='number' id={paramName} onChange={(event)=>onChangeInput(paramName,Number(event.target.value))} value={value} required/>
    </p>
  )
}

export default Input