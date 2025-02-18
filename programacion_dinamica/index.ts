import express, { Request, Response } from "express";
import colors from "colors";
import { Fibonacci } from "./classes";

colors;

const app = express();

const PORT = process.env.PORT || 5001;

app.get("/", (req: Request, res: Response) => {
  const response = new Fibonacci(10);

  res.send(`
    <html>
      <head>
        <title>Programación Dinámica</title>
      </head>
      <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
        }
        h1 {
            font-size: 40px;
        }
        p {
            font-size: 20px;
        }
      </style>
      <body>
        <h1>Programación Dinámica</h1>
          <p>Autor: Mad Mofin</p>
          <p>Descripción: Clase de programación dinámica</p>
          <p>Resultado: ${response.getResult()}</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.magenta);
});
