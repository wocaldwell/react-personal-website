import React from 'react';
import Panel from '../../node_modules/react-bootstrap/lib/Panel'
import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'
import Thumbnail from '../../node_modules/react-bootstrap/lib/Thumbnail'
import Glyphicon from '../../node_modules/react-bootstrap/lib/Glyphicon'


const Download = props => {

    return (
        <Panel>
            <Row>
                <Col xs={12}>
                    <h2 id="technologies" className="text-uppercase"><Glyphicon glyph="file" className="icon"/> Download</h2>
                    <div className="line"></div>
                        <p>Click on the image below to download my current resume.</p>
                        <a href="images/william-caldwell-resume.pdf" target="_blank" rel="noopener noreferrer"><Thumbnail className="center-block" src="images/resume-thumbnail.png" alt="resume thumbnail"></Thumbnail></a>
                    <div className="line"></div>
                </Col>
            </Row>
        </Panel>
    )
};

export default Download;