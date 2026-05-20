// Centralized CV Website Data Management with PIN Protection
const CV_STORAGE = {
    PIN: '2580',
    SESSION_KEY: 'cvSession',
    STORAGE_KEYS: {
        personalInfo: 'cv_personalInfo',
        skills: 'cv_skills', 
        education: 'cv_education',
        workExperience: 'cv_workExperience',
        projects: 'cv_projects'
    }
};

// PIN Authentication System
class CVAuthManager {
    static isAuthenticated() {
        // Always check - never store session for editing
        return false; // Always require PIN for any modification
    }

    static authenticate() {
        return new Promise((resolve) => {
            this.showPinDialog(resolve);
        });
    }

    static showPinDialog(callback) {
        // Remove existing dialog if any
        const existingDialog = document.getElementById('cv-pin-dialog');
        if (existingDialog) {
            existingDialog.remove();
        }

        const dialog = document.createElement('div');
        dialog.id = 'cv-pin-dialog';
        dialog.innerHTML = `
            <div class="cv-pin-overlay">
                <div class="cv-pin-modal">
                    <h3>Enter PIN to Access Editing</h3>
                    <input type="password" id="cv-pin-input" placeholder="Enter PIN" maxlength="4">
                    <div class="cv-pin-buttons">
                        <button id="cv-pin-submit">Submit</button>
                        <button id="cv-pin-cancel">Cancel</button>
                    </div>
                    <p id="cv-pin-error" style="color: red; display: none; margin-top: 10px;">Invalid PIN. Access denied.</p>
                </div>
            </div>
        `;

        dialog.innerHTML += `
            <style>
                .cv-pin-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                }
                .cv-pin-modal {
                    background: white;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    text-align: center;
                    max-width: 400px;
                    width: 90%;
                }
                .cv-pin-modal h3 {
                    margin-bottom: 20px;
                    color: #333;
                }
                .cv-pin-modal input {
                    width: 100%;
                    padding: 12px;
                    margin: 10px 0;
                    border: 2px solid #ddd;
                    border-radius: 5px;
                    font-size: 16px;
                    box-sizing: border-box;
                }
                .cv-pin-buttons {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                    margin-top: 20px;
                }
                .cv-pin-buttons button {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 14px;
                }
                #cv-pin-submit {
                    background: #333;
                    color: white;
                }
                #cv-pin-cancel {
                    background: #ccc;
                    color: #333;
                }
                .cv-pin-buttons button:hover {
                    opacity: 0.8;
                }
            </style>
        `;

        document.body.appendChild(dialog);

        const pinInput = document.getElementById('cv-pin-input');
        const submitBtn = document.getElementById('cv-pin-submit');
        const cancelBtn = document.getElementById('cv-pin-cancel');
        const errorMsg = document.getElementById('cv-pin-error');

        const validatePin = () => {
            if (pinInput.value === CV_STORAGE.PIN) {
                dialog.remove();
                callback(true);
            } else {
                errorMsg.style.display = 'block';
                pinInput.value = '';
                setTimeout(() => {
                    errorMsg.style.display = 'none';
                }, 3000);
            }
        };

        submitBtn.addEventListener('click', validatePin);
        pinInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') validatePin();
        });

        cancelBtn.addEventListener('click', () => {
            dialog.remove();
            callback(false);
        });

        pinInput.focus();
    }

    static logout() {
        // Clear session - will require PIN next time
        sessionStorage.removeItem(CV_STORAGE.SESSION_KEY);
    }
}

// Data Management System
class CVDataManager {
    static saveData(key, data) {
        try {
            localStorage.setItem(CV_STORAGE.STORAGE_KEYS[key], JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving data:', error);
            return false;
        }
    }

    static loadData(key) {
        try {
            const data = localStorage.getItem(CV_STORAGE.STORAGE_KEYS[key]);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error loading data:', error);
            return null;
        }
    }

    static deleteData(key, id) {
        try {
            const data = this.loadData(key) || [];
            const updatedData = data.filter(item => item.id !== id);
            return this.saveData(key, updatedData);
        } catch (error) {
            console.error('Error deleting data:', error);
            return false;
        }
    }

    static updateData(key, id, newData) {
        try {
            const data = this.loadData(key) || [];
            const index = data.findIndex(item => item.id === id);
            if (index !== -1) {
                data[index] = { ...data[index], ...newData };
                return this.saveData(key, data);
            }
            return false;
        } catch (error) {
            console.error('Error updating data:', error);
            return false;
        }
    }
}

// Responsive Design Helper
class CVResponsiveHelper {
    static makeFormResponsive() {
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .container {
                    flex-direction: column !important;
                    align-items: center !important;
                    padding: 10px !important;
                    margin: 10px !important;
                }
                
                .form-container {
                    width: 95% !important;
                    max-width: 400px !important;
                }
                
                .display-container {
                    width: 95% !important;
                    max-width: 400px !important;
                }
                
                nav ul {
                    flex-wrap: wrap !important;
                    gap: 10px !important;
                    padding: 0 10px !important;
                }
                
                nav ul li a {
                    font-size: 14px !important;
                    padding: 5px 8px !important;
                }
                
                input[type="text"], input[type="date"], input[type="email"], input[type="url"], textarea {
                    font-size: 16px !important; /* Prevents zoom on iOS */
                }
            }
            
            @media (max-width: 480px) {
                .form-container, .display-container {
                    width: 100% !important;
                    margin: 5px !important;
                }
                
                nav ul {
                    gap: 5px !important;
                }
                
                nav ul li a {
                    font-size: 12px !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Export for use in other scripts
window.CVStorage = CV_STORAGE;
window.CVAuthManager = CVAuthManager;
window.CVDataManager = CVDataManager;
window.CVResponsiveHelper = CVResponsiveHelper;