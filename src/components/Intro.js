import React from 'react';
import Panel from '../../node_modules/react-bootstrap/lib/Panel'
import Row from '../../node_modules/react-bootstrap/lib/Row'
import Col from '../../node_modules/react-bootstrap/lib/Col'
import Glyphicon from '../../node_modules/react-bootstrap/lib/Glyphicon'


const Intro = props => {

    return (
        <Panel>
            <Row>
                <Col xs={12}>
                    <h2 id="intro" className="text-uppercase"><Glyphicon glyph="thumbs-up" className="icon"/> Hello</h2>
                    <div className="line"></div>
                    <p>My name is William O Caldwell, but you can call me Will. . . or William or just about any other version of my name you can think of! If you've found yourself here you probably want to know a little bit about me and what I have done. Well you're in the right place. So poke around and if you have any questions or just want to say "hi" please <a href="mailto:wocaldwell@gmail.com.com">let me know</a>!</p>
                    <p>See you around,</p>
                    <p>-william</p>
                    <div className="line"></div>
                </Col>
            </Row>
        </Panel>
    )
};

export default Intro;