console.log("json.js")




const allData = () => {

    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(findOut => userInfo(findOut.results))



}
allData()
const userInfo = (datas) => {

        for(const data of datas){


            console.log(data)
        }





}