import React, { Component } from 'react';
import {NavLink,Route, Redirect, match} from 'react-router-dom'
import Tool from '../components/Tool';

const ExampleConfigurations = ({match}) => {
  console.log(match);
  return (
    <div className='row'>
      <div className= 'col-lg-3 col-md-3 col-sm-4'>
        <div className="list-group table-of-contents">
          <span className='list-group-item' ><b>Examples</b></span>
          <NavLink className='list-group-item' to={`${match.url}/simple`}>Simple</NavLink>
          <NavLink className='list-group-item' to={`${match.url}/advanced`}>advanced</NavLink>
        </div>
      </div>
      <div className= 'col-lg-9 col-md-9 col-sm-8'>
        <Route path={`${match.url}/:config`} component={Tool}/>
        {/* <Tool data={match.params.version} /> */}
      </div>
    </div>
  )
}

class Configurator extends Component {

  render() {
    const {match} = this.props;
    return (
      <div>
        <Route path={`${match.url}/examples/`} component={ExampleConfigurations}/>
        <Route exact path={match.url} render={() => (
          <Redirect to={`configurator/examples/simple`} />
      )}/>
    </div>
    );
  }

}

export default Configurator;
