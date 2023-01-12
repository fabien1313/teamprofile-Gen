function dreamTeamRoster(managers, engineers, interns)
{
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- header -->
    <header>
        <h1>
            My Team
        </h1>
    </header>
    <!-- header -->

    <!-- main section -->
    <main>
        <!-- Manager -->
        <div id="mgrContainer">
            ${managerHTML(managers)}
        </div>
        <!-- Manager -->

        <!-- Engineers -->
        <div id="engContainer">
            ${engineerHTML(engineers)}
        </div>
        <!-- EnginSchool -->

        <!-- Interns -->
        <div id="intContainer">
            ${internHTML(interns)}
        </div>
        <!-- Interns -->
    </main>  
</body>
</html>`
};

function managerHTML(managers) {
    let mgrSection = ''
    mgrSection = mgrSection + buildMgr(managers[0])
    function buildMgr(mgr) {
        return `
            <div class="managerDiv">
                <h2>${mgr.getRole()}</h2>
                <ul>
                    <li>Name: <span>${mgr.getName()}</span></li>
                    <li>ID: <span>${mgr.getId()}</span></li>
                    <li>Email: <span>${mgr.getEmail()}</span></li>
                    <li>Office #: <span>${mgr.getOfficeNumber()}</span></li>
                </ul>
            </div>`
    } return mgrSection;
};

function engineerHTML(engineers) {
    let engSection = ''
    for (index = 0; index < engineers.length; index++) {
        engSection = engSection + buildEng(engineers[index]);
    }
    function buildEng(eng) {
        return`
            <div class="engineerDiv">
                <h2>${eng.getRole()}</h2>
                <ul>
                    <li>Name: <span>${eng.getName()}</span></li>
                    <li>ID: <span>${eng.getId()}</span></li>
                    <li>Email: <span>${eng.getEmail()}</span></li>
                    <li>GitHub: <span>${eng.getGitHub()}</span></li>
                </ul>
            </div> `
    } return engSection;
};

function internHTML(interns) {
    let intSection = ''
    for (index = 0; index < interns.length; index++) {
        intSection = intSection + buildInt(interns[index]);  
    }
    function buildInt(int) {
        return `
        <div class="internDiv">
                <h2>${int.getRole()}</h2>
                <ul>
                    <li>Name: <span>${int.getName()}</span></li>
                    <li>ID: <span>${int.getId()}</span></li>
                    <li>Email: <span>${int.getEmail()}</span></li>
                    <li>School: <span>${int.getSchool()}</span></li>
                </ul>
        </div>`
    } return intSection;
};

module.exports = dreamTeamRoster

