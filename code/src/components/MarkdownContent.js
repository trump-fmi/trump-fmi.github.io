import React,{Component} from 'react'
import marked from 'marked'

var renderer = new marked.Renderer();

// renderer.link = function (...ads) {
//   console.log(ads);
//   return '<a href="#" >asdasd</a>';
// };

renderer.table = function (header, body) {

  return '<table class="table table-striped">\n'
   + '<thead>\n'
   + header
   + '</thead>\n'
   + '<tbody>\n'
   + body
   + '</tbody>\n'
   + '</table>\n';
}

// helper function
async function getMD(path){
  let res = await fetch(`https://trump-fmi.github.io/content/${path}.md`, {cache: "force-cache"});
  let content = await res.text();
  return marked(content, {renderer: renderer});
};

// static cache
let md_cache = {};

class MarkdownContent extends Component {

  constructor(props){
    super(props);

    const {file,dir} = this.props;

    const path = dir ? `${dir}/${file}` : file;

    this.state = {
      content: md_cache[path] || ''
    }
  }

  getContent = (props) => {

    const {file,dir} = this.props;

    const path = dir ? `${dir}/${file}` : file;

    if(!md_cache[path]){
      getMD(path).then(content => {
        this.setState({content});
        md_cache[path] = content;
      })
    }else{
      this.setState({
        content: md_cache[path]
      })
    }
  }

  componentWillReceiveProps(nextProps){
    this.getContent(nextProps);
  }

  componentDidMount(){
    this.getContent(this.props);
  }



  render() {
    const {content} = this.state;

    if(content === ''){
        return <div>Loading...</div>;
    }

    return <div className='text-content' dangerouslySetInnerHTML={{__html:content}} />;
  }

}

export default MarkdownContent;
