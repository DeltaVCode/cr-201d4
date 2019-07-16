# Lab 07: Add A Constructor Function and Put Data Into A Table

### Implement a Constructor Function

In class, we learned how to refactor a group of object literals by using a constructor function and creating instances.

Let's replace your object literals for the salmon cookie stands with a single constructor function that, when called with 'new', creates new instances.

Your code will end up with probably 1/4 the number of lines it had before refactoring, and every line of code you don't have is one you don't need to debug!

### Replace the Lists with a Table

We will also be replacing the lists of data for each store, and building a **single table of data** instead! Tables are much easier to read than lists, and presenting data in a table makes analysis more intuitive and comprehensive.

What numbers should go into a table? Your client, Pat, has reviewed the lists of data you dutifully provided in the previous assignment, and has decided that's actually not the best way to view the information. Here's what Pat wants:

- A table to show the total amount of projected cookie needs at each location, with the table displaying the cookie stand location, the total number of cookies needed for each location, an hourly breakdown of total cookies sales for each location, and a footer row of totals for each column.
- Here's what it should look like, in general (this example is for structural and layout purposes only, since you can style the table however you want):

### Cookies Needed By Location Each Day

- Your table should be structured like this
- Note: Scroll to the right to see the Daily Location Total column


|                | 6:00am | 7:00am | 8:00am | 9:00am | 10:00am | 11:00am | 12:00pm | 1:00pm | 2:00pm | 3:00pm | 4:00pm | 5:00pm | 6:00pm | 7:00pm | Daily Location Total
|------------------------|-------|--------|--------|--------|--------|---------|---------|---------|--------|--------|--------|--------|--------|--------|--------|
| 1st and Pike      |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| SeaTac Airport           |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Seattle Center |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Capitol Hill       |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Alki        |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Totals                 |       |        |        |        |        |         |         |         |        |        |        |        |        |        |


## Setup and Documentation

Work in a new branch in the same repository from your previous lab.

See pages 106-109 in your JS textbook for a constructor example... and especially focus on 108 and 109. Also refer to the demo code from class that showed how we can view a constructor function as a translation of an object literal.

## User Stories and Feature Tasks

### User Stories (MVP)

- As a developer, I want to implement a constructor function, so that I can reuse code and eliminate much of the duplication in my JavaScript
- As a user, I want cookie sales data represented in tables rather than lists

### Technical Requirements

- Good use of a constructor function; style and syntax are correctly implemented
- Each cookie stand location should have a separate render() method that creates and appends its row to the table
- The header row and footer row are each created in their own stand-alone function
- Duplicate code has been removed and DRY principles are evident
- Working on a non-master branch for the day, with regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops.

### Stretch Goals

- As a developer, I will continue to work on design aspects of the public-facing page.
- As a developer, to facilitate ongoing design work, I will make a style guide, using [this one that a team Brian Nations was on made for Everlast](http://everlast.com/style-guide) as a model.
- As a developer, to demonstrate to my client my ability to add value, I will create a second table that will help Pat manage staffing. Using the basic rubric that single Salmon Cookie Tosser can serve 20 customers per hour, and that each location should have a minimum of two Salmon Cookie Tossers on shift at all times, calculate how many Salmon Cookie Tossers are needed at each location each hour.
- As a user, I want to model my projected sales data as accurately as possible. Research into Pat's customer traffic has shown that the hours of 8am, 11am, and 3pm tend to have more customers than other hours, and that the hours with the least customers are 1pm and 6pm. Apply a control curve to the projected sales numbers to reflect those daily ebbs and flows. The following array represents the percentage of maximum traffic that occurs during each of the hours from 6am to 8pm, and can be used to scale the projected hourly customer traffic into more accurate values:

`[0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6]`

## Getting Started

Don't forget to create new branches for today's work!

## Submission Instructions

- Submit the link to your GitHub repo for this project
- Add a comment to this Canvas submission with answers to the following questions
  - How did this go, overall?
  - What observations or questions do you have about what you've learned so far?
  - How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?
