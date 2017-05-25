import React from 'react';
import Panel from '../../node_modules/react-bootstrap/lib/Panel'
import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'
import Glyphicon from '../../node_modules/react-bootstrap/lib/Glyphicon'


const Techs = props => {
    const listSkills = props.skillsData[0].keywords.map(function(item, index) {
        return (<li key={index}><span className="label label-success">{item}</span></li>)
    });
    const skillsObj = props.skillsData;

    return (
        <Panel>
            <Row>
                <Col xs={12}>
                    <h2 className="text-uppercase"><Glyphicon glyph="wrench" className="icon"/> {skillsObj[0].name}</h2>
                    <div className="line"></div>
                    <ul className="list-inline justify">{listSkills}</ul>
                    <div className="line"></div>
                </Col>
            </Row>
        </Panel>
    )
};

export default Techs;