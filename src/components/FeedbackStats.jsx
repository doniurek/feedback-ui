import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
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

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats
