import { getUserData } from "../UserData/helper";

let commSkills = [];
let problemSolving = [];
let years = [];
let creativeThinking = [];

export const filterData = (userId) => {

    commSkills = [];
    problemSolving = [];
    years = [];
    creativeThinking = [];

    const count  =  getUserData(userId).then((data) => {
        data.map((item) => {
            commSkills.push(item.communication_skills);
            problemSolving.push(item.problem_solving);
            years = [...years, item.year];
            creativeThinking.push(item.creative_thinking);
        })
      
      return data.length;
    }
    )
        .catch((err) => console.log(err));
  
  return count;

}

export const getCommunicationSkillData = () => {
    const yrs = years.map(year => {
        return year;
    })
    const skills = commSkills.map(skill => {
        return skill;
    });
    
    const data = {
      labels: yrs,
      datasets: [
        {
          label: "Communication Skills",
          data: skills,
          fill: false,
          backgroundColor: "rgb(155, 100, 132)",
          borderColor: "rgb(155, 100, 132)",
          tension: 0.1,
        },
      ],
    };

    return data;
}

export const getProblemSolvingSkills = () => {
    const yrs = years.map(year => {
        return year;
    })
    const skills = problemSolving.map(skill => {
        return skill;
    });
    
    const data = {
      labels: yrs,
      datasets: [
        {
          label: "Problem Solving Skills",
          data: skills,
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          tension: 0.1,
        },
      ],
    };

    return data;
}

export const getCreativeThinkingSkills = () => {
    const yrs = years.map(year => {
        return year;
    })
    const skills = creativeThinking.map(skill => {
        return skill;
    });
    
    const data = {
      labels: yrs,
      datasets: [
        {
          label: "Creative Thinking Skills",
          data: skills,
          fill: false,
          backgroundColor: "rgb(75, 192, 192)",
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    return data;
}


export const averageCal = (arrName) => {
    let sum = 0;
   if(arrName === 'communication_skills'){
       sum = commSkills.reduce(function (x, y) {
        return x + y;
    }, 0);
       }
   else if (arrName === 'problem_solving') {
        sum = problemSolving.reduce(function (x, y) {
          return x + y;
        }, 0);
     
   }
   else if (arrName === 'creative_thinking') {
        sum = creativeThinking.reduce(function (x, y) {
          return x + y;
        } , 0);
   }
  
    return sum / years.length;
}

export const calMedian = (arrName) => {
  const middle = (years.length + 1) / 2;
  
  let sorted;
  if (arrName === 'communication_skills') {
      sorted = commSkills.sort((a, b) => a - b);
    }
  else if(arrName === 'problem_solving')
  {
      sorted = problemSolving.sort((a, b) => a - b);
    }
  else if(arrName === 'creative_thinking')
  {
      sorted = creativeThinking.sort((a, b) => a - b);
    }

    const isEven = sorted.length % 2 === 0;
  
    return isEven ? (sorted[middle - 1.5]
      + sorted[middle - 0.5]) / 2 :
      sorted[middle - 1];
}

