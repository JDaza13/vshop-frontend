import { Category } from './category';

export const CATEGORIES : Category[] = [
	{
		"id": "1",
		"name": "Bebidas",
		"sublevels": [
			{
				"id": "1",
				"name": "Gaseosas",
				"sublevels": [
					{
						"id": "2",
						"name": "Con azúcar"
					},
					{
						"id": "3",
						"name": "Sin azúcar"
					}
				]
			}
		]
	},
	{
		"id": "2",
		"name": "Desayunos",
		"sublevels": [
			{
				"id": "4",
				"name": "Balanceados",
				"sublevels": [
					{
						"id": "5",
						"name": "Desayunos nacionales"
					},
					{
						"id": "6",
						"name": "Desayunos internacionales",
						"sublevels": [
							{
								"id": "7",
								"name": "Europeos"
							}
						]
					}
				]
			}
		]
	},
	{
		"id": "8",
		"name": "Almuerzos",
		"sublevels": [
			{
				"id": "9",
				"name": "Del día"
			},
			{
				"id": "10",
				"name": "Especiales"
			}
		]
	},
	{
		"id": "11",
		"name": "Vinos",
		"sublevels": [
			{
				"id": "12",
				"name": "Tinto"
			},
			{
				"id": "13",
				"name": "Blanco"
			}
		]
	}
]
