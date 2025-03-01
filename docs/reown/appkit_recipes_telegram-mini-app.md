Skip to main content
On this page
# How to Build a Telegram Mini App with Reown AppKit?
Learn how to use Reown AppKit to enable wallet interactions on your Telegram mini app directly from your Telegram bot.
In this recipe, you will learn how to:
  1. Create a Telegram mini app and a Telegram bot.
  2. Configure your Telegram mini app with Reown AppKit.


This guide takes approximately 20 minutes to complete.
Let’s get started!
## Setup​
In this section, you’ll learn how to set up a Telegram bot to host your Telegram mini-app, powered by Reown AppKit.
The first step is to create a Telegram bot. Let’s learn how we can do this.
### Create a Telegram Bot​
Navigate to the **BotFather Telegram bot**. This bot will help you create, fully customize, and configure your new Telegram bot.
Type `/newbot` to start the creation process. You’ll be prompted to set a name for your bot—please enter your desired name. Next, you’ll be asked to set a unique username for the bot. Once you've completed these steps, your new Telegram bot will be ready to use!
![image.png](https://docs.reown.com/assets/images/tg1-4d1b5bb0249de2b243a5169ee6a45fd6.png)
Now, enter `/mybots` and it will show you a list of bots that you created. Select the bot you just created and click on “**Edit Bot** ”. You will now be able to edit the bot’s info such as its description, picture, etc.
![image.png](https://docs.reown.com/assets/images/tg2-1a5eb01398963cd92ca499c79c259e26.png)
Now, go back to the bot menu and click on “**Bot Settings** ”. Click on “**Configure Mini App** ” and enter the URL you want to set for your mini app. In my case, I am setting it to https://reown-appkit-evm.vercel.app/.
![image.png](https://docs.reown.com/assets/images/tg3-74fbe2e0a2c219560da1f860f7c1b6bc.png)
Go back to the bot menu and click on “**Menu Button** ”. You will now be able to set the URL that will be opened when a user clicks on the menu button. After this, you can also the title to be displayed on the button instead of 'Menu’.
![image.png](https://docs.reown.com/assets/images/tg4-134d673919fab7b02e2ee931850a791c.png)
Your Telegram bot is now all set up! When a user opens the bot and clicks on “**Open App** ” or “**Menu** ,” the Telegram mini-app will open with the URL you configured.
## Configure the Telegram Mini App with Reown AppKit​
The URL I configured for my Telegram mini-app is this. As you can see, it’s a simple web app that allows users to connect their wallets and switch to any of the pre-configured networks available on the app.
If you’re using Reown AppKit to power wallet interactions on your Web3 app or Telegram mini-app, there’s nothing extra you need to do. Reown AppKit works with Telegram bots and mini-apps right out of the box. As long as you’re running the latest versions of Reown AppKit, no further setup is required.
If you’d like to learn how to integrate Reown AppKit, please refer to the in-depth guide linked below:
**How to Get Started with Reown AppKit on Any EVM Chain**
You can also check out the GitHub repository below, which powers the URL configured for my Telegram mini-app:
![GitHub](https://docs.reown.com/assets/github.svg)
### AppKit EVM Example
Check out the complete AppKit example on this Github repo.
## Run your Telegram Mini App​
Now, open your Telegram bot and click “**Start**.” The bot will open your mini-app within Telegram. As you can see, the mini-app opened by my Telegram bot is the Web3 app configured with Reown AppKit. You’ll notice a “**Connect Wallet** ” button, which allows you to connect your Web3 wallet to the mini-app.
When you click “**Connect Wallet** ”, the AppKit modal will open, prompting you to choose your preferred connection method. You’ll also notice that the mini-app supports social login, which could be a game changer for onboarding a large number of users to various mini-apps.
After you select your preferred wallet and connect it, you should be able to see that your wallet was successfully connected to the mini app.
## Conclusion​
And that’s it! You have now learned how to create a simple Telegram bot and configure it with your Telegram mini app using Reown AppKit.
## Need help?​
For support, please join the official Reown Discord Server.
  * Setup
    * Create a Telegram Bot
  * Configure the Telegram Mini App with Reown AppKit
  * Run your Telegram Mini App
  * Conclusion
  * Need help?


![](https://t.co/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=365d9996-8dea-434c-9666-aee0cc88787c&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=54a98e4d-78d6-4a89-a0b7-36560cfcd0b4&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Frecipes%2Ftelegram-mini-app&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)![](https://analytics.twitter.com/1/i/adsct?bci=4&dv=America%2FToronto%26en-US%26Google%20Inc.%26MacIntel%26255%261080%26600%266%2624%261080%26600%260%26na&eci=3&event=%7B%7D&event_id=365d9996-8dea-434c-9666-aee0cc88787c&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=54a98e4d-78d6-4a89-a0b7-36560cfcd0b4&tw_document_href=https%3A%2F%2Fdocs.reown.com%2Fappkit%2Frecipes%2Ftelegram-mini-app&tw_iframe_status=0&txn_id=oo02q&type=javascript&version=2.3.31)
