import React from 'react';
// import Trigger from './Modal'
import Panel from '../../node_modules/react-bootstrap/lib/Panel'
import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'
import Glyphicon from '../../node_modules/react-bootstrap/lib/Glyphicon'
import Thumbnail from '../../node_modules/react-bootstrap/lib/Thumbnail'

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
        <Glyphicon glyph="circle-arrow-right" className="icon"/>
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

// export default Trigger;
// ReactDOM.render(<Trigger />, mountNode);

const Projects = props => {
    const projectsObj = props.projectsData;

    const listProjects = projectsObj.map(function(project, index) {
      let projectTechs = project.technologies
      let listTechnologies = projectTechs.map(function(tech, index) {
        return (
          <li key={index}><span className="label label-success">{tech}</span></li>
        )
      });
      return (
        <Col sm={12} lg={4} key={index} className="modal-container">
            <Thumbnail className="center-block" src={project.screenshot} alt={project.name}>
                <h4>{project.tag}</h4>
                <Trigger>
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">{project.name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {project.description}
                    <div className="line"></div>
                    <p>Tech Stack:</p>
                      <ul className="list-inline justify">{listTechnologies}</ul>
                  </Modal.Body>
                  <Modal.Footer>
                    <a href={project.repo} className="btn btn-default">Check out the code!</a>
                    <a href={project.url} className="btn btn-default">Check out {project.name}</a>
                  </Modal.Footer>
                </Trigger>
            </Thumbnail>
        </Col>
      )
    });

    return (
        <Panel>
            <Row>
                <Col xs={12}>
                    <h2 className="text-uppercase"><Glyphicon glyph="globe" className="icon"/> Deployed Projects</h2>
                    <div className="line"></div>
                        <Row>
                            {listProjects}
                        </Row>
                    <div className="line"></div>
                </Col>
            </Row>
        </Panel>
    )
};

export default Projects;