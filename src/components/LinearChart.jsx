import PropTypes from 'prop-types'
import { LineChart, ResponsiveContainer, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from "recharts";
import CustomTooltipLine from "./CustomTooltipAverage";

/**
 * A line chart component to display the duration of an activity over a period of time.
 * @param {Object} props - The props object containing the data array.
 * @param {Array} props.data - An array of objects containing the day and duration of an activity.
 * @returns {JSX.Element} - A JSX element representing the line chart.
 */


export default function LinearChart({data}){
   
    return(
        <div className="bg-danger line-chart-wrapper">
        <ResponsiveContainer width="100%">
        <LineChart height={230} data={data} margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
              }}  >
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

LinearChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      duration: PropTypes.number,
    })
  ).isRequired
}