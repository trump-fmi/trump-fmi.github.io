import level from './definitions/level';
import filter from './definitions/filter';

const labeling_name = {
  type: "string",
  title: "Labeling Name",
  //default: "Example"
};

const description = {
  type: "string",
  title: "Description",
};

const label_split = {
  type: "object",
  title: "Splitting Options",
  properties: {
    split_bound: {
      type: "number",
      title: "Split Bound",
      default: 15,
    },
    split_chars: {
      type: "array",
      title: "Split Characters",
      items: {
        type: 'string',
      }
    }
  }
}

const font = {
  title: 'Font',
  type: 'object',
  properties: {
    name: {
      type:'string',
      title:'Font Name'
    },
    "ttf-path": {
      type:'string',
      title: 'Path to TTF'
    }
  }
};

const schema = {
  definitions: {
    level,
    filter
  },
  title: "Pipline Config",
  type: "object",
  properties: {
    labeling_name: labeling_name,
    description: description,
    label_split: label_split,
    font: font,
    filter: filter,
    mapping: level
  }
};

export default schema;
