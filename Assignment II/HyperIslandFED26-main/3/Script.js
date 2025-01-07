document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Advanced Styling Function
    function applyGlobalStyles() {
        // Color Palette
        const colors = {
            primary: '#3498db',
            secondary: '#2ecc71',
            background: '#f4f6f7',
            text: '#2c3e50',
            border: '#bdc3c7'
        };

        // Global Form Styling
        Object.assign(form.style, {
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            maxWidth: '600px',
            margin: '40px auto',
            padding: '30px',
            backgroundColor: colors.background,
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            border: `1px solid ${colors.border}`,
            position: 'relative',
            transition: 'all 0.3s ease',
            boxSizing: 'border-box' // Prevent border from adding to total width
        });

        // Hover Effect
        form.addEventListener('mouseenter', () => {
            form.style.transform = 'scale(1.01)';
            form.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
        });

        form.addEventListener('mouseleave', () => {
            form.style.transform = 'scale(1)';
            form.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
        });
    }

    // Input Styling with Advanced Effects
    function styleInputs() {
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            Object.assign(input.style, {
                width: '100%',
                padding: '10px 15px',
                margin: '8px 0 15px 0', // Adjusted margin
                border: '1px solid #bdc3c7', // Thinner border
                borderRadius: '6px', // Slightly reduced radius
                fontSize: '16px',
                transition: 'all 0.3s ease',
                outline: 'none',
                boxSizing: 'border-box' // Prevent border from adding to total width
            });

            // Focus and Hover Effects
            input.addEventListener('focus', () => {
                input.style.borderColor = '#3498db';
                input.style.boxShadow = '0 0 8px rgba(52,152,219,0.2)';
            });

            input.addEventListener('blur', () => {
                input.style.borderColor = '#bdc3c7';
                input.style.boxShadow = 'none';
            });
        });

        // Special handling for radio buttons
        const radioInputs = document.querySelectorAll('input[type="radio"]');
        radioInputs.forEach(radio => {
            radio.style.width = 'auto';
            radio.style.margin = '0 5px 0 0';
        });
    }

    // Enhanced Submit Button
    function createSubmitButton() {
        const submitButton = document.querySelector('input[type="submit"]');
        Object.assign(submitButton.style, {
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '12px 25px',
            borderRadius: '25px',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            width: 'auto', // Adjust width
            display: 'block',
            margin: '20px auto 0' // Center the button
        });

        // Button Hover and Click Effects
        submitButton.addEventListener('mouseenter', () => {
            submitButton.style.backgroundColor = '#2980b9';
            submitButton.style.transform = 'translateY(-2px)';
        });

        submitButton.addEventListener('mouseleave', () => {
            submitButton.style.backgroundColor = '#3498db';
            submitButton.style.transform = 'translateY(0)';
        });
    }

    // Label Styling
    function styleLabelAndUpdateText() {
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            Object.assign(label.style, {
                display: 'block',
                marginBottom: '5px',
                color: '#2c3e50',
                fontWeight: '600',
                fontSize: '14px'
            });
        });

        // Update Label Texts
        const labelMappings = {
            'name': 'Full Name',
            'email': 'Email Address',
            'phone': 'Contact Number',
            'message': 'Your Message',
            'options': 'Select Option'
        };

        Object.entries(labelMappings).forEach(([id, text]) => {
            const label = document.querySelector(`label[for="${id}"]`);
            if (label) label.textContent = text;
        });
    }

    // Form Validation
    function setupFormValidation() {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = 'red';
                    input.style.boxShadow = '0 0 5px rgba(255,0,0,0.3)';
                    isValid = false;
                } else {
                    input.style.borderColor = '#2ecc71';
                    input.style.boxShadow = 'none';
                }
            });

            if (isValid) {
                alert('Form Submitted Successfully! 🎉');
                form.reset();
                // Reset border colors after submission
                inputs.forEach(input => {
                    input.style.borderColor = '#bdc3c7';
                });
            } else {
                alert('Please fill all required fields correctly.');
            }
        });
    }

    // Initialize All Styling Functions
    function initializeFormStyling() {
        applyGlobalStyles();
        styleInputs();
        createSubmitButton();
        styleLabelAndUpdateText();
        setupFormValidation();
    }

    // Run Initialization
    initializeFormStyling();
});
