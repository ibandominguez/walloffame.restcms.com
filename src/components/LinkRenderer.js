import React, { Component } from 'react'

const ImageOrLink = (props) => {
  if (props.href.match(/\.(jpe?g|png|gif)$/)) {
    return <img src={props.href} className={'img-fluid'} />
  }

  if (false) {
    // Youtube Video
  }

  if (false) {
    // Vimeo Video
  }

  return <a href={props.href} target={'_blank'}>{props.children}</a>
}

export default ImageOrLink
