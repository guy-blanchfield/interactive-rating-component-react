import React from 'react'
import { useState } from 'react'
import SectionRating from './SectionRating'
import SectionThankyou from './SectionThankyou'

const Main = () => {
  const [submittedRating, setSubmittedRating] = useState(false)
  const [rating, setRating] = useState('')

  // function that does setSubmittedRating to be passed as prop
  // as it seems to be bad form to pass the setter as a prop
  // probably makes sense to keep the state stuff in main

  // const doSetSubmittedRating = () => {
  //   setSubmittedRating(true)
  // }

  // on second thughts, this is a bit long winded,
  // let's just pass the setter

  return (
    <main className="main-container">
      {/* <!-- section probably the best fit semantically for this --> */}
      {!submittedRating ? (
        <SectionRating
          setSubmittedRating={setSubmittedRating}
          rating={rating}
          setRating={setRating}
        />
      ) : (
        <SectionThankyou rating={rating} />
      )}
    </main>
  )
}

export default Main
