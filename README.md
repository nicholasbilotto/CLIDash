# Firm Dashboard App

## Introduction
I built this full stack Dashboard App on the MERN stack for a licensing firm. It's a mix of backend logic and frontend flair, showing off what I can do with, data visualizations and manipulation. Below, I've laid out what this app does, the tools I used, and a bit about how I put it together.

## Key Features
- **Interactive Data Tables**: Developed with Prime React, the table features multi-column filtering and dynamic dropdowns.
- **Multi-Layer Backend Filtering and Pagination**: Demonstrates complex data management through advanced filtering capabilities.
  - There was a ton of data to handle, over 15k rows, so the filtering, sorting and pagination, had to be built on the backend.
- **Data Visualization**: Utilizes Nivo for dynamic, interactive charts, showcasing data in a meaningful way.

- **Responsive Design**: Ensures a seamless user experience across various devices and screen sizes.

## Technologies Used
- **MERN Stack**: MongoDB, Express.js, React, Node.js
- **Nivo**: For data visualization
- **Prime React**: For advanced table functionalities
- **Material UI** For theming, structure, handling mobile, and buttons

## Development Process
1. **Planning**: The company was using 3 different sites to host spreadsheets related to different parts of their business. I organized and merged the data to be displayed in this app. Preproduction was mostly spend interpreting data and deciding what was most useful. This involved talking to all members of the team who uses this data everyday. 
2. **Development**: This was built in React with Material UI. I spent a lot of time designing the Datatable shown in the screenshots. I ended up changing frameworks for more convinient visuals. Using PrimeReact, I only displayed fields that were populated in the row expansion. This saved space visually, allowing for faster browsing and discovery. I also built filters and sorting that lived on the backend.


## Future Enhancements
Due to the amount of data this company has, I plan to use LangChain to connect a LLM to futher interpret the data to accurately forcast trends.

## Screenshots
Below are some screenshots demonstrating the key functionalities of the app:

1. **Dashboard (Home Page)**
   ![Dashboard](/screenshots/Dashboard.png)

2. **Datatable**
   ![Datatable](/screenshots/Datatable.png)

3. **Datatable (One Filter Active)**
   ![Datatable with One Filter Active](/screenshots/One_Filter.png)

4. **Datatable (Two Filters Active)**
   ![Datatable with Two Filters Active](/screenshots/Two_Filters.png)

5. **Datatable (Dynamic Row Expansion)**
   ![Datatable Dynamic RowExpansion](/screenshots/Row_Expansion.png)

6. **Edit Subject Page (Tutor-Side)**
   ![Admin Edit Subject](/screenshots/Editing-Math.png)

7. **Line Graph** 
   ![Line Graph](/screenshots/Line_Graph.png)

8. **Pie Chart** 
   ![Pie Chart](/screenshots/Pie_Chart.png)

9. **Dashboard (isMobile)**
   ![Dashboard isMobile](/screenshots/isMobile.png) 

10. **Dashboard DarkMode**
   ![Dashboard DarkMode](/screenshots/Dash_DarkMode.png)



