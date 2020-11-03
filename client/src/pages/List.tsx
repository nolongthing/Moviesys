import React, { Component } from 'react'
import { doJsonp } from '../api'

export default class List extends Component {
  componentDidMount() {
    doJsonp('http://localhost:12306/jsonp?cb=doRender', (data: any) => {
      console.log(data);
    })
  }
  render() {
    return (
      <div>
        this is list
      </div>
    )
  }
}
