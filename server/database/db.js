import mongoose from 'mongoose';

const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.8kntw5n.mongodb.net/newUser`

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;