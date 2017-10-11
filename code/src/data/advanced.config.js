export default {
  labeling_name: "advanced labeling",
  description: "Labeling containing human settlement labels as well as some important amenity label types. Amenity labels are using icons to represent f.e. banks, cafes, restaurants etc.",
  label_split: {
    split_bound: 15,
    split_chars: [
      " ",
      "-",
      "/"
    ]
  },
  font: {
    name: "Dejavu Sans",
    "ttf-path": "/usr/share/fonts/TTF/DejaVuSans.ttf"
  },
  filter: {
    type: "or",
    operands: [
      {
        type: "and",
        operands: [
          {"type":"value","value":"place"},
          {"type":"value","value":"name"}
        ]
      },
      {"type":"value","value":"amenity"}
    ]
  },
  mapping: {
    level: "OSM_POI",
    sublevels: [
      {
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
      },
      {
        level: "AMENITY",
        constraints: [
          {
            tag: "amenity"
          },
          {
            tag: "place"
          }
        ],
        sublevels: [
          {
            level: "SCHOOL",
            constraints: [
              {
                tag: "amenity",
                equals: "education"
              },
              {
                tag: "amenity",
                equals: "language_school"
              },
              {
                tag: "amenity",
                equals: "school"
              }
            ],
            factor: 8,
            icon: "school"
          },
          {
            level: "MUSIC_SCHOOL",
            constraints: [
              {
                tag: "amenity",
                equals: "music_school"
              }
            ],
            factor: 8,
            icon: "music_classical"
          },
          {
            level: "COLLEGE",
            constraints: [
              {
                tag: "amenity",
                equals: "college"
              }
            ],
            factor: 8,
            icon: "university"
          },
          {
            level: "UNIVERSITY",
            constraints: [
              {
                tag: "amenity",
                equals: "university"
              }
            ],
            factor: 8,
            icon: "university"
          },
          {
            level: "LIBRARY",
            constraints: [
              {
                tag: "amenity",
                equals: "library"
              }
            ],
            factor: 7,
            icon: "library"
          },
          {
            level: "PUBLIC_BOOKCASE",
            constraints: [
              {
                tag: "amenity",
                equals: "public_bookcase"
              }
            ],
            factor: 7,
            icon: "library"
          },
          {
            level: "COMMUNITY_CENTRE",
            constraints: [
              {
                tag: "amenity",
                equals: "community_center"
              },
              {
                tag: "amenity",
                equals: "community_centre"
              },
              {
                tag: "amenity",
                equals: "social_centre"
              }
            ],
            factor: 7,
            icon: "communitycentre"
          },
          {
            level: "ARTS_CENTRE",
            constraints: [
              {
                tag: "amenity",
                equals: "arts_centre"
              },
              {
                tag: "amenity",
                equals: "artwork"
              }
            ],
            factor: 7,
            icon: "artgallery"
          },
          {
            level: "DANCE_SCHOOL",
            constraints: [
              {
                tag: "amenity",
                equals: "dancing_school"
              }
            ],
            factor: 7,
            icon: "dance_class"
          },
          {
            level: "GRAVE_YARD",
            constraints: [
              {
                tag: "amenity",
                equals: "grave_yard"
              },
              {
                tag: "amenity",
                equals: "deaddrop"
              },
              {
                tag: "amenity",
                equals: "grave"
              }
            ],
            factor: 7,
            icon: "catholicgrave"
          },
          {
            level: "THEATRE",
            constraints: [
              {
                tag: "amenity",
                equals: "theatre"
              }
            ],
            factor: 7,
            icon: "theatre"
          },
          {
            level: "CINEMA",
            constraints: [
              {
                tag: "amenity",
                equals: "cinema"
              }
            ],
            factor: 7,
            icon: "cinema"
          },
          {
            level: "HOSPITAL",
            constraints: [
              {
                tag: "amenity",
                equals: "hospital"
              },
              {
                tag: "amenity",
                equals: "clinic"
              }
            ],
            factor: 6,
            icon: "hospital"
          },
          {
            level: "POLICE",
            constraints: [
              {
                tag: "amenity",
                equals: "police"
              },
              {
                tag: "amenity",
                equals: "ranger_station"
              }
            ],
            factor: 6,
            icon: "police"
          },
          {
            level: "FIRESTATION",
            constraints: [
              {
                tag: "amenity",
                equals: "fire_station"
              }
            ],
            factor: 6,
            icon: "firemen"
          },
          {
            level: "ADMINISTRATION",
            constraints: [
              {
                tag: "amenity",
                equals: "administration"
              }
            ],
            factor: 6,
            icon: "administration"
          },
          {
            level: "EMBASSY",
            constraints: [
              {
                tag: "amenity",
                equals: "embassy"
              }
            ],
            factor: 6,
            icon: "administration"
          },
          {
            level: "FIRSTAID",
            constraints: [
              {
                tag: "amenity",
                equals: "red_cross"
              },
              {
                tag: "amenity",
                equals: "emergency_service"
              },
              {
                tag: "amenity",
                equals: "healthcare"
              }
            ],
            factor: 6,
            icon: "firstaid"
          },
          {
            level: "THERAPY",
            constraints: [
              {
                tag: "amenity",
                equals: "Beratungsstellen"
              }
            ],
            factor: 6,
            icon: "therapy"
          },
          {
            level: "MARKET",
            constraints: [
              {
                tag: "amenity",
                equals: "marketplace"
              }
            ],
            factor: 6,
            icon: "market"
          },
          {
            level: "NURSERY",
            constraints: [
              {
                tag: "amenity",
                equals: "nursery"
              }
            ],
            factor: 6,
            icon: "nursery"
          },
          {
            level: "NURSING_HOME",
            constraints: [
              {
                tag: "amenity",
                equals: "nursing_home"
              },
              {
                tag: "amenity",
                equals: "retirement_home"
              }
            ],
            factor: 6,
            icon: "nursing_home_icon"
          },
          {
            level: "DENTIST",
            constraints: [
              {
                tag: "amenity",
                equals: "dentist"
              }
            ],
            factor: 6,
            icon: "dentist"
          },
          {
            level: "DOCTOR",
            constraints: [
              {
                tag: "amenity",
                equals: "doctor"
              },
              {
                tag: "amenity",
                equals: "doctors"
              }
            ],
            factor: 6,
            icon: "medicine"
          },
          {
            level: "COURT",
            constraints: [
              {
                tag: "amenity",
                equals: "court_house"
              },
              {
                tag: "amenity",
                equals: "courthouse"
              }
            ],
            factor: 6,
            icon: "court"
          },
          {
            level: "CLOCK",
            constraints: [
              {
                tag: "amenity",
                equals: "clock"
              }
            ],
            factor: 6,
            icon: "clock"
          },
          {
            level: "DRINKING_FOUNTAIN",
            constraints: [
              {
                tag: "amenity",
                equals: "drinking_fountain"
              },
              {
                tag: "amenity",
                equals: "drinking_water"
              }
            ],
            factor: 6,
            icon: "drinkingfountain"
          },
          {
            level: "COWORKING_SPACE",
            constraints: [
              {
                tag: "amenity",
                equals: "coworking_space"
              }
            ],
            factor: 6,
            icon: "workoffice"
          },
          {
            level: "OFFICE",
            constraints: [
              {
                tag: "amenity",
                equals: "office"
              }
            ],
            factor: 6,
            icon: "workoffice"
          },
          {
            level: "STUDIO",
            constraints: [
              {
                tag: "amenity",
                equals: "studio"
              }
            ],
            factor: 6,
            icon: "workoffice"
          },
          {
            level: "SPA",
            constraints: [
              {
                tag: "amenity",
                equals: "spa"
              },
              {
                tag: "amenity",
                equals: "solarium"
              },
              {
                tag: "amenity",
                equals: "swimming_pool"
              }
            ],
            factor: 6,
            icon: "spa"
          },
          {
            level: "KINDERGARDEN",
            constraints: [
              {
                tag: "amenity",
                equals: "kindergarten"
              },
              {
                tag: "amenity",
                equals: "kindergarden"
              },
              {
                tag: "amenity",
                equals: "childcare"
              },
              {
                tag: "amenity",
                equals: "preschool"
              }
            ],
            factor: 6,
            icon: "daycare"
          },
          {
            level: "REGISTER_OFFICE",
            constraints: [
              {
                tag: "amenity",
                equals: "register_office"
              }
            ],
            factor: 6,
            icon: "reception"
          },
          {
            level: "CONFERENCE",
            constraints: [
              {
                tag: "amenity",
                equals: "conference_centre"
              }
            ],
            factor: 6,
            icon: "conference"
          },
          {
            level: "AIRPORT",
            constraints: [
              {
                tag: "amenity",
                equals: "airport"
              }
            ],
            factor: 6,
            icon: "airport"
          },
          {
            level: "PHARMACY",
            constraints: [
              {
                tag: "amenity",
                equals: "pharmacy"
              }
            ],
            factor: 6,
            icon: "medicalstore"
          },
          {
            level: "PLACE_OF_WORSHIP",
            constraints: [
              {
                tag: "amenity",
                equals: "place_of_worship"
              }
            ],
            factor: 6,
            icon: "church"
          },
          {
            level: "PUBLIC_BUILDING",
            constraints: [
              {
                tag: "amenity",
                equals: "public_building"
              },
              {
                tag: "amenity",
                equals: "public_facility"
              },
              {
                tag: "amenity",
                equals: "community_hall"
              },
              {
                tag: "amenity",
                equals: "social_facility"
              },
              {
                tag: "amenity",
                equals: "townhall"
              }
            ],
            factor: 6,
            icon: "congress"
          },
          {
            level: "FAST_FOOD",
            constraints: [
              {
                tag: "amenity",
                equals: "fast_food"
              }
            ],
            factor: 5,
            icon: "fast_food"
          },
          {
            level: "CAFETERIA",
            constraints: [
              {
                tag: "amenity",
                equals: "canteen"
              },
              {
                tag: "amenity",
                equals: "imbiss"
              }
            ],
            factor: 5,
            icon: "cafeteria"
          },
          {
            level: "BAR",
            constraints: [
              {
                tag: "amenity",
                equals: "pub"
              },
              {
                tag: "amenity",
                equals: "club_house"
              },
              {
                tag: "amenity",
                equals: "club"
              },
              {
                tag: "amenity",
                equals: "bar"
              }
            ],
            factor: 5,
            icon: "bar"
          },
          {
            level: "TRAVEL_AGENCY",
            constraints: [
              {
                tag: "amenity",
                equals: "travel_agency"
              },
              {
                tag: "amenity",
                equals: "travel agency"
              }
            ],
            factor: 5,
            icon: "travel_agency"
          },
          {
            level: "BEERGARDEN",
            constraints: [
              {
                tag: "amenity",
                equals: "food_court"
              },
              {
                tag: "amenity",
                equals: "biergarden"
              },
              {
                tag: "amenity",
                equals: "biergarten"
              }
            ],
            factor: 5,
            icon: "beergarden"
          },
          {
            level: "SHOP",
            constraints: [
              {
                tag: "amenity",
                equals: "shop"
              },
              {
                tag: "amenity",
                equals: "fair_trade"
              }
            ],
            factor: 5,
            icon: "mall"
          },
          {
            level: "PARFUMERY",
            constraints: [
              {
                tag: "amenity",
                equals: "perfume"
              }
            ],
            factor: 5,
            icon: "perfumery"
          },
          {
            level: "SAUNA",
            constraints: [
              {
                tag: "amenity",
                equals: "sauna"
              }
            ],
            factor: 5,
            icon: "sauna"
          },
          {
            level: "BICYCLE_SHOP",
            constraints: [
              {
                tag: "amenity",
                equals: "bicycle_repair_station"
              },
              {
                tag: "amenity",
                equals: "bicycle_rental"
              }
            ],
            factor: 5,
            icon: "bicycle_shop"
          },
          {
            level: "GYM",
            constraints: [
              {
                tag: "amenity",
                equals: "gym"
              },
              {
                tag: "amenity",
                equals: "fitness_studio"
              },
              {
                tag: "amenity",
                equals: "training"
              }
            ],
            factor: 5,
            icon: "breastfeeding"
          },
          {
            level: "CASINO",
            constraints: [
              {
                tag: "amenity",
                equals: "casino"
              },
              {
                tag: "amenity",
                equals: "gambling"
              }
            ],
            factor: 5,
            icon: "casino"
          },
          {
            level: "DANCING_HALL",
            constraints: [
              {
                tag: "amenity",
                equals: "dancing_club"
              },
              {
                tag: "amenity",
                equals: "nightclub"
              }
            ],
            factor: 5,
            icon: "dancinghall"
          },
          {
            level: "CAFE",
            constraints: [
              {
                tag: "amenity",
                equals: "cafe-bar"
              },
              {
                tag: "amenity",
                equals: "cafe"
              }
            ],
            factor: 5,
            icon: "coffee"
          },
          {
            level: "INTERNET_CAFE",
            constraints: [
              {
                tag: "amenity",
                equals: "internet_cafe"
              }
            ],
            factor: 5,
            icon: "wifi"
          },
          {
            level: "BAKERY",
            constraints: [
              {
                tag: "amenity",
                equals: "bakery"
              }
            ],
            factor: 5,
            icon: "bread"
          },
          {
            level: "BANK",
            constraints: [
              {
                tag: "amenity",
                equals: "bank"
              },
              {
                tag: "amenity",
                equals: "financial_institution"
              },
              {
                tag: "amenity",
                equals: "financial_service"
              }
            ],
            factor: 5,
            icon: "bank"
          },
          {
            level: "BUREAU_DE_CHANGE",
            constraints: [
              {
                tag: "amenity",
                equals: "bureau_de_change"
              }
            ],
            factor: 5,
            icon: "bank"
          },
          {
            level: "RESTAURANT",
            constraints: [
              {
                tag: "amenity",
                equals: "restaurant"
              }
            ],
            factor: 5,
            icon: "restaurant"
          },
          {
            level: "ICE_CREAM",
            constraints: [
              {
                tag: "amenity",
                equals: "ice_cream"
              }
            ],
            factor: 5,
            icon: "ice_cream"
          },
          {
            level: "BARBECUE",
            constraints: [
              {
                tag: "amenity",
                equals: "bbq"
              }
            ],
            factor: 5,
            icon: "bbq"
          },
          {
            level: "ATM",
            constraints: [
              {
                tag: "amenity",
                equals: "atm"
              }
            ],
            factor: 4,
            icon: "atm"
          },
          {
            level: "PARKING",
            constraints: [
              {
                tag: "amenity",
                equals: "parking"
              },
              {
                tag: "amenity",
                equals: "parking_space"
              }
            ],
            factor: 4,
            icon: "parking"
          },
          {
            level: "PARKING_DECK",
            constraints: [
              {
                tag: "amenity",
                equals: "parking_entrance"
              }
            ],
            factor: 4,
            icon: "parking"
          },
          {
            level: "TELEPHONE",
            constraints: [
              {
                tag: "amenity",
                equals: "telephone"
              }
            ],
            factor: 4,
            icon: "telephone"
          },
          {
            level: "TOILETS",
            constraints: [
              {
                tag: "amenity",
                equals: "toilets"
              }
            ],
            factor: 4,
            icon: "toilets"
          },
          {
            level: "BENCH",
            constraints: [
              {
                tag: "amenity",
                equals: "shelter"
              },
              {
                tag: "amenity",
                equals: "bench"
              }
            ],
            factor: 4,
            icon: "waiting"
          },
          {
            level: "CRAFTSMAN",
            constraints: [
              {
                tag: "amenity",
                equals: "Handwerksbetrieb"
              },
              {
                tag: "amenity",
                equals: "craftsman"
              }
            ],
            factor: 4,
            icon: "tools"
          },
          {
            level: "POST_OFFICE",
            constraints: [
              {
                tag: "amenity",
                equals: "post_office"
              }
            ],
            factor: 4,
            icon: "postal"
          },
          {
            level: "POST_BOX",
            constraints: [
              {
                tag: "amenity",
                equals: "post_box"
              }
            ],
            factor: 4,
            icon: "postal"
          },
          {
            level: "CHARGING_STATION",
            constraints: [
              {
                tag: "amenity",
                equals: "charging_station"
              }
            ],
            factor: 4,
            icon: "e-bike-charging"
          },
          {
            level: "FERRY_TERMINAL",
            constraints: [
              {
                tag: "amenity",
                equals: "ferry_terminal"
              }
            ],
            factor: 4,
            icon: "ferry"
          },
          {
            level: "TAXI",
            constraints: [
              {
                tag: "amenity",
                equals: "taxi"
              }
            ],
            factor: 4,
            icon: "taxi"
          },
          {
            level: "BUS_STATION",
            constraints: [
              {
                tag: "amenity",
                equals: "bus_station"
              }
            ],
            factor: 4,
            icon: "bus"
          },
          {
            level: "TICKET_MACHINE",
            constraints: [
              {
                tag: "amenity",
                equals: "vending_machine"
              }
            ],
            factor: 4,
            icon: "atm"
          },
          {
            level: "FUEL",
            constraints: [
              {
                tag: "amenity",
                equals: "fuel"
              }
            ],
            factor: 4,
            icon: "fillingstation"
          },
          {
            level: "BICYCLE_PARKING",
            constraints: [
              {
                tag: "amenity",
                equals: "bicycle_parking"
              }
            ],
            factor: 4,
            icon: "parking_bicycle"
          },
          {
            level: "GARAGE",
            constraints: [
              {
                tag: "amenity",
                equals: "vehicle_inspection"
              },
              {
                tag: "amenity",
                equals: "car_repair"
              }
            ],
            factor: 4,
            icon: "car"
          },
          {
            level: "CAR_SHARING",
            constraints: [
              {
                tag: "amenity",
                equals: "car_rental"
              },
              {
                tag: "amenity",
                equals: "car_sharing"
              }
            ],
            factor: 4,
            icon: "car"
          },
          {
            level: "CAR_WASH",
            constraints: [
              {
                tag: "amenity",
                equals: "car_wash"
              }
            ],
            factor: 4,
            icon: "car"
          },
          {
            level: "BOAT_RENTAL",
            constraints: [
              {
                tag: "amenity",
                equals: "boat_rental"
              }
            ],
            factor: 4,
            icon: "boat"
          },
          {
            level: "DRIVING_SCHOOL",
            constraints: [
              {
                tag: "amenity",
                equals: "driving_school"
              }
            ],
            factor: 4,
            icon: "car_share"
          },
          {
            level: "LOVE_HOTEL",
            constraints: [
              {
                tag: "amenity",
                equals: "love_hotel"
              }
            ],
            factor: 3,
            icon: "stripclub"
          },
          {
            level: "BROTHEL",
            constraints: [
              {
                tag: "amenity",
                equals: "brothel"
              }
            ],
            factor: 3,
            icon: "stripclub"
          },
          {
            level: "STRIPCLUB",
            constraints: [
              {
                tag: "amenity",
                equals: "stripclub"
              }
            ],
            factor: 3,
            icon: "stripclub"
          },
          {
            level: "SWINGERCLUB",
            constraints: [
              {
                tag: "amenity",
                equals: "swingerclub"
              }
            ],
            factor: 3,
            icon: "stripclub"
          },
          {
            level: "RECYCLING",
            constraints: [
              {
                tag: "amenity",
                equals: "recycling"
              }
            ],
            factor: 3,
            icon: "assortment"
          },
          {
            level: "WASTE_TRANSFER_STATION",
            constraints: [
              {
                tag: "amenity",
                equals: "waste_transfer_station"
              }
            ],
            factor: 3,
            icon: "assortment"
          },
          {
            level: "VETERINARY",
            constraints: [
              {
                tag: "amenity",
                equals: "veterinary"
              }
            ],
            factor: 3,
            icon: "veterinary"
          },
          {
            level: "LOCALITY",
            constraints: [
              {
                tag: "place",
                equals: "locality"
              }
            ],
            factor: 3,
            icon: "aboriginal"
          },
          {
            level: "FOUNTAIN",
            constraints: [
              {
                tag: "amenity",
                equals: "fountain"
              }
            ],
            factor: 3,
            icon: "fountain"
          },
          {
            level: "HUNTING_STAND",
            constraints: [
              {
                tag: "amenity",
                equals: "hunting_stand"
              }
            ],
            factor: 3,
            icon: "undefined"
          },
          {
            level: "WASTE_BASKET",
            constraints: [
              {
                tag: "amenity",
                equals: "waste_disposal"
              },
              {
                tag: "amenity",
                equals: "waste_basket"
              }
            ],
            factor: 3,
            icon: "trash"
          }
        ]
      }
    ]
  }
}
