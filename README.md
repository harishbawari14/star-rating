STAR RATING COMPONENT

Overview

The Star Rating Component is a customizable and interactive widget designed for web applications. It allows users to rate items using a star-based system, enhancing user feedback and engagement.

Features

Customizable Star Count: Define the number of stars (e.g., 5-star, 10-star systems).

Interactive UI: Users can hover over and select their desired rating.

Dynamic Rendering: Renders stars dynamically based on user input.

Accessible: Keyboard navigable and screen reader friendly.

Lightweight: Simple and easy to integrate into any web project.

Installation

Clone the Repository:

git clone https://github.com/harishbawari14/star-rating.git

Navigate to the Project Directory:

cd star-rating

Open index.html in a browser to view the component in action.

Usage

To integrate the Star Rating Component into your project:

Include the CSS:
Add the following link to your HTML file's <head> section:

<link rel="stylesheet" href="star-rating.css">

Include the JavaScript:
Add the following script before the closing </body> tag:

<script src="star-rating.js"></script>

Add the HTML Markup:
Insert the following code where you want the rating system to appear:

<div class="star-rating" data-rating="0">
    <span class="star" data-value="1">&#9733;</span>
    <span class="star" data-value="2">&#9733;</span>
    <span class="star" data-value="3">&#9733;</span>
    <span class="star" data-value="4">&#9733;</span>
    <span class="star" data-value="5">&#9733;</span>
</div>

Initialize the Component:
Ensure the JavaScript initializes the component:

document.addEventListener('DOMContentLoaded', function() {
    initializeStarRating();
});

Customization

Star Icons: Modify the &#9733; character in the HTML markup.

Styling: Customize the appearance in star-rating.css.

Behavior: Adjust the logic in star-rating.js.

Contribution

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch: git checkout -b feature-name.

Commit your changes: git commit -m 'Add feature'.

Push to the branch: git push origin feature-name.

Open a pull request.
