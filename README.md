# E-Chat

E-Chat is a Pocketbase + Svelte + TypeScript chat app hosted by PocketHost in the cloud. I call this stack, The Pstock stack.

**What is PocketBase :**

Pocketbase is ultimatly the fastest, easiest way to build a database, It uses SQLite in the back-end, and with it's cool built-with-Svelte admin dashboard, It's really easy to create a database in seconds (*not sponsored*)

You're gonna tell me : *Ayo bro, there is Firebase with the same advantages, Why the hell don't you just go Firebase ?*

I tried but Firebase got always these SDK issues and modelling the db is kinda hard, also when I try to write the code for it and I get errors.

**What is PocketHost :**

An issue that I faced while making this project is hosting, with so many paid platforms offering only a free trial, I dug very deep until I found this really cool tool called PocketHost, It can host multiple instances of PocketBase for free and allows you to host a db in the cloud in 30 seconds and gives you the link to the admin dashboard so you can model your database's schema. But if you have money to throw around, This solution may not be interesting.

**How to execute the project :**

The project is already hosted on Vercel : [https://e-chat-ten.vercel.app]

But If you want to build it or run the dev server (so you can create an instance of the app for like a local chat-room), Here is how you can do it.

**Build the whole project into HTML, CSS and JavaScript:**

*Debian :*

```sh
sudo apt install yarnpkg git -y --no-install-recommends
git clone https://github.com/AyoubCoding21/E-Chat && cd E-Chat
yarnpkg install && yarnpkg build
```

*Arch :*

```sh
sudo pacman -S yarn git
git clone https://github.com/AyoubCoding21/E-Chat && cd E-Chat
yarnpkg install && yarnpkg build
```

*Termux :*

```sh
pkg in yarn git -y --no-install-recommends
git clone https://github.com/AyoubCoding21/E-Chat && cd E-Chat
yarn install && yarn build
```

**Run dev server:**

*Debian :*

```sh
sudo apt install yarnpkg git -y --no-install-recommends
git clone https://github.com/AyoubCoding21/E-Chat && cd E-Chat
yarnpkg install && yarnpkg dev
```

*Arch :*

```sh
sudo pacman -S yarn git
git clone https://github.com/AyoubCoding21/E-Chat && cd E-Chat
yarnpkg install && yarnpkg dev
```

*Termux :*

```sh
pkg in yarn git -y --no-install-recommends
git clone https://github.com/AyoubCoding21/E-Chat && cd E-Chat
yarn install && yarn dev
```

# To finish

So to finish, **follow the rules** mentionned in the chat-room or you will be banned.

Any issues or pull requests accepted greatfully !

I will create a SvelteKit version of this app so follow me if you wanna see it.

Donation:

Payeer : ```P1098557175```

Cya !!
