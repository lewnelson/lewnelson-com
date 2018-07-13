import { Component } from 'react'

export default class Page extends Component {
  componentDidMount () {
    if (this.title) {
      document.title = this.title
    }
  }
}
