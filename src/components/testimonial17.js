import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text27">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text26">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text37">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text34">
                            CEO, Company ABC
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text31">
                        Great service and excellent results! I highly recommend
                        their services.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            Marketing Manager, XYZ Inc.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text36">
                        Working with this team has been a game-changer for our
                        business. They are professional and deliver on their
                        promises.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            David Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            Founder, Startup123
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text25">
                        I am impressed by the level of expertise and dedication
                        shown by this team. They have helped us achieve our
                        goals effectively.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            Sarah Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            Creative Director, Design Co.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text35">
                        Exceptional service! The team goes above and beyond to
                        ensure client satisfaction. I am glad we chose to work
                        with them.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Name: undefined,
  review3: undefined,
  content1: undefined,
  heading1: undefined,
  author2Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTY2fDA&ixlib=rb-4.0.3&w=200',
  author3Src:
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author2Position: undefined,
  author4Alt: 'Image of Sarah Lee',
  author2Alt: 'Image of Jane Smith',
  author1Src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200',
  author2Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author1Alt: 'Image of John Doe',
  author3Position: undefined,
  review1: undefined,
  author3Name: undefined,
  author4Position: undefined,
  author1Position: undefined,
  author3Alt: 'Image of David Johnson',
  review4: undefined,
  review2: undefined,
  author1Name: undefined,
}

Testimonial17.propTypes = {
  author4Name: PropTypes.element,
  review3: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  author2Name: PropTypes.element,
  author4Src: PropTypes.string,
  author3Src: PropTypes.string,
  author2Position: PropTypes.element,
  author4Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author2Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Position: PropTypes.element,
  review1: PropTypes.element,
  author3Name: PropTypes.element,
  author4Position: PropTypes.element,
  author1Position: PropTypes.element,
  author3Alt: PropTypes.string,
  review4: PropTypes.element,
  review2: PropTypes.element,
  author1Name: PropTypes.element,
}

export default Testimonial17