import LineItem from "./LineItem";
import { data } from "./data";

export default () => {
  const orders = data.orders;
  console.log({ orders });

  const items = orders.map((order) => {
    return <LineItem order={order} />;
  });

  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-12">
          <h2>Your Orders</h2>
          <div>
            Get the latest delivery status from your recent orders or find a
            past order.
          </div>
        </div>

        <div className="col-12 mt-2">
          <ul
            className="list-group list-group-flush"
            style={{ fontSize: ".875rem" }}
          >
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
                <div className="col-1">Order#</div>
                <div className="col-4">Details</div>
                <div className="col-1">Pro+</div>
                <div className="col-4">Total</div>
                <div className="col-1">Status</div>
              </div>
            </li>

            {items}
          </ul>
        </div>
      </div>
    </div>
  );
};
