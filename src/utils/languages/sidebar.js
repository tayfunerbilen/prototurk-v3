const sidebar = {
    SIDEBAR_MENU: [
        {
            key: "homepage",
            value: "SIDEBAR_MENU.homepage"
        },
        {
            key: "discover",
            value: "SIDEBAR_MENU.discover"
        },
        {
            key: "articles",
            value: "SIDEBAR_MENU.articles"
        },
        {
            key: "questionAndAnswer",
            value: "SIDEBAR_MENU.questionAndAnswer"
        },
        {
            key: "courseRequests",
            value: "SIDEBAR_MENU.courseRequests"
        },
        {
            key: "newText",
            value: "SIDEBAR_MENU.newText"
        }
    ],
    QA_SIDEBAR_MENU: [
        {
            key: "finalQuestions",
            value: "QA_SIDEBAR_MENU.finalQuestions"
        },
        {
            key: "unansweredQuestions",
            value: "QA_SIDEBAR_MENU.unansweredQuestions"
        },
        {
            key: "unsolvedQuestions",
            value: "QA_SIDEBAR_MENU.unsolvedQuestions"
        },
        {
            key: "categories",
            value: "QA_SIDEBAR_MENU.categories"
        },
        {
            key: "popularQuestions",
            value: "QA_SIDEBAR_MENU.popularQuestions"
        }
    ],
    PROFILE_SIDEBAR_MENU: [
        {
            key: "profile",
            value: "PROFILE_SIDEBAR_MENU.profile"
        },
        {
            key: "followers",
            value: "PROFILE_SIDEBAR_MENU.followers"
        },
        {
            key: "yourFollowers",
            value: "PROFILE_SIDEBAR_MENU.yourFollowers"
        },
        {
            key: "questions",
            value: "PROFILE_SIDEBAR_MENU.questions"
        },
        {
            key: "answers",
            value: "PROFILE_SIDEBAR_MENU.answers"
        },
        {
            key: "notifications",
            value: "PROFILE_SIDEBAR_MENU.notifications"
        },
        {
            key: "yourPublicProfile",
            value: "PROFILE_SIDEBAR_MENU.yourPublicProfile"
        },
        {
            key: "logout",
            value: "PROFILE_SIDEBAR_MENU.logout"
        }
    ]
}

const sidebarControl = sidebarName => sidebar[sidebarName] || [];

export const sideLang=(key,input)=>{
    const side=sidebarControl(key);
    return `sidebar.${side.find(si=>si.key===input)?.value}`
}
