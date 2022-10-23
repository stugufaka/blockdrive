<p align="center">
  <a href="https://github.com/king-technologies/Project-Initiator" title="Project Initiator">
    <img src="./src/assets/productify-logo.svg" width="80px" alt="Project Initiator"/>
  </a>
</p>
<h1 align="center">🌟 Block Drive 🌟</h1>
<p align="center">Start your project with Single Command</p>

<p align="center">
<a href="https://github.com/stugufaka/blockdrive/blob/master/LICENSE" title="License">
<img src="https://img.shields.io/github/license/stugufaka/blockdrive" alt="blockdrive"/>
</a>
<a href="https://github.com/stugufaka/blockdrive/fork" title="Forks">
<img src="https://img.shields.io/github/forks/stugufaka/blockdrive" alt="blockdrive Forks"/>
</a>
<a href="https://github.com/stugufaka/blockdrive" title="Stars">
<img src="https://img.shields.io/github/stars/stugufaka/blockdrive" alt="blockdrive Stars"/>
</a>
<a href="https://img.shields.io/github/stars/stugufaka/blockdrive/issues" title="Issues">
<img src="  https://img.shields.io/github/issues/stugufaka/blockdrive" alt="blockdrive Issues"/>
</a>

</a>
</p>

<p align="center" title="Project Initiator"><img src="./src/assets/bd.png" alt="Project Initiator"/></p>

<h2 align="center">🌐 Links 🌐</h2>
<p align="center">
    <a href="https://youtu.be/ud4P45zhCk0" title="">🖥️ Video</a>
    .
    <a href="https://youtu.be/ud4P45zhCk0" title="">🔗 Website</a>
    ·
    <a href="https://github.com/stugufaka/blockdrive" title="">📂 Repo</a>
    ·
    <a href="https://github.com/stugufaka/blockdrive" title="🐛Report Bug/🎊Request Feature">🚀 Got Issue</a>
</p>

## 💪 Motivation

Rotating between several web3 storage solutions, such as IPFS and Web3 Storage, can be difficult at times. For my files, I personally use IPFS and web3 storage. Can we generate NFTs from files we've previously submitted to these platforms? Is it possible to have a user-friendly interface that displays files and organizes them into folders? What if you could manage all of your files from one location?

That is how blockdrive came to be.

## 🚀 How it works

Blockdrive is a decentralise storage online Platforms with NFT and Chatting capabilities. We are building a platform that allows products, services, or applications to be stored in a secure and reliable way using blockchain technology infrastructure to ensure data reliability. Blockdrive will make the right product available at the right time through our decentralized internet platform.

- **Storage: You have the freedom to choose whether to store your data on IPFS or Web3 Storage**

- **File manager: Directly browse your files from your dashboard**

- **Sharing: Easily share files with friends and family.**

- **NFT Token: Mint NFTs directly from the files uploaded on blockdrive**

- **Chat: Send messages on blockdrive.**

## 🦋 Prerequisite

- [Nodejs](https://nodejs.org/en// "Node") Installed

- [Git](https://git-scm.com/ "Git OFficial") Installed

- [npm](https://www.npmjs.com/ "npm ") Installed

- [Hardhat](https://hardhat.org/ "Hardhat ") Installed

## 🛠️ Installation Steps

1. Clone the repository

```Bash
git clone https://github.com/stugufaka/blockdrive
```

2. Change the working directory

```Bash
cd blockdrive
```

3. Start the local Hardhat node

```Bash
npx hardhat node
```

4. With the network running, deploy the contracts to the local network in a separate terminal window

```Bash
npx hardhat run scripts/deploy.js --network localhost
```

5. Start the app

```Bash
npm run start
```

**🎇 You are Ready to Go!**

## ⚙️ Configuration

The chain ID should be 80001. If you have a localhost rpc set up, you may need to overwrite it.

<p align="center" title="Project Initiator"><img src="./src/assets/rpc.jpg" alt="Project Initiator"/></p>

To deploy to Polygon test or main networks, update the configurations located in hardhat.config.js to use a private key and, optionally, deploy to a private RPC like Infura.

```Bash
require('@nomiclabs/hardhat-waffle');
const privateKey = 'xxx';
const projectId = 'xx';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/{projectId}',
      accounts: [privateKey],
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
```

## 👷 Built with

- [Solidity](https://docs.soliditylang.org/en/v0.8.17/ "Solidity"): as Main Coding Language for writing smart contract

- [ReactJs](https://reactjs.org/ "React Js"): as Main Coding Language for Creating The UI components (Front End)

- [TailwindCss](https://tailwindcss.com/ "Tailwind Css"): as Main Coding Language for styling UI components

- [IPFS](https://ipfs.tech/ "IPFS"): For Storing of files

- [Web3 Storage](https://www.google.com/search?q=web3storage "Web3 Storage"): For Storing of files

- [Moralis](https://moralis.io/ "Moralis"): as Tool for creating the chat section

- [Github](https://github.com/ "Github") : For Repo Storage and source code management

- [Git](https://git-scm.com/ "Git") : For Version Control System

## 📂 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

- Fork the Project

- Create your Feature Branch (git checkout -b feature/AmazingFeature)

- Commit your Changes (git commit -m 'Add some AmazingFeature')

- Push to the Branch (git push origin feature/AmazingFeature)

- Open a Pull Request

## 🎊 Future Updates

- [ ] We are working on our adding more web3 storage platforms

- [ ] NFTs for all media type (Videos, Audio and PDFs)

- [ ] Working of creating our own decentralize storage system

- [ ] Get tokens as your share files

## 🧑🏻 Author

**Stugu Faka**

- 🌌 [Profile](https://github.com/stugufaka "Stugu Faka")

- 🏮 [Email](stugufaka@gmail.com "Hi!")

<h2 align="center">🤝 Support</h2>

<p align="center">🎀 Contributions (<a href="https://guides.github.com/introduction/flow" title="GitHub flow">GitHub Flow</a>), 🔥 issues, and 🥮 feature requests are most welcome!</p>

<p align="center">💙 If you like this project, Give it a ⭐ and Share it with friends!</p>

<p align="center">Made with Solidity and Javascript & ❤️ </p>
