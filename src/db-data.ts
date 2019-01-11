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