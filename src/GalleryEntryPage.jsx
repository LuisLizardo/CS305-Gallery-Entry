import React, { useState } from 'react';

const GalleryEntryPage = () => {
  // State variables to store user input
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const museums = ['Art Institute of Chicago', 'British Museum', 'Louvre', 'Met', 'MoMA'];
  // Add more state variables for artist, year, types, notes, and includeUrl
  // Note, types and entries should be an array ([])
  // Note, includeUrl should be a boolean (false)

  // This will be the function that will handle the logic for the checkboxes
    const handleCheckboxChange = (type) => {
        //if statement to check if the type is already selected/in the array 
        
          //if it is, set the types array to an empty array
          // Otherwise (else), select only the clicked type 
          //
        }
      //};
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Create an object to store the current entry
    const entry = {
      imageUrl,
      title,
      museums,
      // Add more properties for artist, year, types, notes, and includeUrl
    };
    
    // Log the entry to the console (for now)
    console.log(entry);

    // Clear the form fields (reset state variables)
    setImageUrl('');
    setTitle('');
    setMuseum('');
    // Reset state variables for artist, year, museum, types, notes, and includeUrl
  };

  return (
    <div>
        <h1>Art Gallery Entry</h1>
      {/* Form for user input */}
      <form onSubmit={handleSubmit}>
        {/* Input field for Image URL */}
        <label>
          Image URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
          />
        </label>
        <br />

        {/* Input field for Title */}
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </label>
        <br />
        {/* Input field for Artist */}
        {/* Input field for Year */}
        {/* Input field for Museum */}
        {/* Input field for Types */}
        {/* Input field for includeUrl */}
        <br />
        {/* Add more input fields for artist, year, museum, types, notes, and includeUrl */}
        {/* Remember to connect each input field to its respective state variable and provide placeholder text */}

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>

      {/* Section for displaying entries */}
      <div>
        <h2>Entries</h2>

        {/* Display entries here */}
        {/* Hint: Map over the entries array and render each entry */}
      </div>
    </div>
  );
};

export default GalleryEntryPage;
