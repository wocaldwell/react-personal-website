import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Download from './Download';
import Techs from './Techs';
import Intro from './Intro';
import Projects from './Projects';
import Footer from './Footer';


const App = props => {
  const basicsData = props.jsonObj.basics;
  const skillsData = props.jsonObj.skills;
  const projectsData = props.jsonObj.publications;
  return (
    <div className="container">
        <div id="asidemain" className="row">
            <aside id="aside" className="col-sm-4">
                <Profile basicsData={basicsData} />
                <Download />
            </aside>
            <main className="col-sm-8">
              <Intro />
              <Projects projectsData={projectsData} />
              <Techs skillsData={skillsData} />
            </main>
        </div>
        <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Footer />
              </div>
            </div>
        </div>
    </div>
  )
};

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
};

export default App;
