const ui = {
  label_split: {
    split_chars: {
      "ui:options": {
        "orderable": false
      }
    }
  },
  mapping: {
    level : {
      constraints: {
        tag: {
          "ui:field": "typeahead",
          "typeahead": {
             "options": [ { "state": "New York" }, { "code": "Washington" }],
             "labelKey": "state"
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
