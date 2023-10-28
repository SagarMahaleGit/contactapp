import { Link } from "react-router-dom";
import user from "../images/user.png";

const CardContact = (props) => {
  const handleDeleteClick = () => {
    props.handleDeleteContact(props.contact.id);
  };

  return (
    <div className="item">
      <img className="ui avatar image" src={user} />
      <div className="content">
        <div className="header">{props.contact.name}</div>
        <Link
          to={{
            pathname: `/contactDetails/${props.contact.id}`,
            state: { contact: props.contact },
          }}
        >
          <div>{props.contact.email}</div>
        </Link>
      </div>
      <div className="right floated content">
        <Link
          to={{
            pathname: `/edit/${props.contact.id}`,
            state: { contact: props.contact },
          }}
        >
          <i
            className="edit alternate outline icon"
            style={{ color: "blue" }}
          ></i>
        </Link>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginLeft: "10px" }}
          onClick={handleDeleteClick}
        ></i>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
};

export default CardContact;
