import express from "express";
import bodyParser from "body-parser";
import multer from "multer";

import pg from "pg";

const app = express();
const port = 3000;

// const db = new pg.Client({
//   user:"postgres",
//   host:"localhost",
//   database:"permalist",
//   password:"Vijesh2861",
//   port:5432
// })
// db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

const upload = multer({ dest: 'uploads/' });

let storedData = [];

app.get("/", (req, res) => {
  try{
 res.render("index.ejs")
} catch (err) {
  console.log(err);
}
});

app.post('/obs', upload.fields([{ name: 'actualImage', maxCount: 1 }, { name: 'expectedImage', maxCount: 1 }]), (req, res) => {
  const newData = {
      input1: req.body.input1,
      input2: req.body.input2,
      input3: req.body.input3,
      actualImage: req.files['actualImage'][0].path, // File path for actual image
      expectedImage: req.files['expectedImage'][0].path, // File path for expected image
      Check1: req.body.Check1 === 'on', // Convert checkbox value to boolean
      Check2: req.body.Check2 === 'on'  // Convert checkbox value to boolean
  };
  //storedData.push(newData);
  res.status(201).send('Observation stored successfully');

console.log(storedData);

  });
 //  const item1 = req.body.input1;
  //  console.log(item1);
  //  const item2 = req.body.input2;
  //  console.log(item2);
  //  const item3 = req.body.input3;
  //  console.log(item3);
  //  const itemAimg = req.body.actualImage;
  //  console.log(itemAimg);
  //  const itemEimg = req.body.expectedImage;
  //  console.log(itemEimg);
  //  const itemC1 = req.body.Check1;
  //  console.log(itemC1);
  //  const itemC2 = req.body.Check2;
  //  console.log(itemC2);


//   items.push({ title: item });
//   try{
//     await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
//   res.redirect("/");
//   } catch (err) {
//     console.log(err);
//   }


app.post("/templ", async (req, res) => {
// const item = req.body.updatedItemTitle;
// const id = req.body.updatedItemId;
// try{
//    await db.query("UPDATE items SET title = ($1) WHERE id = $2", [item, id]);
//    res.redirect("/");
// }catch (err){
//   console.log(err);
// }s
});

app.post("/delete", async (req, res) => {
//   const id = req.body.deleteItemId;
//   try {
//     await db.query("DELETE FROM items WHERE id = $1", [id]);
//     res.redirect("/");
//   } catch (err) {
//     console.log(err);
//   }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
