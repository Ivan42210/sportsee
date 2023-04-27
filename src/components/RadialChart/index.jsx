import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts"

export default function RadialChart({data}){

     
    
    
      console.log('radial chart components')
      console.log(data)  

    /*
     <ResponsiveContainer width={'100%'} height={'120px'}>
                <RadialBarChart
                    data={data}
                    innerRadius={90}
                    outerRadius={90}
                    barSize={10}
                    startAngle={180}
                    endAngle={180-360}
                    >
                    <RadialBar cornerRadius={5} dataKey="score"/>
                    <PolarAngleAxis
                        type="number"
                        domain={[0,100]}
                        tick={false}
                        />
                </RadialBarChart>

                
            </ResponsiveContainer>
    */
    
    return(
        <article className="radial-wrapper">
            <h2 className="radial-title">Score</h2>
            <p className="radial-text">
                <span>{data.score} %</span>
                <br />
                de votre objectif
            </p>
           
           

        </article>
    )
}