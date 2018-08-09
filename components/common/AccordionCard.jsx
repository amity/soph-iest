const AccordionCard = ({ data }) => {
  return (
    <div className="card accordion-card">
      <div className="card-header" id={"heading" + data.listOrder}>
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            type="button"
            data-toggle="collapse"
            data-target={"#collapse" + data.listOrder}
            aria-expanded="true"
            aria-controls={"collapse" + data.listOrder}
          >
            {data.question}
          </button>
        </h5>
      </div>

      <div
        id={"collapse" + data.listOrder}
        className="collapse show"
        aria-labelledby={"heading" + data.listOrder}
        data-parent="#accordionExample"
      >
        <div className="card-body">{data.answer}</div>
      </div>
    </div>
  );
};

export default AccordionCard;
