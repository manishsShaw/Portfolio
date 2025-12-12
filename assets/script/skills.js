const skills = [
    {
        "id": 1,
        "name": "JAVA",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    },
    {
        "id": 2,
        "name": "Python",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    {
        "id": 13,
        "name": "PHP",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
    },
    {
        "id": 14,
        "name": "C",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
    },
    {
        "id": 4,
        "name": "HTML5",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
        "id": 5,
        "name": "CSS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },
    {
        "id": 15,
        "name": "C++",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
    },
    {
        "id": 6,
        "name": "JavaScript",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
        "id": 23,
        "name": "Numpy",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
    },
    {
        "id": 7,
        "name": "Pandas",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
    },
    {
        "id": 8,
        "name": "Node Js",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
    },
    {
        "id": 16,
        "name": "Matplotlib",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
    },
    {
        "id": 17,
        "name": "Power BI",
        "icon": "https://drive.google.com/file/d/1GOG9W_CkuWUVnO572IhWxECrF3fCwJEP/view?usp=sharing"
    },
    {
        "id": 9,
        "name": "MySql",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    },
    {
        "id": 10,
        "name": "Mongo DB",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    },
    {
        "id": 18,
        "name": "Excel",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftexcel/microsoftexcel-original.svg"
    },
    // {
    //     "id": 19,
    //     "name": "NPM",
    //     "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
    // },
    // {
    //     "id": 26,
    //     "name": "Redux",
    //     "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
    // },
    {
        "id": 11,
        "name": "Git",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    {
        "id": 13,
        "name": "Postman",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
    },
    // {
    //     "id": 20,
    //     "name": "Docker",
    //     "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    // },
    // {
    //     "id": 21,
    //     "name": "AWS",
    //     "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
    // },
    // {
    //     "id": 22,
    //     "name": "GitHub Actions",
    //     "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
    // },
    // {
    //     "id": 24,
    //     "name": "Kubernetes",
    //     "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
    // }
    
]

const skillsWrapper = document.querySelector(".skill-card-wrapper");
skills.map((skill) => addSkill(skill))

function addSkill(skill) {
    const skillItemWrapper = document.createElement("div");
    skillItemWrapper.setAttribute('class', 'skill-item-wrapper');
    skillItemWrapper.innerHTML = `
    <div class="skill-item">
        <img src="${skill.icon}" alt="">
        <h2>${skill.name}</h2>
    </div>`

    skillsWrapper.appendChild(skillItemWrapper);
}
