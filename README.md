# React-Based Tuberculosis Data Analysis Dashboard

Inspired by John Green's *Everything Is Tuberculosis*, the goal of this interactive data analysis dashboard is to raise awareness about why TB—despite being a preventable and curable disease—is still the world's deadliest infectious disease during non-pandemic years, [killing over 1.2 million people in 2024](https://www.who.int/news-room/fact-sheets/detail/tuberculosis).

It combines [GDP data](https://www.kaggle.com/datasets/zgrcemta/world-gdpgdp-gdp-per-capita-and-annual-growths) from the World Bank (current as of 2020) and [tuberculosis data](https://www.who.int/teams/global-programme-on-tuberculosis-and-lung-health/data) and [health expenditure data](https://apps.who.int/nha/database/) from the WHO (current as of 2025).

Functionality ideas:
- toggle between upper-middle, lower-middle, high, and low income country categories to compare how features correlate. 
    - choose between see all / select country/region (e.g. GDP per capita and TB burden, community support and TB deaths, etc.)
- for each country/region, allow users to scroll through time to see how TB epidemiology has changed over time
- allow users to filter data by demographic (e.g. age groups, gender, or underlying health conditions)
- allow users to download filtered datasets/charts as CSV, JSON, or images
- make layout and touch targets work smoothly on tablets and phones
- allow users to switch between active cases, total confirmed, deaths, hospitalizations, etc. (how relevant is this to the purpose of this dashboard?)