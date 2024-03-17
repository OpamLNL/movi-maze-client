import {Rating} from "@mui/material";


const StarsRating = (rating) => {

return (
    <Rating
        name="movie-rating"
        value={rating.rating}
        precision={0.5}
        max={10}
        readOnly
    />
);
}

export {StarsRating};