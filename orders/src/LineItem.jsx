

export default function LineItem ( props ) {
  console.log( { props } );
  const order = props.order;
  const orderId = order.orderId;
  const address = order.shipping.address.address2 || '';
  const purchaseOrderNo = order.purchaseOrderNo;
  const job = order.job.jobName;
  const orderDate = order.orderPlaceDate;
  const proplusOrder = order.source;
  const orderStatus = order.orderStatus;
  const total = order.total || order.totalMsg;

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
        </div>
        <div className="col-auto">
          {orderId}
        </div>
        <div className="col-5">
          <div>{address}</div>
          <div>Cust PO: {purchaseOrderNo}</div>
          <div>Job Account: {job}</div>
          <div>Date: {orderDate}</div>
        </div>
        <div className="col-auto">
          {proplusOrder}
        </div>
        <div className="col-3">
          <span>{`total? '$': ''`}</span> {total}
        </div>
        <div className="col-1">
          {orderStatus}
        </div>
      </div>
    </li>
  )
}

