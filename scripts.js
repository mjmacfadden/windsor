//Array of arrays to hold image data
const imagesData = [
    {category: "default", filename: "choose_a_design", alt: "Choose A Design", id: "0", classes: "thumb img-thumbnail default_image"},
    {category: ["birthday", "birthday_boy"], filename: "birthday_balloon_cake", alt: "Birthday - Balloon Cake", id: "1", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/birthday-balloon-cake"},
    {category: ["birthday", "birthday_boy"], filename: "birthday_cupcake_cart", alt: "Birthday - Cupcake Cart", id: "2", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/birthday-cupcake-cart"},
    {category: ["birthday", "birthday_girl"], filename: "birthday_cupcake_line_art", alt: "Birthday - Cupcake Line Art", id: "3", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/greeting-card"},
    {category: "birthday", filename: "birthday_gift_box", alt: "Birthday - Gift Box", id: "4", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/birthday-gift-box"},
    {category: "birthday", filename: "birthday_happy_cake", alt: "Birthday - Happy Cake", id: "5", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/birthday-happy-cake"},
    {category: "birthday", filename: "birthday_owl", alt: "Birthday - Owl", id: "6", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/birthday-owl"},
    {category: "birthday", filename: "birthday_unicorn", alt: "Birthday - Unicorn", id: "7", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thank-you-unicorn" },
    {category: "birthday", filename: "birthday_wreath", alt: "Birthday - Wreath", id: "8", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/birthday-wreath"},
    {category: "halloween", filename: "halloween_jackolanterns", alt: "Halloween - Jackolanterns", id: "9", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/greeting-card-67336ab02aa5c"},
    {category: "halloween", filename: "halloween_haunted_hill", alt: "Halloween - Haunted Hill", id: "10", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/halloween-haunted-hill"},
    {category: "halloween", filename: "halloween_jackolantern_and_skull", alt: "Halloween - Jackolantern and Skull", id: "11", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/halloween-jackolantern-and-skull"},
    {category: "halloween", filename: "halloween_kitty", alt: "Halloween - Kitty", id: "12", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/halloween-kitty"},
    {category: "thank_you", filename: "thank_you_bouquet", alt: "Thank You - Bouquet", id: "13", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thank-you-bouquet"},
    {category: "thank_you", filename: "thank_you_hand_heart", alt: "Thank You - Hand Heart", id: "14", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thank-you-hand-and-heart"},
    {category: "thank_you", filename: "thank_you_heart_and_roses", alt: "Thank You - Heart and Roses", id: "15", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thank-you-heart-and-roses"},
    {category: "thank_you", filename: "thank_you_watercolor_landscape", alt: "Thank You - Watercolor Landscape", id: "16", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thank-you-watercolor-landscape"},
    {category: "thank_you", filename: "thank_you_sun", alt: "Thank You - Sun", id: "17", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thank-you-sun"},
    {category: "thank_you", filename: "thank_you_sunrise", alt: "Thank You - Sunrise", id: "18", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thank-you-sunrise"},
    {category: "thank_you", filename: "thank_you_unicorn", alt: "Thank You - Unicorn", id: "19", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thank-you-unicorn"},
    {category: "thank_you", filename: "thank_you_elephant", alt: "Thank You - Elephant", id: "20", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thank-you-elephant"},
    {category: "hanukkah", filename: "hanukkah_clay", alt: "Hanukkah - Clay", id: "21", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/hanukkah-clay"},
    {category: "hanukkah", filename: "hanukkah_snowy_menorah", alt: "Hanukkah - Snowy Menorah", id: "22", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/hanukkah-snowy-menorah"},
    {category: "christmas", filename: "christmas_vintage_vector", alt: "Christmas - Vintage Vector", id: "23", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/christmas-vintage-vector"},
    {category: "christmas", filename: "christmas_santa_cottage", alt: "Christmas - Santa Cottage", id: "24", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/christmas-santa-cottage"},
    {category: "thanksgiving", filename: "thanksgiving_turkey_barrel", alt: "Thanksgiving - Turkey Barrel", id: "25", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thanksgiving-turkey-barrel"},
    {category: "thanksgiving", filename: "thanksgiving_turkey_on_pumpkin", alt: "Thanksgiving - Turkey on Pumpkin", id: "26", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thanksgiving-turkey-on-pumpkin"},
    {category: "christmas", filename: "christmas_sleigh_and_cottage", alt: "Christmas - Sleigh and Cottage", id: "27" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/chrismtas-sleigh-and-cottage"},
    {category: "christmas", filename: "christmas_home_and_tree", alt: "Christmas - Home and Tree", id: "28" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/christmas-home-and-tree"},
    {category: "congratulations", filename: "congrautlations_hands_up", alt: "Congratulations - Hands Up", id: "29" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/congratulations-hands-up"},
    {category: "congratulations", filename: "congratulations_sip_sip_hooray", alt: "Congratulations - Sip Sip, Hooray", id: "30" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/congratulations-sip-sip-hooray"},
    {category: "graduation", filename: "graduation_congratulations_cap", alt: "Graduation - Congratulations Cap", id: "31" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/graduation-congratulations-cap"},
    {category: "thanksgiving", filename: "thanksgiving_stoic_turkey", alt: "Thanksgiving - Stoic Turkey", id: "32" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thanksgiving-stoic-turkey"},
    {category: "thanksgiving", filename: "thanksgiving_turkey_cornucopia", alt: "Thanksgiving - Turkey Cornucopia", id: "33" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thanksgiving-turkey-cornucopia"},
    {category: "congratulations", filename: "congratulations_splat", alt: "Congratulations - Splat", id: "34" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/congratulations-splat"},
    {category: "just_because", filename: "just_because_mouse", alt: "Just Because - Mouse", id: "36" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/just-because-mouse"},
    {category: "just_because", filename: "just_because_thinking_of_you_bear", alt: "Just Because - Thinking of You Bear", id: "37" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/just-because-bear"},
    {category: "just_because", filename: "just_because_house_on_a_hill", alt: "Just Because - House On A Hill", id: "38" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/just-because-house-on-a-hill"},
    {category: "just_because", filename: "just_because_thinking_of_you_couple", alt: "Just Because - Thinking of You Couple", id: "39" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/just-because-thinking-of-you-couple"},
    {category: "just_because", filename: "just_because_thinking_of_you_stars_and_sun", alt: "Just Because - Thinking of You–– Stars and Sun", id: "40" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/just-because-thinking-of-you-stars-and-sun"},
    {category: "thank_you", filename: "thank_you_fox", alt: "Thank You - Fox", id: "41" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thank-you-fox"},
    {category: "thank_you", filename: "thank_you_cute_critters", alt: "Thank You - Cute Critters", id: "42" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thank-you-cute-critters"},
    {category: "thank_you", filename: "thank_you_critters", alt: "Thank You - Critters", id: "43" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thank-you-critters"},
    {category: "thanksgiving", filename: "thanksgiving_turkey_fence", alt: "Thanksgiving - Turkey Fence", id: "44" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thanksgiving-turkey-fence"},
    {category: "just_because", filename: "just_because_autumn_lake", alt: "Just Because - Autumn Lake", id: "45" , classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/just-because-autumn-lake"},
    {category: "thank_you", filename: "thank_you_bouquet_and_sun", alt: "Thank You - Bouquet and Sun", id: "46", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/thank-you-bouquet-and-sun"},
    {category: "sympathy", filename: "sympathy_cherry_blossom", alt: "Sympathy - Cherry Blossom", id: "47", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/sympathy-cherry-blossom"},
    {category: "birthday", filename: "birthday_party_sloth", alt: "Birthday - Party Sloth", id: "48", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/party-like-a-sloth"},
    {category: ["birthday", "birthday_boy"], filename: "birthday_dino_balloons", alt: "Birthday - Dino Balloons", id: "49", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/birthday-dino-balloons"},
    {category: ["birthday", "birthday_boy"], filename: "birthday_baby_blue", alt: "Birthday - Baby Blue", id: "50", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/baby-blue"},
    {category: ["birthday", "birthday_girl"], filename: "birthday_pink_wreath", alt: "Birthday - Pink Wreath", id: "51", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/birthday-pink-wreath"},
    {category: ["birthday", "birthday_girl"], filename: "birthday_minimal_flowers", alt: "Birthday - Minimal Flowers", id: "52", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/product/birthday-minimal-flowers"},
    {category: "just_because", filename: "just_because_hang_in_there", alt: "Hang In There", id: "53", classes: "thumb img-thumbnail", url: "https://windsorgreetings.printful.me/"},


];


    function displayImages(category = null) {
        // Clear the current images
        const cardImages = document.getElementById('card_images');
        cardImages.innerHTML = '';

        // Sort the imagesData array by category
        const sortedImages = [...imagesData].sort((a, b) => {
            if (a.category < b.category) return -1;
            if (a.category > b.category) return 1;
            return 0;
        });

        // Filter and display images based on the category
        sortedImages
            //.filter(image => !category || image.category === category)
            .filter(image => !category || image.category.includes(category))
            .forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = `img/thumbs/${image.filename}.jpg`;
                imgElement.alt = image.alt;
                imgElement.id = image.id;
                imgElement.className = image.classes;

                cardImages.appendChild(imgElement);
            });

        // Add event listeners to all image thumbnails
        const thumbnails = document.querySelectorAll('.thumb');
        thumbnails.forEach((thumb) => {
            thumb.addEventListener('click', function() {
                const imageId = thumb.getAttribute('id');  // Get the ID of the clicked image
                updateBackgroundImage(imageId);  // Update the background image of the card and flip to front
            });
        });
    }


    
let activeButton = null; // Track the currently active button
let activeDropdownItem = null; // Track the currently active dropdown item
let favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Array to store favorite images


// Function to display images based on category or favorites
function displayImages(category = null) {
    // Clear the current images
    const cardImages = document.getElementById('card_images');
    cardImages.innerHTML = '';

    // Determine if displaying favorites or a specific category
    const imagesToDisplay = category === 'favorites' 
        ? imagesData.filter(image => favorites.includes(image.id))
        : imagesData.filter(image => !category || image.category.includes(category));

    // Sort and display images
    imagesToDisplay
    .sort((a, b) => (a.category < b.category ? -1 : 1))
    .forEach(image => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container');

        const linkElement = document.createElement('a');
        linkElement.href = "#top";

        const imgElement = document.createElement('img');
        imgElement.src = `img/thumbs/${image.filename}.jpg`;
        imgElement.alt = image.alt;
        imgElement.id = image.id;
        imgElement.className = image.classes;

        // Wrap the image in the anchor tag
        linkElement.appendChild(imgElement);

        imgContainer.appendChild(linkElement);

        // Create the star icon element
        const starIcon = document.createElement('i');
        starIcon.className = favorites.includes(image.id) 
            ? 'bi bi-star-fill star-icon' 
            : 'bi bi-star star-icon';
        imgContainer.appendChild(starIcon);

        starIcon.addEventListener('click', function() {
            toggleFavorite(image, starIcon);
        });

        cardImages.appendChild(imgContainer);
    });

    // Add event listeners to image thumbnails for other functionalities
    const thumbnails = document.querySelectorAll('.thumb');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const imageId = thumb.getAttribute('id');
            updateBackgroundImage(imageId); // Update the background image and flip to the front
        });
    });
}

// Function to toggle the favorite status of an image
function toggleFavorite(image, starIcon) {
    if (favorites.includes(image.id)) {
        favorites = favorites.filter(id => id !== image.id); // Remove from favorites
        starIcon.classList.replace('bi-star-fill', 'bi-star'); // Change to outlined star
    } else {
        favorites.push(image.id); // Add to favorites
        starIcon.classList.replace('bi-star', 'bi-star-fill'); // Change to solid star
    }

    localStorage.setItem('favorites', JSON.stringify(favorites)); // Save to localStorage
    console.log(favorites); // Print to console for verification
}



// Update button styles, including the favorites button
function updateButtonStyles(mainButtonId, dropdownItemId = null) {
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach((button) => {
        if (button.id === mainButtonId || button.classList.contains(`${mainButtonId}-toggle`)) {
            button.classList.remove('btn-outline-secondary');
            button.classList.add('btn-secondary');
        } else {
            button.classList.remove('btn-secondary');
            button.classList.add('btn-outline-secondary');
        }
    });

    const dropdownItems = document.querySelectorAll('.filters .dropdown-item');
    dropdownItems.forEach((item) => {
        if (item.id === dropdownItemId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Handle button clicks, with toggle functionality for the favorites button
function handleButtonClick(category, buttonId, event, isDropdown = false) {
    event.preventDefault();

    if (!isDropdown && activeButton === buttonId) {
        displayImages(); // Show all images
        updateButtonStyles(null); // Revert all buttons to outlined
        activeButton = null;
        activeDropdownItem = null;
    } else {
        displayImages(category); // Display filtered images by category or favorites
        updateButtonStyles(buttonId); // Update button styles
        activeButton = buttonId; // Set active button
        activeDropdownItem = isDropdown ? buttonId : null;
    }
}

// Function to toggle the favorite status of an image
function toggleFavorite(image, starIcon) {
    if (favorites.includes(image.id)) {
        favorites = favorites.filter(id => id !== image.id);
        starIcon.classList.replace('bi-star-fill', 'bi-star');
    } else {
        favorites.push(image.id);
        starIcon.classList.replace('bi-star', 'bi-star-fill');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log(favorites); // For testing
}

// Event listener for favorites button
document.getElementById('favorites').addEventListener('click', function(event) {
    handleButtonClick('favorites', 'favorites', event);
});
// Event listener for the main "Birthday" button
document.getElementById('birthday').addEventListener('click', function(event) {
    handleButtonClick('birthday', 'birthday', event);
});
// Event listeners for dropdown items
document.getElementById('birthday_boy').addEventListener('click', function(event) {
    handleButtonClick('birthday_boy', 'birthday_boy', event, true);
});
document.getElementById('birthday_girl').addEventListener('click', function(event) {
    handleButtonClick('birthday_girl', 'birthday_girl', event, true);
});
document.getElementById('christmas').addEventListener('click', function(event) {
    handleButtonClick('christmas', 'christmas', event);
});
document.getElementById('congratulations').addEventListener('click', function(event) {
    handleButtonClick('congratulations', 'congratulations', event);
});
document.getElementById('graduation').addEventListener('click', function(event) {
    handleButtonClick('graduation', 'graduation', event);
});
document.getElementById('halloweed').addEventListener('click', function(event) {
    handleButtonClick('halloween', 'halloweed', event);
});
document.getElementById('hanukkah').addEventListener('click', function(event) {
    handleButtonClick('hanukkah', 'hanukkah', event);
});
document.getElementById('thanksgiving').addEventListener('click', function(event) {
    handleButtonClick('thanksgiving', 'thanksgiving', event);
});
document.getElementById('thank_you').addEventListener('click', function(event) {
    handleButtonClick('thank_you', 'thank_you', event);
});
document.getElementById('just_because').addEventListener('click', function(event) {
    handleButtonClick('just_because', 'just_because', event);
});
document.getElementById('sympathy').addEventListener('click', function(event) {
    handleButtonClick('sympathy', 'sympathy', event);
});




// CARD FLIP
document.querySelectorAll('.flip').forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});
// Trigger flip using another element (like a button)
document.getElementById('flipTrigger').addEventListener('click', function() {
    const card = document.querySelector('.flip'); // Select the card you want to flip
    card.classList.toggle('flipped'); // Toggle the 'flipped' class on the card
});

// Function to check if card is flipped and flip it
function flipCardIfNotFlipped() {
    const card = document.querySelector('.flip');
    if (!card.classList.contains('flipped')) {
        card.classList.add('flipped');
    }
}

// Function to get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        to: params.get('to') || '', 
        from: params.get('from') || '', 
        message: params.get('message') || '',
        imageId: params.get('imageId') || '0', // Default to image 0
        hideClass: params.get('hide') || 'false' // New hide parameter
    };
}

// Function to update the card with input values// Function to update the card with input values and trigger flip
function updateCardAndUrl() {
    const toValue = document.getElementById('toInput').value || '';
    const fromValue = document.getElementById('fromInput').value || '';
    const messageValue = document.getElementById('messageInput').value || '';
    const imageId = document.querySelector('.front').getAttribute('data-image-id') || '0';
    const hideClass = document.querySelector('.hide') ? 'true' : 'false';

    // Update the card with new values
    document.getElementById('to').innerText = `To: ${toValue}`;
    document.getElementById('from').innerText = `From: ${fromValue}`;
    document.getElementById('message').innerText = messageValue;

    // Flip the card if input is typed and it's not already flipped
    if (toValue || fromValue || messageValue) {
        flipCardIfNotFlipped();
    }

    // Update the URL with new parameters
    const newUrl = `${window.location.pathname}?to=${encodeURIComponent(toValue)}&from=${encodeURIComponent(fromValue)}&message=${encodeURIComponent(messageValue)}&imageId=${encodeURIComponent(imageId)}&hide=${encodeURIComponent(hideClass)}`;
    window.history.replaceState({}, '', newUrl);
}

// Add event listeners to input fields to update the card and flip
document.getElementById('toInput').addEventListener('input', updateCardAndUrl);
document.getElementById('fromInput').addEventListener('input', updateCardAndUrl);
document.getElementById('messageInput').addEventListener('input', updateCardAndUrl);


// Function to update the Printful URL based on the selected image data
function updatePrintfulURL(imageData) {
    // Select the link element you want to update with the new URL
    const cardLink = document.getElementById('printful'); // Ensure this ID matches your link element's ID

    // Check if the link element exists
    if (cardLink) {
        // Use the image URL if it exists; otherwise, set the default URL
        cardLink.href = imageData.url || "https://windsorgreetings.printful.me/";
    } else {
        console.error("Element with id 'printful' not found in the DOM.");
    }
}


// Variable to keep track of the currently selected thumbnail
let selectedThumbnail = null;

// Function to update the front card background image and flip to front
function updateBackgroundImage(imageId) {
    const frontDiv = document.querySelector('.front');
    const card = document.querySelector('.flip');
    
    // Ensure the elements exist
    if (!frontDiv || !card) {
        console.error('Front card or flip element not found in the DOM.');
        return;
    }
    
    // Find the image data by ID in the imagesData array
    const imageData = imagesData.find(image => image.id === imageId.toString());
    
    if (imageData) {
        // Construct the image URL from the filename in the array
        const imageUrl = `img/${imageData.filename}.jpg`;
        
        // Update the background image
        frontDiv.style.backgroundImage = `url(${imageUrl})`;
        frontDiv.setAttribute('data-image-id', imageId); // Store the image ID
        updateCardAndUrl();
        
        // Pass the specific imageData object to updatePrintfulURL
        updatePrintfulURL(imageData);
        
        // Ensure the card flips to the front if it's currently on the back
        if (card.classList.contains('flipped')) {
            card.classList.remove('flipped');
        }

        // Handle thumbnail border changes
        const clickedThumbnail = document.getElementById(imageId);
        
        // Remove the border from the previously selected thumbnail, if any
        if (selectedThumbnail) {
            selectedThumbnail.style.border = 'none';
        }

        // Add a 2px grey border to the clicked thumbnail
        clickedThumbnail.style.border = '1px solid grey';

        // Set the clicked thumbnail as the new selected thumbnail
        selectedThumbnail = clickedThumbnail;

        
    } else {
        console.error(`Image with ID ${imageId} not found in imagesData`);
    }
}

// Function to hide elements with the 'hide' class
function hideElements() {
    const hideElements = document.querySelectorAll('.hide');
    hideElements.forEach(element => {
        element.style.display = 'none'; // Apply display: none;
    });
    document.getElementById('conditional-full-width').style.width = '100%';
}

// Set initial values from URL parameters when the page loads
function urlParams() {
    const params = getUrlParams();

    // Define default values
    const defaultParams = {
        to: '',
        from: '',
        message: '',
        imageId: '0', // Default image ID
        hideClass: 'false'
    };

    // Compare URL parameters with default values
    const isParamsDifferent = (
        params.to !== defaultParams.to ||
        params.from !== defaultParams.from ||
        params.message !== defaultParams.message ||
        params.imageId !== defaultParams.imageId ||
        params.hideClass !== defaultParams.hideClass
    );

    // Only update the card if the URL parameters differ from defaults
    if (isParamsDifferent) {
        // Update the card content
        document.getElementById('to').innerText = `To: ${params.to}`;
        document.getElementById('from').innerText = `From: ${params.from}`;
        document.getElementById('message').innerText = params.message;

        // Optional: Populate input fields with the current URL values
        document.getElementById('toInput').value = params.to !== '' ? params.to : '';
        document.getElementById('fromInput').value = params.from !== '' ? params.from : '';
        document.getElementById('messageInput').value = params.message !== '' ? params.message : '';

        // Load the image from URL parameters
        loadImageFromUrlParams(params.imageId); // Pass the imageId directly to the function
    }

    // Hide elements if the 'hide' parameter is true
    if (params.hideClass === 'true') {
        hideElements();
    }
}

// Function to load the image based on the image ID from URL parameters
function loadImageFromUrlParams(imageId) {
    // Find the image data by the image ID from the URL parameters
    const selectedImage = imagesData.find(image => image.id === imageId.toString()); // Ensure ID is a string

    if (selectedImage) {
        // Construct the image URL
        const imageUrl = `img/${selectedImage.filename}.jpg`;

        // Update the background image with the selected image data
        updateBackgroundImage(selectedImage.id);  // Pass the image ID to update the background
    } else {
        console.error(`Image with ID ${imageId} not found in imagesData.`);
    }
}

// Function to share on mobile or copy the current URL on desktop
function shareOrCopyUrl() {
    const currentUrl = window.location.href; // Get the full URL including parameters

    // Check if the device is mobile and Web Share API is supported
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile && navigator.share) {
        // If it's a mobile device and Web Share API is supported
        navigator.share({
            title: document.title,
            text: 'I sent you a little something from Windsor Greetings.',
            url: currentUrl
        })
        .then(() => console.log('URL shared successfully!'))
        .catch(err => console.error('Failed to share the URL: ', err));
    } else {
        // On desktop or if Web Share API is unavailable, copy the URL to clipboard
        navigator.clipboard.writeText(currentUrl)
        .then(() => {
            // Show the copied message
            const copiedMessage = document.querySelector('.copied');
            copiedMessage.style.display = 'block';

            // Hide the message after 1.5 seconds
            setTimeout(() => {
                copiedMessage.style.display = 'none';
            }, 1500); // 1.5 seconds
        })
        .catch(err => console.error('Failed to copy the URL: ', err));
    }
}


//Display "copied url" message after button click
function copyUrlToClipboard() {
    // Copy URL to clipboard
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);

    // Show the copied message
    const copiedMessage = document.querySelector('.copied');
    copiedMessage.style.display = 'block';

    // Hide the message after 1.5 seconds
    setTimeout(() => {
        copiedMessage.style.display = 'none';
    }, 2000); // 1.5 seconds
}

window.onload = function() {
    displayImages();
    urlParams();
};