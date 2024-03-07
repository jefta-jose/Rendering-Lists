import './joke.scss'

const Joke = ({ jokeObj }) => {
    const { joke, rating } = jokeObj;
    const ratingFunc = (rating) => {
        if (rating === 1) {
            return <span>★☆☆☆☆</span>
        } else if (rating === 2) {
            return <span>★★☆☆☆</span>
        } else if (rating === 3) {
            return <span>★★★☆☆</span>
        } else if (rating === 4) {
            return <span>★★★★☆</span>
        } else if (rating === 5) {
            return <span>★★★★★</span>
        } else {
            return <span>☆☆☆☆☆</span>

        }
    }
    return (
        <div className='joke'>
            <h4 className="jokename">{joke}</h4>
            <p className="rating">
                {ratingFunc(rating)}
            </p>
        </div>
    )
}

export default Joke