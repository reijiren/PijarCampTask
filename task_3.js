let data = {
    id: 1,
    name: "budi pratama",
    gender: "female",
    height: "165 cm",
    educational:
    [
        {
            period: "2013-2016",
            school: "Kalam kudu High School",
            major: "-"
        }
    ],
    phone: {
        primary: "0812312323",
        secondary: "0082342343"
    }
}

let newEducation = {
    period: "2016-2020",
    school: "State University of Jakarta",
    major: "Accountancy"
}

// <a>
let data2 = {...data};
data2.name = "Muhammad Rhefa Farizi";
data2.phone.primary = "085718427196";


console.log(data2);

// <b>
//Tanpa Destructuring
const noDest = [data.phone.primary, data.phone.secondary]
console.log(noDest);

//Dengan Destructuring
function withDest({primary, secondary}){
    const dest = [primary, secondary];
    return dest;
}

console.log(withDest(data.phone));


// <c>
let merge = {...data, ...newEducation};
console.log(merge);