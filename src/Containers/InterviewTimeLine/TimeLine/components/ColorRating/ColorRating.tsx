import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import { FC, useState } from 'react';

interface Props {
  label: string;
}
const ColorRating: FC<Props> = ({ label }) => {
  const [rating, setRating] = useState(0);
  return (
    <div className="mt-2">
      <label>{label}</label>
      <Rating
        style={{ maxWidth: 250 }}
        value={rating}
        onChange={setRating}
        items={10}
      />
    </div>
  );
};

export default ColorRating;
