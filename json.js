console.log("json.js")
const allData = () => {

    fetch('https://randomuser.me/api/?results=100 ')
    .then(res => res.json())
    .then(findOut => userInfo(findOut.results))
    }
allData()

    const userDataSection = document.querySelector(".userDataSection");
    console.log(userDataSection)

const userInfo = (datas) => {
    
    for(const data of datas){
        const div = document.createElement("div");
            div.style.background = "gray"
            div.style.padding = "15px"
            div.style.margin = "20px"
            div.style.borderRadius = "10px"
            div.innerHTML =`
                <P>User Id : ${data.id.value} </P>
                <p>Title Name : ${data.name.title}</p>
                <p>Fist name : ${data.name.first} </p>
                <p>Last name : ${data.name.last}</p>
                <p>Phone : ${data.cell}</p>
                <p>E-mail : ${data.email}</p>
                <p>DOB : ${data.dob.date} </p>
                <p>Age : ${data.dob.age}</p>
                <p>Gender : ${data.gender}</p>
                <p>Location : ${data.location.country} </p>
            `
        userDataSection.appendChild(div)
        // console.log(div)
    }
}