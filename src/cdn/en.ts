import { CdnData } from '@app/interfaces/CdnData';

export const enTranslation: CdnData = {
    "header": {
        "title": "Portfolio",
        "linkedin": "https://www.linkedin.com/in/juniorsergio/?locale=en_US",
        "localization": "Belo Horizonte, MG, Brazil"
    },

    "main": {
        "tabs": {
            "aboutMe": "About Me",
            "frontend": "Front-End",
            "dataScience": "Data Science"
        },
        "about": {
            "title": "About Me",
            "text": "<p>Having a degree in Computer Engineering from CEFET-MG, I started my career in technology as a chatbot developer. I worked with it for just over 2 years until I migrated to front-end development, mainly focused on responsive web applications. I've been working in this area for one year and in that time I've worked with several technologies such as React, Typescript, Next.js, Chakra-UI, Cloudflare, MongoDB, and Git.</p><p>In all these years as a developer, I had the opportunity to work with teams, companies, and products which allowed me to gain experience in areas related to programming, such as UX/UI, data analysis, product management, and agile methodologies. This was instrumental in developing and improving my self-management, teamwork, and resilience skills which allow me to have the confidence to face any challenges.</p>"
        },

        "frontend" : {
            "soon": "Coming soon",
            "opening": "To improve and showcase my frontend knowledge, the following web pages were developed based from online courses and technical tests. In order to access each page, click on any portion of the carousel. The respective <strong>Github repository</strong> link of each page can be found on their <strong>header.</strong>",
            "projects": [
                {
                    "id": "social-media-feed",
                    "stacks": ["reactjs", "typescript", "styled-components", "graphql"],
                    "title": "Social Media Feed",
                    "description": "Web page developed using ReactJS to simulate a social media feed. It's possible to create posts, write comments and react to them. In order to ensure the data persistence, an integration with <a href='https://hygraph.com/'>Hygraph (formerly GraphCMS)</a> was made, so the information created by the users could be recorded and retrieved. The profile created by the user to interact with the application has an expiration time of one day, and it's possible to change its information within this lifetime.",
                    "type": "active"
                },
                {
                    "id": "number-guessing-game",
                    "stacks": ["html", "css", "javascript"],
                    "title": "Number Guessing Game",
                    "description": "From just the basics of frontend development, this web page implements a guessing game, in which an external API generates a random number between 1 and 300, and the player must guess which number it is. Despite being simple, this page demonstrates that although the most modern technologies such as Angular and React facilitate the creation of websites, the basis of it (HTML and Javascript) remains a powerful development tool.",
                    "type": "active"
                },
                {
                    "id": "universo-palavras",
                    "stacks": ["reactjs", "python", "typescript", "styled-components"],
                    "title": "Words Universe (pt-BR only)",
                    "description": "Fullstack project with the development of the backend in Python and the frontend in React with Typescript. The idea is to extract information from two websites with word definitions (<a href='https://dicionariocriativo.com.br/'>Dicionário Critivo</a> and <a href='https://www.dicio.com.br/'>Dicio</a>) to display them in a more user-friendly and intuitive way. There is also the possibility to export the information for the .pptx format to use in presentations.",
                    "type": "active"
                },
                {
                    "id": "simulador-prev",
                    "stacks": ["reactjs", "nextjs", "typescript", "chakra-ui"],
                    "title": "Pension Simulator",
                    "description": "Web application built with React, Typescript, Next.js and Chakra-UI, aiming to capture leads from a conversational form and simulate user retirement. There is also an integration with Salesforce embedded chat, offering a direct communication channel with an investment advisor.",
                    "url": "https://simuladordeprev.com.br",
                    "type": "active"
                }
            ]
        },

        "dataScience": [
            {
                "id": "tesouro-direto",
                "title": "Time Series Prediction Models for the Interest Rates of Tesouro Direto IPCA Securities",
                "projectLink": "https://github.com/juniorsergio/Prediction-Projects/tree/master/Tesouro%20Direto",
                "subtitle": "Published Paper (PT-BR)",
                "subtitleLink": "http://dx.doi.org/10.21528/CBIC2021-11",
                "text": "Launched by the Brazilian Federal Government at the end of 2002, the Tesouro Direto platform makes it possible for individuals to purchase government securities, characterizing it as a safe fixed-income investment that is more profitable than savings. This work proposed the use of machine learning models, more precisely the MLP, CNN and LSTM neural networks, in order to create models for forecasting the interest rates of four floating-rate Brazilian government securities bonded to the country’s inflation rate (IPCA). To this end, some features of the Brazilian economy that could have a more direct impact on Tesouro Direto rates were analyzed and defined. In the end, it was concluded that CNN has a better overall result, even though it is more sensitive to feature removal. In contrast, the MLP presented almost constant errors, regardless of the variable being removed.",
                "figcaption": "CNN's Prediction for Tesouro Direto IPCA Security due to 2024"
            },
            {
                "id": "credit-risk",
                "title": "Credit Risk Classification Models",
                "projectLink": "https://github.com/juniorsergio/Classification-Projects/tree/master/Credit%20Risk",
                "text": "One of the most important real-live scenarios for Data Science is the prediction of credit risk, whether someone is going to become a defaulter. This project was developed as part of the admission process of a company, meaning the data provided comes from a real company in the sector. My purpose was to create a machine learning model able to predict the defaulters within a scenario that is safe for the company, instead of trying to pursue the perfect model. During the development, two problems with the data had to be dealt with: the class imbalance and a huge amount of missing values for one of the variables. With that in mind, five algorithms based on decision trees were created, and the best for this particular problem was the XGBoost, using a special parameter to compensate for the class imbalance. The result was a precision of 98% for the negative class and a recall of 70% for the positive (defaulter) class.",
                "figcaption": "Confusion Matrix of the XGBoost model"
            },
            {
                "id": "breaking-bad",
                "title": "Data Exploration of Breaking Bad Episodes Rating",
                "projectLink": "https://github.com/juniorsergio/DataExploration/tree/master/Breaking%20Bad%20-%20Rating%20analysis",
                "text": "Breaking Bad is considered to be one of the best TV shows ever made, which raises questions about how this quality level was obtained. One of those questions, and the purpose of this project, is if there could be any relationship between a an episode IMDB rating and its writer. More specifically, the hyphotesis was that since VInce Gilligan is the crator of the series, his episodes would probably have the highest ratings. In order to do that, this <a href=\"https://www.kaggle.com/varpit94/breaking-bad-tv-show-all-seasons-episodes-data\">dataset</a> was used since it hads the two necessary informations: the episode's rating and its writer. The result of the analysis was that the ratings don't appear to have a strong relationship with the episode's writer.",
                "figcaption": "Boxplot of episode ratings per writer"
            }
        ]
    }
}