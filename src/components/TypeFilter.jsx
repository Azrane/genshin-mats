import React from 'react';
import './TypeFilter.css';

const filterLists = {
  element: {
    type: 'image',
    list: ['anemo', 'cryo', 'electro', 'dendro', 'geo', 'hydro', 'pyro']
  },
  weapon: {
    type: 'image',
    list: ['bow', 'catalyst', 'claymore', 'polearm', 'sword']
  },
  material: {
    type: 'text',
    list: ["character", "talent", "weapon", "common", "specialty"],
    names: ["Character", "Talent", "Weapon", "Common", "Specialty"]
  },
  region: {
    type: "image",
    list: ["mondstadt", "liyue", "inazuma", "sumeru", "fontaine", "natlan", "snezhnaya","none"],
    names: ["Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine", "Natlan", "Snezhnaya","None"]
  },
  version: {
    type: "text",
    list: [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 5.0, 5.1],
    names:["1.0", 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, "2.0", 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, "3.0", 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, "4.0", 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, "5.0", 5.1]
  },
  days: {
    type: 'text',
    list: [1, 2, 3],
    names: ['Mon/Thu', 'Tue/Fri', 'Wed/Sat']
  }
}

function TypeFilter(props) {
  return (
    <div className="type-filter">
      {
        filterLists[props.type].list.map((filter, index) => (
          <React.Fragment key={filter}>
            <input
              className="filter-input"
              type="checkbox"
              name={props.type}
              id={filter}
              value={filter}
              checked={props.checked === filter}
              onChange={() => props.checked === filter ? props.selectFilter(undefined) : props.selectFilter(filter)}
            />
            <label className="filter-label" htmlFor={filter}>
              {
                filterLists[props.type].type === 'image' ?
                <img className="filter-image" src={process.env.PUBLIC_URL + '/images/' + filter + '.png'} alt={filter} /> :
                <div className="filter-text">{filterLists[props.type].names[index]}</div>
              }
            </label>
          </React.Fragment>
        ))
      }
    </div>
  )
}

export default TypeFilter;