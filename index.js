const express = require("express");
const app = express();
const { Client, IntentsBitField } = require("discord.js");
const client = new Client({
    intents: [IntentsBitField.Flags.GuildPresences, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.Guilds]
});
const Card = require("./card");
const config = require("./config.json");

let guildId = config.guild_id;
let clientToken = config.client_token;

client.on("ready", () => {
    console.log("Ready");
})

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "ok"
    })
});

app.get('/api/:userId', async (req, res) => {
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

    let stat = member.presence.activities[0];
    let custom;

    if(!stat) {
        return res.json({
            status: 404,
            message: "Please try again"
        })
    }

    if(member.presence.activities.some(r => r.name === "Spotify")) {
        let spotifyArray = {
            user: {
                username: member.user.username,
                discriminator: member.user.discriminator,
                avatar: member.user.displayAvatarURL({ extension: "png" }),
                id: member.id
            },
            presenceName: `Listening to Spotify`,
            name: stat.name,
            applicationId: stat.applicationId,
            details: stat.details,
            state: stat.state,
            timestamps: stat.timestamps,
            assets: {
                largeText: stat.assets.largeText,
                smallText: stat.assets.smallText,
                largeImage: stat.assets.largeImage,
                smallImage: stat.assets.smallImage
            },
            createdTimestamp: stat.createdTimestamp
        }

        custom = spotifyArray
    } else if(stat && stat.name !== "Custom Status") {
        let customArray = {
            user: {
                username: member.user.username,
                discriminator: member.user.discriminator,
                avatar: member.user.displayAvatarURL({ extension: "png" }),
                id: member.id
            },
            name: stat.name ?? "None",
            applicationId: stat.applicationId ?? "None",
            details: stat.details ?? "None",
            state: stat.state ?? "None",
            assets: {
                largeText: stat.assets.largeText || "None",
                smallText: stat.assets.smallText || "None",
                largeImage: stat.assets.largeImage || "None",
                smallImage: stat.assets.smallImage ?? "None"
            },
            createdTimestamp: stat.createdTimestamp ?? "None",
        }

        custom = customArray
    } else {
        custom = "Nothing"
    }

    if(member.presence.activities.some(r => r.name !== "Spotify") && stat && stat.state !== null) {
        stat = stat.state
    } else {
        stat = "Nothing"
    }

    return res.json({
        status: 200,
        activity: custom
    })
});

app.get('/api/:userId/card', async (req, res) => {
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

    let stat = member.presence.activities[0];
    let custom;

    if(member.presence.activities.some(r => r.name === "Spotify")) {
        let spotifyArray = {
            user: {
                username: member.user.username,
                discriminator: member.user.discriminator,
                avatar: member.user.displayAvatarURL({ extension: "png" }),
                id: member.id
            },
            presenceName: `Listening to Spotify`,
            name: stat.name,
            applicationId: stat.applicationId,
            details: stat.details,
            state: stat.state,
            timestamps: {
                start: stat.timestamps.start,
                end: stat.timestamps.end
            },
            assets: {
                largeText: stat.assets.largeText,
                smallText: stat.assets.smallText,
                largeImage: stat.assets.largeImage,
                smallImage: stat.assets.smallImage
            },
            createdTimestamp: stat.createdTimestamp
        }

        let card = new Card({
            username: spotifyArray.user.username,
            discriminator: spotifyArray.user.discriminator,
            avatar: spotifyArray.user.avatar,
            applicationId: spotifyArray.applicationId,
            details: spotifyArray.details,
            name: spotifyArray.name,
            state: spotifyArray.state,
            assetsIcon: spotifyArray.assets.largeImage
        })

        custom = card.spotifyRender()
    } else if(stat && stat.name !== "Custom Status") {
        let customArray = {
            user: {
                username: member.user.username,
                discriminator: member.user.discriminator,
                avatar: member.user.displayAvatarURL({ extension: "png" }),
                id: member.id
            },
            name: stat.name ?? "None",
            applicationId: stat.applicationId ?? "None",
            details: stat.details ?? "None",
            state: stat.state ?? "None",
            assets: {
                largeText: stat.assets.largeText ?? "None",
                smallText: stat.assets.smallText ?? "None",
                largeImage: stat.assets.largeImage ?? "None",
                smallImage: stat.assets.smallImage ?? "None"
            },
            createdTimestamp: stat.createdTimestamp ?? "None",
        }

        let card = new Card({
            username: customArray.user.username,
            discriminator: customArray.user.discriminator,
            avatar: customArray.user.avatar,
            applicationId: customArray.applicationId,
            details: customArray.details,
            name: customArray.name,
            state: customArray.state,
            assetsIcon: customArray.assets.largeImage
        })

        custom = card.customRender()
    } else {
        custom = "Nothing"
    }

    if(member.presence.activities.some(r => r.name !== "Spotify") && stat && stat.state !== null) {
        stat = stat.state
    } else {
        stat = "Nothing"
    }

    return res.send(custom)
})

app.get("*", (req, res) => {
    return res.json({
        status: 404,
        message: "Endpoint does not exist"
    })
})

client.login(clientToken);
const port = 9001;
app.listen(port, () => console.log(`Listening to port ${port}`))
