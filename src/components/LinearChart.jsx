
import { LineChart, ResponsiveContainer, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from "recharts";
import CustomTooltipLine from "./CustomTooltipAverage";

export default function LinearChart({data}){
   
    return(
        <div className="bg-danger square-part">
        <ResponsiveContainer width="100%" height={263}>
        <LineChart width={200} height={230} data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <XAxis dataKey="day" tick={{fill:'var(--light)'}}  tickLine={false}
                        axisLine={false}/>
          <YAxis
                        hide={true}
                        dataKey="duration"
                        domain={['dataMin - 20', 'dataMax + 20']}
                    />
          <CartesianGrid vertical={false} horizontal={false} />
          <Tooltip content={<CustomTooltipLine />}/>
          <Legend verticalAlign="top" height={36} />
          <Line type="natural" dataKey="duration" stroke='var(--light)' strokeWidth={3} dot={false}  activeDot={{ r: 5 }} />
        </LineChart>
        </ResponsiveContainer>  
      </div>
    )
}