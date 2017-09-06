export default {
  labeling_name: "settlement labeling",
  description: "Labeling containing human settlement labels. Labeling does not contain any icons",
  label_split: {
    split_bound: 15,
    split_chars: [
      " ",
      "-",
      "/"
    ]
  },
  font: {
    name: "Dejavu Sans Mono",
    "ttf-path": "/usr/share/fonts/TTF/DejaVuSansMono.ttf"
  },
  filter: {
    type: "and",
    operands: [
      {"type":"value","value":"place"},
      {"type":"value","value":"name"}
    ]
  },
  mapping: {
    level: "SETTLEMENT",
    constraints: [
      {
        tag: "place"
      }
    ],
    sublevels: [
      {
        level: "CITY",
        constraints: [
          {
            tag: "place",
            equals: "city"
          }
        ],
        sublevels: [
          {
            level: "MEGA_CITY",
            constraints: [
              {
                tag: "population",
                greater: 5000000
              }
            ],
            factor: 30
          },
          {
            level: "LARGE_CITY",
            constraints: [
              {
                tag: "population",
                greater: 1000000
              }
            ],
            factor: 26
          },
          {
            level: "CITY",
            constraints: [
              {
                tag: "population",
                greater: 500000
              }
            ],
            factor: 24
          },
          {
            level: "SMALL_CITY",
            factor: 22
          }
        ]
      },
      {
        level: "TOWN",
        constraints: [
          {
            tag: "place",
            equals: "town"
          }
        ],
        sublevels: [
          {
            level: "LARGE_TOWN",
            constraints: [
              {
                tag: "population",
                greater: 100000
              }
            ],
            factor: 20
          },
          {
            level: "TOWN",
            constraints: [
              {
                tag: "population",
                greater: 25000
              }
            ],
            factor: 19
          },
          {
            level: "SMALL_TOWN",
            factor: 18
          }
        ]
      },
      {
        level: "VILLAGE",
        constraints: [
          {
            tag: "place",
            equals: "village"
          }
        ],
        factor: 16
      },
      {
        level: "MUNICIPALITY",
        constraints: [
          {
            tag: "place",
            equals: "municipality"
          }
        ],
        factor: 14
      },
      {
        level: "BOROUGH",
        constraints: [
          {
            tag: "place",
            equals: "borough"
          }
        ],
        factor: 13
      },
      {
        level: "SUBURB",
        constraints: [
          {
            tag: "place",
            equals: "suburb"
          }
        ],
        factor: 12
      },
      {
        level: "QUARTER",
        constraints: [
          {
            tag: "place",
            equals: "quarter"
          }
        ],
        factor: 11
      },
      {
        level: "NEIGHBOURHOOD",
        constraints: [
          {
            tag: "place",
            equals: "neighbourhood"
          }
        ],
        factor: 11
      },
      {
        level: "CITY_BLOCK",
        constraints: [
          {
            tag: "place",
            equals: "city_block"
          }
        ],
        factor: 11
      },
      {
        level: "HAMLET",
        constraints: [
          {
            tag: "place",
            equals: "hamlet"
          }
        ],
        factor: 10
      },
      {
        level: "ISOLATED_DWELLING",
        constraints: [
          {
            tag: "place",
            equals: "isolated_dwelling"
          }
        ],
        factor: 10
      },
      {
        level: "FARM",
        constraints: [
          {
            tag: "place",
            equals: "farm"
          }
        ],
        factor: 10
      },
      {
        level: "ALLOTMENT",
        constraints: [
          {
            tag: "place",
            equals: "allotment"
          }
        ],
        factor: 10
      },
      {
        level: "PLOT",
        constraints: [
          {
            tag: "place",
            equals: "plot"
          }
        ],
        factor: 10
      }
    ]
  }
}
