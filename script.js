document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(link => {
      if (link.href === currentLocation) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

// Back to Top Button Logic
document.addEventListener("DOMContentLoaded", () => {
    // Create the Back to Top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = '↑';
    backToTopBtn.classList.add('back-to-top');
    document.body.appendChild(backToTopBtn);

    // Show/Hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


// Form Validation Logic
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const travelDates = document.getElementById('travelDates').value;

        if (!name || !email || !travelDates) {
            alert('Please fill out all fields.');
        } else {
            alert('Booking successfully submitted!');
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    console.log('Carousel ready');
});


// Destination Data
const destinations = [
    { name: "Paris", type: "cities", popularity: 5, budget: 3000, image: "Images/Paris.jpg", description: "The romantic charm of Paris." },
    { name: "Bali", type: "beaches", popularity: 4, budget: 1500, image: "Images/Bali.jpg", description: "Tropical paradise of Bali." },
    { name: "Kyoto", type: "cities", popularity: 4, budget: 2000, image: "Images/Kyoto.jpg", description: "Beautiful cherry blossoms." },
    { name: "Santorini", type: "beaches", popularity: 5, budget: 2500, image: "Images/Santorini.jpg", description: "White-washed buildings and the Aegean Sea." },
    { name: "Swiss Alps", type: "mountains", popularity: 5, budget: 4000, image: "Images/SwissAlps.jpg", description: "Breathtaking mountain views." },
    { name: "New York", type: "cities", popularity: 4, budget: 3500, image: "Images/New York.jpg", description: "Iconic NYC skyline." },
    { name: "Cape Town", type: "mountains", popularity: 3, budget: 1800, image: "Images/CapeTown.jpg", description: "Views from Table Mountain." },
    { name: "Maui", type: "beaches", popularity: 4, budget: 3000, image: "Images/Maui.jpg", description: "Relax on tropical beaches." },
    { name: "Rome", type: "cities", popularity: 5, budget: 2800, image: "Images/Rome.jpg", description: "Ancient Roman landmarks." },
    { name: "Reykjavik", type: "mountains", popularity: 4, budget: 3200, image: "Images/Reykjavik.jpg", description: "Witness the stunning Northern Lights." },
    { name: "Dubai", type: "cities", popularity: 5, budget: 3500, image: "Images/Dubai.jpg", description: "Experience luxury and the towering Burj Khalifa." },
    { name: "Hawaii", type: "beaches", popularity: 4, budget: 2200, image: "Images/Hawaii.jpg", description: "Explore volcanic landscapes and tropical beaches." }
];

// DOM Elements
const destinationsList = document.getElementById("destinationsList");
const filterType = document.getElementById("filterType");
const sortOptions = document.getElementById("sortOptions");

// Function to Generate Star Ratings
function generateStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fa fa-star"></i>'; // Filled star
        } else {
            stars += '<i class="fa fa-star-o"></i>'; // Empty star
        }
    }
    return stars;
}

// Function to Render Destinations
function renderDestinations(data) {
    destinationsList.innerHTML = ""; // Clear current list
    data.forEach(dest => {
        const card = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${dest.image}" class="card-img-top" alt="${dest.name}">
                    <div class="card-body">
                        <h5 class="card-title">${dest.name}</h5>
                        <div class="rating">${generateStars(dest.popularity)}</div>
                        <p class="card-text">${dest.description}</p>
                        <a href="destination-details.html?name=${encodeURIComponent(dest.name)}&image=${encodeURIComponent(dest.image)}&description=${encodeURIComponent(dest.description)}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        `;
        destinationsList.insertAdjacentHTML("beforeend", card);
    });
}


// Filter and Sort Logic
function filterAndSort() {
    let filtered = destinations;
    const type = filterType.value;
    const sort = sortOptions.value;

    // Filter by Type
    if (type !== "all") {
        filtered = filtered.filter(dest => dest.type === type);
    }

    // Sort by Selected Option
    if (sort === "popularity") {
        filtered.sort((a, b) => b.popularity - a.popularity);
    } else if (sort === "budget") {
        filtered.sort((a, b) => a.budget - b.budget);
    }

    renderDestinations(filtered);
}

// Event Listeners
filterType.addEventListener("change", filterAndSort);
sortOptions.addEventListener("change", filterAndSort);

// Initial Render
renderDestinations(destinations);



// Example destination data (in a real app, fetch this from a database or API)
const destinationData = {
    name: "Santorini",
    image: "Images/Santorini.jpg",
    description: "White-washed buildings overlooking the stunning Aegean Sea.",
    itinerary: [
        "Day 1: Arrival and relaxation at a luxury resort.",
        "Day 2: Guided tour of Oia and Fira.",
        "Day 3: Sunset cruise and farewell dinner."
    ],
    packages: [
        { name: "Basic Package", price: "$1500" },
        { name: "Premium Package", price: "$2500" }
    ],
    reviews: [
        "An unforgettable experience! - 🌟🌟🌟🌟🌟",
        "Breathtaking views, a must-visit. - 🌟🌟🌟🌟"
    ]
};

