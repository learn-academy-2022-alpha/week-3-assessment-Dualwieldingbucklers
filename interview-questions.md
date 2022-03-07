# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer:
  `this` is a way to call on certain objects and methods within the scope of the current class.

  Researched answer:
  Something that I had to keep in mind previously, is that `this` only works on the same file, so when I went back to work on the die roll project I realized that I couldn't refer to my die roll function stored on a property from my JSX file because, despite the property being an extension of the same class, it still can only inherit the class it's contained within.





2. What is React? Why would you use it?

  Your answer:
  React is a front end library that helps different languages interact with each other. Its focus is interaction within UI properties that can update where they occur instead of taking the time to refresh a whole page.

  Researched answer:
  I think the key here is interactivity. As the name implies, you want elements to react and provide live feedback to your actions on a web page.





3. Which lifecycle method is required in a React class component?

  Your answer:
  Render, because it's what actually displays the information on a page. For example, the render on the original JSX file is where a lot of the shell of the HTML will be located. If html is being exported from a component, a render within the component will enable it to be rendered when it's invoked in the JSX file.

  Researched answer:
  I think the most interesting thing I learned about Render today is how you can render more HTML inside a component and ALL of that html being rendered will be rendered on the main JSX render everywhere it is invoked.





4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer:
  JavaScript XML is where the building blocks of HTML and the logic of JS can coexist on the same page to create interactive UI.

  Researched answer:
  The difference I didn't include is that HTML is its own markup language, but when JSX is incorporated, the languages can essentially be used in tandem to create not only a usable, navigable website, but one that has interactivity and features operated by logic.





5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer:
  Yarn stands for Yet Another Resource Negotiator. When you run yarn for React it essentially opens up the opportunity for the files to communicate between each other despite being different programming languages.

  Researched answer:
  Further still, I think it's important to include that yarn unpacks all of the stored dependencies to enable these interactions.





6. STRETCH: What is an anonymous function in JavaScript?

  Your answer:
  I think an anonymous function is one that hasn't actually been declared or stored on as a variable.

  Researched answer:
  So that's only partially correct, but after some digging the purpose seems to be aimed toward rerendering a simple task on a single element when there's less concern about its reusability.


## Looking Ahead: Terms for Next Week

1. Conditional rendering:
From what I gathered, conditional rendering is just as it sounds. It's using JS conditionals to decide whether certain HTML elements are going to be a part of the render.

2. Props:
Props stands for properties and it's a parameter that passes data between components.

3. JavaScript Events:
It's JavaScript's feedback to actions within a browser's web page. Not only do they not require a page refresh due to only occurring to specified elements, but they are replicable.

4. Object-oriented programming:
What I've gathered from OOP is that is that we're storing reusable functions into properties to be stored separately for later invocation.

5. Ruby:
Ruby seems to be capable of operating multiple different programming paradigms and not just OOP, despite everything in Ruby being an object, including primitive data types. 
