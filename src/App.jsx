import github from './assets/octocat.png'

import './App.css'

function App() {

  return (
    <>
      
      <h1>Muhammad Waleed</h1>
      <div className="card">
       <div className='btnContainer'>
       <a className="btn" href='https://github.com/notwld'>
          <img src={github} alt="github logo" width="18" />
          Github
        </a>
        <a className="btn" href='https://medium.com/@mwfarrukh'>
          📓 Medium
        </a>
       </div>
       <h2> 🚀 About Me</h2>
      <p className="read-the-docs">
Hi there👋, my name is Muhammad Waleed and I am a Software Engineering student at Usman Institute of Technology. I am proficient in various programming languages including Python, React, JavaScript, Node/Express, SQL, Prisma, Dotnet, MongoDB, Flask and have experience using platforms such as Heroku and Netlify. I am also skilled in using Git for version control. I am excited to continue learning and growing as a developer and am eager to contribute to projects on GitHub. I aim to deepen my understanding in various areas of technology and product development.
      </p>

      </div>
    </>
  )
}

export default App