// Populate the page with destination data
document.getElementById("destinationName").innerText = destinationData.name;
document.getElementById("destinationImage").src = destinationData.image;
document.getElementById("destinationDescription").innerText = destinationData.description;

// Populate itinerary
const itineraryList = document.getElementById("destinationItinerary");
destinationData.itinerary.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    itineraryList.appendChild(li);
});

// Populate packages
const packagesList = document.getElementById("destinationPackages");
destinationData.packages.forEach(pkg => {
    const li = document.createElement("li");
    li.innerText = `${pkg.name}: ${pkg.price}`;
    packagesList.appendChild(li);
});

// Populate reviews
const reviewsSection = document.getElementById("destinationReviews");
destinationData.reviews.forEach(review => {
    const p = document.createElement("p");
    p.innerText = review;
    reviewsSection.appendChild(p);
});

// script of 
// Real-time Form Validation for Booking Page
const bookingFormPage = document.getElementById("bookingForm"); // Renamed variable
const nameFieldPage = document.getElementById("name");
const emailFieldPage = document.getElementById("email");
const dateFieldPage = document.getElementById("travelDates");
const packageFieldPage = document.getElementById("package");

const nameErrorPage = document.getElementById("nameError");
const emailErrorPage = document.getElementById("emailError");
const dateErrorPage = document.getElementById("dateError");
const packageErrorPage = document.getElementById("packageError");

if (bookingFormPage) {
    bookingFormPage.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        let isValid = true;

        // Name Validation
        if (!nameFieldPage.value.trim()) {
            nameErrorPage.style.display = "block";
            isValid = false;
        } else {
            nameErrorPage.style.display = "none";
        }

        // Email Validation
        const emailRegexPage = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegexPage.test(emailFieldPage.value)) {
            emailErrorPage.style.display = "block";
            isValid = false;
        } else {
            emailErrorPage.style.display = "none";
        }

        // Date Validation
        if (!dateFieldPage.value) {
            dateErrorPage.style.display = "block";
            isValid = false;
        } else {
            dateErrorPage.style.display = "none";
        }

        // Package Validation
        if (!packageFieldPage.value) {
            packageErrorPage.style.display = "block";
            isValid = false;
        } else {
            packageErrorPage.style.display = "none";
        }

        // Submit if all fields are valid
        if (isValid) {
            alert("Booking submitted successfully!");
            bookingFormPage.reset(); // Clear form
        }
    });
}

/* contact us form validation*/
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contactForm");
    const contactName = document.querySelector("#contactName");
    const contactEmail = document.querySelector("#contactEmail");
    const contactPhone = document.querySelector("#contactPhone");
    const contactSubject = document.querySelector("#contactSubject");
    const contactMessage = document.querySelector("#contactMessage");

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const phoneError = document.querySelector("#phoneError");
    const subjectError = document.querySelector("#subjectError");
    const messageError = document.querySelector("#messageError");

    // Name Validation
    contactName.addEventListener("input", () => {
        if (!contactName.value.trim()) {
            nameError.textContent = "Name is required.";
        } else {
            nameError.textContent = "";
        }
    });

    // Email Validation
    contactEmail.addEventListener("input", () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!contactEmail.value.trim()) {
            emailError.textContent = "Email is required.";
        } else if (!emailRegex.test(contactEmail.value)) {
            emailError.textContent = "Invalid email format.";
        } else {
            emailError.textContent = "";
        }
    });

    // Phone Validation
    contactPhone.addEventListener("input", () => {
        const phoneRegex = /^[0-9]{10}$/;
        const phoneValue = contactPhone.value;

        if (!phoneValue.trim()) {
            phoneError.textContent = "Phone number is required.";
        } else if (!/^[0-9]*$/.test(phoneValue)) {
            phoneError.textContent = "Phone number can only contain digits.";
            contactPhone.value = phoneValue.replace(/[^0-9]/g, ""); // Remove non-numeric characters
        } else if (phoneValue.length > 10) {
            phoneError.textContent = "Phone number must not exceed 10 digits.";
            contactPhone.value = phoneValue.slice(0, 10); // Trim to 10 digits
        } else if (!phoneRegex.test(phoneValue)) {
            phoneError.textContent = "Phone number must be exactly 10 digits.";
        } else {
            phoneError.textContent = "";
        }
    });

    // Subject Validation
    contactSubject.addEventListener("input", () => {
        if (!contactSubject.value.trim()) {
            subjectError.textContent = "Subject is required.";
        } else {
            subjectError.textContent = "";
        }
    });

    // Message Validation
    contactMessage.addEventListener("input", () => {
        if (!contactMessage.value.trim()) {
            messageError.textContent = "Message is required.";
        } else {
            messageError.textContent = "";
        }
    });

    // Prevent Form Submission if Validation Fails
    contactForm.addEventListener("submit", (e) => {
        if (
            !contactName.value.trim() ||
            !contactEmail.value.trim() ||
            !contactPhone.value.trim() ||
            !contactSubject.value.trim() ||
            !contactMessage.value.trim()
        ) {
            e.preventDefault();
            alert("Please fix all errors before submitting.");
        } else {
            e.preventDefault();
            alert("Form submitted successfully!");
        }
    });
});


