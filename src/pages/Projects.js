import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Page from '../containers/Page'
import { Link } from 'react-router-dom'
import { getPath } from '../helpers'
import { toggleFilter, toggleAllFilters } from '../actions/projects'
import { allFiltersChecked } from '../selectors/projects'
import './projects.scss'

import {
  RubixCube,
  TheCrafters,
  LouiseAnneKennedyPhotography,
  HomeCinema,
  BordersRailwayGuide
} from '.'

export class Projects extends Page {
  title = 'Lewis Nelson - Projects'

  static propTypes = {
    allFiltersChecked: PropTypes.bool.isRequired,
    filters: PropTypes.object.isRequired,
    toggleFilter: PropTypes.func.isRequired
  }

  static routerProps () {
    return {
      exact: true,
      path: '/projects'
    }
  }

  render () {
    const { filters } = this.props
    return (
      <div id='projects-page'>
        <div className='page-container'>
          <h1 className='middle'>Projects</h1>
          <div className='filter-panel'>
            <p>Filter by</p>
            <ul>
              <li onClick={() => this.props.toggleAllFilters()}>
                <input
                  type='checkbox'
                  readOnly
                  checked={this.props.allFiltersChecked}
                />
                <label>All</label>
              </li>
              <li onClick={() => this.props.toggleFilter('professional')}>
                <input
                  type='checkbox'
                  readOnly
                  checked={filters.professional}
                />
                <label>Professional</label>
              </li>
              <li onClick={() => this.props.toggleFilter('tinkering')}>
                <input
                  type='checkbox'
                  readOnly
                  checked={filters.tinkering}
                />
                <label>Tinkering</label>
              </li>
              <li onClick={() => this.props.toggleFilter('non-software-related')}>
                <input
                  type='checkbox'
                  readOnly
                  checked={filters['non-software-related']}
                />
                <label>Non-software related</label>
              </li>
            </ul>
          </div>
          <div className='projects'>
            { filters.tinkering &&
              <Link to={getPath(RubixCube)}>
                <div className='rubix-cube project'>
                  <div className='image-container' />
                  <p>WebGL Rubix Cube</p>
                </div>
              </Link>
            }
            { filters['non-software-related'] &&
              <Link to={getPath(HomeCinema)}>
                <div className='home-cinema project'>
                  <div className='image-container' />
                  <p>Home Cinema</p>
                </div>
              </Link>
            }
            { filters.professional &&
              <Link to={getPath(TheCrafters)}>
                <div className='the-crafters project'>
                  <div className='image-container' />
                  <p>thecrafters.co.uk</p>
                </div>
              </Link>
            }
            { filters.professional &&
              <Link to={getPath(LouiseAnneKennedyPhotography)}>
                <div className='louise-anne-kennedy-photography project'>
                  <div className='image-container' />
                  <p>louiseannekennedyphotography.com</p>
                </div>
              </Link>
            }
            { filters.professional &&
              <Link to={getPath(BordersRailwayGuide)}>
                <div className='borders-railway-guide project'>
                  <div className='image-container' />
                  <p>bordersrailwayguide.co.uk</p>
                </div>
              </Link>
            }
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  filters: state.projects.filters,
  allFiltersChecked: allFiltersChecked(state.projects)
})

export const mapDispatchToProps = dispatch => ({
  toggleFilter: filter => dispatch(toggleFilter(filter)),
  toggleAllFilters: filter => dispatch(toggleAllFilters())
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
