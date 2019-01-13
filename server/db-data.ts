export const USERS: any = 
[
    {
        id: 1,
        firstName: "Rodrigo",
        lastName: "Matteo",
        userName: "rodrigo.matteo",
        password: "haceme1pt"
    },
    {
        id: 2,
        firstName: "Roger",
        lastName: "Bobbio",
        userName: "roger.bobbio",
        password: "hacele1pt"
    },

    {
        id: 3,
        firstName: "Israel",
        lastName: "Nizama",
        userName: "israel.nizama",
        password: "hacele1pt"
    }
];


export function findCourseById(userId:number) {
    return USERS.find(user => user.id == userId);
}

export const CUSTOMERS: any =
[
    {
      "_id": "5c3810998d8ad23011fbd494",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "contact": "Mejia Glover",
      "companyName": "ZILLA",
      "email": "mejiaglover@zilla.com",
      "phone": "+1 (972) 488-3455",
      "address": "837 Grove Street, Bellamy, Rhode Island, 5678",
      "country": "Uruguay",
      "city": "Alfarata"
    },
    {
      "_id": "5c381099a89608962568fccc",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "contact": "Trevino Daniels",
      "companyName": "DELPHIDE",
      "email": "trevinodaniels@delphide.com",
      "phone": "+1 (933) 483-2164",
      "address": "494 Vanderbilt Avenue, Savage, South Carolina, 5650",
      "country": "Kyrgyzstan",
      "city": "Stewart"
    },
    {
      "_id": "5c38109946bac457f8070309",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "contact": "Ashley Wilkinson",
      "companyName": "FLOTONIC",
      "email": "ashleywilkinson@flotonic.com",
      "phone": "+1 (838) 546-3183",
      "address": "302 Heath Place, Walker, Idaho, 4346",
      "country": "Algeria",
      "city": "Gibsonia"
    },
    {
      "_id": "5c38109912fece3e09e7f010",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "contact": "Heath Williamson",
      "companyName": "PRINTSPAN",
      "email": "heathwilliamson@printspan.com",
      "phone": "+1 (857) 571-2199",
      "address": "914 Orange Street, Valle, Nebraska, 1884",
      "country": "Brazil",
      "city": "Rutherford"
    },
    {
      "_id": "5c3810997838ea82b62d67e6",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "contact": "Kathrine Floyd",
      "companyName": "EMPIRICA",
      "email": "kathrinefloyd@empirica.com",
      "phone": "+1 (822) 469-3238",
      "address": "490 Kings Place, Sisquoc, Oklahoma, 179",
      "country": "Antigua and Barbuda",
      "city": "Hayden"
    }
  ]

