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

    getUserData(userId).then((data) => {
        data.map((item) => {
            commSkills.push(item.communication_skills);
            problemSolving.push(item.problem_solving);
            years = [...years, item.year];
            creativeThinking.push(item.creative_thinking);
        })

    }
    )
        .catch((err) => console.log(err));

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