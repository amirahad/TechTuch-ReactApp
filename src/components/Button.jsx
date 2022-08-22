import React from 'react'

export default function Button(props) {
  return (
    <a href className=' btn-get-started' type={props.type}>{props.text}</a>
  )
}
