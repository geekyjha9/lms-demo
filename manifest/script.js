import { TemplateEngine } from "./templateEngine.js";
import { JsonToHtml } from "./jsonToHtml.js";

let docpageData = {
    "navItem": [
        { "imgSrc": "./assets/img/flag.png", "imgStyle": "width:2rem;", "imgClass": "flag" },
        { "imgSrc": "./assets/img/header-icon-05.svg", "imgClass": "bell" },
        { "imgSrc": "./assets/img/header-icon-04.svg", "imgClass": "full" },
        { "imgSrc": "./assets/img/avatar-01.jpg", "imgStyle": "width:2rem;" }
    ],
    "dropdownItem": [
        { "dataValue": "option1", "content": "My Profile" },
        { "dataValue": "option2", "content": "Inbox" },
        { "dataValue": "option3", "content": "Logout" }
    ],
    "dashboardItem": [
        { "title": "All Courses", "progress": "04/06", "imgSrc": "./assets/img/teacher-icon-01.svg" },
        { "title": "All Projects", "progress": "40/60", "imgSrc": "./assets/img/teacher-icon-02.svg" },
        { "title": "Test Attended", "progress": "30/50", "imgSrc": "./assets/img/student-icon-01.svg" },
        { "title": "Test Passed", "progress": "15/20", "imgSrc": "./assets/img/student-icon-02.svg" }
    ],
    "dashboards": [
        {
            "dashboardType": "Admin"
        },
        {
            "dashboardType": "Teacher"
        },
        {
            "dashboardType": "Student"
        }
    ],
    "studentItem": [
        {
            "studentAction": "List"
        },
        {
            "studentAction": "View"
        },
        {
            "studentAction": "Add"
        },
        {
            "studentAction": "Edit"
        },
    ],
    "sidebarItems1": [
        {
            "iconClass1": "fa-solid fa-chalkboard-user",
            "menuItem": "Teachers"
        },
        {
            "iconClass1": "fa-solid fa-building",
            "menuItem": "Departments"
        },
        {
            "iconClass1": "fa-solid fa-book-open-reader",
            "menuItem": "Subjects"
        },
        {
            "iconClass1": "fa-solid fa-receipt",
            "menuItem": "Invoices"
        }
    ],
    "sidebarItems2": [
        {
            "iconClass1": "fa-solid fa-receipt",
            "menuItem": "Accounts"
        },
        {
            "iconClass1": "fa-solid fa-holly-berry",
            "menuItem": "Holiday"
        },
        {
            "iconClass1": "fa-solid fa-comment-dollar",
            "menuItem": "Fees"
        },
        {
            "iconClass1": "fa-solid fa-clipboard-list",
            "menuItem": "Exam List"
        },
        {
            "iconClass1": "fa-solid fa-calendar-day",
            "menuItem": "Events"
        },
        {
            "iconClass1": "fa-solid fa-table",
            "menuItem": "Time Table"
        },
        {
            "iconClass1": "fa-solid fa-book",
            "menuItem": "Library"
        },
        {
            "iconClass1": "fa-solid fa-newspaper",
            "menuItem": "Blogs"
        },
        {
            "iconClass1": "fa-solid fa-cog",
            "menuItem": "Settings"
        },
        {
            "iconClass1": "fa-solid fa-shield-alt",
            "menuItem": "Authentication"
        },
        {
            "iconClass1": "fa-solid fa-file",
            "menuItem": "Blank Page"
        },
        {
            "iconClass1": "fa-solid fa-baseball-ball",
            "menuItem": "Sports"
        },
        {
            "iconClass1": "fa-solid fa-hotel",
            "menuItem": "Hostel"
        },
        {
            "iconClass1": "fa-solid fa-receipt",
            "menuItem": "Transport"
        },
        {
            "iconClass1": "fa-solid fa-receipt",
            "menuItem": "Base UI"
        },
        {
            "iconClass1": "fa-solid fa-receipt",
            "menuItem": "Elements"
        },
    ],


}
    ;

