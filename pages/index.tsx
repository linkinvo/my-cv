

export default function Home() {
  return (
    <div>

    <div className=" font-sans antialiased w-full bg-gray-200 container mx-auto max-w-screen-xl">
      <main
        id="wrapper"
        className="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
      >
        <div
          id="sidebar"
          className="w-full sm:max-w-sm p-8 bg-gradient-to-b bg_color"
        >
          <div className="px-2 mb-12">
            <img
              src="./assets/foto.png"
              alt="Profile Picture"
              className="rounded-full w-48 mx-auto mb-2"
            />
            <h1 className="text-center text-3xl font-semibold mb-2">Vladimir Ilin</h1>
            <h2 className="text-center text-xl font-light">Front-end junior developer</h2>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <div className="flex items-center my-3 hover:text-gray-50">
              <img
                src="/assets/mail-outline.svg"
                className="inline w-6 mr-4"
                alt="Mail icon"
              />
              <a href="mailto:">vovavova9595@gmail.com</a>
            </div>
            <div className="flex items-center my-3">
              <img
                src="/assets/call-outline.svg"
                className="inline w-6 mr-4"
                alt="Phone icon"
              />
              <a href="tel:">0681353543</a>
            </div>
            <div className="flex items-center my-3">
           {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/home-outline.svg"
                className="inline w-6 pb-1 mr-4"
                alt="House icon"
              />
              <div>
                <p>Zaporozhye</p>
              </div>
            </div>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">Personal</h2>
            <div className="flex items-center my-3">
              <img
                src="./assets/egg-outline.svg"
                className="inline w-6 mr-4"
                alt="Egg Icon"
              />
              <span>Born on 20th of January 1995</span>
            </div>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">On the Web</h2>
            <div className="flex items-center my-3 hover:text-gray-50">
              <img
                src="/assets/logo-github.svg"
                className="inline w-6 mr-4"
                alt="GitHub Logo"
              />
              <a href="https://github.com/linkinvo95" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
           
            <div className="flex items-center my-3 hover:text-gray-50">
              <img
                src="/assets/logo-linkedin.svg"
                className="inline w-6 mr-4"
                alt="LinkedIn Logo"
              />
              <a href="https://www.linkedin.com/in/vladimir-ilin-b43231194/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="flex items-center my-3 hover:text-gray-50">
              <img
                src="/assets/telegram.png"
                className="inline w-6 mr-4"
                alt="Twitter Logo"
              />
              <a href="https://t.me/linkinvo95" target="_blank" rel="noopener noreferrer"
                >@linkinvo95</a
              >
            </div>
            <div className="flex items-center my-3 hover:text-gray-50">
              <img
                src="/assets/instagram.png"
                className="inline w-6 mr-4"
                alt="CodePen Logo"
              />
              <a href="https://www.instagram.com/world_neural_network/" target="_blank" rel="noopener noreferrer">world_neural_network</a>
            </div>
            <div className="flex items-center my-3 hover:text-gray-50">
              <img
                src="/assets/facebook.png"
                className="inline w-6 mr-4"
                alt="Globe icon"
              />
              <a href="https://www.facebook.com/volodimiraa/" target="_blank" rel="noopener noreferrer"
                >Vladimir Ilin</a
              >
            </div>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">Skills & Tools</h2>
            <ul className="list-none">
              <li>
                  <img
                src="/assets/javascript.png"
                className="inline w-6 mr-4"
                alt="JS Logo"
              />
                <label htmlFor="js-skill" className="hover:underline">JavaScript</label>
              </li>
              
              <li>
                <img
                src="/assets/atom.png"
                className="inline w-6 mr-4"
                alt="React Logo"
              />
                <label htmlFor="react-skill" className="hover:underline ">React</label>
              </li>
              <li>
                <img
                src="/assets/nextjs.ico"
                className="inline w-6 mr-4"
                alt="NextJS Logo"
              />
                <label htmlFor="nextjs-skill" className="hover:underline ">Next.js</label>
              </li>
              <li>
                <img
                src="/assets/html.png"
                className="inline w-6 mr-4"
                alt="Html Logo"
              />
                <label htmlFor="eleventy-skill" className="hover:underline ">Html</label>
              </li>
              <li>
                <img
                src="/assets/css-3.png"
                className="inline w-6 mr-4"
                alt="CSS Logo"
              />
                <label htmlFor="node-skill" className="hover:underline ">CSS</label>
              </li>
              <li>
                <img
                src="/assets/redux.png"
                className="inline w-6 mr-4"
                alt="Redux Logo"
              />
                <label htmlFor="css-skill" className="hover:underline ">Redux</label>
              </li>
              <li>
                <img
                src="/assets/figma.png"
                className="inline w-6 mr-4"
                alt="Figma Logo"
              />
                <label htmlFor="design-skill" className="hover:underline ">Figma</label>
              </li>
              <li>
                <img
                src="/assets/postman.png"
                className="inline w-6 mr-4"
                alt="Postman Logo"
              />
                <label htmlFor="design-skill" className="hover:underline ">Postman</label>
              </li>
              <li>
                <img
                src="/assets/git.png"
                className="inline w-6 mr-4"
                alt="Git Logo"
              />
                <label htmlFor="design-skill" className="hover:underline ">Git</label>
              </li>
              <li>
                <img
                src="/assets/mysql.png"
                className="inline w-6 mr-4"
                alt="MySQL Logo"
              />
                <label htmlFor="design-skill" className="hover:underline ">MySQL</label>
              </li>
              <li>
                <img
                src="/assets/tailwind.png"
                className="inline w-6 mr-4"
                alt="tailwind Logo"
              />
                <label htmlFor="design-skill" className="hover:underline">Tailwindcss</label>
              </li>
              <li>
                <img
                src="/assets/microsoft.png"
                className="inline w-6 mr-4"
                alt="MSOffice Logo"
              />
                <label htmlFor="design-skill" className="hover:underline">MSOffice</label>
              </li>
            </ul>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            
                
            <h3 className="font-semibold">Master - Topic Program Subject Area of Physiotherapy,
              (ergotherapy)</h3>
            <p>Zaporozhye National University, 2018-2019</p>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">Languages</h2>
            <h4 className="font-semibold">English</h4>
            <p>A2/B1</p>
          </div>
        </div>
        <div className="content w-full p-12">
          <div id="profile" className="prose">
            <h2 className="section-headline text-blue-500">Profile</h2>
            <p>
              I am a self-taught web developer specializing in basic web 
              fundamentals - HTML, CSS and JS. I have experience with the React 
              front-end library, and static site generators like Next.js . 
              I write CSS or use CSS frameworks like TailwindCSS, 
              Bootstrap to speed up styling my projects.
            </p>
            <p>
              I am highly motivated in expanding my horizons day by day htmlFor
              better perhtmlFormance, testing and user experience.
            </p>
          </div>
          <hr className="mt-8 mb-12" />
          <div id="experience" className="prose">
            <h2 className="section-headline">Experience</h2>
            <div>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Jul.&nbsp;2020:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  company: Fantailsoft
 
                  Junior Front-end developer
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Description:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  My first company to reach the Junior position.
                  There I practiced with frameworks such as vue and angular 1.8v,
                  and touched on the topic of what is back-end on C#.
                  My task was to send requests to Web.api
                </div>
              </section>
              <section className="mb-6">
               
                <div className="lg:inline-block lg:w-8/12 w-full">
                  2021
                </div>
              </section>
              <div className="progress mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Description:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
              My second experience in development was a freelance project.
              I was making a browser extension in Chrome and Edge on the React library.

              Also, I had an internship with university students at GoldenTime.
              Studied Next.js, Tailwindcss, TypeScript, Redux, Express and MySQL.
              The practice was three months.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}
