// object literals & the key word this

let user =  {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){  // this will not work if this function was =>
        //this.blogs // global or window object
        //console.log(this); // variable object
        //console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

user.logBlogs(); // variable object
console.log(this); // global or window object


