<h1 align="center"> Discord Presence API </h1> 
The API processes your current activity on your Discord account and creates a card from it that you can put in your readme in Github, for example :)

# Start
1. You need your Discord user ID. If you need help with this, join our discord or check out [this guide](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).
2. So that we can get your current discord status, it is important that you join our [discord server](https://discord.com/).
3. Now you can write the following URL in your readme:
```
![Discord Presence](https://google.com)
```

# Card Styles
So that your card also has the perfect style. We have different styles available.

In order for you to be able to select the different styles, the URL must look like this:
```
https://google.com/presence/< your user id>/card?theme=white
```
The following styles are available: `dark`, `white`, `transparent`, `blue`, `green`, `red`

# Host yourself
1. First install this project
2. Open the project
3. Change the config.json
4. Run the following command the terminal
```
npm run start
```
5. The API running at port 9001
6. Have Fun with the API
