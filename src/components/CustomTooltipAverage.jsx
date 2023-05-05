/**
 * Custom tooltip for LineChart component.
 * @param {object} props - The props object.
 * @param {boolean} props.active - Indicates if tooltip is active.
 * @param {Array} props.payload - Array of data points in tooltip.
 * @returns {JSX.Element|null} - Custom tooltip component.
 */

export default function CustomTooltipLine({active, payload}){
  
    if (active && payload && payload.length){
        
        return (
            <div className="bg-light custom-average">
                <p className="label-line">{`${payload[0].payload.duration}min`}</p>
                
            </div>
        )
    } return null;
}