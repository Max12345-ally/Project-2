## Project Description

 TravelApp
 An App to let user to choose country to visit with details and prices and nice pictures. 
 

Project Links

GitHub

https://github.com/Max12345-ally/Project-2

Deployed site

https://vercel.com/max12345-ally/project-2

Demorecording


Wireframes

Main Page

![Screenshot 2022-11-17 at 20 35 29](https://user-images.githubusercontent.com/82536307/202517984-949e26fa-ec7c-420d-abc8-f25ee46d7adc.png)

Info Page

![Screenshot 2022-11-17 at 20 35 38](https://user-images.githubusercontent.com/82536307/202518134-537d7be1-5429-42d6-8ef1-3fd64fc4123b.png)

About

![Screenshot 2022-11-17 at 20 35 46](https://user-images.githubusercontent.com/82536307/202518197-207cebad-42f6-4546-940d-79c2a05c0c4a.png)



Structure

![Screenshot 2022-11-17 at 20 42 26](https://user-images.githubusercontent.com/82536307/202519054-a0be6e7d-d8cd-4490-8bc4-764277e937a7.png)


MVP/PostMVP
MVP
Pictures of each Tour with short info
Show more details of the Tour
Using Home About to navigate through site
See Loading status

post MVP
choose date
use TripAdvisor API/ Google Map

Components

Component.  Description
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

Code Snippet
The React Router is working and all components incorporated incl. Loading Status . 
Code -
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

## Issues and Resolutions

  useEffect(() => {
      fetchTours();
    }, []);
    
    I ocassionaly missed this lines of code with useState and got infinite loop with many requests, which crashed my API for some time. 





