const { Themes } = require("./types")

class Card {
    constructor({
        username,
        discriminator,
        name,
        details,
        state,
        avatar,
        assetsIcon,
        theme
    }) {
        this.username = username;
        this.discriminator = discriminator;
        this.name = name;
        this.details = details;
        this.state = state;
        this.avatar = avatar;
        this.assetsIcon = assetsIcon;
        this.theme = theme;
    }
    
    render() {
        switch(this.theme) {
            case "Dark": {
                return `
                    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" style="background-color: rgb(21, 23, 33); border-radius: 10px;" viewBox="0 0 500 300">
                        <image x="10" y="10" width="75" height="75" href="${this.avatar}" clip-path="inset(0% round 50%)" />
                        <text x="90" y="55" fill="rgb(255, 255, 255)" font-weight="bold" font-family="Arial" font-size="28px">${this.username}#${this.discriminator}</text>
                        <image x="-40" y="150" width="200" height="100" href="${this.assetsIcon}" clip-path="inset(0% round 10px)"/>
                        <text x="117" y="165" fill="rgb(255, 255, 255)" font-weight="bold" font-family="Arial">${this.name}</text>
                        <text x="117" y="190" fill="rgb(255, 255, 255)" font-family="Arial">${this.details}</text>
                        <text x="117" y="220" fill="rgb(255, 255, 255)" font-family="Arial">${this.state}</text>
                    </svg>
                `
            }
            break;
            case "White": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" style="background-color: rgb(255, 255, 255); border-radius: 10px;" viewBox="0 0 500 300">
                    <image x="10" y="10" width="75" height="75" href="${this.avatar}" clip-path="inset(0% round 50%)" />
                    <text x="90" y="55" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial" font-size="28px">${this.username}#${this.discriminator}</text>
                    <image x="-40" y="150" width="200" height="100" href="${this.assetsIcon}" clip-path="inset(0% round 10px)"/>
                    <text x="117" y="165" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial">${this.name}</text>
                    <text x="117" y="190" fill="rgb(0, 0, 0)" font-family="Arial">${this.details}</text>
                    <text x="117" y="220" fill="rgb(0, 0, 0)" font-family="Arial">${this.state}</text>
                </svg>
                `
            }
            break;
            case "Transparent": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" style="background-color: transparent; border-radius: 10px;" viewBox="0 0 500 300">
                    <image x="10" y="10" width="75" height="75" href="${this.avatar}" clip-path="inset(0% round 50%)" />
                    <text x="90" y="55" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial" font-size="28px">${this.username}#${this.discriminator}</text>
                    <image x="-40" y="150" width="200" height="100" href="${this.assetsIcon}" clip-path="inset(0% round 10px)"/>
                    <text x="117" y="165" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial">${this.name}</text>
                    <text x="117" y="190" fill="rgb(0, 0, 0)" font-family="Arial">${this.details}</text>
                    <text x="117" y="220" fill="rgb(0, 0, 0)" font-family="Arial">${this.state}</text>
                </svg>`
            }
            break;
            case "Red": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" style="background-color: rgb(21, 23, 33); border-radius: 10px;" viewBox="0 0 500 300">
                <image x="10" y="10" width="75" height="75" href="${this.avatar}" clip-path="inset(0% round 50%)" />
                <text x="90" y="55" fill="rgb(219, 20, 20)" font-weight="bold" font-family="Arial" font-size="28px">${this.username}#${this.discriminator}</text>
                <image x="-40" y="150" width="200" height="100" href="${this.assetsIcon}" clip-path="inset(0% round 10px)"/>
                <text x="117" y="165" fill="rgb(219, 20, 20)" font-weight="bold" font-family="Arial">${this.name}</text>
                <text x="117" y="190" fill="rgb(219, 20, 20)" font-family="Arial">${this.details}</text>
                <text x="117" y="220" fill="rgb(219, 20, 20)" font-family="Arial">${this.state}</text>
                </svg>`
            }
            break;
            case "Green": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" style="background-color: rgb(21, 23, 33); border-radius: 10px;" viewBox="0 0 500 300">
                <image x="10" y="10" width="75" height="75" href="${this.avatar}" clip-path="inset(0% round 50%)" />
                <text x="90" y="55" fill="rgb(51, 153, 51)" font-weight="bold" font-family="Arial" font-size="28px">${this.username}#${this.discriminator}</text>
                <image x="-40" y="150" width="200" height="100" href="${this.assetsIcon}" clip-path="inset(0% round 10px)"/>
                <text x="117" y="165" fill="rgb(51, 153, 51)" font-weight="bold" font-family="Arial">${this.name}</text>
                <text x="117" y="190" fill="rgb(51, 153, 51)" font-family="Arial">${this.details}</text>
                <text x="117" y="220" fill="rgb(51, 153, 51)" font-family="Arial">${this.state}</text>
                </svg>`
            }
            break;
            case "Blue": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" style="background-color: rgb(21, 23, 33); border-radius: 10px;" viewBox="0 0 500 300">
                <image x="10" y="10" width="75" height="75" href="${this.avatar}" clip-path="inset(0% round 50%)" />
                <text x="90" y="55" fill="rgb(0, 204, 255)" font-weight="bold" font-family="Arial" font-size="28px">${this.username}#${this.discriminator}</text>
                <image x="-40" y="150" width="200" height="100" href="${this.assetsIcon}" clip-path="inset(0% round 10px)"/>
                <text x="117" y="165" fill="rgb(0, 204, 255)" font-weight="bold" font-family="Arial">${this.name}</text>
                <text x="117" y="190" fill="rgb(0, 204, 255)" font-family="Arial">${this.details}</text>
                <text x="117" y="220" fill="rgb(0, 204, 255)" font-family="Arial">${this.state}</text>
            </svg>`
            }
        }
    }

    rendernewCards() {
        switch(this.theme) {
            case "Dark": {
                return `
                    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" style="background-color: rgb(21, 23, 33); border-radius: 10px;" viewBox="0 0 500 300">
                        <image x="10" y="10" width="75" height="75" href="${this.avatar}" clip-path="inset(0% round 50%)" />
                        <text x="90" y="55" fill="rgb(255, 255, 255)" font-weight="bold" font-family="Arial" font-size="28px">${this.username}#${this.discriminator}</text>
                        <image x="-40" y="150" width="200" height="100" href="${this.assetsIcon}" clip-path="inset(0% round 10px)"/>
                        <text x="117" y="165" fill="rgb(255, 255, 255)" font-weight="bold" font-family="Arial">${this.name}</text>
                        <text x="117" y="190" fill="rgb(255, 255, 255)" font-family="Arial">${this.details}</text>
                        <text x="117" y="220" fill="rgb(255, 255, 255)" font-family="Arial">${this.state}</text>
                    </svg>
                `
            }
            break;
            case "White": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" style="background-color: rgb(255, 255, 255); border-radius: 10px;" viewBox="0 0 500 300">
                    <image x="10" y="10" width="75" height="75" href="${this.avatar}" clip-path="inset(0% round 50%)" />
                    <text x="90" y="55" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial" font-size="28px">${this.username}#${this.discriminator}</text>
                    <image x="-40" y="150" width="200" height="100" href="${this.assetsIcon}" clip-path="inset(0% round 10px)"/>
                    <text x="117" y="165" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial">${this.name}</text>
                    <text x="117" y="190" fill="rgb(0, 0, 0)" font-family="Arial">${this.details}</text>
                    <text x="117" y="220" fill="rgb(0, 0, 0)" font-family="Arial">${this.state}</text>
                </svg>
                `
            }
            break;
            case "Transparent": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" style="background-color: transparent; border-radius: 10px;" viewBox="0 0 500 300">
                    <image x="10" y="10" width="75" height="75" href="${this.avatar}" clip-path="inset(0% round 50%)" />
                    <text x="90" y="55" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial" font-size="28px">${this.username}#${this.discriminator}</text>
                    <image x="-40" y="150" width="200" height="100" href="${this.assetsIcon}" clip-path="inset(0% round 10px)"/>
                    <text x="117" y="165" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial">${this.name}</text>
                    <text x="117" y="190" fill="rgb(0, 0, 0)" font-family="Arial">${this.details}</text>
                    <text x="117" y="220" fill="rgb(0, 0, 0)" font-family="Arial">${this.state}</text>
                </svg>`
            }
            break;
            case "Red": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" style="background-color: rgb(21, 23, 33); border-radius: 10px;" viewBox="0 0 500 300">
                <image x="10" y="10" width="75" height="75" href="${this.avatar}" clip-path="inset(0% round 50%)" />
                <text x="90" y="55" fill="rgb(219, 20, 20)" font-weight="bold" font-family="Arial" font-size="28px">${this.username}#${this.discriminator}</text>
                <image x="-40" y="150" width="200" height="100" href="${this.assetsIcon}" clip-path="inset(0% round 10px)"/>
                <text x="117" y="165" fill="rgb(219, 20, 20)" font-weight="bold" font-family="Arial">${this.name}</text>
                <text x="117" y="190" fill="rgb(219, 20, 20)" font-family="Arial">${this.details}</text>
                <text x="117" y="220" fill="rgb(219, 20, 20)" font-family="Arial">${this.state}</text>
                </svg>`
            }
            break;
            case "Green": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" style="background-color: rgb(21, 23, 33); border-radius: 10px;" viewBox="0 0 500 300">
                <image x="10" y="10" width="75" height="75" href="${this.avatar}" clip-path="inset(0% round 50%)" />
                <text x="90" y="55" fill="rgb(51, 153, 51)" font-weight="bold" font-family="Arial" font-size="28px">${this.username}#${this.discriminator}</text>
                <image x="-40" y="150" width="200" height="100" href="${this.assetsIcon}" clip-path="inset(0% round 10px)"/>
                <text x="117" y="165" fill="rgb(51, 153, 51)" font-weight="bold" font-family="Arial">${this.name}</text>
                <text x="117" y="190" fill="rgb(51, 153, 51)" font-family="Arial">${this.details}</text>
                <text x="117" y="220" fill="rgb(51, 153, 51)" font-family="Arial">${this.state}</text>
                </svg>`
            }
            break;
            case "Blue": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" style="background-color: rgb(21, 23, 33); border-radius: 10px;" viewBox="0 0 500 300">
                <image x="10" y="10" width="75" height="75" href="${this.avatar}" clip-path="inset(0% round 50%)" />
                <text x="90" y="55" fill="rgb(0, 204, 255)" font-weight="bold" font-family="Arial" font-size="28px">${this.username}#${this.discriminator}</text>
                <image x="-40" y="150" width="200" height="100" href="${this.assetsIcon}" clip-path="inset(0% round 10px)"/>
                <text x="117" y="165" fill="rgb(0, 204, 255)" font-weight="bold" font-family="Arial">${this.name}</text>
                <text x="117" y="190" fill="rgb(0, 204, 255)" font-family="Arial">${this.details}</text>
                <text x="117" y="220" fill="rgb(0, 204, 255)" font-family="Arial">${this.state}</text>
            </svg>`
            }
        }
    }
}

module.exports = Card;
