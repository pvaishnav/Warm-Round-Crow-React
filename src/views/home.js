import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero5 from '../components/hero5'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Warm Round Crow</title>
        <meta property="og:title" content="Warm Round Crow" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#about</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Contact Us</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">Welcome to our home page</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">Explore our services</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Learn more about us</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">Get in touch with us</span>
          </Fragment>
        }
      ></Navbar8>
      <div
        data-thq="slider"
        data-autoplay="true"
        data-navigation="true"
        data-pagination="true"
        data-disable-autoplay-on-interaction="true"
        className="home-slider swiper"
      >
        <div data-thq="slider-wrapper" className="swiper-wrapper">
          <div
            data-thq="slider-slide"
            className="home-slider-slide1 swiper-slide"
          ></div>
          <div
            data-thq="slider-slide"
            className="home-slider-slide2 swiper-slide"
          ></div>
          <div
            data-thq="slider-slide"
            className="home-slider-slide3 swiper-slide"
          ></div>
        </div>
        <div
          data-thq="slider-pagination"
          className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
        >
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet swiper-pagination-bullet-active"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
        </div>
        <div data-thq="slider-button-prev" className="swiper-button-prev"></div>
        <div data-thq="slider-button-next" className="swiper-button-next"></div>
      </div>
      <div className="home-container2"></div>
      <Hero5
        action1={
          <Fragment>
            <span className="home-text114">Browse Services</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Secondary action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Explore our range of services and products designed to boost your
              productivity. Our user-friendly interface makes it easy to find
              what you need, and our secure transactions ensure peace of mind.
              With 24/7 customer support, we are here to assist you every step
              of the way.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Enhance Your Productivity with Our Services
            </span>
          </Fragment>
        }
        video1Src="https://www.youtube.com/watch?v=2VpFtLSYwDk"
        video1Poster="https://www.youtube.com/watch?v=2VpFtLSYwDk"
      ></Hero5>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text118">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text119">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text120">
              Discover the best products and services tailored just for you.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text121">Welcome to Our Website</span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text122">Feature 1 Title</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Feature 2 Title</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text124">Feature 3 Title</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text125">Description for Feature 1</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text126">Description for Feature 2</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text127">Description for Feature 3</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text128">Sign Up Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text129">
              Sign up now and start organizing your tasks efficiently.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text130">
              Ready to boost your productivity?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text131">User-Friendly Interface</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text132">Secure Transactions</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text133">24/7 Customer Support</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text134">
              Intuitive design for easy navigation
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text135">
              Ensuring safe and encrypted payment processing
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text136">
              Dedicated team available round the clock for assistance
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text137">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text138">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text139">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text140">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text141">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text142">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text143">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text144">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text147">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text148">$9.99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text149">$19.99/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text150">$29.99/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text151">Sign Up</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text152">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text153">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text154">Sign Up</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text155">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text156">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text157">Sign Up</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text158">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text159">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text160">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text161">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text162">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text163">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text164">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text165">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text166">Feature 1 included</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text167">Feature 2 included</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text168">Feature 3 included</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text169">Feature 1 included</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text170">Feature 2 included</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text171">Feature 3 included</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text173">Feature 1 included</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text174">Feature 2 included</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text175">Feature 3 included</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text184">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text185">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text186">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text187">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text188">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text189">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text190">Step 1: Sign Up</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text191">Step 2: Explore Features</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text192">Step 3: Start Using</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193">Step 4: Get Support</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text194">
              Create an account by providing your email and setting up a
              password.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text195">
              Discover the various features and tools available on our platform.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text196">
              Begin using the platform to enhance your productivity and achieve
              your goals.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text197">
              Reach out to our support team for any assistance or questions you
              may have.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text198">
              Great service and excellent results! I highly recommend their
              services.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text199">
              Working with this team has been a game-changer for our business.
              They are professional and deliver on their promises.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text200">
              I am impressed by the level of expertise and dedication shown by
              this team. They have helped us achieve our goals effectively.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text201">
              Exceptional service! The team goes above and beyond to ensure
              client satisfaction. I am glad we chose to work with them.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text204">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text205">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text206">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text207">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text208">CEO, Company ABC</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text209">Marketing Manager, XYZ Inc.</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text210">Founder, Startup123</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text211">Creative Director, Design Co.</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text212">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text213">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text214">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text215">Cluj - Napoca</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text216">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text217">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text218">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text219">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text220">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text221">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text222">FAQs</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text223">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text224">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text225">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
