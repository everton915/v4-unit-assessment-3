
function BookList(props) {
  const mappedBooks = props.books.map((bookObj) => {
    return (
      <div>
          <p>{bookObj.author}</p>
          <p>{bookObj.title}</p>
          <img src={bookObj.img} alt={bookObj.title} />

      </div>
    )
    })

  return(
    <div>
      <h3 class="list">list</h3>
      {mappedBooks}
    </div>
  );
}

export default BookList;