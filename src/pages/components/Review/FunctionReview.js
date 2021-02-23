// import React from 'react'
import React, { useState } from 'react'
import data from "../../dataReview"
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'
import "./FunctionReview.css"

function FunctionReview() {
  const [index, setIndex] = useState(0);

  const name = data.people[index].name
  const feedBack = data.people[index].feedBack

  const checkNumber = (number) => {
    if (number > data.people.length - 1) {
      return 0
    }
    if (number < 0) {
      return data.people.length - 1
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  return (
    <article className="ContainerTotal">
      <span className="quote-icon">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>

      <div>
        <h4>{name}</h4>
        <p>"{feedBack}"</p>
      </div>

      <div className="button-container">

        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>



        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>

      </div>


    </article>
  )
}

export default FunctionReview