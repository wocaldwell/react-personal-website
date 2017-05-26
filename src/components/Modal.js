import React from 'react';
import Modal from '../../node_modules/react-bootstrap/lib/Modal'
import Button from '../../node_modules/react-bootstrap/lib/Button'
import Glyphicon from '../../node_modules/react-bootstrap/lib/Glyphicon'



class Trigger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    let close = () => this.setState({ show: false});

    return (
      <div>
        <Button
          bsStyle="success"
          bsSize="large"
          className="button-center"
          onClick={() => this.setState({ show: true})}
          block
        >
        <Glyphicon glyph="circle-arrow-right" className="button-icon"/>
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
          bsSize="small"
        >
        {this.props.children}
        </Modal>
      </div>
    );
  }
};

export default Trigger;