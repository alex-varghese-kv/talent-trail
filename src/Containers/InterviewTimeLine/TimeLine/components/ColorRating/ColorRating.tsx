import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FC, useEffect, useState } from "react";

interface Props {
  label: string;
  ratingInfo?: number;
  readonly?: boolean;
}
const ColorRating: FC<Props> = ({ label, ratingInfo, readonly = false }) => {
  const [rating, setRating] = useState(0);
  useEffect(() => {
    if (ratingInfo) setRating(Math.round(ratingInfo));
  }, [ratingInfo]);

  return (
    <div className="mt-2">
      <label>{label}</label>
      <Rating
        readOnly={readonly}
        style={{ maxWidth: 250 }}
        value={rating}
        onChange={setRating}
        items={10}
      />
    </div>
  );
};

export default ColorRating;
