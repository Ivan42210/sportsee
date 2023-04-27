import PropTypes from 'prop-types'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, ResponsiveContainer, Radar } from "recharts"


export default function PerfRadar({data}){
    

    return(
        <div className="radar-chart-wrapper">
            <ResponsiveContainer width="100%" height={263}>
                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data} width={200} height={200} margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
              }}>
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis dataKey="kind"/>
                    <PolarRadiusAxis axisLine={false} tick={false}/>
                    <Radar dataKey="value" 
                    fill="var(--danger)" fillOpacity={0.5}/>
                    

                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}


