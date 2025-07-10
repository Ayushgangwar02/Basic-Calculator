# Basic Calculator

A simple, responsive web-based calculator built with HTML, CSS, JavaScript, and Bootstrap.

## Features

- ✨ Clean and modern user interface
- 🔢 Basic arithmetic operations (addition, subtraction, multiplication, division)
- 📱 Responsive design that works on all devices
- 🎨 Hover effects for better user experience
- 🧹 Clear function to reset calculations
- ⚡ Real-time input display

## Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling and layout
- **JavaScript** - Calculator logic and functionality
- **Bootstrap 5.3.7** - Responsive grid system and styling
- **Git** - Version control

## Project Structure

```
Basic-Calculator/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── script.js           # JavaScript functionality
├── package.json        # Node.js dependencies
├── package-lock.json   # Dependency lock file
└── README.md           # Project documentation
```

## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ayushgangwar02/Basic-Calculator.git
   cd Basic-Calculator
   ```

2. **Open the calculator:**
   - Simply open `index.html` in your web browser
   - Or use a live server for development

3. **Using the calculator:**
   - Click number buttons (0-9) to input numbers
   - Click operator buttons (+, -, *, /) to perform operations
   - Click the "=" button to calculate the result
   - Click "Clear" to reset the calculator

## Features in Detail

### User Interface
- **Input Display**: Shows the current expression being entered
- **Result Display**: Shows the calculated result with "ANS" placeholder
- **Button Grid**: Organized layout with numbers, operators, and functions

### Functionality
- **Number Input**: Click any number (0-9) to build your expression
- **Operations**: Supports addition (+), subtraction (-), multiplication (*), and division (/)
- **Calculate**: Press "=" to evaluate the expression
- **Clear**: Reset both input and result fields
- **Error Handling**: Displays "Error" for invalid expressions

### Styling
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Hover Effects**: Buttons turn yellow when hovered over
- **Bootstrap Integration**: Uses Bootstrap's grid system for layout
- **Custom CSS**: Additional styling for calculator-specific elements

## Code Structure

### HTML (`index.html`)
- Bootstrap CDN integration
- Calculator container with responsive grid
- Input fields for expression and result
- Button grid using Bootstrap columns

### CSS (`style.css`)
- Calculator container centering
- Button styling and hover effects
- Responsive design adjustments

### JavaScript (`script.js`)
- `handleclichButton()`: Handles number and operator input
- `calculate()`: Evaluates expressions using eval()
- `clearResult()`: Resets calculator state
- Error handling for invalid expressions

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Add more advanced operations (square root, percentage, etc.)
- [ ] Add keyboard support
- [ ] Add calculation history
- [ ] Add themes/dark mode
- [ ] Add memory functions (M+, M-, MR, MC)
- [ ] Add scientific calculator mode

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Ayush Gangwar**
- GitHub: [@Ayushgangwar02](https://github.com/Ayushgangwar02)

## Acknowledgments

- Bootstrap team for the excellent CSS framework
- Thanks to the open-source community for inspiration

---

⭐ If you found this project helpful, please give it a star on GitHub!
