import bcrypt from "bcryptjs"

export const users =[
    {
        name: "Kaustubh Reet",
        email: "mishuyashu23@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: true,
    },
    {
        name: "Arnav kumar",
        email: "arnav@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: false,
    },
]