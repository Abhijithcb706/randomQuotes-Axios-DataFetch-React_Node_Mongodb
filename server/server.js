const express = require('express')
const mongoose =require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app =express()
app.use(cors())
app.use(bodyParser.json())

const quoteSchema = new mongoose.Schema({
    content: String
  });
  
  const Quote = mongoose.model('Quote', quoteSchema);

  app.post('/saveQuotes', async (req, res) => {
    try {
      const { content } = req.body;
      const quote = new Quote({ content });
      await quote.save();
      res.status(201).send('Quote saved successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving quote');
    }
  });

  app.get('/savedQuotes',async(req,res)=>{
    try {
      const savedQuotes = await Quote.find()
      console.log("quotes:",savedQuotes);
      res.json({message:"data found",quotes:savedQuotes})
    } catch (error) {
      console.error(error);
      res.status(500).send('Error finding quotes');
      
    }
  })






mongoose
  .connect(
    "mongodb+srv://abhijith:Abhijith2001@cluster0.ypyxvlu.mongodb.net/qotesData",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("db connected");
  });



app.listen(5000,()=>{
    console.log('server running');
})







