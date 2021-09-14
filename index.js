const Notification = (props) => {
  //  Write your code here.
    const {notificationText, src, notificationBox} = props
      <div className = `notification-bar ${notificationBox}`>
          <img src = {src} className = "icon-size"/>
          <p className = "notification-text-style">{notificationText}</p>
      </div>
};
const infoIcon =
  "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png";
const successIcon =
  "https://assets.ccbp.in/frontend/react-js/success-icon-img.png";
const warningIcon =
  "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png";
const errorIcon =
  "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png";

const element = (
  //  Write your code here.
  <div className="notification-bg-container">
    <h1 className="notification-heading">Notifications</h1>
    <div className="notification-container">
        <Notification src = {infoIcon} 
        notificationText = "Information Message" 
        notificationBox= "info-bar"/>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
