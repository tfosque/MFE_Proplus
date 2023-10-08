export default function LineItem(props) {
  console.log({ props });
  const order = props.order;
  const orderId = order.orderId;
  const address = order.shipping.address.address2 || "";
  const purchaseOrderNo = order.purchaseOrderNo;
  const job = order.job.jobName;
  const orderPlacedDate = order.orderPlacedDate;
  const proplusOrder = order.source;
  const orderStatusValue = order.orderStatusValue;
  const total = order.total || order.totalMsg;
  console.group("orderPlaceDate");
  console.log(order.orderPlacedDate);
  console.groupEnd();

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="firstCheckbox"
          />
        </div>
        <div className="col-1">{orderId}</div>
        <div className="col-4">
          <div>{address}</div>
          <div>Cust PO: {purchaseOrderNo}</div>
          <div>Job Account: {job}</div>
          <div>Date: {orderPlacedDate}</div>
        </div>
        <div className="col-1">{proplusOrder}</div>
        <div className="col-4">
          <span>
            {typeof total === "string" ? "" : "$"}
            {`${total}`}
          </span>
        </div>
        <div className="col-1">{orderStatusValue}</div>
      </div>
    </li>
  );
}
