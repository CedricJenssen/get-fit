let selectedLevel = "";
    
        function setLevel(level) {
            selectedLevel = level;

    // Hide the level buttons
            const levelButtons = document.querySelector('.buttons');
            levelButtons.style.opacity = "0"; // Fade out effect
            setTimeout(() => {
            levelButtons.classList.add('hidden'); // Completely hide after fade out
            }, 300); // Duration matches CSS transition (300ms)

    // Show the muscle group options
            const muscleOptions = document.getElementById('muscle-options');
            muscleOptions.style.opacity = "0"; // Start hidden for transition
            muscleOptions.classList.remove('hidden');
            muscleOptions.classList.add('visible');
            setTimeout(() => {
            muscleOptions.style.opacity = "1"; // Fade in effect
            }, 300);
        }
    
        function finalOutput(muscleGroup) {
          // Generate the final result based on the level and muscle group
          const resultText = `You chose the ${selectedLevel} level and are focusing on ${muscleGroup}. Here's your personalized workout plan!`;
    
          // Display the result
          const resultDiv = document.getElementById('result');
          document.getElementById('output').textContent = resultText;
          resultDiv.classList.remove('hidden');
    
          // Hide the muscle group options
          document.getElementById('muscle-options').classList.add('hidden');
        }