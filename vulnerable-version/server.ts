import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

let comments: string[] = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  const commentSection = comments.map(c => `<p>${c}</p>`).join('');
  res.send(`
    <h1>My Blog Post</h1>
    <p>This is a simple blog post. Comment below!</p>

    <form action="/comment" method="POST">
      <input type="text" name="comment" placeholder="Enter your comment" style="width:300px" />
      <button type="submit">Submit</button>
    </form>

    <h2>Comments:</h2>
    ${commentSection}
  `);
});

app.post('/comment', (req: Request, res: Response) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`🚀 Vulnerable app running at http://localhost:${port}`);
});
