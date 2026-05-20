# CV Website - Setup Instructions

## 🚀 HOW TO MAKE THE WEBSITE WORK

### STEP 1: File Structure
Ensure you have ALL these files in the SAME folder:
```
📁 CV-Website/
├── index.html
├── personal-info.html  
├── skills.html
├── education.html
├── work-experience.html
├── projects.html
├── contact.html
├── script.js
├── styles.css
├── style_home.css
└── Coder.jpg
```

### STEP 2: Opening the Website
1. Navigate to the folder containing the files
2. **DOUBLE-CLICK on "index.html"** (NOT the folder)
3. Wait for the page to load completely

### STEP 3: Testing the PIN System
1. Click "Personal Info" in the navigation menu
2. Fill out the form with your information
3. Click "Save" button
4. A PIN dialog should appear - enter **2580**
5. Click "Submit" - your data will be saved and displayed

### STEP 4: Testing Data Persistence
1. Close the browser completely
2. Re-open index.html
3. Go to "Personal Info" again
4. Your data should still be visible
5. Click "Edit" to modify (requires PIN again)

## 🔧 TROUBLESHOOTING

### If PIN doesn't appear:
- Check browser console for errors (F12 → Console)
- Make sure script.js is in the same folder
- Try a different browser (Chrome recommended)

### If data doesn't save:
- Check browser allows localStorage
- Don't use Incognito/Private mode
- Ensure you entered the correct PIN: 2580

### If website looks broken:
- Verify ALL files are present
- Check file names match exactly (case-sensitive)
- Open index.html directly, not through a file manager

## 📱 MOBILE TESTING
Test on mobile by:
1. Using browser's mobile view (F12 → Toggle device toolbar)
2. Or uploading to a web server and accessing from phone

## 🔐 PIN INFORMATION
- **PIN**: 2580
- Required for: Save, Edit, Delete operations
- Not required for: Viewing data

## 💾 DATA STORAGE
- Data saves to browser's localStorage
- Works across devices on same browser
- Clearing browser data will remove saved information