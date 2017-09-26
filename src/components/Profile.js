import React from 'react';
import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'
import Panel from '../../node_modules/react-bootstrap/lib/Panel'
import Glyphicon from '../../node_modules/react-bootstrap/lib/Glyphicon'
import Thumbnail from '../../node_modules/react-bootstrap/lib/Thumbnail'

const Profile = props => {
    const basicsObj = props.basicsData;
    return (
        <Row>
            <Col xs={12}>
                <Panel>
                    <Thumbnail id="profile-card" alt='will pic' className="center-block" src={basicsObj.picture}>
                        <h1 id="contact" className="text-center">{basicsObj.name}</h1>
                        <h3 className="text-center">{basicsObj.label}</h3>
                        <p className="text-center">{basicsObj.location.city}, {basicsObj.location.region}</p>
                    </Thumbnail>
                    <ul className="list-unstyled contact-links">
                        <li>
                            <h4><Glyphicon glyph="envelope" className="icon"/>
                            <a href={"mailto:" + basicsObj.email}> E-mail</a></h4>
                        </li>
                        <li>
                            <h4><Glyphicon glyph="hdd" className="icon"/>
                            <a rel="noopener noreferrer" href={basicsObj.profiles[1].url} target="_blank"> Github</a></h4>
                        </li>
                        <li>
                            <h4><Glyphicon glyph="hand-right" className="icon"/>
                            <a rel="noopener noreferrer" href={basicsObj.profiles[0].url} target="_blank"> LinkedIn</a></h4>
                        </li>
                    </ul>
                    <div className="line"></div>
                </Panel>
            </Col>
        </Row>
    )
};

export default Profile;