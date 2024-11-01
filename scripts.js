// Array of arrays to hold image data
const imagesData = [
    {category: "default", filename: "choose_a_design", alt: "Choose A Design", id: "0", classes: "thumb img-thumbnail default_image"},
    {category: "birthday", filename: "birthday_balloon_cake", alt: "Birthday - Balloon Cake", id: "1", classes: "thumb img-thumbnail"},
    {category: "birthday", filename: "birthday_cupcake_cart", alt: "Birthday - Cupcake Cart", id: "2", classes: "thumb img-thumbnail"},
    {category: "birthday", filename: "birthday_cupcake_line_art", alt: "Birthday - Cupcake Line Art", id: "3", classes: "thumb img-thumbnail"},
    {category: "birthday", filename: "birthday_gift_box", alt: "Birthday - Gift Box", id: "4", classes: "thumb img-thumbnail"},
    {category: "birthday", filename: "birthday_happy_cake", alt: "Birthday - Happy Cake", id: "5", classes: "thumb img-thumbnail"},
    {category: "birthday", filename: "birthday_owl", alt: "Birthday - Owl", id: "6", classes: "thumb img-thumbnail"},
    {category: "birthday", filename: "birthday_unicorn", alt: "Birthday - Unicorn", id: "7", classes: "thumb img-thumbnail"},
    {category: "birthday", filename: "birthday_wreath", alt: "Birthday - Wreath", id: "8", classes: "thumb img-thumbnail"},
    {category: "halloween", filename: "halloween_jackolanterns", alt: "Halloween - Jackolanterns", id: "9", classes: "thumb img-thumbnail"},
    {category: "halloween", filename: "halloween_haunted_hill", alt: "Halloween - Haunted Hill", id: "10", classes: "thumb img-thumbnail"},
    {category: "halloween", filename: "halloween_jackolantern_and_skull", alt: "Halloween - Jackolantern and Skull", id: "11", classes: "thumb img-thumbnail"},
    {category: "halloween", filename: "halloween_kitty", alt: "Halloween - Kitty", id: "12", classes: "thumb img-thumbnail"},
    {category: "thank_you", filename: "thank_you_bouquet", alt: "Thank You - Bouquet", id: "13", classes: "thumb img-thumbnail"},
    {category: "thank_you", filename: "thank_you_hand_heart", alt: "Thank You - Hand Heart", id: "14", classes: "thumb img-thumbnail"},
    {category: "thank_you", filename: "thank_you_heart_and_roses", alt: "Thank You - Heart and Roses", id: "15", classes: "thumb img-thumbnail"},
    {category: "thank_you", filename: "thank_you_watercolor_landscape", alt: "Thank You - Watercolor Landscape", id: "16", classes: "thumb img-thumbnail"},
    {category: "thank_you", filename: "thank_you_sun", alt: "Thank You - Sun", id: "17", classes: "thumb img-thumbnail"},
    {category: "thank_you", filename: "thank_you_sunrise", alt: "Thank You - Sunrise", id: "18", classes: "thumb img-thumbnail"},
    {category: "thank_you", filename: "thank_you_unicorn", alt: "Thank You - Unicorn", id: "19", classes: "thumb img-thumbnail"},
    {category: "thank_you", filename: "thank_you_elephant", alt: "Thank You - Elephant", id: "20", classes: "thumb img-thumbnail"},
    {category: "hanukkah", filename: "hanukkah_clay", alt: "Hanukkah - Clay", id: "21", classes: "thumb img-thumbnail"},
    {category: "hanukkah", filename: "hanukkah_snowy_menorah", alt: "Hanukkah - Snowy Menorah", id: "22", classes: "thumb img-thumbnail"},
    {category: "christmas", filename: "christmas_vintage_vector", alt: "Christmas - Vintage Vector", id: "23", classes: "thumb img-thumbnail"},
    {category: "christmas", filename: "christmas_santa_cottage", alt: "Christmas - Santa Cottage", id: "24", classes: "thumb img-thumbnail"},
    {category: "thanksgiving", filename: "thanksgiving_turkey_barrel", alt: "Thanksgiving - Turkey Barrel", id: "25", classes: "thumb img-thumbnail"},
    {category: "thanksgiving", filename: "thanksgiving_turkey_on_pumpkin", alt: "Thanksgiving - Turkey on Pumpkin", id: "26", classes: "thumb img-thumbnail"},
    {category: "christmas", filename: "christmas_sleigh_and_cottage", alt: "Christmas - Sleigh and Cottage", id: "27" , classes: "thumb img-thumbnail"},
    {category: "christmas", filename: "christmas_home_and_tree", alt: "Christmas - Home and Tree", id: "28" , classes: "thumb img-thumbnail"},
    {category: "congratulations", filename: "congrautlations_hands_up", alt: "Congratulations - Hands Up", id: "29" , classes: "thumb img-thumbnail"},
    {category: "congratulations", filename: "congratulations_sip_sip_hooray", alt: "Congratulations - Sip Sip, Hooray", id: "30" , classes: "thumb img-thumbnail"},
    {category: "graduation", filename: "graduation_congratulations_cap", alt: "Graduation - Congratulations Cap", id: "31" , classes: "thumb img-thumbnail"},
    {category: "thanksgiving", filename: "thanksgiving_stoic_turkey", alt: "Thanksgiving - Stoic Turkey", id: "32" , classes: "thumb img-thumbnail"},
    {category: "thanksgiving", filename: "thanksgiving_turkey_cornicopia", alt: "Thanksgiving - Turkey Cornicopia", id: "33" , classes: "thumb img-thumbnail"},
    {category: "congratulations", filename: "congratulations_splat", alt: "Congratulations - Splat", id: "34" , classes: "thumb img-thumbnail"},
    {category: "just_because", filename: "just_because_mouse", alt: "Just Because - Mouse", id: "36" , classes: "thumb img-thumbnail"},
    {category: "just_because", filename: "just_because_thinking_of_you_bear", alt: "Just Because - Thinking of You Bear", id: "37" , classes: "thumb img-thumbnail"},
    {category: "just_because", filename: "just_because_house_on_a_hill", alt: "Just Because - House On A Hill", id: "38" , classes: "thumb img-thumbnail"},
    {category: "just_because", filename: "just_because_thinking_of_you_couple", alt: "Just Because - Thinking of You Couple", id: "39" , classes: "thumb img-thumbnail"},
    {category: "just_because", filename: "just_because_thinking_of_you_stars_and_sun", alt: "Just Because - Thinking of Stars and Sun", id: "40" , classes: "thumb img-thumbnail"},
    {category: "thank_you", filename: "thank_you_fox", alt: "Thank You - Fox", id: "41" , classes: "thumb img-thumbnail"},
    {category: "thank_you", filename: "thank_you_cute_critters", alt: "Thank You - Cute Critters", id: "42" , classes: "thumb img-thumbnail"},
    {category: "thank_you", filename: "thank_you_critters", alt: "Thank You - Critters", id: "43" , classes: "thumb img-thumbnail"},
    {category: "thanksgiving", filename: "thanksgiving_turkey_fence", alt: "Thanksgiving - Turkey Fence", id: "44" , classes: "thumb img-thumbnail"},
    {category: "just_because", filename: "just_because_autumn_lake", alt: "Just Because - Autumn Lake", id: "45" , classes: "thumb img-thumbnail"},
    {category: "thank_you", filename: "thank_you_bouquet_and_sun", alt: "Thank You - Bouquet and Sun", id: "46", classes: "thumb img-thumbnail"},
    {category: "sympathy", filename: "sympathy_cherry_blossom", alt: "Sympathy - Cherry Blossom", id: "47", classes: "thumb img-thumbnail"},


];

