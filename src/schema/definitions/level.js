const level = {
  type: 'object',
  title: 'Level',
  properties: {
    level: {
      type: 'string',
      title: 'Level'
    },
    constraints: {
      type: 'array',
      title: 'Constraints',
      items: {
        type: 'object',
        properties: {
          tag: {type: 'string', title: 'Tag'},
          equals: {type: 'string', title: 'Equals'},
          greater: {type: 'number', title: 'Greater'},
          lower: {type: 'number', title: 'Lower'},
        }
      },
    },
    factor: {
      type: 'number',
      title: 'Factor'
    },
    icon: {
      type: 'string',
      title: 'Icon'
    },
    sublevels: {
      type: 'array',
      title: 'Sublevels',
      items: {
        $ref: '#/definitions/level'
      }
    }
  }
};

export default level;
