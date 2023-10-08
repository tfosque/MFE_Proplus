// import "bootstrap/dist/css/bootstrap.css";
// import { Link } from "react-router";

export default () => {
  const menuItems = [
    'My Profile',
    'Change Password',
    'Address Book',
    'Accounts',
    'Order History',
    'Quotes',
    'Templates',
    'Saved Orders',
    'Pending Orders',
    'User Administration',
    'Delivery Tracking Settings',
    'Logout'
  ]
  const listItems = menuItems.map( ( item ) => (
    <div className="list-group-item" key={item}>{item}</div>
  ) )

  return (
    <div className="list-group">
      {listItems}
    </div>
  );
};
