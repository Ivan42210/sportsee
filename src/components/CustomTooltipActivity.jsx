/**
 * Renders a custom tooltip for the ActivityChart component.
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Whether the tooltip is active or not.
 * @param {Array} props.payload - An array of tooltip data. Each object in the array represents a data point in the chart.
 * @returns {JSX.Element} - A custom tooltip component.
 */

export default function CustomTootipBar({active, payload}){
    if (active && payload && payload.length){
        return (
            <div className="barchart-tooltip bg-danger">
                <p className="label text-light">{`${payload[0].value}kg`}</p>
                <p className="label text-light">{`${payload[1].value}kCal`}</p>
            </div>
        )
    }
}