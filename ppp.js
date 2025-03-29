      // Function to show the popup after a delay
        window.onload = function() {
            setTimeout(() => {
                document.getElementById("popup").classList.add("show");
            }, 2000);
        };

        // Function to close the popup
        function closePopup() {
            document.getElementById("popup").classList.remove("show");
        }