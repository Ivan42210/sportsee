export default function CustomTooltipLine({active, payload}){
  
    if (active && payload && payload.length){
        
        return (
            <div className="bg-light cutom-average">
                <p className="label-line">{`${payload[0].payload.duration}min`}</p>
                
            </div>
        )
    } return null;
}