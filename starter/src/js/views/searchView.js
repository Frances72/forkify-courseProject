class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    //publisher
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault(); //when submitting a form, prevent page from reloading
      handler();
    });
  }
}

export default new SearchView();
