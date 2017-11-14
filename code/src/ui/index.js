function typeaheadField(title, url){

  return {
  // "ui:title": "Your password",
  // "ui:description": "The best password",
  "ui:field": "asyncTypeahead",
  "asyncTypeahead": {
     "url": url,
      search: (url, query) => fetch(`${url}&query=${query}`).then(res => res.json()).then(res => res.data.map(el => el.key)),
      placeholder: title
   }
};

}

const ui = {
  label_split: {
    split_chars: {
      "ui:options": {
        "orderable": false
      }
    }
  },
  mapping: {
      constraints: {
        items: {
          tag: typeaheadField('Tag', "https://taginfo.openstreetmap.org/api/4/keys/all?sortname=count_all&sortorder=desc&page=1&rp=17"),
          // equals: typeaheadField('equals', 'https://taginfo.openstreetmap.org/api/4/key/values?sortname=count_all&sortorder=desc&page=1&rp=10')
        }
      },
      sublevels: {
        items: {
          constraints: {
            items: {
              tag: typeaheadField('Tag', "https://taginfo.openstreetmap.org/api/4/keys/all?sortname=count_all&sortorder=desc&page=1&rp=17"),
              // equals: typeaheadField('equals', 'https://taginfo.openstreetmap.org/api/4/key/values?sortname=count_all&sortorder=desc&page=1&rp=10')
            }
          }
        }
      }
  }
};

/*
  typeahead for "key"(place,amenity) --> https://taginfo.openstreetmap.org/api/4/keys/all?sortname=count_all&sortorder=desc&page=1&rp=17&query=
  typeahead for "value"(bar,etc.) --> https://taginfo.openstreetmap.org/api/4/key/values?sortname=count_all&sortorder=desc&page=1&rp=10&key=<<KEY>>&query=
*/

export default ui;
