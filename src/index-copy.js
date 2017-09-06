import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Form from "react-jsonschema-form";

const levelSchema = {
  type: 'array',
  title: 'sublevel',
  items: {
    type: 'object',
    properties: {
      level: {type: 'string', title: 'Level'},
      constraints: {
        type: 'array',
        title: 'Constraints',
        items: {
          type: 'object',
          properties: {
            tag: {type: 'string', title: 'Tag'},
            equals: {type: 'string', title: 'Equals'},
            greater: {type: 'string', title: 'Greater'},
            lower: {type: 'string', title: 'Lower'},
          }
        },
    },
    factor: {type: 'number', title: 'Factor'},
    sublevels: {
      type: 'array',
      title: 'sublevel',
      items: {
        type: 'object',
        properties: {
          level: {type: 'string', title: 'Level'},
          constraints: {
            type: 'array',
            title: 'Constraints',
            items: {
              type: 'object',
              properties: {
                tag: {type: 'string', title: 'Tag'},
                equals: {type: 'number', title: 'Equals'},
                greater: {type: 'number', title: 'Greater'},
                lower: {type: 'number', title: 'Lower'},
              }
            },
        },
        factor: {type: 'number', title: 'Factor'},
      }
    }
    }
  }
}
};

const schema = {
  title: "Pipline Config",
  type: "object",
  required: ["labeling_name"],
  properties: {
    labeling_name: {type: "string", title: "Labeling Name", default: "Example"},
    description: {type: "string", title: "Description"},
    label_split: {
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
        },
      }
    },
    font : {
      title: 'Font',
      type: 'object',
      properties: {
        name: {type:'string', title:'Font Name'},
        "ttf-path": {type:'string', title: 'Path to TTF'}
      }
		},
    filter: {
      title: 'Filter',
      type: 'object',
      properties: {
        type: {
          type:'string',
          title: 'type',
          default: 'and',
          enum: [
            "and",
            "or"
          ],
          enumNames: [
            "And",
            "Or"
          ]
        },
        operands: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              type: {
                type:'string',
                title: 'type',
                default: 'and',
                enum: [
                  "and",
                  "or"
                ],
                enumNames: [
                  "And",
                  "Or"
                ]
              },
              operands: {
                type: 'array',
                items: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    },
    mapping: {
      type: 'object',
      title: 'Mapping',
      properties: {
        level: {type: 'string', title: 'Level'},
        constraints: {
          type: 'array',
          title: 'Constraints',
          items: {
            type: 'object',
            properties: {
              tag: {type: 'string', title: 'Tag'},
              equals: {type: 'string', title: 'Equals'},
              greater: {type: 'string', title: 'Greater'},
              lower: {type: 'string', title: 'Lower'},
            }
          }
        },
        sublevels: levelSchema
      }
    }
  }
};



const data = {
	"labeling_name" : "example labeling",
		"description" : "A simple labeling consisting of city and village labels",
		"label_split" : {
			"split_bound" : 15,
			"split_chars" : [
				" ", "-", "/"
			]
		},
		"font" : {
			"name" : "Dejavu Mono",
			"ttf-path" : "/usr/share/fonts/TTF/DejaVuSansMono.ttf"
		},
		"filter" : {
			"type" : "or",
			"operands" : [
			{
				"type" : "and",
				"operands" : [
					"place", "name"
				]
			}
			]
		},
		"mapping" : {
			"level": "SETTLEMENT",
			"constraints": [
			{
				"tag": "place"
			}
			],
			"sublevels": [
			{
				"level": "CITY",
				"constraints": [
				{
					"tag": "place",
					"equals": "city"
				}
				],
				"sublevels": [
				{
					"level": "MEGA_CITY",
					"constraints": [
					{
						"tag":"population",
						"greater": 5000000
					}
					],
					"factor":30
				},
				{
					"level": "LARGE_CITY",
					"constraints": [
					{
						"tag":"population",
						"greater": 1000000
					}
					],
					"factor":26
				},
				{
					"level": "CITY",
					"constraints": [
					{
						"tag":"population",
						"greater": 500000
					}
					],
					"factor":24
				},
				{
					"level": "SMALL_CITY",
					"factor":22
				}
				]
			},{
				"level": "TOWN",
					"constraints": [
					{
						"tag": "place",
						"equals": "town"
					}
					],
					"sublevels": [
					{
						"level": "LARGE_TOWN",
						"constraints": [
						{
							"tag": "population",
							"greater": 100000
						}
						],
						"factor":20
					},
					{
						"level": "TOWN",
						"constraints": [
						{
							"tag": "population",
							"greater": 25000
						}
						],
						"factor":19
					},
					{
						"level": "SMALL_TOWN",
						"factor":18
					}
					]
			},{
				"level": "VILLAGE",
					"constraints": [
					{
						"tag": "place",
						"equals": "village"
					}
					],
					"factor":16
			}
			]
		}
}

const uiSchema = {};



const log = (type) => console.log.bind(console, type);

ReactDOM.render((
  <div className='container'>
  <Form schema={schema}
        formData={data}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
      </div>
), document.getElementById("root"));
