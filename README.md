## Project Description
 TravelPal is
 an App to let user to choose country to visit with details and prices and nice pictures. 
 
Project Links
- [github repo](https://github.com/Max12345-ally/Project-2)
- [deployment](https://vercel.com/max12345-ally/project-2)
- [demo](https://youtu.be/UycTBN5D-RQ) 

## Wireframes & React Component Hierarchy

Main Page

![Screenshot 2022-11-17 at 20 35 29](https://user-images.githubusercontent.com/82536307/202517984-949e26fa-ec7c-420d-abc8-f25ee46d7adc.png)
Info Page
![Screenshot 2022-11-17 at 20 35 38](https://user-images.githubusercontent.com/82536307/202518134-537d7be1-5429-42d6-8ef1-3fd64fc4123b.png)
About
![Screenshot 2022-11-17 at 20 35 46](https://user-images.githubusercontent.com/82536307/202518197-207cebad-42f6-4546-940d-79c2a05c0c4a.png)
Structure
![Screenshot 2022-11-17 at 20 42 26](https://user-images.githubusercontent.com/82536307/202519054-a0be6e7d-d8cd-4490-8bc4-764277e937a7.png)
### MVP/PostMVP

#### MVP
- Pictures of each Tour with short info
- Show more details of the Tour
- Using Home, About buttons to navigate through site
- See Loading status

#### post MVP
- choose date to travel and search bar
- use TripAdvisor API/ Google Map

### Components
| Component | Description | 
| --- | :---: |   
| App | The API data is fetched, React Router added, all Components included |
| Header | This is the Name of App, Home and About buttons |
| About | To see the video of example place to visit Paris |
| Home | Link to main page |
| Details | Text description of the place to travel and price |
| Tours | This is where all of the tours will be displayed to find the best one |
| Tour | Each separate tour on the page with Image and Link for details |
| Loading | Loading status of the site |
| Footer | Link to GitHub account |

### Time Frame

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Structure | H | 4hrs| 4hrs | 4hrs |
| Adding Components | H | 8hrs| 8hrs | 8hrs |
| Working with API | H | 3hrs| 3hrs | 3hrs |
| Styling | H | 4hrs| 4hrs | 4hrs |
| VideoAnimation | M | 1hrs| 1hrs | 1hrs |
| Deployment | M | 1hrs| 1hrs | 1hrs |
| GitHub | H | 2hrs| 2hrs | 2hrs |
| Video Recording/Editing | M | 2hrs| 2hrs | 2hrs |
| Total | H | 25hrs| 25hrs | 25hrs |

## Code Snippet
The React Router is working and all components incorporated incl. Loading Status . 
Code -
...
return  (
    <main>
      <Header />
      <Routes>
         <Route path=“/” element={ <Home tours={tours} /> } />
         <Route path=“/about” element={ <About /> } />
         <Route path=“/details/:id” element={ <Details tours={tours} /> } />
      </Routes>
      <Footer />
    </main>
  );
...

## Issues and Resolutions
...
  useEffect(() => {
      fetchTours();
    }, []);
...
    
    I ocassionaly missed this lines of code with useState and got infinite loop with many requests, which crashed my API for some time. 


    # Project Overview


    ---
name: 'Code Review '
about: Use this Ticket as a guide of questions to ask during the code review.
title: Code Review results
labels: ''
assignees: ''

---

Setup and Overview:

What was the project you were trying to build, in your own words? Search engine for invention
How did you break the problem down in to smaller parts? Start form Home/About ... and Add.js with main fetch
What were the key features of your MVP? Why? Be able to request data and dipslay on the screen. Router included
What was the biggest challenge you faced working on this project? Talking with API. It is government data. Used RegEx special hook. 10Mil data.

Problem Solution:

What is the overall architecture or structure of your code base? About, Home ,Model, SeacrBar, App
What are the key classes/functions? Why did you decide on these? What is each one doing? func SearchBar and Inventbar for core functionality
What pieces of functionality are missing or incomplete in your project? What are the next steps to finishing them? Background image and more Google like design

Bugs and Tweaks 

Are there any bugs still in the project? What might be causing them? How might they be fixed? No bugs
Are there parts of the code base that could be cleaned up so that they're easier to read and understand what is happening? footer.css no needs
Are there pieces of commented-out code or console.logs left in the codebase? No



