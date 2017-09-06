const filter = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      title: 'Type',
      default: 'value',
      enum: [
        "and",
        "or",
        "value"
      ],
      enumNames: [
        "And",
        "Or",
        "Value"
      ]
    },
    value: {
      type:'string',
      title: 'Value',
    },
    operands: {
      type: 'array',
      title: 'Operands',
      items: {
        $ref: '#/definitions/filter'
      }
    }
  }
};

export default filter;
