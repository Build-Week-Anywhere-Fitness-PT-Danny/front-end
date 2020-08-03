import React from 'react';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './Cart.css';

const Cart = ({ joinedClass_array }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button className="logout_button cart" animated="vertical">
          <Button.Content hidden>Cart</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
            <span className="cart_span">
              {joinedClass_array ? joinedClass_array.length : 0}
            </span>
          </Button.Content>
        </Button>
      }
    >
      <Modal.Header className="modal_header">Your Classes</Modal.Header>
      <Modal.Content>
        {joinedClass_array &&
          joinedClass_array.map((item, key) => {
            return (
              <div className="search_result_item" key={key}>
                <div className="s_r_d_container">
                  <h2>{item.name}</h2>
                  <div className="search_result_display">
                    <p>Class: {item.type}</p>
                    <p>Intensity: {item.intensity}</p>
                    <p>Location: {item.location}</p>
                    <p>
                      Seats remaining:
                      {item.maxClassSize - item.numberOfRegisteredAttendees}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </Modal.Content>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    joinedClass_array: state.joinedClass_array,
  };
};

export default connect(mapStateToProps, {})(Cart);