export const PRODUCTS: any = 
[
  {
    "PRODUCT_ID": 640,
    "PRODUCT_NO": 6021003,
    "NAME": "PROD 100010 MW020RCW W W40 ACCESSORIES W",
    "ALIAS": "#15 3/8\" ZINC EXPANSION JOINT",
    "SELL_MEASURE_UNIT_CODE": "PA",
    "WEIGHT_UNIT_CODE": "LB",
    "WEIGHT_UNIT_SECOND_CODE": "MLF",
    "WEIGHT": 150,
    "MEASURE_UNIT_CODE": "FT",
    "LENGTH": 5,
    "HEIGHT": 1
  },
  {
    "PRODUCT_ID": 5213,
    "PRODUCT_NO": 6021003,
    "NAME": "PROD 100010 MW020RCW W W40 ACCESSORIES W",
    "ALIAS": "#15 3/8\" ZINC EXPANSION JOINT",
    "SELL_MEASURE_UNIT_CODE": "PA",
    "WEIGHT_UNIT_CODE": "LB",
    "WEIGHT_UNIT_SECOND_CODE": "MLF",
    "WEIGHT": 150,
    "MEASURE_UNIT_CODE": "FT",
    "LENGTH": 5,
    "HEIGHT": null
  },
  {
    "PRODUCT_ID": 402,
    "PRODUCT_NO": 6024,
    "NAME": "DWT 250-20GA 2L 33MIL",
    "ALIAS": "250T200-33",
    "SELL_MEASURE_UNIT_CODE": "",
    "WEIGHT_UNIT_CODE": "LB",
    "WEIGHT_UNIT_SECOND_CODE": "MLF",
    "WEIGHT": 741,
    "MEASURE_UNIT_CODE": "",
    "LENGTH": null,
    "HEIGHT": null
  },
  {
    "PRODUCT_ID": 4975,
    "PRODUCT_NO": 6024,
    "NAME": "DWT 250-20GA 2L 33MIL",
    "ALIAS": "250T200-33",
    "SELL_MEASURE_UNIT_CODE": "PC",
    "WEIGHT_UNIT_CODE": "LB",
    "WEIGHT_UNIT_SECOND_CODE": "MLF",
    "WEIGHT": 741,
    "MEASURE_UNIT_CODE": "IN",
    "LENGTH": null,
    "HEIGHT": 0.033
  },
  {
    "PRODUCT_ID": 4559,
    "PRODUCT_NO": 100006,
    "NAME": "2.5\" SLOTTED TRACK 20GA GALV",
    "ALIAS": "2.5\" SLOTTED TRACK 20GA GALV",
    "SELL_MEASURE_UNIT_CODE": "",
    "WEIGHT_UNIT_CODE": "LB",
    "WEIGHT_UNIT_SECOND_CODE": "MLF",
    "WEIGHT": 616,
    "MEASURE_UNIT_CODE": "",
    "LENGTH": null,
    "HEIGHT": null
  },
  {
    "PRODUCT_ID": 9132,
    "PRODUCT_NO": 100006,
    "NAME": "2.5\" SLOTTED TRACK 20GA GALV",
    "ALIAS": "2.5\" SLOTTED TRACK 20GA GALV",
    "SELL_MEASURE_UNIT_CODE": "PC",
    "WEIGHT_UNIT_CODE": "LB",
    "WEIGHT_UNIT_SECOND_CODE": "MLF",
    "WEIGHT": 616,
    "MEASURE_UNIT_CODE": "IN",
    "LENGTH": null,
    "HEIGHT": 1
  },
  {
    "PRODUCT_ID": 12428,
    "PRODUCT_NO": 4294328,
    "NAME": "DWS 250 FG",
    "ALIAS": "#1 VINYL CORNERBD 10' 2.5\"WING TEST",
    "SELL_MEASURE_UNIT_CODE": "BDL",
    "WEIGHT_UNIT_CODE": "LB",
    "WEIGHT_UNIT_SECOND_CODE": "MLF",
    "WEIGHT": 500,
    "MEASURE_UNIT_CODE": "FT",
    "LENGTH": 10,
    "HEIGHT": 5
  },
  {
    "PRODUCT_ID": 12429,
    "PRODUCT_NO": 4294329,
    "NAME": "DWS 250 FG",
    "ALIAS": "#1 VINYL CORNERBD 10' 2.5\"WING TEST",
    "SELL_MEASURE_UNIT_CODE": "BDL",
    "WEIGHT_UNIT_CODE": "LB",
    "WEIGHT_UNIT_SECOND_CODE": "MLF",
    "WEIGHT": 5,
    "MEASURE_UNIT_CODE": "FT",
    "LENGTH": 10,
    "HEIGHT": 5
  },
  {
    "PRODUCT_ID": 12427,
    "PRODUCT_NO": 6021088,
    "NAME": "fg",
    "ALIAS": "fg",
    "SELL_MEASURE_UNIT_CODE": "",
    "WEIGHT_UNIT_CODE": "LB",
    "WEIGHT_UNIT_SECOND_CODE": "MLF",
    "WEIGHT": 5,
    "MEASURE_UNIT_CODE": "",
    "LENGTH": null,
    "HEIGHT": null
  },
  {
    "PRODUCT_ID": 4563,
    "PRODUCT_NO": 100010,
    "NAME": "PROD 100010 MWFG0RCW W W40 ACCESSORIES W",
    "ALIAS": "UDLT 2\"-20GA W/ 1.5L & 2.5L",
    "SELL_MEASURE_UNIT_CODE": "",
    "WEIGHT_UNIT_CODE": "LB",
    "WEIGHT_UNIT_SECOND_CODE": "",
    "WEIGHT": 672,
    "MEASURE_UNIT_CODE": "",
    "LENGTH": null,
    "HEIGHT": null
  },
  {
    "PRODUCT_ID": 9136,
    "PRODUCT_NO": 100010,
    "NAME": "PROD 100010 MWFG0RCW W W40 ACCESSORIES W",
    "ALIAS": "UDLT 2\"-20GA W/ 1.5L & 2.5L",
    "SELL_MEASURE_UNIT_CODE": "PC",
    "WEIGHT_UNIT_CODE": "LB",
    "WEIGHT_UNIT_SECOND_CODE": "MLF",
    "WEIGHT": 672,
    "MEASURE_UNIT_CODE": "IN",
    "LENGTH": 10,
    "HEIGHT": 0.02
  }
 ]