import Star from "./Star";
import {useState} from "react";

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
}

const startContainerStyle = {
    display: 'flex'
}

const textStyle = {
    lineHeight: '1',
    margin: '0'
}

const StarRating = ({ maxRating = 5 }) => {
    const [rating, setRating] = useState(0);
    const [tempRating, setTemprating] = useState(0)

    return (
        <div style={containerStyle}>
            <div style={startContainerStyle}>
                {Array.from({length: maxRating}, (_, i) => (
                    <Star
                        key={i}
                        onRate={() => setRating(i + 1)}
                        full={tempRating ? tempRating >= i+ 1 : rating >= i + 1}
                        onHoverIn={() => setTemprating(i + 1)}
                        onHoverOut={() => setTemprating(0)}
                    />
                ))}
            </div>
            <p style={textStyle}>{tempRating || rating || ""}</p>
        </div>
    )
}

export default StarRating;