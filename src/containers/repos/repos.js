import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {getRepos} from 'store/actions/reposActions'
import {getEvents} from 'store/actions/eventsActions'

import './repos.scss'

const mapStateToProps = state => ({
  events: state.events,
  repos: state.repos
})

const mapDispatchToProps = dispatch => (bindActionCreators({
  getEvents,
  getRepos
}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class Repos extends Component {
  static propTypes = {
    repos: PropTypes.array.isRequired,
    getRepos: PropTypes.func.isRequired
  };

  componentDidMount () {
    const {getRepos} = this.props
    getRepos()
  }

  render () {
    const {repos} = this.props

    let reposList = repos.map(item => {
      return (
        <div key={item.id} styleName='container'>
          <div>
            <a styleName='link' href={item.html_url}>{item.name}</a>
            <p>Language: {item.language}</p>
          </div>
          <div>
            <p>Watchers: {item.watchers}</p>
            <p>Forks: {item.forks}</p>
            <p>Open issues: {item.open_issues}</p>
          </div>
        </div>
      )
    })
    return (
      <div styleName='page'>
        {reposList}
      </div>
    )
  }
}
