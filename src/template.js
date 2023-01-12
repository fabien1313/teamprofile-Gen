function dreamTeamRoster(managers, engineers, interns)
{
    return `

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    `
}

function managerHTML(managers) {
    let mgrSection = ''
    mgrSection = mgrSection + buildMgr(managers[0])
    function buildMgr(mgr) {
        return `
        <div id="mgrContainer">
            <div class="managerDiv">
                <h2>${mgr.getRole()}</h2>
                <ul>
                    <li>Name: <span>${mgr.getName()}</span></li>
                    <li>ID: <span>${mgr.getId()}</span></li>
                    <li>Email: <span>${mgr.getEmail()}</span></li>
                    <li>Office #: <span>${mgr.getOfficeNumber()}</span></li>
                </ul>
            </div>
        </div> `
    } return mgrSection;
};

function engineerHTML(engineers) {
    let engSection = ''
    for (index = 0; index < engineers.length; index++) {
        engSection = engSection + buildEng(engineers[i]);
    }
    function buildEng(eng) {
        return`
        <div id="engContainer">
            <div class="engineerDiv">
                <h2>${eng.getRole()}</h2>
                <ul>
                    <li>Name: <span>${eng.getName()}</span></li>
                    <li>ID: <span>${eng.getId()}</span></li>
                    <li>Email: <span>${eng.getEmail()}</span></li>
                    <li>GitHub: <span>${eng.getGitHub()}</span></li>
                </ul>
            </div>
        `
    } return engSection;
};

