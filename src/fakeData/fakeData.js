const year = () => 2018 + (Math.round(Math.random() * 10) + 2);
const seat = () => Math.round(Math.random() * (999 - 100)) + 100;
const courses = [
    {
        id: 1,
        name: 'Learn to code with HTML - Beginner to Expert',
        teacher: 'Hector Duran',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/html.jpg',
        price: 7.99,
        student: '9,865',
        year: year(),
        seat: seat()
    },
    {
        id: 2,
        name: 'CSS3 for beginners',
        teacher: 'Kaylin Stout',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/css.jpg',
        price: 9.99,
        student: '11,768',
        year: year(),
        seat: seat()
    },
    {
        id: 3,
        name: 'JavaScript Basics for Beginners',
        teacher: 'Damon Tran',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/vanillajs.jpg',
        price: 11.99,
        student: '24,956',
        year: year(),
        seat: seat()
    },
    {
        id: 4,
        name: 'The complete Javascript ES6 course',
        teacher: 'Sean Orozco',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/es6.jpg',
        price: 9.99,
        student: '4,377',
        year: year(),
        seat: seat()
    },
    {
        id: 5,
        name: 'Introduction to React.js',
        teacher: 'Felicity Esparza',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/react.jpg',
        price: 10.99,
        student: '12,377',
        year: year(),
        seat: seat()
    },
    {
        id: 6,
        name: 'Node.js for Beginners - Become a Node js Developer',
        teacher: 'Jair Martin',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/node.jpg',
        price: 22.99,
        student: '8,267',
        year: year(),
        seat: seat()
    },
    {
        id: 7,
        name: 'The Complete Front-End Web Development Course',
        teacher: 'Harmony Merritt',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/frontend.jpg',
        price: 38.99,
        student: '26,295',
        year: year(),
        seat: seat()
    },
    {
        id: 8,
        name: 'Python for Absolute Beginners',
        teacher: 'Omar Crawford',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/python.jpg',
        price: 11.99,
        student: '8,612',
        year: year(),
        seat: seat()
    },
    {
        id: 9,
        name: 'Figma for UI Designers',
        teacher: 'Brenna David',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/figma.jpg',
        price: 6.99,
        student: '1,452',
        year: year(),
        seat: seat()
    },
    {
        id: 10,
        name: 'Learn and Understand AngularJS',
        teacher: 'Janelle Charles',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/angular.jpg',
        price: 16.99,
        student: '13,383',
        year: year(),
        seat: seat()
    },
    {
        id: 11,
        name: 'Bootstrap 4 Tutorial and 10 Projects Course',
        teacher: 'Vincent Wall',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/bootstrap.jpg',
        price: 8.99,
        student: '8,784',
        year: year(),
        seat: seat()
    },
    {
        id: 12,
        name: 'The Complete C Programming',
        teacher: 'Damian Walters',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/c.jpg',
        price: 7.99,
        student: '12,125',
        year: year(),
        seat: seat()
    },
    {
        id: 13,
        name: 'Django 3 - Complete Guideline',
        teacher: 'Francesca Torres',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/django.jpg',
        price: 12.99,
        student: '3,951',
        year: year(),
        seat: seat()
    },
    {
        id: 14,
        name: 'MERN Stack - The Complete Guide',
        teacher: 'Jeremiah Andrade',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/mern.jpg',
        price: 27.99,
        student: '22,176',
        year: year(),
        seat: seat()
    },
    {
        id: 15,
        name: 'The Complete WordPress Course',
        teacher: 'Daniella Andrews',
        image: 'https://raw.githubusercontent.com/joy012/professor-panda/master/src/images/wordpress.jpg',
        price: 13.99,
        student: '11,645',
        year: year(),
        seat: seat()
    },
]

const shuffleData = data => {
    for (let i = data.length - 1; i > 0; i--){
        const j = Math.round(Math.random() * i);
        [data[i], data[j]] = [data[j], data[i]];
    }
}

shuffleData(courses);

export default courses;