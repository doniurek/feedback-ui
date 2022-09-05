import { useContext } from "react"
import FeedbackContext from "./context/FeedbackContext"

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)

  // calculating ratings avg
  let average = feedback.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.rating
   }, 0) / feedback.length

  //  eg. 8.5 ok, 8.0 -> 8
   average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Revievs</h4>
      <h4>Average Rating: {isNaN(average) ? 0: average}</h4>
    </div>
  )
}

export default FeedbackStats
