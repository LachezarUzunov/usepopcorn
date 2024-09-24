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

const StarRating = ({
                        maxRating = 5,
                        color = "#fcc419",
                        size = 48,
                        messages = [],
                        defaultRating = 0}) => {
    const [rating, setRating] = useState(defaultRating);
    const [tempRating, setTemprating] = useState(0)

    const textStyle = {
        lineHeight: '1',
        margin: '0',
        color: color,
        fontSize: `${size / 1.5}px`
    }

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
                        color={color}
                        size={size}
                    />
                ))}
            </div>
            <p style={textStyle}>{messages.length === maxRating ? messages[tempRating ? tempRating - 1 : rating - 1] : tempRating || rating || ""}</p>
        </div>
    )
}

export default StarRating;