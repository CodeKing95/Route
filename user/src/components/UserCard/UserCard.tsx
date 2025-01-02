import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./usercard.scss";
import {
  faAddressBook,
  faCakeCandles,
  faEnvelope,
  faPhone,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { User } from "../../types/User";

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  return (
    <div className="usercard-container">
      <div className="usercard-header">
        <img
          className="usercard-header-image"
          src="https://randomuser.me/api/portraits/men/75.jpg"
        />
      </div>
      <div className="usercard-body">
        <div className="usercard-body-title">{user.name}</div>
        <div className="usercard-body-content">
          <div className="usercard-data-list">
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faCakeCandles} />
              </span>
              <span>{user.dob}</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faVenusMars} />
              </span>
              <span>{user.gender}</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>{user.email}</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faAddressBook} />
              </span>
              <span>{user.gender}</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>{user.phone}</span>
            </div>
          </div>
          <div className="usercard-data-list">
            <div className="usercard-data-list-item">
              <span>ICON</span>
              <span>{user.dob}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserCard;
