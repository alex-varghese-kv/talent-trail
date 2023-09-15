export const DetailsBlock = ({
  count,
  title,
  details,
}: {
  count: number;
  title: string;
  details: string | string[];
}) => {
  return (
    <div className="post-block border-style mt-40 lg-mt-30">
      <div className="d-flex align-items-center">
        <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
          {count}
        </div>
        <h4 className="block-title">{title}</h4>
      </div>
      {Array.isArray(details) ? (
        <ul className="list-type-one style-none mb-15">
          {details.map((item: string) => (
            <li>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{details}</p>
      )}
    </div>
  );
};
