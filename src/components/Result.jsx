import {calculateInvestmentResults, formatter} from '../util/investment'

function addTotalInterestData(calcData){
  let totalInterest = 0;
  const resultData = calcData.map((rowData)=>{
    totalInterest += rowData.interest;
    return{
      ...rowData,
      'totalInterest': totalInterest
    }
  })
  return resultData;
}


function Result({inputData}) {
  const calcData=calculateInvestmentResults(inputData);
  if (calcData.length ==0){
    return (<p className='center'>Pls fill in valid duration!</p>)
  }
  console.log("calcData:",calcData)
  const resultData = addTotalInterestData(calcData);
  console.log("resultData:",resultData)
  

  return (
    <>
     <table id='result'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
            {resultData.map((row,rowIndex)=>(
              <tr key={rowIndex}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(row.totalInterest)}</td>
                <td>{formatter.format(row.annualInvestment)}</td>
              </tr>
            ))}
        </tbody>
      </table> 
    </>
  )
}

export default Result