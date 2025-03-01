# STAR RATING COMPONENT

## Overview

The Star Rating Component is a customizable and interactive widget designed for web applications. It allows users to rate items using a star-based system, enhancing user feedback and engagement.

## Features

- **Customizable Star Count:** Define the number of stars (e.g., 5-star, 10-star systems).
- **Interactive UI:** Users can hover over and select their desired rating.
- **Dynamic Rendering:** Renders stars dynamically based on user input.
- **Accessible:** Keyboard navigable and screen reader friendly.
- **Lightweight:** Simple and easy to integrate into any web project.

## Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/harishbawari14/star-rating.git
   ```

2. **Navigate to the Project Directory:**
   ```sh
   cd star-rating
   ```

3. **Open `index.html` in a browser** to view the component in action.

## Usage

To integrate the Star Rating Component into your project:

1. **Include the CSS:**
   Add the following link to your HTML file's `<head>` section:
   ```html
   <link rel="stylesheet" href="star-rating.css">
   ```

2. **Include the JavaScript:**
   Add the following script before the closing `</body>` tag:
   ```html
   <script src="star-rating.js"></script>
   ```

3. **Add the HTML Markup:**
   Insert the following code where you want the rating system to appear:
   ```html
   <div class="star-rating" data-rating="0">
       <span class="star" data-value="1">&#9733;</span>
       <span class="star" data-value="2">&#9733;</span>
       <span class="star" data-value="3">&#9733;</span>
       <span class="star" data-value="4">&#9733;</span>
       <span class="star" data-value="5">&#9733;</span>
   </div>
   ```

4. **Initialize the Component:**
   Ensure the JavaScript initializes the component:
   ```javascript
   document.addEventListener('DOMContentLoaded', function() {
       initializeStarRating();
   });
   ```

## Customization

- **Star Icons:** Modify the `&#9733;` character in the HTML markup.
- **Styling:** Customize the appearance in `star-rating.css`.
- **Behavior:** Adjust the logic in `star-rating.js`.

## Contribution

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.


