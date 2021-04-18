import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
   if (req.method === 'POST') {
      try {
         const { email, name, message } = req.body;

         const client = await MongoClient.connect(
            'mongodb://127.0.0.1:27017/events-app'
         );

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
