// document.addEventListener('DOMContentLoaded', function () {
//     var toggler = document.querySelector('.navbar-toggler');
//     var navbarCollapse = document.querySelector('.navbar-collapse');

//     // Toggle navbar on click
//     toggler.addEventListener('click', function () {
//         this.classList.toggle('active');
//         navbarCollapse.classList.toggle('active');
//     });

//     // Clicking outside the navbar to close it
//     document.addEventListener('click', function (event) {
//         var isClickInsideNavbar = toggler.contains(event.target) || navbarCollapse.contains(event.target);
//         if (!isClickInsideNavbar && navbarCollapse.classList.contains('active')) {
//             toggler.classList.remove('active');
//             navbarCollapse.classList.remove('active');
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownContent = document.querySelector(".dropdown-content");
    const dropdownArrow = document.querySelector(".dropdown-btn i");

    dropdownBtn.addEventListener("click", function () {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        dropdownArrow.style.transform = dropdownArrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
    });

    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });

    const dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const selectedValue = item.getAttribute("data-value");
            dropdownBtn.textContent = item.textContent;
            dropdownContent.style.display = "none";

            // Add your logic for handling the selected value here
            console.log("Selected Value:", selectedValue);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.getElementById('sidebar');
    var sidebarToggle = document.querySelectorAll('#sidebar-toggle');
    sidebarToggle.forEach((sidebarToggleBtn) => {
        sidebarToggleBtn.onclick = function () {
            console.log('click')
            sidebar.classList.toggle('active');
        };
    })

    var menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function (item) {
        // Event listener for the main menu item
        var mainAnchor = item.querySelector('a:not(.submenu a)');
        mainAnchor.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            toggleSubMenu(item); // Toggle the submenu

        });

        // Event listeners for submenu items
        var submenuItems = item.querySelectorAll('.submenu a');
        submenuItems.forEach(function (subItem) {
            subItem.addEventListener('click', function (event) {
                event.stopPropagation(); // Stop event from bubbling up to the main menu item
            });
        });
    });

    function toggleSubMenu(menuItem) {
        var submenu = menuItem.querySelector('.submenu');
        const active = menuItem.querySelector("a")
        active.classList.toggle('active')
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        var arrowIcon = menuItem.querySelector('i:nth-child(2)');
        arrowIcon.style.transform = arrowIcon.style.transform === "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";

    }
});


function sortTable(columnIndex) {
    const table = document.getElementById("dataTable");
    let rows, switching, i, x, y, shouldSwitch, direction, switchCount = 0;
    switching = true;
    // Set the sorting direction to ascending:
    direction = "asc";
    // Make a loop that will continue until no switching has been done:
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        // Loop through all table rows (except the first, which contains table headers):
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            // Get the two elements you want to compare, one from current row and one from the next:
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
            // Check if the two rows should switch place, based on the direction, asc or desc:
            if (direction == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (direction == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            // If a switch has been marked, make the switch and mark that a switch has been done:
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchCount++;
        } else {
            // If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.
            if (switchCount == 0 && direction == "asc") {
                direction = "desc";
                switching = true;
            }
        }
    }
}

// Filtering functionality
document.getElementById('filterInput').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let tableBody = document.getElementById("tableBody");
    let tr = tableBody.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0]; // Column 0 is 'Name'
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});