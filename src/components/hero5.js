import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero5.css'

const Hero5 = (props) => {
  return (
    <div className="hero5-header19 thq-section-padding">
      <div className="hero5-max-width thq-section-max-width thq-flex-row">
        <video
          src={props.video1Src}
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="hero5-video"
        ></video>
        <div className="hero5-column">
          <div className="hero5-content">
            <h1 className="hero5-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero5-text8">
                    Enhance Your Productivity with Our Services
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero5-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero5-text5">
                    Explore our range of services and products designed to boost
                    your productivity. Our user-friendly interface makes it easy
                    to find what you need, and our secure transactions ensure
                    peace of mind. With 24/7 customer support, we are here to
                    assist you every step of the way.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero5-actions">
              <button className="thq-button-filled hero5-button1">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero5-text6">Browse Services</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero5-button2">
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero5-text7">Secondary action</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero5.defaultProps = {
  content1: undefined,
  video1Poster:
    'https://images.pexels.com/videos/3373659/pictures/preview-0.jpg',
  action1: undefined,
  video1Src:
    'https://videos.pexels.com/video-files/3373659/3373659-hd_1280_720_24fps.mp4',
  action2: undefined,
  heading1: undefined,
}

Hero5.propTypes = {
  content1: PropTypes.element,
  video1Poster: PropTypes.string,
  action1: PropTypes.element,
  video1Src: PropTypes.string,
  action2: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero5
