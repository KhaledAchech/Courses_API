const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title : String,
    author : String,
    tags : [String],
    price : Number,
    date : {type : Date, default : Date.now()},
    isPublished : Boolean
});
const Course = mongoose.model('Course', courseSchema);

async function saveCourse()
{
    let course = new Course({
        title: 'Angular Course',
        author: 'K.Achech',
        tags: ['Angular', 'ts', 'frontend',],
        price: 200,
        isPublished: false
    });
    console.log(await course.save());
}

//saveCourse();

async function getCourses()
{
    let courses = await Course.find();
    console.log('Data : ', courses);
}

async function getCoursesWithFilter()
{
    let courses = await Course.find({isPublished : true});
    console.log('Data with filter : ', courses);
}

async function getCoursesWithLimit()
{
    let courses = await Course.find().limit(1);
    console.log('Data with limit : ', courses);
}

async function getCoursesWithOperator()
{ // operators (eq<equal>, gt <greater then>, lt <less then>, in , nin)
    let courses = await Course.find({price : {$gt : 150}})
                            .select({title : 1, price :1 , _id:0});
    console.log('Data with operator : ', courses);
}

getCourses();

getCoursesWithFilter();

getCoursesWithLimit();

getCoursesWithOperator();

module.exports = Course;