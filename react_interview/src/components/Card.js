const Card = ({ data, setSelectedCard, Cards, setCads }) => {

  return (
    <>
      <div
        className="movie"
      >
        <img
          src={data.Poster}
          alt=""
          onClick={() => setSelectedCard(data)}
        />
        <p>{data.Title}</p>
        <p>Year: {data.Year}</p>
        <button
          onClick={() => {

            setCads([{
              ...data,
              isFav: !data.isFav,
            },
            ...Cards
            ])

          }}
        >
          {data.isFav ? "Already Liked" : "Wanna Like"}
        </button>
      </div>
    </>
  )
}

export default Card
