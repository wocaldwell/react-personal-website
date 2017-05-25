import React from 'react';
import Modal from '../../node_modules/react-bootstrap/lib/Modal'
import Button from '../../node_modules/react-bootstrap/lib/Button'


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
        hello
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default Trigger;
// ReactDOM.render(<Trigger />, mountNode);