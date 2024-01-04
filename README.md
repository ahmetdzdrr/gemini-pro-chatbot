# **Gemini Pro ChatBot**

![chatbot-gif ‐ Clipchamp ile yapıldı](https://github.com/ahmetdzdrr/gemini-pro-chatbot/assets/117534684/41018d7b-5253-4273-bddd-83277afe95fe)

## **Table of Contents**

- [Introduction](#introduction)
- [Technologies Used](#tech-used)
- [What is Flask?](#what-is-flask)
- [Project Overview](#project-overview)
- [How to Create Google API?](#how-to-create-google-api)
- [Installation](#installation)
- [Usage Code](#usage)
- [Contribution](#contribution)

## **Introduction**

This Flask-based chat application is being developed with utilizing HTML, CSS, and JS. This project encompasses Gemini, an AI-powered conversational chatbot.

## **Technologies Used**

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## **What is Flask?**

Flask is a Python-based web application development framework. Known for its minimalist and flexible nature, it's used for creating web applications and APIs. While providing core functionality, it accommodates various needs through an extensive extension system. It offers basic features like routing, handling HTTP requests, template support, and is often preferred for quickly prototyping or developing mid-sized projects.

## **Project Overview**

The folders in the project are as follows:

- **.env**: This file contain Gemini API KEY and SECRET KEY. You have to configure those keys.
- **static**: Contains CSS and JavaScript codes along with various icons and images.
- **templates**: Stores HTML code necessary for deploying the Flask application.
- **requirements.txt**: It has some dependencies libraries for installation.

> ### **app.py**

The file contains route codes provided by the Flask framework. When the site is deployed, the route directions within the app.py file operate based on actions on the site, directing the flow of the site accordingly.

> ### **config.py**

The file contains send-mail route codes. It provided to send mail with SMTP server and work on contact page with base configurations.

## **How to Create Google API?**

To utilize Google Gemini Pro, [click here](https://makersuite.google.com/app/apikey) to obtain your Google API Key and proceed with the steps.

## **Installation**

1.  Python 3.8+ is required to run this project.
2.  Create a virtual environment: `python -m venv venv`
3.  Activate the virtual environment:
    - Windows: `venv\Scripts\activate`
    - Unix or MacOS: `source venv/bin/activate`
4.  Create a `.env` file and add required environmental variables:

           GOOGLE_API_KEY="YOUR_GOOGLE_API_KEY"
           SECRET_KEY="YOUR_SECRET_KEY"

5.  Clone this repository to your local machine using Git:

         git clone https://github.com/ahmetdzdrr/gemini-pro-chatbot.git

6.  Install the required Python libraries by running:

          pip install -r requirements.txt

## **Usage Code**

- `/home` - Loads the homepage.
- `/about` - Loads the about page.
- `/contact` - Loads the contact page.
- `/gemini` - Loads a page for using gemini pro model.
- `/send-mail` - It's automatically send an email from contact page.

To run the project, follow these steps:

Open your terminal or command prompt.

Navigate to the directory where the project files are located.

Enter the following command:

```bash
python app.py
```

## **Contribution**

Your contributions are welcome! If you wish to contribute, feel free to open a pull request. Please make sure to explain your changes.
