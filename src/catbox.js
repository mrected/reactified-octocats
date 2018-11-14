import React, { Component } from 'react'
import Octocats from './cats.json'
class Catbox extends Component {
  render() {
    let cats = Octocats
    return (
      <section id="cat-block">
        {cats.map(cat => (
          <div class="picture-box">
            <div class="cats">
              <img src={cat.image} alt={cat.name} />
            </div>
            <div class="caption">
              <div class="down-arrow" />
              <p class="pic-number">{cat.number}</p>
              <p>
                the <span class="caption-title">{cat.name}</span> by
              </p>
              {cat.authors.map(author => (
                <img src={author.image} alt="creator" />
              ))}
            </div>
          </div>
        ))}
      </section>
    )
  }
}

export default Catbox
