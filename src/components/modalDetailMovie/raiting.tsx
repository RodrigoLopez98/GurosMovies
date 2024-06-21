import { useState } from "react";

interface StarRatingProps {
    totalStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>(0);

    const starColor = (starIndex: number) => {
        if (starIndex <= (hover || rating)) {
            return "#E5004D";
        }
        return "#D3D7DA";
    };

    return (
        <div className="flex space-x-1">
            {[...Array(totalStars)].map((_, index) => {
                const starIndex = index + 1;
                return (
                    <svg
                        key={starIndex}
                        className="w-10 h-10 cursor-pointer"
                        style={{ color: starColor(starIndex) }}
                        onMouseEnter={() => setHover(starIndex)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(starIndex)}
                        fill="currentColor"
                        viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M33.5794 11.965C33.3599 11.2959 32.7612 10.8222 32.0558 10.7589L22.4334 9.89292L18.6306 1.06694C18.3499 0.418508 17.711 0 16.9999 0C16.2889 0 15.6498 0.418508 15.3708 1.06694L11.568 9.89292L1.94412 10.7589C1.23864 10.8235 0.64125 11.2972 0.420503 11.965C0.201027 12.6341 0.403718 13.368 0.937275 13.8319L8.211 20.1547L6.06634 29.5187C5.90943 30.2072 6.179 30.9192 6.75529 31.3321C7.06504 31.5552 7.42897 31.6667 7.79417 31.6667C8.108 31.6667 8.42208 31.584 8.70259 31.4176L16.9999 26.4994L25.2958 31.4176C25.9043 31.7781 26.6696 31.7451 27.2446 31.3321C27.8209 30.9192 28.0905 30.2072 27.9335 29.5187L25.7889 20.1547L33.0626 13.8319C33.5959 13.368 33.7989 12.6357 33.5794 11.965Z" />

                    </svg>
                );
            })}
        </div>
    );
};

export default StarRating;

