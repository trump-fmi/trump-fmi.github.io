import React from 'react';
import Form from "react-jsonschema-form";
import fields from "react-jsonschema-form-extras";
import JSZip from 'jszip';

// data
import advanced from '../data/advanced.config.js';
import simple from '../data/example.config.js';

import schema from '../schema';
import ui from '../ui';

const configs = {
  advanced,
  simple
}

const download = (data) => {

  var json = JSON.stringify(data, null, 2);
  var blob = new Blob([json], {type: "application/json"});
  var name = data.labeling_name.replace(' ','-') + ".config";

  var zip = new JSZip();

  // add current config
  zip.file(name, blob);

  // // create a file and a folder
  // zip.file("nested/hello.txt", "Hello World\n");
  // // same as
  // zip.folder("nested").file("hello.txt", "Hello World\n");

  zip.generateAsync({type:"blob"})
  .then(function(content) {
      // see FileSaver.js
      window.saveAs(content, "config.zip");
  });


}

const Tool = ({match}) => {

  const data = configs[match.params.config];

  return (
<Form schema={schema}
        fields = {fields}
        formData={data}
        uiSchema={ui}
        // onChange={log("changed")}
        onSubmit={e => download(e.formData)}
        // onError={log("errors")}
      >
        <div>
          <button type="submit" className="btn btn-success">ZIP generieren</button>
        </div>
      </Form>
)};

export default Tool;
