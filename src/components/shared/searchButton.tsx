export default function SearchButton() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button onSubmit={(e) => e.preventDefault()}>
        <i className='fal fa-search'></i>
      </button>
      <input type='text' id='serach' placeholder='Serach ...' />
    </form>
  );
}
