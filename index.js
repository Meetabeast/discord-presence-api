const express = require("express");
const app = express();
const { Client, IntentsBitField } = require("discord.js");
const client = new Client({
    intents: [IntentsBitField.Flags.GuildPresences, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.Guilds]
});
const Card = require("./card");
const config = require("./config.json");
const imagetobase64 = require("image-to-base64");
const { ActivityTypes, Themes } = require("./types");

let guildId = config.guild_id;
let clientToken = config.client_token;

client.on("ready", () => {
    console.log("Ready");
    client.user.setPresence({ status: "invisible" })
})

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "ok"
    })
});

app.get('/presence/:userId', async (req, res) => {
    let userId = req.params.userId;

    if(!userId) {
        return res.json({
            status: 404,
            message: "Error no userId found in the url"
        })
    }

    let member = await client.guilds.fetch(guildId).then((g) => g.members.fetch(userId));

    if(!member) {
        return res.json({
            status: 4004,
            message: "Error no member found with the userId on the guild."
        })
    }

    if(member.user.bot) {
        return res.json({
            status: 404,
            message: "The user a bot"
        })
    }
    
    if(!member.presence) {
        return res.json({
            status: 200,
            user: {
                username: member.user.username,
                discriminator: member.user.discriminator,
                avatar: member.user.displayAvatarURL(),
                id: member.user.id
            },
            activity: {}
        })
    }

    let stat = member.presence.activities[0];

    if(!stat) {
        return res.json({
            status: 200,
            user: {
                username: member.user.username,
                discriminator: member.user.discriminator,
                avatar: member.user.displayAvatarURL({ extension: "png"}),
                id: member.user.id
            },
            activity: {}
        })
    }

    let largeImage = false;

    if(member.presence.activities.some(r => r.name === "Spotify")) { 
        largeImage = `https://i.scdn.co/image/${stat.assets.largeImage.replace("spotify:", "")}`
    } else {
        largeImage = `https://cdn.discordapp.com/app-assets/${stat.applicationId}/${stat.assets.largeImage}.png`
    }
    
    let smallImage = stat.assets.smallImage ? `https://cdn.discordapp.com/app-assets/${stat.applicationId}/${stat.assets.smallImage}.png` : ""
    let state = stat.state ? stat.state : "";
    let details = stat.details ? stat.details : "";
    let type = stat.type ? stat.type : "";

    let avatar = member.user.displayAvatarURL({ extension: "png" });

    return res.json({
        status: 200,
        user: {
            username: member.user.username,
            id: member.user.id,
            avatar: avatar,
            discriminator: member.user.discriminator
        },
        activity: {
            name: stat.name,
            stat: state,
            details: details,
            largeImage: largeImage,
            smallImage: smallImage,
            type: ActivityTypes[type]
        }
    })
})

app.get('/presence/:userId/card', async (req, res) => {
    let userId = req.params.userId;
    let theme = req.query.theme;

    theme = Themes[theme];

    if(!theme) {
        theme = "Dark"
    } 

    if(!userId) {
        return res.json({
            status: 404,
            message: "Error no userId found in the url"
        })
    }

    let member = await client.guilds.fetch(guildId).then((g) => g.members.fetch(userId));

    if(!member) {
        return res.json({
            status: 4004,
            message: "Error no member found with the userId on the guild."
        })
    }

    if(member.user.bot) {
        return res.json({
            status: 404,
            message: "The user a bot"
        })
    }
    
    if(!member.presence) {
        return res.json({
            status: 200,
            user: {
                username: member.user.username,
                discriminator: member.user.discriminator,
                avatar: member.user.displayAvatarURL(),
                id: member.user.id
            },
            activity: {}
        })
    }

    let stat = member.presence.activities[0];

    if(!stat) {
        return res.json({
            status: 200,
            user: {
                username: member.user.username,
                discriminator: member.user.discriminator,
                avatar: member.user.displayAvatarURL({ extension: "png"}),
                id: member.user.id
            },
            activity: {}
        })
    }

    let largeImage = false;

    if(member.presence.activities.some(r => r.name === "Spotify")) { 
        largeImage = `https://i.scdn.co/image/${stat.assets.largeImage.replace("spotify:", "")}`
    } else {
        largeImage = `https://cdn.discordapp.com/app-assets/${stat.applicationId}/${stat.assets.largeImage}.png`
    }

    let state = stat.state ? stat.state : "";
    let details = stat.details ? stat.details : "";

    let avatar = member.user.displayAvatarURL({ extension: "png" });
    avatar = await imagetobase64(avatar);
    avatar = "data:image/png;base64," + avatar

    largeImage = await imagetobase64(largeImage);
    largeImage = "data:image/png;base64," + largeImage

    let custom = new Card({
        avatar: avatar,
        username: member.user.username,
        discriminator: member.user.discriminator,
        name: stat.name,
        details: details,
        state: state,
        assetsIcon: largeImage,
        theme: theme
    })

    res.set("Cache-Control", "public, max-age=30");
    res.set("Content-Type", "image/svg+xml")
    res.send(custom.render())
})

app.get("*", (req, res) => {
    return res.json({
        status: 404,
        message: "Endpoint does not exist"
    })
})

client.login(clientToken);
const port = 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
