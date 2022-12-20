import { React, useRef } from 'react'

// redo the radio buttons as react controlled component
// https://surajsharma.net/blog/react-handle-radio-buttons

// also look into useRef to do the submit button blur

const SectionRating = ({ setSubmittedRating, rating, setRating }) => {
  // use useRef to create a ref to the submit button,
  // so it can be blurred if the handlesubmit returns early
  // i.e. if no radio button has been selected (rating is empty)
  const submitButtonRef = useRef(null)

  const handleRadioChange = (e) => {
    setRating(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('handleSubmit')
    if (!rating) {
      // blur the submit button or it stays focused
      submitButtonRef.current.blur()
      return
    }
    setSubmittedRating(true)
  }

  return (
    <section className="rating panel">
      {/* <!-- icon here as icon - should probably be a background on the h2 or the ratings panel itself  */}
      {/* but given how it's layed out, it's probably supposed to be an actual element --> */}
      <div className="rating-icon">
        <span className="rating-icon-inner" aria-hidden="true"></span>
      </div>

      <h2>How did we do?</h2>

      {/* <!-- form should probably include the question! --> */}
      <form onSubmit={handleSubmit} className="rating-form" id="rating-form">
        <fieldset className="rating-fieldset">
          <legend className="rating-legend">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </legend>

          <div className="rating-radios">
            {/* <!-- wrapping label method so we don't need an extra div --> */}
            <label className="rating-radio-label">
              <input
                type="radio"
                id="rating-radio-1"
                name="rating-radio"
                value="1"
                checked={rating === '1'}
                onChange={handleRadioChange}
              />
              <span className="rating-radio-label-inner">1</span>
            </label>

            <label className="rating-radio-label">
              <input
                type="radio"
                id="rating-radio-2"
                name="rating-radio"
                value="2"
                checked={rating === '2'}
                onChange={handleRadioChange}
              />
              <span className="rating-radio-label-inner">2</span>
            </label>

            <label className="rating-radio-label">
              <input
                type="radio"
                id="rating-radio-3"
                name="rating-radio"
                value="3"
                checked={rating === '3'}
                onChange={handleRadioChange}
              />
              <span className="rating-radio-label-inner">3</span>
            </label>

            <label className="rating-radio-label">
              <input
                type="radio"
                id="rating-radio-4"
                name="rating-radio"
                value="4"
                checked={rating === '4'}
                onChange={handleRadioChange}
              />
              <span className="rating-radio-label-inner">4</span>
            </label>

            <label className="rating-radio-label">
              <input
                type="radio"
                id="rating-radio-5"
                name="rating-radio"
                value="5"
                checked={rating === '5'}
                onChange={handleRadioChange}
              />
              <span className="rating-radio-label-inner">5</span>
            </label>
          </div>
        </fieldset>

        <button
          className="rating-btn btn-submit"
          type="submit"
          name="rating-submit"
          value="submit"
          ref={submitButtonRef}
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default SectionRating
