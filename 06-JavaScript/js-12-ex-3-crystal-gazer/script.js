/*
- function crystalGazer()
- four arguments: number
of children, partner's name, geographic location, and job title
- output this:  
                  "You will be a [job_title] in [location], and married to [partner's_name] with [number_of_children] kids."

*/

const crystalGazer = (kidsNum, partnerName, location, job) => {
  return `You will be a ${job} in ${location}, and married to ${partnerName} with ${kidsNum} kids.`;
};

console.log(crystalGazer(3, "Maria", "Paris", "king"));

