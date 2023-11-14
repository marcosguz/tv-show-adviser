import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
    const starList = [];
    const starFillCount = Math.floor(rating);
    const hasHalfStar = rating - parseInt(rating) >= 0.5;
    const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < starFillCount; i++) {
        starList.push(<StarFill key={"start-fill"+i}/>);
    }

    if (hasHalfStar) {
        starList.push(<StarHalf key={"start-half"} />);
    }

    for (let i = 0; i < emptyStarCount; i++) {
        starList.push(<StarEmpty key={"start-empty"+i}/>);
    }

    return (
        <div>
            {starList}
        </div>
    );
}