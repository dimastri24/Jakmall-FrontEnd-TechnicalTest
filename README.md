## Jakmall Front-end Technical Test

<br/>

How to run the project

-   Clone project to the local environment by using `git clone` or manually unzip the downloaded zip file.
-   Run command `npm install` to download the necessary module
-   Run the project with command `npm start`

<br/>

## About the project

<br/>

The project is about checkout order with multi step form using React as the major technology. Other main library / modules used are react-hook-forms (form handling), styled-component (styling), and yup (form validation). Below are the content or functionality:

-   There are three pages which are the step form that I created into Delivery, Payment, and Finish
-   Form content will be change on each step in the same container.
-   The input are being checked and shown red border on the input before going to next step using yup.
-   The data are being stored in the context so it can be passed on till the end of the form.
-   The option input has their constant value so they can have further detail info to be shown or passed.
-   On the other container will show the real time input from the user, which is the Summary section. Starting from the selected input to the total payment.
-   At the Finish section I generate 5 digit of alphanumeric without 1,I,0,O
-   All styling being handle using styled-component, there are some variable css stored in index.css
