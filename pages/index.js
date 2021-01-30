import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, initialCards, addItem } from '../store'
import withRedux from 'next-redux-wrapper'
import './index.css'
import Card from './Card'

class Index extends React.Component {
  static async getInitialProps({ store }) {
    return store.dispatch(initialCards())
  }

  render() {
    return (
      <div>
        <header className='App-header'>
          <img src='/static/logo.png' className='static-logo' alt='logo' />
        </header>
        <div className='Grid'>
          {this.props.cards.map((card) => (
            <Card key={card.id} />
          ))}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initialCards: bindActionCreators(initialCards, dispatch),
    addItem: bindActionCreators(addItem, dispatch),
  }
}

const mapstateToProps = (state) => {
  return {
    cards: state.cards,
  }
}

export default withRedux(initStore, mapstateToProps, mapDispatchToProps)(Index)
