import { json } from "react-router-dom"

const getStoredJobApplication =() =>{
    const storedJobApplication =localStorage.getItem('job-applications')
if(storedJobApplication){
    return json.parse(storedJobApplication)
}
return [];


}






const saveJobApplication = id =>{
const storedJobApplication = getStoredJobApplication();
const exist = storedJobApplication.find(jobId => jobId === id);
if(!exist){
    storedJobApplication.push(id);
    localStorage.setItem('job-application',JSON.stringify(storedJobApplication))
}

}

export{getStoredJobApplication, saveJobApplication}