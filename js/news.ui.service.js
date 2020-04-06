class NewsUI {
  constructor() {
    this._newsContainer = document.querySelector('.news-wrap .row');
  }

  /**
   * generate an article template
   * @param {Object} article
   * @returns {string}
   */
  static generateArticleTemplate(article) {
    return `
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src="${ article.urlToImage }" alt="article-img">
          </div>
          <div class="card-content">
            <span class="card-title">
              <a href="${ article.url }" target="_blank">${ article.title || '' }</a>
            </span>
            <p class="card-date">
              ${ new Date(article.publishedAt).toLocaleString() || '' }
            </p>
            <p>${ article.description || '' }</p>
          </div>
          <div class="card-action">
            <a href="${ article.url }" target="_blank">
              <span>Read more</span>
              <span class="card-source-name">${ article.source.name || '' }</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * add article to DOM
   * @param {Object} article
   */
  addArticle(article) {
    const template = NewsUI.generateArticleTemplate(article);
    this._newsContainer.insertAdjacentHTML('afterbegin', template);
  }

  clearContainer() {
    let first = this._newsContainer.firstElementChild;
    while (first) {
      this._newsContainer.removeChild(first);
      first = this._newsContainer.firstElementChild;
    }
  }
}
