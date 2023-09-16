export const RatingBar = ({ title='leetcode', rating=80 }) => {
  return (
    <div className="profile-complete-status">
      <div className="progress-value fw-500">{rating}%</div>
      <div className="progress-line position-relative">
        <div className="inner-line" style={{ width: `${rating}%` }}></div>
      </div>
      <p>{title}</p>
    </div>
  );
};
