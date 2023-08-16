const mongoose=require('mongoose');

const certificateschema= new mongoose.Schema({
    name: String,
    auth_by: String,
})

const experienceSchema = new mongoose.Schema({
    role: String,
    jobtype: String,
    company: String,
    years: String
});

const educationSchema = new mongoose.Schema({
    institute: String,
    degree: String,
    years: String,
    description: String,
});

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        image: Object,
        about: String,
        skills: [String],
        certifications: [certificateschema],
        experience: [experienceSchema],
        education: [educationSchema],
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);