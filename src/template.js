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
        <div class="engineerDiv">
                <h2>Engineer</h2>
                <ul>
                    <li>Name: <span></span></li>
                    <li>ID: <span></span></li>
                    <li>Email: <span></span></li>
                    <li>GitHub: <span></span></li>
                </ul>
        </div>`
    } return intSection;
};

