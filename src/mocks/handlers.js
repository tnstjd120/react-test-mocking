import { rest } from 'msw'

export const handlers = [
    rest.put("http://localhost:3000/counter/increment", async(req, res, ctx) => {
        const { value } = req.body;
        return res(
            ctx.json({
                value: value + 2
            })
        )
    }),
    rest.get("/login", async(req, res, ctx) => {
        return res(
            ctx.json({
                id: "",
                firstName: "John",
                lastName: "Maverick"
            })
        )
    }),
    rest.get('https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json', (req, res, ctx) => {
        return res(
            ctx.json({
                "data": {
                    "people" : [
                        {
                            "name": "Kim",
                            "age": 25
                        },
                        {
                            "name": "Park",
                            "age": 20
                        },
                        {
                            "name": "Jin",
                            "age": 31
                        },
                        {
                            "name": "Gwon",
                            "age": 40
                        },
                    ]
                }
            })
        )
    })
]