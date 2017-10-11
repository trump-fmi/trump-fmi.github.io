import React, { Component } from 'react';
import {NavLink,Route, Redirect, match} from 'react-router-dom'
import Tool from '../components/Tool';

const ExampleConfigurations = ({match}) => {
  return (
    <div className='row'>
      <div className= 'col-lg-3 col-md-3 col-sm-4'>
        <div className="list-group table-of-contents">
          <span className='list-group-item' ><b>Examples</b></span>
          <NavLink className='list-group-item' to={`${match.url}`}>Simple</NavLink>
          <NavLink className='list-group-item' to={`${match.url}`}>advanced</NavLink>
        </div>
      </div>
      <div className= 'col-lg-9 col-md-9 col-sm-8'>
        <Tool data={match.params.exampleSlug} />
      </div>
    </div>
  )
}

class Configurator extends Component {

  render() {
    const {match} = this.props;
    return (
      <div>
        <Route path={`${match.url}/examples/:pageSlug`} component={ExampleConfigurations}/>
        <Route exact path={match.url} render={() => (
          <Redirect to="/guide/getting-started" />
      )}/>
    </div>
    );
  }

}

export default Configurator;
