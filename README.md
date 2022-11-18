## Project Description
 TravelPal is
 an App to let user to choose country to visit with details and prices and nice pictures. 
 
Project Links
- [github repo](https://github.com/Max12345-ally/Project-2)
- [deployment](https://vercel.com/max12345-ally/project-2)

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


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Project Links

- [github repo]()
- [deployment]()
- [demo recording]()

## Wireframes & React Component Hierarchy

Upload images of wireframes and component hierarchy to cloudinary (or similar) and add the link here with a description of the specific wireframe.

- [wireframes]()
- [react architecture]()

Define the the React components and the architectural design of your app.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decide what is placed into your MVP as the "client" will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase (or similar) for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header, include the nav | 
| Footer | This will render the footer, include links to github repo | 

## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the project.  Your estimates can then be used to evaluate project possibilities based on time needed and the actual time you have before the project must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, Bootstrap, Tailwind CSS, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
