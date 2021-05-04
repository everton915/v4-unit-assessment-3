
function BookList(props) {
  const mappedBooks = props.books.map((bookObj) => {
    return (
      <div>
          <p>{bookObj.author}</p>

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