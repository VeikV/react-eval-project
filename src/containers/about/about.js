import './about.scss'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {getUser} from 'store/actions/userActions'
import {bindActionCreators} from 'redux'

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => (bindActionCreators({
  getUser
}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class About extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  componentDidMount () {
    const {getUser} = this.props

    getUser()
  }

  render () {
    const {user} = this.props

    let newBioStr = []

    if (Object.keys(user).length !== 0) {
      newBioStr = user.bio.split('•')
    }
    return (
      <section styleName='about'>
        <div styleName='info'>
          <p styleName='name'>Hi! My name is {user.name}.</p>
          <p>I am a:</p>
          <ul>
            {newBioStr.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div styleName='avatar'>
          <img styleName='avatar-img' src={user.avatar_url} />
        </div>
      </section>
    )
  }
}
