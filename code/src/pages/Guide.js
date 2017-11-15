import React, { Component } from 'react';
import {NavLink,Route, Redirect} from 'react-router-dom'

import MarkdownContent from '../components/MarkdownContent';


const Page = ({match}) => (
  <div>
    <MarkdownContent key={match.params.pageSlug} dir='guide' file={match.params.pageSlug} />
  </div>
)

const SubNavigation = ({match}) => {
  return (
    <div className="list-group table-of-contents">
      <NavLink className='list-group-item' to={`${match.url}/installation`}>Installation</NavLink>
      <NavLink className='list-group-item' to={`${match.url}/label-pipeline`}>Label Pipeline</NavLink>
      <NavLink className='list-group-item' to={`${match.url}/tile-server-installation`}>Tile-Server Installation</NavLink>
      <NavLink className='list-group-item' to={`${match.url}/migration`}>Migration</NavLink>
      <NavLink className='list-group-item' to={`${match.url}/client`}>Client</NavLink>
    </div>
  )
}

const Guide = ({match}) => {
  return (
    <div>
      <div className='row'>
        <div className= 'col-lg-3 col-md-3 col-sm-4'>
          <SubNavigation match={match} />
        </div>
        <div className= 'col-lg-9 col-md-9 col-sm-8'>
          <Route path={`${match.url}/:pageSlug`} component={Page}/>
          <Route exact path={match.url} render={() => (
            <Redirect to="/guide/getting-started" />
          )}/>
        </div>
      </div>
    </div>
  );
}

export default Guide;
