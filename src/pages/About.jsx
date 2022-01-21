function About() {
    return (
      <>
        <h1 className='text-6xl mb-4'>Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
          Do you want to stalk your friends on github? This app does that for you!
          
        </p>
        <p className='mb-4 text-2xl font-light'>
          Get details of users by typing their name on searchbox.
        </p>

        <p className='mb-4 text-2xl font-light'>
          If you like this project do give it a star.
        </p>
        <div className='mt-4 card-actions'>
                
                 <a href='https://github.com/shrutij11/github-finder'className='btn btn-outline'>
                  {' '}
                Star This Repo
               </a>{' '}
                 
                
              </div>

        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
          Credit: <span className='text-white'>Brad Traversy</span> 
        </p>
      </>
    )
  }
  
  export default About
