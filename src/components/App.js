import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Techs from './Techs';
import Intro from './Intro';
import Projects from './Projects';


const App = props => {
  const basicsData = props.jsonObj.basics;
  const skillsData = props.jsonObj.skills;
  const projectsData = props.jsonObj.publications;
  return (
    <div className="container">
        <div className="row">
            <aside id="aside" className="col-sm-4">
                <Profile basicsData={basicsData} />
            </aside>
            <main className="col-sm-8">
              <Intro />
              <Projects projectsData={projectsData} />
              <Techs skillsData={skillsData} />
            </main>
        </div>
    </div>
  )
};

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
};

export default App;
