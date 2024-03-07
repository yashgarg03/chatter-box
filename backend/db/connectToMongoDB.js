import mongoose from "mongoose";

const connectToMongoDB = async () => {
    const url = "mongodb+srv://gargyash900:2Bw7R69w4tD9EzoS@cluster0.7k50ukn.mongodb.net/chatter-box?retryWrites=true&w=majority&appName=Cluster0"
    try {
        await mongoose.connect(url)
        // await mongoose.connect("mongodb://127.0.0.1:27017/chatter-box")
        .then(() => console.log('mongodb connect'))
        .catch((err) => console.log('mongodb error: ' + err));
    } catch (error) {
        console.log("Error in connecting to MongoDB", error.message)
    }
}

export default connectToMongoDB;