import React from 'react';
// import Grid from '../../node_modules/react-bootstrap/lib/Grid'
import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'
import Panel from '../../node_modules/react-bootstrap/lib/Panel'
import Glyphicon from '../../node_modules/react-bootstrap/lib/Glyphicon'

const Profile = props => {
    const basicsObj = props.basicsData;
    return (
        <Row>
            <Col xs={12}>
                <Panel>
                    <img alt='will pic' className="center-block" src="./images/will-body.png" width="200" />
                    <h1 className="text-center">{basicsObj.name}</h1>
                    <h2 className="text-center">{basicsObj.label}</h2>
                    <div className="line"></div>
                    <ul className="list-unstyled contact-links">
                        <li>
                            <Glyphicon glyph="road" className="icon"/> {basicsObj.location.city}, {basicsObj.location.region}
                        </li>
                        <li>
                            <Glyphicon glyph="envelope" className="icon"/>
                            <a href="mailto:{basicsObj.email}"> {basicsObj.email}</a>
                        </li>
                        <li>
                            <Glyphicon glyph="phone" className="icon"/>
                            <a href="tel:{basicsObj.phone}"> {basicsObj.phone}</a>
                        </li>
                        <li>
                            <Glyphicon glyph="hdd" className="icon"/>
                            <a href={basicsObj.profiles[1].url}> Github</a>
                        </li>
                        <li>
                            <Glyphicon glyph="hand-right" className="icon"/>
                            <a href={basicsObj.profiles[0].url}> LinkedIn</a>
                        </li>
                    </ul>
                    <div className="line"></div>
                </Panel>
            </Col>
        </Row>
    )
};

export default Profile;