let activeButton = null; // To track the currently active button

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
        .filter(image => !category || image.category === category)
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

// Function to handle button style changes
function updateButtonStyles(clickedButtonId) {
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach((button) => {
        if (button.id === clickedButtonId) {
            // Make the clicked button solid
            button.classList.remove('btn-outline-secondary');
            button.classList.add('btn-secondary');
        } else {
            // Revert others back to outlined
            button.classList.remove('btn-secondary');
            button.classList.add('btn-outline-secondary');
        }
    });
}

function handleButtonClick(category, buttonId, event) {
    event.preventDefault(); // Prevent page scroll

    if (activeButton === buttonId) {
        // If the clicked button is already active, reset the filter to show all images
        displayImages();
        updateButtonStyles(null); // Revert all buttons to outlined
        activeButton = null; // No active button anymore
    } else {
        // Set the new active button and display filtered images
        displayImages(category);
        updateButtonStyles(buttonId);
        activeButton = buttonId; // Set the new active button
    }
}


document.getElementById('birthday').addEventListener('click', function(event) {
    handleButtonClick('birthday', 'birthday', event); // Pass event to the function
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
        updateCardAndUrl(); // Assuming this updates the card's URL and other details
        
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

// Function to copy the current URL with parameters to the clipboard
/*
function copyUrlToClipboard() {
    const currentUrl = window.location.href; // Get the full URL including parameters

    // Copy the URL to the clipboard
    navigator.clipboard.writeText(currentUrl).catch(err => {
        console.error('Failed to copy the URL: ', err);
    });
}
*/
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