const docPageTemplate = {
    "tag": "div",
    "children": [
        {
            "tag": "div",
            "attributes": {
                "class": "sidebar",
                "id": "sidebar"
            },
            "children": [
                {
                    "tag": "button",
                    "attributes": {
                        "class": "sidebar-toggle"
                    },
                    "content": "☰"
                },
                {
                    "tag": "ul",
                    "attributes": {
                        "class": "sidebar-menu"
                    },
                    "children": [
                        {
                            "tag": "li",
                            "attributes": {
                                "class": "menu-item"
                            },
                            "children": [
                                {
                                    "tag": "a",
                                    "attributes": {
                                        "href": "#"
                                    },
                                    "content": "Main Menu"
                                }
                            ]
                        },
                        {
                            "tag": "li",
                            "attributes": {
                                "class": "menu-item"
                            },
                            "children": [
                                {
                                    "tag": "a",
                                    "attributes": {
                                        "href": "#"
                                    },
                                    "children": [
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "fa-solid fa-table-cells-large"
                                            }
                                        },
                                        {
                                            "tag": "span",
                                            "content": " Dashboard"
                                        },
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "fa-solid fa-chevron-right"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "tag": "ul",
                                    "attributes": {
                                        "class": "submenu"
                                    },
                                    "children": [
                                        {
                                            "tag": "li",
                                            "repeat": "dashboards",
                                            "children": [
                                                {
                                                    "tag": "a",
                                                    "attributes": {
                                                        "href": "#"
                                                    },
                                                    "content": "{{dashboardType}} Dashboard"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tag": "li",
                            "attributes": {
                                "class": "menu-item"
                            },
                            "children": [
                                {
                                    "tag": "a",
                                    "attributes": {
                                        "href": "#"
                                    },
                                    "children": [
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "fa-solid fa-graduation-cap"
                                            }
                                        },
                                        {
                                            "tag": "span",
                                            "content": " Students"
                                        },
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "fa-solid fa-chevron-right"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "tag": "ul",
                                    "attributes": {
                                        "class": "submenu"
                                    },
                                    "children": [
                                        {
                                            "tag": "li",
                                            "repeat": "studentItem",
                                            "children": [
                                                {
                                                    "tag": "a",
                                                    "attributes": {
                                                        "href": "#"
                                                    },
                                                    "content": "Students {{studentAction}}"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tag": "li",
                            "attributes": {
                                "class": "menu-item"
                            },
                            "repeat": "sidebarItems1",
                            "children": [
                                {
                                    "tag": "a",
                                    "attributes": {
                                        "href": "#"
                                    },
                                    "children": [
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "{{iconClass1}}"
                                            }
                                        },
                                        {
                                            "content": "{{menuItem}}"
                                        },
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "fa-solid fa-chevron-right"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tag": "li",
                            "attributes": {
                                "class": "menu-item"
                            },
                            "children": [
                                {
                                    "tag": "a",
                                    "attributes": {
                                        "href": "#"
                                    },
                                    "content": "Main Menu"
                                }
                            ]
                        },
                        {
                            "tag": "li",
                            "attributes": {
                                "class": "menu-item"
                            },
                            "repeat": "sidebarItems2",
                            "children": [
                                {
                                    "tag": "a",
                                    "attributes": {
                                        "href": "#"
                                    },
                                    "children": [
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "{{iconClass1}}"
                                            }
                                        },
                                        {
                                            "content": "{{menuItem}}"
                                        },
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "fa-solid fa-chevron-right"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "tag": "nav",
            "attributes": {
                "class": "navbar"
            },
            "children": [
                {
                    "tag": "div",
                    "attributes": {
                        "class": "navbar-collapse"
                    },
                    "children": [
                        {
                            "tag": "img",
                            "attributes": {
                                "src": "./assets/img/logo.png",
                                "class": "logo"
                            }
                        },
                        {
                            "tag": "button",
                            "attributes": {
                                "class": "navbar-toggler",
                                "id": "sidebar-toggle",
                                "type": "button"
                            },
                            "content": "☰"
                        },
                        {
                            "tag": "form",
                            "attributes": {
                                "class": "navbar-search"
                            },
                            "children": [
                                {
                                    "tag": "i",
                                    "attributes": {
                                        "class": "fa-solid fa-magnifying-glass"
                                    }
                                },
                                {
                                    "tag": "input",
                                    "attributes": {
                                        "type": "search",
                                        "placeholder": "Search..."
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "tag": "img",
                    "attributes": {
                        "src": "./assets/img/logo-small.png",
                        "style": "width:2rem;",
                        "class": "smallLogo"
                    }
                },
                {
                    "tag": "div",
                    "attributes": {
                        "class": "navbar-collapse"
                    },
                    "children": [
                        {
                            "tag": "ul",
                            "attributes": {
                                "class": "navbar-nav"
                            },
                            "children": [
                                {
                                    "tag": "li",
                                    "repeat": "navItem",
                                    "attributes": {
                                        "class": "nav-item"
                                    },
                                    "children": [
                                        {
                                            "tag": "img",
                                            "attributes": {
                                                "src": "{{imgSrc}}",
                                                "style": "{{imgStyle}}",
                                                "class": "{{imgClass}}"
                                            }
                                        }
                                    ]
                                },
                                
                        {
                            "tag": "li",
                            "attributes": {
                                "class": "nav-item dropdown"
                            },
                            "children": [
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "dropdown"
                                    },
                                    "children": [
                                        {
                                            "tag": "button",
                                            "attributes": {
                                                "class": "dropdown-btn"
                                            },
                                            "content": "Rahul Raj ",
                                            "children": [
                                                {
                                                    "tag": "i",
                                                    "attributes": {
                                                        "class": "fa-solid fa-chevron-down"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "dropdown-content"
                                            },
                                            "repeat": "dropdownItem",
                                            "children": [
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "dropdown-item",
                                                        "data-value": "{{dataValue}}"
                                                    },
                                                    "content": "{{content}}"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "tag": "div",
            "attributes": {
                "class": "page",
            },
            "children": [
                {
                    "tag": "div",
                    "attributes": {
                        "class": "main",
                    },
                    "children": [
                        {
                            "tag": "div",
                            "attributes": {
                                "class": "heading"
                            },
                            "children": [
                                {
                                    "tag": "h3",
                                    "content": "Welcome Vikas!"
                                },
                                {
                                    "tag": "div",
                                    "attributes":{
                                        "class":"breadcrumbs"
                                    },
                                    "children": [
                                        {
                                            "tag": "a",
                                            "attributes":{
                                                "href":"#"
                                            },
                                            "content": "Home "
                                        },
                                        {
                                            "tag": "span",
                                            "attributes":{
                                                "class":"separator"
                                            },
                                            "content": "/"
                                        },
                                        {
                                            "tag": "span",
                                            "attributes":{
                                                "class":"current"
                                            },
                                            "content": "Student Dashboard"
                                        },
                                        
                                    ]
                                }
                            ]
                        },
                        {
                            "tag": "div",
                            "attributes": {
                                "class": "details"
                            },
                            "children": [
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "dash"
                                    },
                                    "repeat": "dashboardItem",
                                    "children": [
                                        {
                                            "tag": "div",
                                            "children": [
                                                {
                                                    "tag": "h5",
                                                    "content": "{{title}}"
                                                },
                                                {
                                                    "tag": "p",
                                                    "content": "{{progress}}"
                                                }
                                            ]
                                        },
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "dashImg"
                                            },
                                            "children": [
                                                {
                                                    "tag": "img",
                                                    "attributes": {
                                                        "src": "{{imgSrc}}"
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tag": "div",
                            "attributes": {
                                "class": "submain",
                            },
                            "children": [
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "section",
                                    },
                                    "children": [
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "section1"
                                            },
                                            "children": [
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "lesson"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "lessonHead"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "h2",
                                                                    "content": "Today's Lesson"
                                                                },
                                                                {
                                                                    "tag": "h4",
                                                                    "children": [
                                                                        {
                                                                            "tag": "i",
                                                                            "attributes": {
                                                                                "class": "fa-solid fa-ellipsis"
                                                                            }
                                                                        },
                                                                        {"content":" View All Courses "},
                                                                        {
                                                                            "tag": "i",
                                                                            "attributes": {
                                                                                "class": "fa-solid fa-ellipsis-vertical"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "lessondetails"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "div",
                                                                    "attributes": {
                                                                        "class": "percent"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "p",
                                                                            "content": "8"
                                                                        },
                                                                        {
                                                                            "tag": "p",
                                                                            "content": "0"
                                                                        },
                                                                        {
                                                                            "tag": "p",
                                                                            "content": "%"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "div",
                                                                    "attributes": {
                                                                        "class": "class"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "div",
                                                                            "attributes": {},
                                                                            "children": [
                                                                                {
                                                                                    "tag": "div",
                                                                                    "attributes": {},
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "i",
                                                                                            "attributes": {
                                                                                                "class": "fa-solid fa-display"
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "div",
                                                                                    "attributes": {
                                                                                        "class": "topic"
                                                                                    },
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "span",
                                                                                            "content": "Class"
                                                                                        },
                                                                                        {
                                                                                            "tag": "p",
                                                                                            "content": "Electrical Engg"
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "tag": "div",
                                                                            "attributes": {},
                                                                            "children": [
                                                                                {
                                                                                    "tag": "div",
                                                                                    "attributes": {},
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "i",
                                                                                            "attributes": {
                                                                                                "class": "fa-solid fa-book-open"
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "div",
                                                                                    "attributes": {},
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "span",
                                                                                            "content": "Lessons"
                                                                                        },
                                                                                        {
                                                                                            "tag": "p",
                                                                                            "content": "5 Lessons"
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "tag": "div",
                                                                            "attributes": {},
                                                                            "children": [
                                                                                {
                                                                                    "tag": "div",
                                                                                    "attributes": {},
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "i",
                                                                                            "attributes": {
                                                                                                "class": "fa-regular fa-clock"
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "div",
                                                                                    "attributes": {},
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "span",
                                                                                            "content": "Time"
                                                                                        },
                                                                                        {
                                                                                            "tag": "p",
                                                                                            "content": "Lessons"
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "div",
                                                                    "attributes": {
                                                                        "class": "class"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "div",
                                                                            "attributes": {},
                                                                            "children": [
                                                                                {
                                                                                    "tag": "div",
                                                                                    "attributes": {},
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "i",
                                                                                            "attributes": {
                                                                                                "class": "fa-regular fa-note-sticky"
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "div",
                                                                                    "attributes": {
                                                                                        "class": "topic"
                                                                                    },
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "span",
                                                                                            "content": "Assignment"
                                                                                        },
                                                                                        {
                                                                                            "tag": "p",
                                                                                            "content": "5 Assignment"
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "tag": "div",
                                                                            "attributes": {},
                                                                            "children": [
                                                                                {
                                                                                    "tag": "div",
                                                                                    "attributes": {},
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "i",
                                                                                            "attributes": {
                                                                                                "class": "fa-solid fa-user"
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "div",
                                                                                    "attributes": {},
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "span",
                                                                                            "content": "Staff"
                                                                                        },
                                                                                        {
                                                                                            "tag": "p",
                                                                                            "content": "Dhyanendra"
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "tag": "div",
                                                                            "attributes": {},
                                                                            "children": [
                                                                                {
                                                                                    "tag": "div",
                                                                                    "attributes": {},
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "i",
                                                                                            "attributes": {
                                                                                                "class": "fa-solid fa-book"
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "tag": "div",
                                                                                    "attributes": {},
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "span",
                                                                                            "content": "Lesson Learned"
                                                                                        },
                                                                                        {
                                                                                            "tag": "p",
                                                                                            "content": "10/50"
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "div",
                                                                    "attributes": {
                                                                        "class": "btns"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "div",
                                                                            "attributes": {
                                                                                "class": "btn1"
                                                                            },
                                                                            "content": "skip"
                                                                        },
                                                                        {
                                                                            "tag": "div",
                                                                            "attributes": {
                                                                                "class": "btn2"
                                                                            },
                                                                            "content": "Continue"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "section3"
                                            },
                                            "children": [
                                                {
                                                    "tag": "h2",
                                                    "content": "Teaching History"
                                                },
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "history"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "histDetails"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "p",
                                                                    "content": "Sep22"
                                                                },
                                                                {
                                                                    "tag": "div",
                                                                    "attributes": {
                                                                        "class": "histSub"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "h3",
                                                                            "content": "Mathematics"
                                                                        },
                                                                        {
                                                                            "tag": "div",
                                                                            "children": [
                                                                                {
                                                                                    "tag": "p",
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "i",
                                                                                            "attributes": {
                                                                                                "class": "fa-solid fa-calendar-days"
                                                                                            }
                                                                                        },
                                                                                        { "content": " Sep 5,2022 | " },
                                                                                        {
                                                                                            "tag": "i",
                                                                                            "attributes": {
                                                                                                "class": "fa-solid fa-clock"
                                                                                            }
                                                                                        },
                                                                                        { "content": " 09:00 - 10:00 am" }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "p",
                                                                    "content": "In Progress"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "histDetails"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "p",
                                                                    "content": "Sep23"
                                                                },
                                                                {
                                                                    "tag": "div",
                                                                    "attributes": {
                                                                        "class": "histSub"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "h3",
                                                                            "content": "Geography"
                                                                        },
                                                                        {
                                                                            "tag": "div",
                                                                            "children": [
                                                                                {
                                                                                    "tag": "p",
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "i",
                                                                                            "attributes": {
                                                                                                "class": "fa-solid fa-calendar-days"
                                                                                            }
                                                                                        },
                                                                                        { "content": " Sep 5,2022 | " },
                                                                                        {
                                                                                            "tag": "i",
                                                                                            "attributes": {
                                                                                                "class": "fa-solid fa-clock"
                                                                                            }
                                                                                        },
                                                                                        { "content": " 09:00 - 10:00 am" }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "p",
                                                                    "content": "Completed"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "histDetails"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "p",
                                                                    "content": "Sep22"
                                                                },
                                                                {
                                                                    "tag": "div",
                                                                    "attributes": {
                                                                        "class": "histSub"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "h3",
                                                                            "content": "Mathematics"
                                                                        },
                                                                        {
                                                                            "tag": "div",
                                                                            "children": [
                                                                                {
                                                                                    "tag": "p",
                                                                                    "children": [
                                                                                        {
                                                                                            "tag": "i",
                                                                                            "attributes": {
                                                                                                "class": "fa-solid fa-calendar-days"
                                                                                            }
                                                                                        },
                                                                                        { "content": " Sep 5,2022 | " },
                                                                                        {
                                                                                            "tag": "i",
                                                                                            "attributes": {
                                                                                                "class": "fa-solid fa-clock"
                                                                                            }
                                                                                        },
                                                                                        { "content": " 09:00 - 10:00 am" }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "tag": "p",
                                                                    "content": "In Progress"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }

                                    ]
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "events"
                                    },
                                    "children": [
                                        {
                                            "tag": "hr"
                                        },
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "eventHead"
                                            },
                                            "children": [
                                                {
                                                    "tag": "h4",
                                                    "content": "Upcoming Events"
                                                },
                                                {
                                                    "tag": "i",
                                                    "attributes": {
                                                        "class": "fa-solid fa-plus"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "event1"
                                            },
                                            "children": [
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "eventdate"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "p",
                                                            "content": "10 Jan"
                                                        },
                                                        {
                                                            "tag": "i",
                                                            "attributes": {
                                                                "class": "fa-solid fa-ellipsis"
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "eventdetails"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "div",
                                                            "content": "08:00 am"
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "eventsub"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubhead"
                                                                    },
                                                                    "content": "Botany"
                                                                },
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubpara"
                                                                    },
                                                                    "content": "Lorem ipsum dolor sit."
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "content": "08:00 - 09:00 am"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "eventdetails"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "div",
                                                            "content": "09:00 am"
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "eventsub"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubhead"
                                                                    },
                                                                    "content": "Botany"
                                                                },
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubpara"
                                                                    },
                                                                    "content": "Lorem ipsum dolor sit."
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "content": "09:00 - 10:00 am"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "eventdetails"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "div",
                                                            "content": "10:00 am"
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "eventsub"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubhead"
                                                                    },
                                                                    "content": "Botany"
                                                                },
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubpara"
                                                                    },
                                                                    "content": "Lorem ipsum dolor sit."
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "content": "10:00 - 11:00 am"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "event1"
                                            },
                                            "children": [
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "eventdate"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "p",
                                                            "content": "10 Jan"
                                                        },
                                                        {
                                                            "tag": "hr"
                                                        },
                                                        {
                                                            "tag": "i",
                                                            "attributes": {
                                                                "class": "fa-solid fa-ellipsis"
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "eventdetails"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "div",
                                                            "content": "08:00 am"
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "eventsub"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubhead"
                                                                    },
                                                                    "content": "English"
                                                                },
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubpara"
                                                                    },
                                                                    "content": "Lorem ipsum dolor sit."
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "content": "08:00 - 09:00 am"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "eventdetails"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "div",
                                                            "content": "09:00 am"
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "eventsub"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubhead"
                                                                    },
                                                                    "content": "Mathematics"
                                                                },
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubpara"
                                                                    },
                                                                    "content": "Lorem ipsum dolor sit."
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "content": "09:00 - 10:00 am"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "eventdetails"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "div",
                                                            "content": "10:00 am"
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "eventsub"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubhead"
                                                                    },
                                                                    "content": "History"
                                                                },
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubpara"
                                                                    },
                                                                    "content": "Lorem ipsum dolor sit."
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "content": "10:00 - 11:00 am"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "eventdetails"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "div",
                                                            "content": "11:00 am"
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "eventsub"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubhead"
                                                                    },
                                                                    "content": "Break"
                                                                },
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubpara"
                                                                    },
                                                                    "content": "Lorem ipsum dolor sit."
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "content": "11:00 - 12:00 am"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "eventdetails"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "div",
                                                            "content": "12:00 am"
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "eventsub"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubhead"
                                                                    },
                                                                    "content": "History"
                                                                },
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "eventsubpara"
                                                                    },
                                                                    "content": "Lorem ipsum dolor sit."
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "content": "12:00 - 1:00 pm"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }

                            ]
                        }
                    ]
                }
            ]
        },
        {
            "tag": "footer",

            "content": "COPYRIGHT © 2022 GyanYatra"

        }
    ]
};


let temp = TemplateEngine.populate(docPageTemplate, docpageData)
// console.log(temp);

let html = JsonToHtml.convert(temp)
// console.log(html);
document.getElementById("app").innerHTML = html