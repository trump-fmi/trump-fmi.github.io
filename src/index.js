import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Form from "react-jsonschema-form";
import JSZip from 'jszip';

// data
//import data from './data/advanced.config';
import data from './data/example.config';
import schema from './schema';



const uiSchema = {};



const log = (type) => console.log.bind(console, type);

const download = (data) => {

  var json = JSON.stringify(data, null, 2);
  var blob = new Blob([json], {type: "application/json"});
  var name = data.labeling_name.replace(' ','-') + ".config";
  // var url  = URL.createObjectURL(blob);
  //
  // var a = document.createElement('a');
  // a.download    = data.labeling_name.replace(' ','-') + ".config";
  // a.href        = url;
  // a.textContent = "Download backup.json";
  //
  // document.body.appendChild(a);
  // a.click();
  // document.body.removeChild(a);

  var zip = new JSZip();
  zip.file(name, blob);

  // create a file and a folder
  zip.file("nested/hello.txt", "Hello World\n");
  // same as
  zip.folder("nested").file("hello.txt", "Hello World\n");

  zip.generateAsync({type:"blob"})
  .then(function(content) {
      // see FileSaver.js
      window.saveAs(content, "example.zip");
  });


}

ReactDOM.render((
  <div className='container'>
  <Form schema={schema}
        formData={data}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={e => download(e.formData)}
        onError={log("errors")} />
      </div>
), document.getElementById("root"));
