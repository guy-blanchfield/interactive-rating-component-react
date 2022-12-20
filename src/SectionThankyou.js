import React from 'react'
import illustration from './assets/images/illustration-thank-you.svg'

const SectionThankyou = ({ rating }) => {
  return (
    <section className="thankyou panel">
      <img
        src={illustration}
        alt="some random illustration"
        className="thankyou-img"
      />

      <div className="pill-result">
        You selected <span className="text-result">{rating}</span> out of 5
      </div>

      <h2>Thank you!</h2>

      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&rsquo;t hesitate to get in touch!
      </p>
    </section>
  )
}

export default SectionThankyou
