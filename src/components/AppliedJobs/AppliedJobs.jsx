import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utilities/localStorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
 const [appliedJobs, setappliedJobs] = useState([]);


useEffect(()=>{
const storedJobIds = getStoredJobApplication();
if(jobs.length > 0){
    
    
    // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id) )
//     //another way 
    const jobsApplied =[];
   for(const id of storedJobIds) {
    const job = jobs.find(job => job.id === id);
    if(job){
        jobsApplied.push(job);
    }
   }


    setappliedJobs(jobsApplied);
    // console.log(jobs, storedJobIds, jobsApplied)
console.log(appliedJobs.length);
}

} ,[])


    return (
        <div>
            <h2 className="text-2xl"> Jobs I applied: {appliedJobs.length}</h2>
            
        </div>
    );
};

export default AppliedJobs;