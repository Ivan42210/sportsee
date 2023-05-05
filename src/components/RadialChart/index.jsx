/**

Renders a Radial Bar Chart using the Recharts library.
@param {Object} props 
@param {Number} props.data 
@returns {JSX.Element} 
*/


import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer} from "recharts"
import PropType from 'prop-types'
import { formatScore } from "../../Service/formateur/formaDatas"

export default function RadialChart({data}){

     const formattedScore = formatScore(data)
    
     const circleSize = 263
    
      console.log('radial chart components')
      console.log(formattedScore)  

    /*
    
    */
    
    return(
        <ResponsiveContainer className={'bg-secondary'}>
        <RadialBarChart
  width={circleSize}
  height={circleSize}
  cx={circleSize/2}
  cy={circleSize/2}
  innerRadius={100}
  outerRadius={150}
  barSize={10}
  data={formattedScore}
  startAngle={90}
  endAngle={-270}
  >
  <PolarAngleAxis
  type="number"
  domain={[0, 100]}
  angleAxisId={0}
  tick={false}
  />
  <RadialBar
  background
  clockWise
  dataKey={"score"}
  cornerRadius={circleSize/2}
  fill="black"
  />
  <text
  x={circleSize / 2}
  y={circleSize / 2}
  textAnchor="middle"
  dominantBaseline="middle"
  >
  {formattedScore[0].score}% <br /> 
  de votre 
  <br /> objectif
  </text>
</RadialBarChart>
        </ ResponsiveContainer>
       
    )
}

RadialChart.propTypes = {
  data : PropType.number,
}

