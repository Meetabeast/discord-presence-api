class Card {
    constructor({
        username,
        discriminator,
        name,
        applicationId,
        details,
        state,
        avatar,
        assetsIcon
    }) {
        this.username = username;
        this.discriminator = discriminator;
        this.name = name;
        this.details = details;
        this.state = state;
        this.avatar = avatar;
        this.assetsIcon = assetsIcon;
        this.applicationId = applicationId;
    }

    customRender() {
        return `<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        
            <style>
                * {
                    padding: 0;
                    margin: 0;
                }
        
                body {
                    font-family: Arial, sans-serif;
                }
        
                .card {
                    background-color: rgb(21, 23, 33);
                    color: rgb(255, 255, 255);
                    margin: 20px;
                    padding: 10px 10px;
                    height: 300px;
                    width: 500px;
                    border-radius: 15px;
                }
        
                .user {
                    display: flex;
                    align-items: center;
                }
        
                .username {
                    padding-left: 10px;
                }
        
                .avatar {
                    width: 75px;
                    height: 75px;
                    border-radius: 50%;
                }
        
                .presence {
                    display: flex;
                    padding-top: 50px;
                }
        
                .info {
                    display: flex;
                    flex-direction: column;
                    padding-left: 5px;
                    line-height: 1.5;
                }
        
                .presenceIcon {
                    width: 150px;
                    height: 150px;
                    border-radius: 10px;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <div class="content">
                    <div class="user">
                        <img src="${this.avatar}" alt="avatar" class="avatar">
                        <h2 class="username">${this.username}#${this.discriminator}</h2>
                    </div>
        
                    <div class="presence">
                        <img src="https://cdn.discordapp.com/app-assets/${this.applicationId}/${this.assetsIcon}.png" alt="presenceIcon" class="presenceIcon">
        
                        <div class="info">
                            <h4 class="name">${this.name}</h4>
                            <p class="details">${this.details}</p>
                            <p class="state">${this.state}</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        
        
        </html>`
    }

    spotifyRender() {
        return `
        <html lang="en">
        <head>
            <style>
                * {
                    padding: 0;
                    margin: 0;
                }
        
                body {
                    font-family: Arial, sans-serif;
                }
        
                .card {
                    background-color: rgb(21, 23, 33);
                    color: rgb(255, 255, 255);
                    margin: 20px;
                    padding: 10px 10px;
                    height: 300px;
                    width: 500px;
                    border-radius: 15px;
                }
        
                .user {
                    display: flex;
                    align-items: center;
                }
        
                .username {
                    padding-left: 10px;
                }
        
                .avatar {
                    width: 75px;
                    height: 75px;
                    border-radius: 50%;
                }
        
                .presence {
                    display: flex;
                    padding-top: 50px;
                }
        
                .info {
                    display: flex;
                    flex-direction: column;
                    padding-left: 5px;
                    line-height: 1.5;
                }
        
                .presenceIcon {
                    width: 150px;
                    height: 150px;
                    border-radius: 10px;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <div class="content">
                    <div class="user">
                        <img src="${this.avatar}" alt="avatar" class="avatar">
                        <h2 class="username">${this.username}#${this.discriminator}</h2>
                    </div>
        
                    <div class="presence">
                        <img src="https://i.scdn.co/image/${this.assetsIcon.replace("spotify:", "")}" alt="presenceIcon" class="presenceIcon">
                        
                        <div class="info">
                            <h4 class="name">${this.name}</h4>
                            <p class="details">${this.details}</p>
                            <p class="state">${this.state}</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>`
    }
}

module.exports = Card;