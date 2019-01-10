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
