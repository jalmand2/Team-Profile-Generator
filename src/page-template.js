const generateHtml = team => {
    const html = [];
    
    const generateManager = manager => {
        let managerHtml = `
        <div class="card col-9 col-lg-3 px-0">
                        <div class="card-header">
                            ${manager.getName()} <br/>
                            <i class="fa-solid fa-mug-hot"></i>${manager.getRole()}
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${manager.getId()}</li>
                                <li class="list-group-item">Email: <div id='email'><a href='mailto:${manager.getEmail()}'> ${manager.getEmail()}</a></div></li>
                                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                            </ul>
                        </div>
                    </div>
                `;
                html.push(managerHtml);
    }

    const generateEngineer = engineer => {
        let engineerHtml = `
        <div class="card col-9 col-lg-3 px-0">    
                        <div class="card-header">
                            ${engineer.getName()} <br/> 
                            <i class="fa-solid fa-glasses"></i>${engineer.getRole()}
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${engineer.getId()}</li>
                                <li class="list-group-item">Email: <div id='email'><a href='mailto:${engineer.getEmail()}'> ${engineer.getEmail()}</a></div></li>
                                <li class="list-group-item">GitHub: <div id='email'><a target='_blank' href='https://github.com/${engineer.getGithub()}'> ${engineer.getGithub()}</a></div></li>
                            </ul>
                        </div>
                    </div>
                `;
                html.push(engineerHtml);
    }

   
    const generateIntern = intern => {
        let internHtml = `
        <div class="card col-9 col-lg-3 px-0">
                        <div class="card-header">
                            ${intern.getName()} <br/>
                            <i class="fa-solid fa-user-graduate "></i>${intern.getRole()}
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${intern.getId()}</li>
                                <li class="list-group-item">Email: <div id='email'><a href='mailto:${intern.getEmail()}'> ${intern.getEmail()}</a></div></li>
                                <li class="list-group-item">School: ${intern.getSchool()}</li>
                            </ul>
                        </div>        
                    </div>
        `;
        html.push(internHtml);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager') {
            generateManager(team[i]);
        }
        else if (team[i].getRole() === 'Engineer') {
            generateEngineer(team[i]);
        }
        else if (team[i].getRole() === 'Intern') {
            generateIntern(team[i]);
        }
    }

    
    return html.join('');
}

module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <link rel="stylesheet" href="../dist/styles.css">
    </head>
    <body>
  
        <div class="page-header header">
            <div class="container">
              <h1 class="display-4">My Team</h1>
            </div>
        </div>

        <div class="d-flex"> 
                <div class="row container-fluid cards">
            ${generateHtml(team)}
    
                </div>
        </div>    
            
              
    </body>
    </html>`
}


