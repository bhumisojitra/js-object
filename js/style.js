// array of object

let tbody = document.getElementById('studentdata');

let student = [{
    sr_no : 1,
    fname : "bhumi",
    lname : "sojita",
    gr_id : 5578,
    age : 19,
    phone : 789665423,
    address : {
        city : "surat",
        pincode : 395006,
        state : "gujarat"
    },
    email : "bhumi@nu.edu.kp",
},
{
    "sr_no" : 2,
    "fname" : "moni",
    "lname" : "sojitra",
    "gr_id" : 5579,
    "age" : 19,
    "phone" : 1234567890,
    "address" : {
        "city" : "devbhumi dwarka",
        "pincode" : 395006,
        "state" : "gujarat"
    },
    "email" : "bsojitra@nu.edu.kp",
},
{
    sr_no : 3,
    fname : "aastha",
    lname : "patel",
    gr_id : 4569,
    age : 19,
    phone : 4589632145,
    address : {
        city : "surat",
        pincode : 395112,
        state : "gujarat"
    },
    email : "aasthap@nu.edu.kp",
},
{
    sr_no : 4,
    fname : "denisha",
    lname : "akbari",
    gr_id : 1136,
    age : 19,
    phone : 1236547896,
    address : {
        city : "surat",
        pincode : 395112,
        state : "gujarat"
    },
    email : "denisha@nu.edu.kp",
},
{
    sr_no : 5,
    fname : "tulsi",
    lname : "diyora",
    gr_id : 1125,
    age : 19,
    phone : 7896547859,
    address : {
        city : "amreli",
        pincode : 395006,
        state : "gujarat"
    },
    email : "tulsi@nu.edu.kp",
},
{
    sr_no : 6,
    fname : "binal",
    lname : "dobariya",
    gr_id : 5698,
    age : 17,
    phone : 9685741236,
    address : {
        city : "rajkot",
        pincode : 395006,
        state : "gujarat"
    },
    email : "binal@nu.edu.kp",
},
{
    sr_no : 7,
    fname : "dhwani",
    lname : "patel",
    gr_id : 7896,
    age : 16,
    phone : 9654123896,
    address : {
        city : "surat",
        pincode : 395008,
        state : "gujarat"
    },
    email : "dhwani@nu.edu.kp",
},
{
    sr_no : 8,
    fname : "priya",
    lname : "monpara",
    gr_id : 8965,
    age : 21,
    phone : 9874563254,
    address : {
        city : "navsari",
        pincode : 788922,
        state : "gujarat"
    },
    email : "priya@nu.edu.kp",
},
{
    sr_no : 9,
    fname : "mansi",
    lname : "gondaliya",
    gr_id : 8965,
    age : 24,
    phone : 9856321478,
    address : {
        city : "junagadh",
        pincode : 789654,
        state : "gujarat"
    },
    email : "mabnsi@nu.edu.kp",
},
{
    sr_no : 10,
    fname : "tanvi",
    lname : "vadodariya",
    gr_id : 9856,
    age : 20,
    phone : 9687388942,
    address : {
        city : "vapi",
        pincode : 395892,
        state : "gujarat"
    },
    email : "tanvi@nu.edu.kp",
},
{
    sr_no : 11,
    fname : "maitri",
    lname : "vatiya",
    gr_id : 4563,
    age : 29,
    phone : 9685784596,
    address : {
        city : "valsad",
        pincode : 395192,
        state : "gujarat"
    },
    email : "maitri@nu.edu.kp",
},
{
    sr_no : 12,
    fname : "yukti",
    lname : "surati",
    gr_id : 1236,
    age : 24,
    phone : 6589746589,
    address : {
        city : "amroli",
        pincode : 589643,
        state : "gujarat"
    },
    email : "yukti@nu.edu.kp",
},
{
    sr_no : 13,
    fname : "harshvi",
    lname : "patel",
    gr_id : 7896,
    age : 26,
    phone : 9321456856,
    address : {
        city : "gandhinagar",
        pincode : 789654,
        state : "gujarat"
    },
    email : "harshvi@nu.edu.kp",
},
{
    sr_no : 14,
    fname : "honey",
    lname : "talaviya",
    gr_id : 7896,
    age : 30,
    phone : 9564781236,
    address : {
        city : "vapi",
        pincode : 395112,
        state : "gujarat"
    },
    email : "honey@nu.edu.kp",
},
{
    sr_no : 15,
    fname : "mahek",
    lname : "zalavadiya",
    gr_id : 7896,
    age : 26,
    phone : 7896548596,
    address : {
        city : "navsari",
        pincode : 395112,
        state : "gujarat"
    },
    email : "mahek@nu.edu.kp",
},
{
    sr_no : 16,
    fname : "krisha",
    lname : "panchal",
    gr_id : 7896,
    age : 30,
    phone : 5896321458,
    address : {
        city : "vapatanpi",
        pincode : 395112,
        state : "gujarat"
    },
    email : "krisha@nu.edu.kp",
},
{
    sr_no : 17,
    fname : "khushi",
    lname : "mangukiya",
    gr_id : 1236,
    age : 25,
    phone : 8965478596,
    address : {
        city : "jetpur",
        pincode : 395112,
        state : "gujarat"
    },
    email : "khushi@nu.edu.kp",
},
{
    sr_no : 18,
    fname : "devanshi",
    lname : "jivani",
    gr_id : 4563,
    age : 22,
    phone : 4589674589,
    address : {
        city : "surat",
        pincode : 395112,
        state : "gujarat"
    },
    email : "devanshi@nu.edu.kp",
},
{
    sr_no : 19,
    fname : "shruti",
    lname : "gujarati",
    gr_id : 7896,
    age : 32,
    phone : 7896547859,
    address : {
        city : "ahemdabad",
        pincode : 395112,
        state : "gujarat"
    },
    email : "shruti@nu.edu.kp",
},
{
    sr_no : 20,
    fname : "prachi",
    lname : "parsala",
    gr_id : 8569,
    age : 21,
    phone : 4589678546,
    address : {
        city : "surat",
        pincode : 395112,
        state : "gujarat"
    },
    email : "prachi@nu.edu.kp",
},
{
    sr_no : 21,
    fname : "khushali",
    lname : "patel",
    gr_id : 2563,
    age : 29,
    phone : 8965471236,
    address : {
        city : "gondal",
        pincode : 395006,
        state : "gujarat"
    },
    email : "khush@nu.edu.kp",
},
]


//using foreach mehod-----------------------
student.forEach((ele) => {

    console.log(ele);

    studentdata.innerHTML += ` <div style="padding: 25px; border-radius: 10px; background-color: #F1F1F2; width: 25%; margin-bottom: 30px; margin-left: 30px;">
        <h2 style=" color: #1995AD">${ele.sr_no}</h2>
        <h3 style=" color:#034d5c"">Firstname : ${ele.fname}</h3>
        <h3 style=" color:#034d5c"">Lastname : ${ele.lname}</h3>
        <h3 style=" color:#034d5c"">GR'ID : ${ele.gr_id}</h3>
        <h3 style=" color:#034d5c"">Age : ${ele.age}</h3>
        <h3 style=" color:#034d5c"">Phone-num. : ${ele.phone}</h3>
        <h3 style=" color:#034d5c"">Address : ${ele.address.city} :- ${ele.address.pincode} :- ${ele.address.state}</h3>
        <h3 style=" color:#034d5c"">Email : ${ele.email}</h3>
    </div>`;
});