export default {
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
			type: "and",
			operands: [
				{"type":"value","value":"place"},
				{"type":"value","value":"name"}
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
