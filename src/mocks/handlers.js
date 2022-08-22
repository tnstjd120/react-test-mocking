import { rest } from 'msw'

export const handlers = [
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