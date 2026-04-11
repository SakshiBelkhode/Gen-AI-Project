const mongoose = require('mongoose');

/**
 * -job description schema : String
 * -resume text : String
 * -Self  description : String
 * 
 * -matchScore : Number
 * 
 * -Technical Questions :
 *   [{
 *     question : "",
 *     intention : "",
 *     answer : "",        
 *    }]
 * -Behavioral Questiones :[
 *   {
 *     question : "",
 *     intention : "",
 *     answer : "",
 *   }
 * ]
 * -Skill Gaps :[ {
 *     skill : "",
 *     severity : {
 *        type : String,
 *        enum : ["low", "medium", "high"]
 * }
 * }]
 * -Prepration Plan : [{
 *      day: Number,
 *      focus : String,
 *      tasks : [String]
 * }]
 * 
 */

const technicalQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [ true, "Technical question is required" ]
    },
    intention: {
        type: String,
        required: [ true, "Intention is required" ]
    },
    answer: {
        type: String,
        required: [ true, "Answer is required" ]
    }
}, {
    _id: false
})

const behavioralQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [ true, "Technical question is required" ]
    },
    intention: {
        type: String,
        required: [ true, "Intention is required" ]
    },
    answer: {
        type: String,
        required: [ true, "Answer is required" ]
    }
}, {
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: [ true, "Skill is required" ]
    },
    severity: {
        type: String,
        enum: [ "low", "medium", "high" ],
        required: [ true, "Severity is required" ]
    }
}, {
    _id: false
})

const preparationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [ true, "Day is required" ]
    },
    focus: {
        type: String,
        required: [ true, "Focus is required" ]
    },
    tasks: [ {
        type: String,
        required: [ true, "Task is required" ]
    } ]
})

const interviewReportSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    title: {
        type: String,
        required: true
    },

    resume: String,
    selfDescription: String,
    jobDescription: String,

    // ✅ FIXED STRUCTURE
    technicalQuestions: [String],
    behavioralQuestions: [String],
    skillGaps: [String],
    preparationPlan: [String]

}, { timestamps: true })

module.exports = mongoose.model("InterviewReport", interviewReportSchema)