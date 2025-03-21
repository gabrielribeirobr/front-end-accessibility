
            const button = document.getElementById("toggleMenu");
            const menu = document.getElementById("menu");
    
            button.addEventListener("click", () => {
                const isExpanded = button.getAttribute("aria-expanded") === "true";
                
                button.setAttribute("aria-expanded", !isExpanded);
                menu.setAttribute("aria-hidden", isExpanded);
            });
        