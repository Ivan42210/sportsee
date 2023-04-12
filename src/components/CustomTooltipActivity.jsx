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