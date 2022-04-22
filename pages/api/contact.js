import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI;

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { email, name, message } = req.body;

      const client = await MongoClient.connect(MONGO_URI, {
        useUnifiedTopology: true,
      });

      if (
        !email.trim() ||
        !email.includes('@') ||
        !name.trim() ||
        !message.trim()
      ) {
        return res.status(422).json({ ok: false });
      }

      const db = client.db();
      const result = await db
        .collection('messages')
        .insertOne({ email, name, message });

      client.close();

      res.status(201).json({
        ok: true,
        message: 'Succesfully stored message!',
        newMessage: {
          _id: result.insertedId,
          name,
          message,
          email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
