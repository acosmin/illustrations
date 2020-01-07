/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"plugin": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"illustrations/svg/ADayAtThePark":"illustrations/svg/ADayAtThePark","illustrations/svg/AboutUsPage":"illustrations/svg/AboutUsPage","illustrations/svg/AcceptTerms":"illustrations/svg/AcceptTerms","illustrations/svg/Account":"illustrations/svg/Account","illustrations/svg/ActiveSupport":"illustrations/svg/ActiveSupport","illustrations/svg/AddFiles":"illustrations/svg/AddFiles","illustrations/svg/AddToCart":"illustrations/svg/AddToCart","illustrations/svg/AddUser":"illustrations/svg/AddUser","illustrations/svg/Address":"illustrations/svg/Address","illustrations/svg/Agreement":"illustrations/svg/Agreement","illustrations/svg/AirSupport":"illustrations/svg/AirSupport","illustrations/svg/Airport":"illustrations/svg/Airport","illustrations/svg/Alert":"illustrations/svg/Alert","illustrations/svg/AlienScience":"illustrations/svg/AlienScience","illustrations/svg/Analysis":"illustrations/svg/Analysis","illustrations/svg/Analytics":"illustrations/svg/Analytics","illustrations/svg/Android":"illustrations/svg/Android","illustrations/svg/AppInstallation":"illustrations/svg/AppInstallation","illustrations/svg/Appreciation":"illustrations/svg/Appreciation","illustrations/svg/ArtLover":"illustrations/svg/ArtLover","illustrations/svg/ArtificialIntelligence":"illustrations/svg/ArtificialIntelligence","illustrations/svg/Astronaut":"illustrations/svg/Astronaut","illustrations/svg/AtWork":"illustrations/svg/AtWork","illustrations/svg/Autumn":"illustrations/svg/Autumn","illustrations/svg/Baby":"illustrations/svg/Baby","illustrations/svg/BackInTheDay":"illustrations/svg/BackInTheDay","illustrations/svg/BackToSchool":"illustrations/svg/BackToSchool","illustrations/svg/Basketball":"illustrations/svg/Basketball","illustrations/svg/BeTheHero":"illustrations/svg/BeTheHero","illustrations/svg/Beach":"illustrations/svg/Beach","illustrations/svg/BeerCelebration":"illustrations/svg/BeerCelebration","illustrations/svg/BeforeDawn":"illustrations/svg/BeforeDawn","illustrations/svg/Bibliophile":"illustrations/svg/Bibliophile","illustrations/svg/BirthdayCake":"illustrations/svg/BirthdayCake","illustrations/svg/Bitcoin":"illustrations/svg/Bitcoin","illustrations/svg/BitcoinP2P":"illustrations/svg/BitcoinP2P","illustrations/svg/BlankCanvas":"illustrations/svg/BlankCanvas","illustrations/svg/BlogPost":"illustrations/svg/BlogPost","illustrations/svg/Blogging":"illustrations/svg/Blogging","illustrations/svg/BookLover":"illustrations/svg/BookLover","illustrations/svg/Brainstorming":"illustrations/svg/Brainstorming","illustrations/svg/Broadcast":"illustrations/svg/Broadcast","illustrations/svg/Browser":"illustrations/svg/Browser","illustrations/svg/BrowserStats":"illustrations/svg/BrowserStats","illustrations/svg/Building":"illustrations/svg/Building","illustrations/svg/BuildingBlocks":"illustrations/svg/BuildingBlocks","illustrations/svg/BusStop":"illustrations/svg/BusStop","illustrations/svg/BusinessDeal":"illustrations/svg/BusinessDeal","illustrations/svg/BusinessPlan":"illustrations/svg/BusinessPlan","illustrations/svg/Businessman":"illustrations/svg/Businessman","illustrations/svg/Businesswoman":"illustrations/svg/Businesswoman","illustrations/svg/ByMyCar":"illustrations/svg/ByMyCar","illustrations/svg/Calculator":"illustrations/svg/Calculator","illustrations/svg/Calendar":"illustrations/svg/Calendar","illustrations/svg/Campfire":"illustrations/svg/Campfire","illustrations/svg/Camping":"illustrations/svg/Camping","illustrations/svg/CautiousDog":"illustrations/svg/CautiousDog","illustrations/svg/Celebration":"illustrations/svg/Celebration","illustrations/svg/Charts":"illustrations/svg/Charts","illustrations/svg/Chat":"illustrations/svg/Chat","illustrations/svg/Chatting":"illustrations/svg/Chatting","illustrations/svg/Checklist":"illustrations/svg/Checklist","illustrations/svg/Chef":"illustrations/svg/Chef","illustrations/svg/Chilling":"illustrations/svg/Chilling","illustrations/svg/Choose":"illustrations/svg/Choose","illustrations/svg/CityDriver":"illustrations/svg/CityDriver","illustrations/svg/CloudHosting":"illustrations/svg/CloudHosting","illustrations/svg/CloudSync":"illustrations/svg/CloudSync","illustrations/svg/CoWorking":"illustrations/svg/CoWorking","illustrations/svg/Coding":"illustrations/svg/Coding","illustrations/svg/Collaboration":"illustrations/svg/Collaboration","illustrations/svg/Collecting":"illustrations/svg/Collecting","illustrations/svg/Collection":"illustrations/svg/Collection","illustrations/svg/Community":"illustrations/svg/Community","illustrations/svg/Confirmation":"illustrations/svg/Confirmation","illustrations/svg/Confirmed":"illustrations/svg/Confirmed","illustrations/svg/Connected":"illustrations/svg/Connected","illustrations/svg/ConnectingTeams":"illustrations/svg/ConnectingTeams","illustrations/svg/ContainerShip":"illustrations/svg/ContainerShip","illustrations/svg/Contrast":"illustrations/svg/Contrast","illustrations/svg/ControlPanel":"illustrations/svg/ControlPanel","illustrations/svg/Conversation":"illustrations/svg/Conversation","illustrations/svg/CountrySide":"illustrations/svg/CountrySide","illustrations/svg/Couple":"illustrations/svg/Couple","illustrations/svg/Coworkers":"illustrations/svg/Coworkers","illustrations/svg/Create":"illustrations/svg/Create","illustrations/svg/CreationProcess":"illustrations/svg/CreationProcess","illustrations/svg/Creativity":"illustrations/svg/Creativity","illustrations/svg/CreditCard":"illustrations/svg/CreditCard","illustrations/svg/CreditCardPayment":"illustrations/svg/CreditCardPayment","illustrations/svg/CreditCardPayments":"illustrations/svg/CreditCardPayments","illustrations/svg/CryptoFlowers":"illustrations/svg/CryptoFlowers","illustrations/svg/CustomerSurvey":"illustrations/svg/CustomerSurvey","illustrations/svg/DarkAlley":"illustrations/svg/DarkAlley","illustrations/svg/Dashboard":"illustrations/svg/Dashboard","illustrations/svg/Data":"illustrations/svg/Data","illustrations/svg/DataReport":"illustrations/svg/DataReport","illustrations/svg/Delivery":"illustrations/svg/Delivery","illustrations/svg/Departing":"illustrations/svg/Departing","illustrations/svg/Depi":"illustrations/svg/Depi","illustrations/svg/DesignCommunity":"illustrations/svg/DesignCommunity","illustrations/svg/DesignProcess":"illustrations/svg/DesignProcess","illustrations/svg/DesignTools":"illustrations/svg/DesignTools","illustrations/svg/Designer":"illustrations/svg/Designer","illustrations/svg/DesignerGirl":"illustrations/svg/DesignerGirl","illustrations/svg/DesignerLife":"illustrations/svg/DesignerLife","illustrations/svg/Destination":"illustrations/svg/Destination","illustrations/svg/Development":"illustrations/svg/Development","illustrations/svg/Devices":"illustrations/svg/Devices","illustrations/svg/DigitalNomad":"illustrations/svg/DigitalNomad","illustrations/svg/Doctor":"illustrations/svg/Doctor","illustrations/svg/Documents":"illustrations/svg/Documents","illustrations/svg/DroneDelivery":"illustrations/svg/DroneDelivery","illustrations/svg/DroneRace":"illustrations/svg/DroneRace","illustrations/svg/EasterEggHunt":"illustrations/svg/EasterEggHunt","illustrations/svg/EatingTogether":"illustrations/svg/EatingTogether","illustrations/svg/ElectricCar":"illustrations/svg/ElectricCar","illustrations/svg/EmailCapture":"illustrations/svg/EmailCapture","illustrations/svg/Emails":"illustrations/svg/Emails","illustrations/svg/Empty":"illustrations/svg/Empty","illustrations/svg/Envelope":"illustrations/svg/Envelope","illustrations/svg/Ether":"illustrations/svg/Ether","illustrations/svg/Ethereum":"illustrations/svg/Ethereum","illustrations/svg/Events":"illustrations/svg/Events","illustrations/svg/Everywhere":"illustrations/svg/Everywhere","illustrations/svg/Experts":"illustrations/svg/Experts","illustrations/svg/Exploring":"illustrations/svg/Exploring","illustrations/svg/FallIsComing":"illustrations/svg/FallIsComing","illustrations/svg/Fans":"illustrations/svg/Fans","illustrations/svg/FastLoading":"illustrations/svg/FastLoading","illustrations/svg/Fatherhood":"illustrations/svg/Fatherhood","illustrations/svg/FeelingBlue":"illustrations/svg/FeelingBlue","illustrations/svg/FileSearching":"illustrations/svg/FileSearching","illustrations/svg/FilingSystem":"illustrations/svg/FilingSystem","illustrations/svg/Filter":"illustrations/svg/Filter","illustrations/svg/Finance":"illustrations/svg/Finance","illustrations/svg/Firmware":"illustrations/svg/Firmware","illustrations/svg/Fishing":"illustrations/svg/Fishing","illustrations/svg/Floating":"illustrations/svg/Floating","illustrations/svg/Focus":"illustrations/svg/Focus","illustrations/svg/FollowMeDrone":"illustrations/svg/FollowMeDrone","illustrations/svg/ForSale":"illustrations/svg/ForSale","illustrations/svg/Forever":"illustrations/svg/Forever","illustrations/svg/ForgotPassword":"illustrations/svg/ForgotPassword","illustrations/svg/Freelancer":"illustrations/svg/Freelancer","illustrations/svg/Friendship":"illustrations/svg/Friendship","illustrations/svg/Gaming":"illustrations/svg/Gaming","illustrations/svg/Gardening":"illustrations/svg/Gardening","illustrations/svg/Gdpr":"illustrations/svg/Gdpr","illustrations/svg/GettingCoffee":"illustrations/svg/GettingCoffee","illustrations/svg/Gift":"illustrations/svg/Gift","illustrations/svg/GirlsJustWannaHaveFun":"illustrations/svg/GirlsJustWannaHaveFun","illustrations/svg/Goal":"illustrations/svg/Goal","illustrations/svg/GoldenGateBridge":"illustrations/svg/GoldenGateBridge","illustrations/svg/GoodDoggy":"illustrations/svg/GoodDoggy","illustrations/svg/Grades":"illustrations/svg/Grades","illustrations/svg/Graduation":"illustrations/svg/Graduation","illustrations/svg/GrandSlam":"illustrations/svg/GrandSlam","illustrations/svg/GroupSelfie":"illustrations/svg/GroupSelfie","illustrations/svg/Growing":"illustrations/svg/Growing","illustrations/svg/HangOut":"illustrations/svg/HangOut","illustrations/svg/HappyBirthday":"illustrations/svg/HappyBirthday","illustrations/svg/HealthyHabit":"illustrations/svg/HealthyHabit","illustrations/svg/Hello":"illustrations/svg/Hello","illustrations/svg/HighFive":"illustrations/svg/HighFive","illustrations/svg/Hiring":"illustrations/svg/Hiring","illustrations/svg/HomeRun":"illustrations/svg/HomeRun","illustrations/svg/HouseSearching":"illustrations/svg/HouseSearching","illustrations/svg/Houses":"illustrations/svg/Houses","illustrations/svg/ImageFolder":"illustrations/svg/ImageFolder","illustrations/svg/ImageUpload":"illustrations/svg/ImageUpload","illustrations/svg/Images":"illustrations/svg/Images","illustrations/svg/InLove":"illustrations/svg/InLove","illustrations/svg/InSync":"illustrations/svg/InSync","illustrations/svg/InTheOffice":"illustrations/svg/InTheOffice","illustrations/svg/InThePool":"illustrations/svg/InThePool","illustrations/svg/InboxCleanup":"illustrations/svg/InboxCleanup","illustrations/svg/Influencer":"illustrations/svg/Influencer","illustrations/svg/InstantSupport":"illustrations/svg/InstantSupport","illustrations/svg/InternetOnTheGo":"illustrations/svg/InternetOnTheGo","illustrations/svg/Invite":"illustrations/svg/Invite","illustrations/svg/JavascriptFrameworks":"illustrations/svg/JavascriptFrameworks","illustrations/svg/JobHunt":"illustrations/svg/JobHunt","illustrations/svg/Jogging":"illustrations/svg/Jogging","illustrations/svg/Lighthouse":"illustrations/svg/Lighthouse","illustrations/svg/LiveCollaboration":"illustrations/svg/LiveCollaboration","illustrations/svg/Loading":"illustrations/svg/Loading","illustrations/svg/Login":"illustrations/svg/Login","illustrations/svg/Lost":"illustrations/svg/Lost","illustrations/svg/LoveIsInTheAir":"illustrations/svg/LoveIsInTheAir","illustrations/svg/Mail":"illustrations/svg/Mail","illustrations/svg/MailSent":"illustrations/svg/MailSent","illustrations/svg/Mailbox":"illustrations/svg/Mailbox","illustrations/svg/Maintenance":"illustrations/svg/Maintenance","illustrations/svg/MakeItRain":"illustrations/svg/MakeItRain","illustrations/svg/MakeupArtist":"illustrations/svg/MakeupArtist","illustrations/svg/MapDark":"illustrations/svg/MapDark","illustrations/svg/MapLight":"illustrations/svg/MapLight","illustrations/svg/Marilyn":"illustrations/svg/Marilyn","illustrations/svg/MayTheForce":"illustrations/svg/MayTheForce","illustrations/svg/Meditation":"illustrations/svg/Meditation","illustrations/svg/Meeting":"illustrations/svg/Meeting","illustrations/svg/Messages":"illustrations/svg/Messages","illustrations/svg/Messaging":"illustrations/svg/Messaging","illustrations/svg/Messenger":"illustrations/svg/Messenger","illustrations/svg/Mindfulness":"illustrations/svg/Mindfulness","illustrations/svg/MissionImpossible":"illustrations/svg/MissionImpossible","illustrations/svg/Mobile":"illustrations/svg/Mobile","illustrations/svg/MobileApps":"illustrations/svg/MobileApps","illustrations/svg/MobileBrowsers":"illustrations/svg/MobileBrowsers","illustrations/svg/MobilePayments":"illustrations/svg/MobilePayments","illustrations/svg/ModernWoman":"illustrations/svg/ModernWoman","illustrations/svg/MomentToRemember":"illustrations/svg/MomentToRemember","illustrations/svg/MoreMusic":"illustrations/svg/MoreMusic","illustrations/svg/MorningEssentials":"illustrations/svg/MorningEssentials","illustrations/svg/Motherhood":"illustrations/svg/Motherhood","illustrations/svg/MovieNight":"illustrations/svg/MovieNight","illustrations/svg/Music":"illustrations/svg/Music","illustrations/svg/Navigation":"illustrations/svg/Navigation","illustrations/svg/Nerd":"illustrations/svg/Nerd","illustrations/svg/NewMessage":"illustrations/svg/NewMessage","illustrations/svg/News":"illustrations/svg/News","illustrations/svg/Newsletter":"illustrations/svg/Newsletter","illustrations/svg/NoData":"illustrations/svg/NoData","illustrations/svg/Notebook":"illustrations/svg/Notebook","illustrations/svg/Notes":"illustrations/svg/Notes","illustrations/svg/OffRoad":"illustrations/svg/OffRoad","illustrations/svg/OldDay":"illustrations/svg/OldDay","illustrations/svg/OnTheOffice":"illustrations/svg/OnTheOffice","illustrations/svg/OnTheWay":"illustrations/svg/OnTheWay","illustrations/svg/Onboarding":"illustrations/svg/Onboarding","illustrations/svg/Online":"illustrations/svg/Online","illustrations/svg/OnlineShopping":"illustrations/svg/OnlineShopping","illustrations/svg/OnlineWorld":"illustrations/svg/OnlineWorld","illustrations/svg/Opened":"illustrations/svg/Opened","illustrations/svg/OrderConfirmed":"illustrations/svg/OrderConfirmed","illustrations/svg/OrdinaryDay":"illustrations/svg/OrdinaryDay","illustrations/svg/OrganizePhotos":"illustrations/svg/OrganizePhotos","illustrations/svg/OrganizeResume":"illustrations/svg/OrganizeResume","illustrations/svg/OrganizingProjects":"illustrations/svg/OrganizingProjects","illustrations/svg/OuterSpace":"illustrations/svg/OuterSpace","illustrations/svg/PassingBy":"illustrations/svg/PassingBy","illustrations/svg/PedestrianCrossing":"illustrations/svg/PedestrianCrossing","illustrations/svg/PenTool":"illustrations/svg/PenTool","illustrations/svg/PeopleSearch":"illustrations/svg/PeopleSearch","illustrations/svg/Personalization":"illustrations/svg/Personalization","illustrations/svg/Photo":"illustrations/svg/Photo","illustrations/svg/PhotoSharing":"illustrations/svg/PhotoSharing","illustrations/svg/Photocopy":"illustrations/svg/Photocopy","illustrations/svg/Photos":"illustrations/svg/Photos","illustrations/svg/PieChart":"illustrations/svg/PieChart","illustrations/svg/Pilates":"illustrations/svg/Pilates","illustrations/svg/PlainCreditCard":"illustrations/svg/PlainCreditCard","illustrations/svg/PlayfulCat":"illustrations/svg/PlayfulCat","illustrations/svg/Podcast":"illustrations/svg/Podcast","illustrations/svg/Portfolio":"illustrations/svg/Portfolio","illustrations/svg/Post":"illustrations/svg/Post","illustrations/svg/Posts":"illustrations/svg/Posts","illustrations/svg/Powerful":"illustrations/svg/Powerful","illustrations/svg/Preferences":"illustrations/svg/Preferences","illustrations/svg/Presentation":"illustrations/svg/Presentation","illustrations/svg/PressPlay":"illustrations/svg/PressPlay","illustrations/svg/Processing":"illustrations/svg/Processing","illustrations/svg/ProductHunt":"illustrations/svg/ProductHunt","illustrations/svg/ProductTeardown":"illustrations/svg/ProductTeardown","illustrations/svg/ProductTour":"illustrations/svg/ProductTour","illustrations/svg/ProfilePic":"illustrations/svg/ProfilePic","illustrations/svg/Programming":"illustrations/svg/Programming","illustrations/svg/QaEngineers":"illustrations/svg/QaEngineers","illustrations/svg/Queue":"illustrations/svg/Queue","illustrations/svg/ReadingList":"illustrations/svg/ReadingList","illustrations/svg/RealTimeSync":"illustrations/svg/RealTimeSync","illustrations/svg/Refreshing":"illustrations/svg/Refreshing","illustrations/svg/Relaxation":"illustrations/svg/Relaxation","illustrations/svg/RelaxingAtHome":"illustrations/svg/RelaxingAtHome","illustrations/svg/Report":"illustrations/svg/Report","illustrations/svg/Responsive":"illustrations/svg/Responsive","illustrations/svg/Resume":"illustrations/svg/Resume","illustrations/svg/ResumeFolder":"illustrations/svg/ResumeFolder","illustrations/svg/RideABicycle":"illustrations/svg/RideABicycle","illustrations/svg/Rising":"illustrations/svg/Rising","illustrations/svg/RomanticGetaway":"illustrations/svg/RomanticGetaway","illustrations/svg/RunningWild":"illustrations/svg/RunningWild","illustrations/svg/Safe":"illustrations/svg/Safe","illustrations/svg/Science":"illustrations/svg/Science","illustrations/svg/Search":"illustrations/svg/Search","illustrations/svg/SearchEngines":"illustrations/svg/SearchEngines","illustrations/svg/SecureData":"illustrations/svg/SecureData","illustrations/svg/SecureServer":"illustrations/svg/SecureServer","illustrations/svg/SecurityOn":"illustrations/svg/SecurityOn","illustrations/svg/Segment":"illustrations/svg/Segment","illustrations/svg/Segmentation":"illustrations/svg/Segmentation","illustrations/svg/Select":"illustrations/svg/Select","illustrations/svg/Selfie":"illustrations/svg/Selfie","illustrations/svg/SelfieTime":"illustrations/svg/SelfieTime","illustrations/svg/Server":"illustrations/svg/Server","illustrations/svg/ServerStatus":"illustrations/svg/ServerStatus","illustrations/svg/Setup":"illustrations/svg/Setup","illustrations/svg/SiteStats":"illustrations/svg/SiteStats","illustrations/svg/SleepAnalysis":"illustrations/svg/SleepAnalysis","illustrations/svg/Sleeping":"illustrations/svg/Sleeping","illustrations/svg/SmileyFace":"illustrations/svg/SmileyFace","illustrations/svg/Snowman":"illustrations/svg/Snowman","illustrations/svg/SocialGrowth":"illustrations/svg/SocialGrowth","illustrations/svg/SocialIdeas":"illustrations/svg/SocialIdeas","illustrations/svg/SocialMedia":"illustrations/svg/SocialMedia","illustrations/svg/SocialNetworking":"illustrations/svg/SocialNetworking","illustrations/svg/SocialStrategy":"illustrations/svg/SocialStrategy","illustrations/svg/SocialTree":"illustrations/svg/SocialTree","illustrations/svg/Specs":"illustrations/svg/Specs","illustrations/svg/Spreadsheets":"illustrations/svg/Spreadsheets","illustrations/svg/Starman":"illustrations/svg/Starman","illustrations/svg/Startled":"illustrations/svg/Startled","illustrations/svg/StartupLife":"illustrations/svg/StartupLife","illustrations/svg/StaticAssets":"illustrations/svg/StaticAssets","illustrations/svg/Statistics":"illustrations/svg/Statistics","illustrations/svg/StayingIn":"illustrations/svg/StayingIn","illustrations/svg/StreetFood":"illustrations/svg/StreetFood","illustrations/svg/Studying":"illustrations/svg/Studying","illustrations/svg/SuccessfulPurchase":"illustrations/svg/SuccessfulPurchase","illustrations/svg/SunnyDay":"illustrations/svg/SunnyDay","illustrations/svg/Superhero":"illustrations/svg/Superhero","illustrations/svg/Surfer":"illustrations/svg/Surfer","illustrations/svg/SwipeProfiles":"illustrations/svg/SwipeProfiles","illustrations/svg/Sync":"illustrations/svg/Sync","illustrations/svg/Tabs":"illustrations/svg/Tabs","illustrations/svg/Taken":"illustrations/svg/Taken","illustrations/svg/TakingNotes":"illustrations/svg/TakingNotes","illustrations/svg/Target":"illustrations/svg/Target","illustrations/svg/Tasting":"illustrations/svg/Tasting","illustrations/svg/Team":"illustrations/svg/Team","illustrations/svg/TeamSpirit":"illustrations/svg/TeamSpirit","illustrations/svg/Thoughts":"illustrations/svg/Thoughts","illustrations/svg/ThroughTheDesert":"illustrations/svg/ThroughTheDesert","illustrations/svg/TimeManagement":"illustrations/svg/TimeManagement","illustrations/svg/ToDoList":"illustrations/svg/ToDoList","illustrations/svg/ToTheStars":"illustrations/svg/ToTheStars","illustrations/svg/Together":"illustrations/svg/Together","illustrations/svg/TrackAndField":"illustrations/svg/TrackAndField","illustrations/svg/TransferFiles":"illustrations/svg/TransferFiles","illustrations/svg/Trip":"illustrations/svg/Trip","illustrations/svg/Tweetstorm":"illustrations/svg/Tweetstorm","illustrations/svg/Typing":"illustrations/svg/Typing","illustrations/svg/Upload":"illustrations/svg/Upload","illustrations/svg/Upvote":"illustrations/svg/Upvote","illustrations/svg/Vault":"illustrations/svg/Vault","illustrations/svg/VirtualReality":"illustrations/svg/VirtualReality","illustrations/svg/VrChat":"illustrations/svg/VrChat","illustrations/svg/WalkInTheCity":"illustrations/svg/WalkInTheCity","illustrations/svg/WallPost":"illustrations/svg/WallPost","illustrations/svg/Weather":"illustrations/svg/Weather","illustrations/svg/WebDevices":"illustrations/svg/WebDevices","illustrations/svg/WebsiteSetup":"illustrations/svg/WebsiteSetup","illustrations/svg/Welcome":"illustrations/svg/Welcome","illustrations/svg/WindowShopping":"illustrations/svg/WindowShopping","illustrations/svg/Windows":"illustrations/svg/Windows","illustrations/svg/WinterOlympics":"illustrations/svg/WinterOlympics","illustrations/svg/Wireframing":"illustrations/svg/Wireframing","illustrations/svg/Wishes":"illustrations/svg/Wishes","illustrations/svg/Woman":"illustrations/svg/Woman","illustrations/svg/WomenDay":"illustrations/svg/WomenDay","illustrations/svg/WordOfMouth":"illustrations/svg/WordOfMouth","illustrations/svg/WorkChat":"illustrations/svg/WorkChat","illustrations/svg/WorkTime":"illustrations/svg/WorkTime","illustrations/svg/Working":"illustrations/svg/Working","illustrations/svg/WorkingLate":"illustrations/svg/WorkingLate","illustrations/svg/Workout":"illustrations/svg/Workout","illustrations/svg/Yacht":"illustrations/svg/Yacht","illustrations/svg/YoungAndHappy":"illustrations/svg/YoungAndHappy"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ 	// WebpackRequireFrom
/******/ 	Object.defineProperty(__webpack_require__, "p", {
/******/ 	  get: function () {
/******/ 	try {
/******/ 	  if (typeof illustrationsBlock.pluginDirUrl !== "string") {
/******/ 	    throw new Error("WebpackRequireFrom: 'illustrationsBlock.pluginDirUrl' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");
/******/ 	  }
/******/ 	  return illustrationsBlock.pluginDirUrl;
/******/ 	} catch (e) {
/******/ 	  if (!false) {
/******/ 	    console.error(e);
/******/ 	  }
/******/ 	  return "";
/******/ 	}
/******/ 	 }
/******/ 	})
/******/
/******/ 	var jsonpArray = window["illustrationsJSONP"] = window["illustrationsJSONP"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_blocks_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/blocks/simple */ "./src/blocks/simple/index.js");
// :) enough for now :P


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/fuse.js/dist/fuse.js":
/*!*******************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.3.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
  return !Array.isArray ? Object.prototype.toString.call(obj) === '[object Array]' : Array.isArray(obj);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bitapRegexSearch = __webpack_require__(5);
var bitapSearch = __webpack_require__(7);
var patternAlphabet = __webpack_require__(4);

var Bitap = function () {
  function Bitap(pattern, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

    _classCallCheck(this, Bitap);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: isCaseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength
    };

    this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

    if (this.pattern.length <= maxPatternLength) {
      this.patternAlphabet = patternAlphabet(this.pattern);
    }
  }

  _createClass(Bitap, [{
    key: 'search',
    value: function search(text) {
      if (!this.options.isCaseSensitive) {
        text = text.toLowerCase();
      }

      // Exact match
      if (this.pattern === text) {
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      }

      // When pattern length is greater than the machine word length, just do a a regex comparison
      var _options = this.options,
          maxPatternLength = _options.maxPatternLength,
          tokenSeparator = _options.tokenSeparator;

      if (this.pattern.length > maxPatternLength) {
        return bitapRegexSearch(text, this.pattern, tokenSeparator);
      }

      // Otherwise, use Bitap algorithm
      var _options2 = this.options,
          location = _options2.location,
          distance = _options2.distance,
          threshold = _options2.threshold,
          findAllMatches = _options2.findAllMatches,
          minMatchCharLength = _options2.minMatchCharLength;

      return bitapSearch(text, this.pattern, this.patternAlphabet, {
        location: location,
        distance: distance,
        threshold: threshold,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength
      });
    }
  }]);

  return Bitap;
}();

// let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)

module.exports = Bitap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0);

var deepValue = function deepValue(obj, path, list) {
  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj);
  } else {
    var dotIndex = path.indexOf('.');
    var firstSegment = path;
    var remaining = null;

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex);
      remaining = path.slice(dotIndex + 1);
    }

    var value = obj[firstSegment];

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value.toString());
      } else if (isArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          deepValue(value[i], remaining, list);
        }
      } else if (remaining) {
        // An object. Recurse further.
        deepValue(value, remaining, list);
      }
    }
  }

  return list;
};

module.exports = function (obj, path) {
  return deepValue(obj, path, []);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var matchedIndices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern) {
  var mask = {};
  var len = pattern.length;

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (var _i = 0; _i < len; _i += 1) {
    mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
  }

  return mask;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

module.exports = function (text, pattern) {
  var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;

  var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
  var matches = text.match(regex);
  var isMatch = !!matches;
  var matchedIndices = [];

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i];
      matchedIndices.push([text.indexOf(match), match.length - 1]);
    }
  }

  return {
    // TODO: revisit this score
    score: isMatch ? 0.5 : 1,
    isMatch: isMatch,
    matchedIndices: matchedIndices
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern, _ref) {
  var _ref$errors = _ref.errors,
      errors = _ref$errors === undefined ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance;

  var accuracy = errors / pattern.length;
  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bitapScore = __webpack_require__(6);
var matchedIndices = __webpack_require__(3);

module.exports = function (text, pattern, patternAlphabet, _ref) {
  var _ref$location = _ref.location,
      location = _ref$location === undefined ? 0 : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

  var expectedLocation = location;
  // Set starting location at beginning text and initialize the alphabet.
  var textLen = text.length;
  // Highest score beyond which we give up.
  var currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  var bestLocation = text.indexOf(pattern, expectedLocation);

  var patternLen = pattern.length;

  // a mask of the matches
  var matchMask = [];
  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    var score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });
    currentThreshold = Math.min(score, currentThreshold);

    // What about in the other direction? (speed up)
    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      var _score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });
      currentThreshold = Math.min(_score, currentThreshold);
    }
  }

  // Reset the best location
  bestLocation = -1;

  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;

  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score3 = bitapScore(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score3 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    var bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      }

      // First pass: exact match
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (_i !== 0) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break;
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    var _score2 = bitapScore(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });

    // console.log('score', score, finalScore)

    if (_score2 > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  }

  // console.log('FINAL SCORE', finalScore)

  // Count exact matches (those with a score of 0) to be "almost" exact
  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: matchedIndices(matchMask, minMatchCharLength)
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bitap = __webpack_require__(1);
var deepValue = __webpack_require__(2);
var isArray = __webpack_require__(0);

var Fuse = function () {
  function Fuse(list, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$caseSensitive = _ref.caseSensitive,
        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? null : _ref$id,
        _ref$keys = _ref.keys,
        keys = _ref$keys === undefined ? [] : _ref$keys,
        _ref$shouldSort = _ref.shouldSort,
        shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort,
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === undefined ? deepValue : _ref$getFn,
        _ref$sortFn = _ref.sortFn,
        sortFn = _ref$sortFn === undefined ? function (a, b) {
      return a.score - b.score;
    } : _ref$sortFn,
        _ref$tokenize = _ref.tokenize,
        tokenize = _ref$tokenize === undefined ? false : _ref$tokenize,
        _ref$matchAllTokens = _ref.matchAllTokens,
        matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === undefined ? false : _ref$includeScore,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Fuse);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: caseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      id: id,
      keys: keys,
      includeMatches: includeMatches,
      includeScore: includeScore,
      shouldSort: shouldSort,
      getFn: getFn,
      sortFn: sortFn,
      verbose: verbose,
      tokenize: tokenize,
      matchAllTokens: matchAllTokens
    };

    this.setCollection(list);
  }

  _createClass(Fuse, [{
    key: 'setCollection',
    value: function setCollection(list) {
      this.list = list;
      return list;
    }
  }, {
    key: 'search',
    value: function search(pattern) {
      this._log('---------\nSearch pattern: "' + pattern + '"');

      var _prepareSearchers2 = this._prepareSearchers(pattern),
          tokenSearchers = _prepareSearchers2.tokenSearchers,
          fullSearcher = _prepareSearchers2.fullSearcher;

      var _search2 = this._search(tokenSearchers, fullSearcher),
          weights = _search2.weights,
          results = _search2.results;

      this._computeScore(weights, results);

      if (this.options.shouldSort) {
        this._sort(results);
      }

      return this._format(results);
    }
  }, {
    key: '_prepareSearchers',
    value: function _prepareSearchers() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var tokenSearchers = [];

      if (this.options.tokenize) {
        // Tokenize on the separator
        var tokens = pattern.split(this.options.tokenSeparator);
        for (var i = 0, len = tokens.length; i < len; i += 1) {
          tokenSearchers.push(new Bitap(tokens[i], this.options));
        }
      }

      var fullSearcher = new Bitap(pattern, this.options);

      return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
    }
  }, {
    key: '_search',
    value: function _search() {
      var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fullSearcher = arguments[1];

      var list = this.list;
      var resultMap = {};
      var results = [];

      // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.
      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (var i = 0, len = list.length; i < len; i += 1) {
          this._analyze({
            key: '',
            value: list[i],
            record: i,
            index: i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }

        return { weights: null, results: results };
      }

      // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.
      var weights = {};
      for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
        var item = list[_i];
        // Iterate over every key
        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
          var key = this.options.keys[j];
          if (typeof key !== 'string') {
            weights[key.name] = {
              weight: 1 - key.weight || 1
            };
            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }
            key = key.name;
          } else {
            weights[key] = {
              weight: 1
            };
          }

          this._analyze({
            key: key,
            value: this.options.getFn(item, key),
            record: item,
            index: _i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }

      return { weights: weights, results: results };
    }
  }, {
    key: '_analyze',
    value: function _analyze(_ref2, _ref3) {
      var key = _ref2.key,
          _ref2$arrayIndex = _ref2.arrayIndex,
          arrayIndex = _ref2$arrayIndex === undefined ? -1 : _ref2$arrayIndex,
          value = _ref2.value,
          record = _ref2.record,
          index = _ref2.index;
      var _ref3$tokenSearchers = _ref3.tokenSearchers,
          tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers,
          _ref3$fullSearcher = _ref3.fullSearcher,
          fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher,
          _ref3$resultMap = _ref3.resultMap,
          resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap,
          _ref3$results = _ref3.results,
          results = _ref3$results === undefined ? [] : _ref3$results;

      // Check if the texvaluet can be searched
      if (value === undefined || value === null) {
        return;
      }

      var exists = false;
      var averageScore = -1;
      var numTextMatches = 0;

      if (typeof value === 'string') {
        this._log('\nKey: ' + (key === '' ? '-' : key));

        var mainSearchResult = fullSearcher.search(value);
        this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);

        if (this.options.tokenize) {
          var words = value.split(this.options.tokenSeparator);
          var scores = [];

          for (var i = 0; i < tokenSearchers.length; i += 1) {
            var tokenSearcher = tokenSearchers[i];

            this._log('\nPattern: "' + tokenSearcher.pattern + '"');

            // let tokenScores = []
            var hasMatchInText = false;

            for (var j = 0; j < words.length; j += 1) {
              var word = words[j];
              var tokenSearchResult = tokenSearcher.search(word);
              var obj = {};
              if (tokenSearchResult.isMatch) {
                obj[word] = tokenSearchResult.score;
                exists = true;
                hasMatchInText = true;
                scores.push(tokenSearchResult.score);
              } else {
                obj[word] = 1;
                if (!this.options.matchAllTokens) {
                  scores.push(1);
                }
              }
              this._log('Token: "' + word + '", score: ' + obj[word]);
              // tokenScores.push(obj)
            }

            if (hasMatchInText) {
              numTextMatches += 1;
            }
          }

          averageScore = scores[0];
          var scoresLen = scores.length;
          for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
            averageScore += scores[_i2];
          }
          averageScore = averageScore / scoresLen;

          this._log('Token score average:', averageScore);
        }

        var finalScore = mainSearchResult.score;
        if (averageScore > -1) {
          finalScore = (finalScore + averageScore) / 2;
        }

        this._log('Score average:', finalScore);

        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

        this._log('\nCheck Matches: ' + checkTextMatches);

        // If a match is found, add the item to <rawResults>, including its score
        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
          // Check if the item already exists in our results
          var existingResult = resultMap[index];
          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              arrayIndex: arrayIndex,
              value: value,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            resultMap[index] = {
              item: record,
              output: [{
                key: key,
                arrayIndex: arrayIndex,
                value: value,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };

            results.push(resultMap[index]);
          }
        }
      } else if (isArray(value)) {
        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
          this._analyze({
            key: key,
            arrayIndex: _i3,
            value: value[_i3],
            record: record,
            index: index
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }
    }
  }, {
    key: '_computeScore',
    value: function _computeScore(weights, results) {
      this._log('\n\nComputing score:\n');

      for (var i = 0, len = results.length; i < len; i += 1) {
        var output = results[i].output;
        var scoreLen = output.length;

        var currScore = 1;
        var bestScore = 1;

        for (var j = 0; j < scoreLen; j += 1) {
          var weight = weights ? weights[output[j].key].weight : 1;
          var score = weight === 1 ? output[j].score : output[j].score || 0.001;
          var nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            output[j].nScore = nScore;
            currScore *= nScore;
          }
        }

        results[i].score = bestScore === 1 ? currScore : bestScore;

        this._log(results[i]);
      }
    }
  }, {
    key: '_sort',
    value: function _sort(results) {
      this._log('\n\nSorting....');
      results.sort(this.options.sortFn);
    }
  }, {
    key: '_format',
    value: function _format(results) {
      var finalOutput = [];

      if (this.options.verbose) {
        this._log('\n\nOutput:\n\n', JSON.stringify(results));
      }

      var transformers = [];

      if (this.options.includeMatches) {
        transformers.push(function (result, data) {
          var output = result.output;
          data.matches = [];

          for (var i = 0, len = output.length; i < len; i += 1) {
            var item = output[i];

            if (item.matchedIndices.length === 0) {
              continue;
            }

            var obj = {
              indices: item.matchedIndices,
              value: item.value
            };
            if (item.key) {
              obj.key = item.key;
            }
            if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
              obj.arrayIndex = item.arrayIndex;
            }
            data.matches.push(obj);
          }
        });
      }

      if (this.options.includeScore) {
        transformers.push(function (result, data) {
          data.score = result.score;
        });
      }

      for (var i = 0, len = results.length; i < len; i += 1) {
        var result = results[i];

        if (this.options.id) {
          result.item = this.options.getFn(result.item, this.options.id)[0];
        }

        if (!transformers.length) {
          finalOutput.push(result.item);
          continue;
        }

        var data = {
          item: result.item
        };

        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
          transformers[j](result, data);
        }

        finalOutput.push(data);
      }

      return finalOutput;
    }
  }, {
    key: '_log',
    value: function _log() {
      if (this.options.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);

  return Fuse;
}();

module.exports = Fuse;

/***/ })
/******/ ]);
});
//# sourceMappingURL=fuse.js.map

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.browser.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.6.3';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;


var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var enableHooks = false;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
var warnAboutDeprecatedLifecycles = false;

// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
var enableSuspenseServerRenderer = false;

// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.

var ReactDebugCurrentFrame$1 = void 0;
{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
}

var didWarnAboutInvalidateContextType = {};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;
  if (!contextTypes) {
    return emptyObject;
  }
  var maskedContext = {};
  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }
  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component', ReactDebugCurrentFrame$1.getCurrentStack);
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  for (var i = context._threadCount; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}

function processContext(type, context, threadID) {
  var contextType = type.contextType;
  if (typeof contextType === 'object' && contextType !== null) {
    {
      if (contextType.$$typeof !== REACT_CONTEXT_TYPE) {
        var name = getComponentName(type) || 'Component';
        if (!didWarnAboutInvalidateContextType[name]) {
          didWarnAboutInvalidateContextType[name] = true;
          warningWithoutStack$1(false, '%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext(). ' + 'Did you accidentally pass the Context.Provider instead?', name);
        }
      }
    }
    validateContextBounds(contextType, threadID);
    return contextType[threadID];
  } else {
    var maskedContext = maskContext(type, context);
    {
      if (type.contextTypes) {
        checkContextTypes(type.contextTypes, maskedContext, 'context');
      }
    }
    return maskedContext;
  }
}

// Allocates a new index for each request. Tries to stay as compact as possible so that these
// indices can be used to reference a tightly packaged array. As opposed to being used in a Map.
// The first allocated index is 1.

var nextAvailableThreadIDs = new Uint16Array(16);
for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}
nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;
  !(newSize <= 0x10000) ? invariant(false, 'Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.') : void 0;
  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;
  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }
  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];
  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }
  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}

function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0;

// A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.
var STRING = 1;

// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
var BOOLEANISH_STRING = 2;

// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
var BOOLEAN = 3;

// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
var OVERLOADED_BOOLEAN = 4;

// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
var NUMERIC = 5;

// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';


var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};

function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty$1.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }
  if (hasOwnProperty$1.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  illegalAttributeNameCache[attributeName] = true;
  {
    warning$1(false, 'Invalid attribute name: `%s`', attributeName);
  }
  return false;
}

function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }
  if (isCustomComponentTag) {
    return false;
  }
  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }
  return false;
}

function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }
  switch (typeof value) {
    case 'function':
    // $FlowIssue symbol is perfectly valid here
    case 'symbol':
      // eslint-disable-line
      return true;
    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }
        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }
    default:
      return false;
  }
}

function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }
  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }
  if (isCustomComponentTag) {
    return false;
  }
  if (propertyInfo !== null) {
    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;
      case OVERLOADED_BOOLEAN:
        return value === false;
      case NUMERIC:
        return isNaN(value);
      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }
  return false;
}

function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
}

// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
var properties = {};

// These props are reserved by React. They shouldn't be written to the DOM.
['children', 'dangerouslySetInnerHTML',
// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null);
} // attributeNamespace
);

// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML boolean attributes.
['allowFullScreen', 'async',
// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless',
// Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
['checked',
// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
['capture', 'download'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that must be positive numbers.
['cols', 'rows', 'size', 'span'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that must be numbers.
['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

var CAMELIZE = /[\-\:]([a-z])/g;
var capitalize = function (token) {
  return token[1].toUpperCase();
};

// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scrapping the MDN documentation.
['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null);
} // attributeNamespace
);

// String SVG attributes with the xlink namespace.
['xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink');
});

// String SVG attributes with the xml namespace.
['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace');
});

// Special case: this attribute exists both in HTML and SVG.
// Its "tabindex" attribute name is case-sensitive in SVG so we can't just use
// its React `tabIndex` name, like we do for attributes that exist only in HTML.
properties.tabIndex = new PropertyInfoRecord('tabIndex', STRING, false, // mustUseProperty
'tabindex', // attributeName
null);

// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape = void 0;
  var html = '';
  var index = void 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;
      case 38:
        // &
        escape = '&amp;';
        break;
      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
        break;
      case 60:
        // <
        escape = '&lt;';
        break;
      case 62:
        // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }
  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

/**
 * Operations for dealing with DOM properties.
 */

/**
 * Creates markup for the ID property.
 *
 * @param {string} id Unescaped ID.
 * @return {string} Markup string.
 */


function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}

/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */
function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);
  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }
  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }
  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }
  return '';
}

/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */
function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }
  return name + '=' + quoteAttributeValueForBrowser(value);
}

function areHookInputsEqual(arr1, arr2) {
  // Don't bother comparing lengths in prod because these arrays should be
  // passed inline.
  {
    !(arr1.length === arr2.length) ? warning$1(false, 'Detected a variable number of hook dependencies. The length of the ' + 'dependencies array should be constant between renders.\n\n' + 'Previous: %s\n' + 'Incoming: %s', arr1.join(', '), arr2.join(', ')) : void 0;
  }
  for (var i = 0; i < arr1.length; i++) {
    // Inlined Object.is polyfill.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    var val1 = arr1[i];
    var val2 = arr2[i];
    if (val1 === val2 && (val1 !== 0 || 1 / val1 === 1 / val2) || val1 !== val1 && val2 !== val2 // eslint-disable-line no-self-compare
    ) {
        continue;
      }
    return false;
  }
  return true;
}

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null;
// Whether the work-in-progress hook is a re-rendered hook
var isReRender = false;
// Whether an update was scheduled during the currently executing render pass.
var didScheduleRenderPhaseUpdate = false;
// Lazily created map of render-phase updates
var renderPhaseUpdates = null;
// Counter to prevent infinite loops.
var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;

function resolveCurrentlyRenderingComponent() {
  !(currentlyRenderingComponent !== null) ? invariant(false, 'Hooks can only be called inside the body of a function component.') : void 0;
  return currentlyRenderingComponent;
}

function createHook() {
  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false;
      // Append to the end of the list
      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }
  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;

  // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;
}

function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.

  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1;

    // Start over from the beginning of the list
    workInProgressHook = null;

    children = Component(props, refOrContext);
  }
  currentlyRenderingComponent = null;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;

  // These were reset above
  // currentlyRenderingComponent = null;
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

  return children;
}

function readContext(context, observedBits) {
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function useContext(context, observedBits) {
  resolveCurrentlyRenderingComponent();
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  return useReducer(basicStateReducer,
  // useReducer has a special case to support lazy useState initializers
  initialState);
}

function useReducer(reducer, initialState, initialAction) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    var _queue = workInProgressHook.queue;
    var _dispatch = _queue.dispatch;
    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(_queue);
      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(_queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;
        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var _action = update.action;
          newState = reducer(newState, _action);
          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;

        return [newState, _dispatch];
      }
    }
    return [workInProgressHook.memoizedState, _dispatch];
  } else {
    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      if (typeof initialState === 'function') {
        initialState = initialState();
      }
    } else if (initialAction !== undefined && initialAction !== null) {
      initialState = reducer(initialState, initialAction);
    }
    workInProgressHook.memoizedState = initialState;
    var _queue2 = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };
    var _dispatch2 = _queue2.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue2);
    return [workInProgressHook.memoizedState, _dispatch2];
  }
}

function useMemo(nextCreate, inputs) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  var nextInputs = inputs !== undefined && inputs !== null ? inputs : [nextCreate];

  if (workInProgressHook !== null && workInProgressHook.memoizedState !== null) {
    var prevState = workInProgressHook.memoizedState;
    var prevInputs = prevState[1];
    if (areHookInputsEqual(nextInputs, prevInputs)) {
      return prevState[0];
    }
  }

  var nextValue = nextCreate();
  workInProgressHook.memoizedState = [nextValue, nextInputs];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;
  if (previousRef === null) {
    var ref = { current: initialValue };
    {
      Object.seal(ref);
    }
    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useMutationEffect(create, inputs) {
  warning$1(false, 'useMutationEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useMutationEffect should only be used in ' + 'components that render exclusively on the client.');
}

function useLayoutEffect(create, inputs) {
  warning$1(false, 'useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client.');
}

function dispatchAction(componentIdentity, queue, action) {
  !(numberOfReRenders < RE_RENDER_LIMIT) ? invariant(false, 'Too many re-renders. React limits the number of renders to prevent an infinite loop.') : void 0;

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };
    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }
    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }
      lastRenderPhaseUpdate.next = update;
    }
  } else {
    // This means an update has happened after the function component has
    // returned. On the server this is a no-op. In React Fiber, the update
    // would be scheduled for a future render.
  }
}

function noop() {}

var currentThreadID = 0;

function setCurrentThreadID(threadID) {
  currentThreadID = threadID;
}

var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useMutationEffect: useMutationEffect,
  useLayoutEffect: useLayoutEffect,
  // useImperativeMethods is not run in the server environment
  useImperativeMethods: noop,
  // Callbacks are not run in the server environment.
  useCallback: noop,
  // Effects are not run in the server environment.
  useEffect: noop
};
var DispatcherWithoutHooks = {
  readContext: readContext
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
};

// Assumes there is no parent namespace.
function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;
    case 'math':
      return MATH_NAMESPACE;
    default:
      return HTML_NAMESPACE;
  }
}

function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }
  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  }
  // By default, pass namespace below.
  return parentNamespace;
}

var ReactDebugCurrentFrame$2 = null;

var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;

  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };

  var propTypes = {
    value: function (props, propName, componentName) {
      if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null) {
        return null;
      }
      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (props.onChange || props.readOnly || props.disabled || props[propName] == null) {
        return null;
      }
      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  };

  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
    checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$2.getStackAddendum);
  };
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
  // NOTE: menuitem's close tag should be omitted, but that causes problems.
};

// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

// TODO: We can remove this if we add invariantWithStack()
// or add stack by default to invariants where possible.
var HTML = '__html';

var ReactDebugCurrentFrame$3 = null;
{
  ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
}

function assertValidProps(tag, props) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (voidElementTags[tag]) {
    !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, ReactDebugCurrentFrame$3.getStackAddendum()) : void 0;
  }
  if (props.dangerouslySetInnerHTML != null) {
    !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
  }
  {
    !(props.suppressContentEditableWarning || !props.contentEditable || props.children == null) ? warning$1(false, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
  }
  !(props.style == null || typeof props.style === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', ReactDebugCurrentFrame$3.getStackAddendum()) : void 0;
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */
function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }
  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported style property %s. Did you mean %s?', name,
    // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning$1(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning$1(false, '`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning$1(false, '`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0, // state
  'aria-details': 0,
  'aria-disabled': 0, // state
  'aria-hidden': 0, // state
  'aria-invalid': 0, // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  if (hasOwnProperty$2.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (rARIACamel.test(name)) {
    var ariaName = 'aria-' + name.slice(4).toLowerCase();
    var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (correctName == null) {
      warning$1(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);
      warnedProperties[name] = true;
      return true;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== correctName) {
      warning$1(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
      warnedProperties[name] = true;
      return true;
    }
  }

  if (rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (standardName == null) {
      warnedProperties[name] = true;
      return false;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== standardName) {
      warning$1(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
      warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  var invalidProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key);
    if (!isValid) {
      invalidProps.push(key);
    }
  }

  var unknownPropString = invalidProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (invalidProps.length === 1) {
    warning$1(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  } else if (invalidProps.length > 1) {
    warning$1(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;

function validateProperties$1(type, props) {
  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
    return;
  }

  if (props != null && props.value === null && !didWarnValueNull) {
    didWarnValueNull = true;
    if (type === 'select' && props.multiple) {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
    } else {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */

/**
 * Ordered list of injected plugins.
 */


/**
 * Mapping from event name to dispatch config
 */


/**
 * Mapping from registration name to plugin module
 */
var registrationNameModules = {};

/**
 * Mapping from registration name to event name
 */


/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */
var possibleRegistrationNames = {};
// Trust the developer to only use possibleRegistrationNames in true

/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */


/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',

  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();
    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      warning$1(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
      warnedProperties$1[name] = true;
      return true;
    }

    // We can't rely on the event system being injected on the server.
    if (canUseEventSystem) {
      if (registrationNameModules.hasOwnProperty(name)) {
        return true;
      }
      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
      if (registrationName != null) {
        warning$1(false, 'Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);
        warnedProperties$1[name] = true;
        return true;
      }
      if (EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Unknown event handler property `%s`. It will be ignored.', name);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }
      warnedProperties$1[name] = true;
      return true;
    }

    // Let the ARIA attribute hook validate ARIA attributes
    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      warning$1(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      warning$1(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      warning$1(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      warning$1(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);
      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;

    // Known attributes should match the casing specified in the property config.
    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];
      if (standardName !== name) {
        warning$1(false, 'Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      warning$1(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }
      warnedProperties$1[name] = true;
      return true;
    }

    // Now that we've validated casing, do not validate
    // data types for reserved props
    if (isReserved) {
      return true;
    }

    // Warn when a known attribute is a bad type
    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    }

    // Warn when passing the strings 'false' or 'true' into a boolean prop
    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      warning$1(false, 'Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, canUseEventSystem) {
  var unknownProps = [];
  for (var key in props) {
    var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);
    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');
  if (unknownProps.length === 1) {
    warning$1(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  } else if (unknownProps.length > 1) {
    warning$1(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  }
};

function validateProperties$2(type, props, canUseEventSystem) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnUnknownProperties(type, props, canUseEventSystem);
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Based on reading the React.Children implementation. TODO: type this somewhere?

var toArray = React.Children.toArray;

// This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.
var currentDebugStacks = [];

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame = void 0;
var prevGetCurrentStackImpl = null;
var getCurrentServerStackImpl = function () {
  return '';
};
var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};
var pushCurrentDebugStack = function (stack) {};
var pushElementToDebugStack = function (element) {};
var popCurrentDebugStack = function () {};
var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, /* canUseEventSystem */false);
  };

  describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return describeComponentFrame(name, source, ownerName);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame.getCurrentStack;
      ReactDebugCurrentFrame.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1];
    // Take the innermost executing frame (e.g. <Foo>),
    var frame = stack[stack.length - 1];
    // and record that it has one more element associated with it.
    frame.debugElementStack.push(element);
    // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    }
    // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.
    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = '';
    // Go through every frame in the stack from the innermost one.
    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i];
      // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.
      var _debugElementStack = frame.debugElementStack;
      for (var ii = _debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(_debugElementStack[ii]);
      }
    }
    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
};

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    !VALID_TAG_REGEX.test(tag) ? invariant(false, 'Invalid tag: %s', tag) : void 0;
    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};
var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }
  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];
    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }
    if (styleValue != null) {
      serialized += delimiter + processStyleName(styleName) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);

      delimiter = ';';
    }
  }
  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    warningWithoutStack$1(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;
  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;
    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }
  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }
  var element = children;
  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }
  var fragmentChildren = element.props.children;
  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }
  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }
  var content = '';
  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }
    content += child;
    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;
        warning$1(false, 'Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!hasOwnProperty.call(props, propKey)) {
      continue;
    }
    var propValue = props[propKey];
    if (propValue == null) {
      continue;
    }
    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }
    var markup = null;
    if (isCustomComponent(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }
    if (markup) {
      ret += ' ' + markup;
    }
  }

  // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.
  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }
  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', getComponentName(type) || 'Component');
  }
}

function resolve(child, context, threadID) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;
    {
      pushElementToDebugStack(element);
    }
    if (typeof Component !== 'function') {
      break;
    }
    processChild(element, Component);
  }

  // Extra closure so queue and replace can be captured properly
  function processChild(element, Component) {
    var publicContext = processContext(Component, context, threadID);

    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }
        queue.push(currentPartialState);
      }
    };

    var inst = void 0;
    if (shouldConstruct(Component)) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';
            if (!didWarnAboutUninitializedState[componentName]) {
              warningWithoutStack$1(false, '`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);
              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';
            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              warningWithoutStack$1(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);
              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            warningWithoutStack$1(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);
            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }
      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if (warnAboutDeprecatedLifecycles && inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName3 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName3]) {
              lowPriorityWarning$1(false, '%s: componentWillMount() is deprecated and will be ' + 'removed in the next major version. Read about the motivations ' + 'behind this change: ' + 'https://fb.me/react-async-component-lifecycle-hooks' + '\n\n' + 'As a temporary workaround, you can rename to ' + 'UNSAFE_componentWillMount instead.', _componentName3);
              didWarnAboutDeprecatedWillMount[_componentName3] = true;
            }
          }
        }

        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }
      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }
      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;
          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];
            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;
            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }
          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }
    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }
    validateRenderResult(child, Component);

    var childContext = void 0;
    if (typeof inst.getChildContext === 'function') {
      var childContextTypes = Component.childContextTypes;
      if (typeof childContextTypes === 'object') {
        childContext = inst.getChildContext();
        for (var contextKey in childContext) {
          !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(Component) || 'Unknown', contextKey) : void 0;
        }
      } else {
        warningWithoutStack$1(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
      }
    }
    if (childContext) {
      context = _assign({}, context, childContext);
    }
  }
  return { child: child, context: context };
}

var ReactDOMServerRenderer = function () {
  // DEV-only

  // TODO: type this more strictly:
  function ReactDOMServerRenderer(children, makeStaticMarkup) {
    _classCallCheck(this, ReactDOMServerRenderer);

    var flatChildren = flattenTopLevelChildren(children);

    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };
    {
      topFrame.debugElementStack = [];
    }
    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0;

    // Context (new API)
    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];
    {
      this.contextProviderStack = [];
    }
  }

  ReactDOMServerRenderer.prototype.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      freeThreadID(this.threadID);
    }
  };

  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */

  ReactDOMServerRenderer.prototype.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID];

    // Remember which value to restore this context to on our way up.
    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;
    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    }

    // Mutate the current value.
    context[threadID] = provider.props.value;
  };

  ReactDOMServerRenderer.prototype.popProvider = function popProvider(provider) {
    var index = this.contextIndex;
    {
      !(index > -1 && provider === this.contextProviderStack[index]) ? warningWithoutStack$1(false, 'Unexpected pop.') : void 0;
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index];

    // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.
    this.contextStack[index] = null;
    this.contextValueStack[index] = null;
    {
      this.contextProviderStack[index] = null;
    }
    this.contextIndex--;

    // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.
    context[this.threadID] = previousValue;
  };

  ReactDOMServerRenderer.prototype.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var prevThreadID = currentThreadID;
    setCurrentThreadID(this.threadID);
    var prevDispatcher = ReactCurrentOwner.currentDispatcher;
    if (enableHooks) {
      ReactCurrentOwner.currentDispatcher = Dispatcher;
    } else {
      ReactCurrentOwner.currentDispatcher = DispatcherWithoutHooks;
    }
    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;
      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }
        var frame = this.stack[this.stack.length - 1];
        if (suspended || frame.childIndex >= frame.children.length) {
          var _footer = frame.footer;
          if (_footer !== '') {
            this.previousWasTextNode = false;
          }
          this.stack.pop();
          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false;
              // If rendering was suspended at this boundary, render the fallbackFrame
              var _fallbackFrame = frame.fallbackFrame;
              !_fallbackFrame ? invariant(false, 'suspense fallback not found, something is broken') : void 0;
              this.stack.push(_fallbackFrame);
              // Skip flushing output since we're switching to the fallback
              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          }

          // Flush output
          out[this.suspenseDepth] += _footer;
          continue;
        }
        var child = frame.children[frame.childIndex++];

        var outBuffer = '';
        {
          pushCurrentDebugStack(this.stack);
          // We're starting work on this frame, so reset its inner stack.
          frame.debugElementStack.length = 0;
        }
        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (enableSuspenseServerRenderer && typeof err.then === 'function') {
            suspended = true;
          } else {
            throw err;
          }
        } finally {
          {
            popCurrentDebugStack();
          }
        }
        if (out.length <= this.suspenseDepth) {
          out.push('');
        }
        out[this.suspenseDepth] += outBuffer;
      }
      return out[0];
    } finally {
      ReactCurrentOwner.currentDispatcher = prevDispatcher;
      setCurrentThreadID(prevThreadID);
    }
  };

  ReactDOMServerRenderer.prototype.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;
      if (text === '') {
        return '';
      }
      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }
      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }
      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild = void 0;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;
          !($$typeof !== REACT_PORTAL_TYPE) ? invariant(false, 'Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.') : void 0;
          // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.
          invariant(false, 'Unknown element-like object type: %s. This is likely a bug in React. Please file an issue.', $$typeof.toString());
        }
        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };
        {
          frame.debugElementStack = [];
        }
        this.stack.push(frame);
        return '';
      }
      // Safe because we just checked it's an element.
      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        case REACT_STRICT_MODE_TYPE:
        case REACT_CONCURRENT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);
            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };
            {
              _frame.debugElementStack = [];
            }
            this.stack.push(_frame);
            return '';
          }
        case REACT_SUSPENSE_TYPE:
          {
            if (enableSuspenseServerRenderer) {
              var fallbackChildren = toArray(nextChild.props.fallback);
              var _nextChildren2 = toArray(nextChild.props.children);
              var _fallbackFrame2 = {
                type: null,
                domNamespace: parentNamespace,
                children: fallbackChildren,
                childIndex: 0,
                context: context,
                footer: '',
                out: ''
              };
              var _frame2 = {
                fallbackFrame: _fallbackFrame2,
                type: REACT_SUSPENSE_TYPE,
                domNamespace: parentNamespace,
                children: _nextChildren2,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame2.debugElementStack = [];
                _fallbackFrame2.debugElementStack = [];
              }
              this.stack.push(_frame2);
              this.suspenseDepth++;
              return '';
            } else {
              invariant(false, 'ReactDOMServer does not yet support Suspense.');
            }
          }
        // eslint-disable-next-line-no-fallthrough
        default:
          break;
      }
      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;
              var _nextChildren3 = void 0;
              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren3 = elementType.render(element.props, element.ref);
              _nextChildren3 = finishHooks(elementType.render, element.props, _nextChildren3, element.ref);
              _nextChildren3 = toArray(_nextChildren3);
              var _frame3 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren3,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame3.debugElementStack = [];
              }
              this.stack.push(_frame3);
              return '';
            }
          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren4 = [React.createElement(elementType.type, _assign({ ref: _element.ref }, _element.props))];
              var _frame4 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren4,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame4.debugElementStack = [];
              }
              this.stack.push(_frame4);
              return '';
            }
          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;
              var _nextChildren5 = toArray(nextProps.children);
              var _frame5 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame5.debugElementStack = [];
              }

              this.pushProvider(provider);

              this.stack.push(_frame5);
              return '';
            }
          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type;
              // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.
              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;
                      warning$1(false, 'Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }
              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren6 = toArray(_nextProps.children(nextValue));
              var _frame6 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame6.debugElementStack = [];
              }
              this.stack.push(_frame6);
              return '';
            }
          case REACT_LAZY_TYPE:
            invariant(false, 'ReactDOMServer does not yet support lazy-loaded components.');
        }
      }

      var info = '';
      {
        var owner = nextElement._owner;
        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }
        var ownerName = owner ? getComponentName(owner) : null;
        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }
      invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', elementType == null ? elementType : typeof elementType, info);
    }
  };

  ReactDOMServerRenderer.prototype.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();

    var namespace = parentNamespace;
    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        !(tag === element.type) ? warning$1(false, '<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type) : void 0;
      }
    }

    validateDangerousTag(tag);

    var props = element.props;
    if (tag === 'input') {
      {
        ReactControlledValuePropTypes.checkPropTypes('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          warning$1(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultChecked = true;
        }
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          warning$1(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        ReactControlledValuePropTypes.checkPropTypes('textarea', props);
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          warning$1(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;
      if (initialValue == null) {
        var defaultValue = props.defaultValue;
        // TODO (yungsters): Remove support for children content in <textarea>.
        var textareaChildren = props.children;
        if (textareaChildren != null) {
          {
            warning$1(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }
          !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
          if (Array.isArray(textareaChildren)) {
            !(textareaChildren.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }
        if (defaultValue == null) {
          defaultValue = '';
        }
        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        ReactControlledValuePropTypes.checkPropTypes('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];
          if (props[propName] == null) {
            continue;
          }
          var isArray = Array.isArray(props[propName]);
          if (props.multiple && !isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          warning$1(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultSelectValue = true;
        }
      }
      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);
      if (selectValue != null) {
        var value = void 0;
        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }
        selected = false;
        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);

    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';
    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }
    var children = void 0;
    var innerMarkup = getNonChildrenInnerMarkup(props);
    if (innerMarkup != null) {
      children = [];
      if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }
      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }
    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };
    {
      frame.debugElementStack = [];
    }
    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */
function renderToString(element) {
  var renderer = new ReactDOMServerRenderer(element, false);
  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */
function renderToStaticMarkup(element) {
  var renderer = new ReactDOMServerRenderer(element, true);
  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  invariant(false, 'ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.');
}

function renderToStaticNodeStream() {
  invariant(false, 'ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.');
}

// Note: when changing this, also consider https://github.com/facebook/react/issues/11526
var ReactDOMServerBrowser = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup,
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToStaticNodeStream,
  version: ReactVersion
};

var ReactDOMServerBrowser$1 = Object.freeze({
	default: ReactDOMServerBrowser
});

var ReactDOMServer = ( ReactDOMServerBrowser$1 && ReactDOMServerBrowser ) || ReactDOMServerBrowser$1;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest
var server_browser = ReactDOMServer.default || ReactDOMServer;

module.exports = server_browser;
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/server.browser.js":
/*!**************************************************!*\
  !*** ./node_modules/react-dom/server.browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.browser.development.js */ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js");
}


/***/ }),

/***/ "./node_modules/react-infinite-scroller/dist/InfiniteScroll.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-infinite-scroller/dist/InfiniteScroll.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfiniteScroll = function (_Component) {
  _inherits(InfiniteScroll, _Component);

  function InfiniteScroll(props) {
    _classCallCheck(this, InfiniteScroll);

    var _this = _possibleConstructorReturn(this, (InfiniteScroll.__proto__ || Object.getPrototypeOf(InfiniteScroll)).call(this, props));

    _this.scrollListener = _this.scrollListener.bind(_this);
    return _this;
  }

  _createClass(InfiniteScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.pageLoaded = this.props.pageStart;
      this.attachScrollListener();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.attachScrollListener();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.detachScrollListener();
      this.detachMousewheelListener();
    }

    // Set a defaut loader for all your `InfiniteScroll` components

  }, {
    key: 'setDefaultLoader',
    value: function setDefaultLoader(loader) {
      this.defaultLoader = loader;
    }
  }, {
    key: 'detachMousewheelListener',
    value: function detachMousewheelListener() {
      var scrollEl = window;
      if (this.props.useWindow === false) {
        scrollEl = this.scrollComponent.parentNode;
      }

      scrollEl.removeEventListener('mousewheel', this.mousewheelListener, this.props.useCapture);
    }
  }, {
    key: 'detachScrollListener',
    value: function detachScrollListener() {
      var scrollEl = window;
      if (this.props.useWindow === false) {
        scrollEl = this.getParentElement(this.scrollComponent);
      }

      scrollEl.removeEventListener('scroll', this.scrollListener, this.props.useCapture);
      scrollEl.removeEventListener('resize', this.scrollListener, this.props.useCapture);
    }
  }, {
    key: 'getParentElement',
    value: function getParentElement(el) {
      var scrollParent = this.props.getScrollParent && this.props.getScrollParent();
      if (scrollParent != null) {
        return scrollParent;
      }
      return el && el.parentNode;
    }
  }, {
    key: 'filterProps',
    value: function filterProps(props) {
      return props;
    }
  }, {
    key: 'attachScrollListener',
    value: function attachScrollListener() {
      var parentElement = this.getParentElement(this.scrollComponent);

      if (!this.props.hasMore || !parentElement) {
        return;
      }

      var scrollEl = window;
      if (this.props.useWindow === false) {
        scrollEl = parentElement;
      }

      scrollEl.addEventListener('mousewheel', this.mousewheelListener, this.props.useCapture);
      scrollEl.addEventListener('scroll', this.scrollListener, this.props.useCapture);
      scrollEl.addEventListener('resize', this.scrollListener, this.props.useCapture);

      if (this.props.initialLoad) {
        this.scrollListener();
      }
    }
  }, {
    key: 'mousewheelListener',
    value: function mousewheelListener(e) {
      // Prevents Chrome hangups
      // See: https://stackoverflow.com/questions/47524205/random-high-content-download-time-in-chrome/47684257#47684257
      if (e.deltaY === 1) {
        e.preventDefault();
      }
    }
  }, {
    key: 'scrollListener',
    value: function scrollListener() {
      var el = this.scrollComponent;
      var scrollEl = window;
      var parentNode = this.getParentElement(el);

      var offset = void 0;
      if (this.props.useWindow) {
        var doc = document.documentElement || document.body.parentNode || document.body;
        var scrollTop = scrollEl.pageYOffset !== undefined ? scrollEl.pageYOffset : doc.scrollTop;
        if (this.props.isReverse) {
          offset = scrollTop;
        } else {
          offset = this.calculateOffset(el, scrollTop);
        }
      } else if (this.props.isReverse) {
        offset = parentNode.scrollTop;
      } else {
        offset = el.scrollHeight - parentNode.scrollTop - parentNode.clientHeight;
      }

      // Here we make sure the element is visible as well as checking the offset
      if (offset < Number(this.props.threshold) && el && el.offsetParent !== null) {
        this.detachScrollListener();
        // Call loadMore after detachScrollListener to allow for non-async loadMore functions
        if (typeof this.props.loadMore === 'function') {
          this.props.loadMore(this.pageLoaded += 1);
        }
      }
    }
  }, {
    key: 'calculateOffset',
    value: function calculateOffset(el, scrollTop) {
      if (!el) {
        return 0;
      }

      return this.calculateTopPosition(el) + (el.offsetHeight - scrollTop - window.innerHeight);
    }
  }, {
    key: 'calculateTopPosition',
    value: function calculateTopPosition(el) {
      if (!el) {
        return 0;
      }
      return el.offsetTop + this.calculateTopPosition(el.offsetParent);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var renderProps = this.filterProps(this.props);

      var children = renderProps.children,
          element = renderProps.element,
          hasMore = renderProps.hasMore,
          initialLoad = renderProps.initialLoad,
          isReverse = renderProps.isReverse,
          loader = renderProps.loader,
          loadMore = renderProps.loadMore,
          pageStart = renderProps.pageStart,
          ref = renderProps.ref,
          threshold = renderProps.threshold,
          useCapture = renderProps.useCapture,
          useWindow = renderProps.useWindow,
          getScrollParent = renderProps.getScrollParent,
          props = _objectWithoutProperties(renderProps, ['children', 'element', 'hasMore', 'initialLoad', 'isReverse', 'loader', 'loadMore', 'pageStart', 'ref', 'threshold', 'useCapture', 'useWindow', 'getScrollParent']);

      props.ref = function (node) {
        _this2.scrollComponent = node;
        if (ref) {
          ref(node);
        }
      };

      var childrenArray = [children];
      if (hasMore) {
        if (loader) {
          isReverse ? childrenArray.unshift(loader) : childrenArray.push(loader);
        } else if (this.defaultLoader) {
          isReverse ? childrenArray.unshift(this.defaultLoader) : childrenArray.push(this.defaultLoader);
        }
      }
      return _react2.default.createElement(element, props, childrenArray);
    }
  }]);

  return InfiniteScroll;
}(_react.Component);

InfiniteScroll.propTypes = {
  children: _propTypes2.default.node.isRequired,
  element: _propTypes2.default.node,
  hasMore: _propTypes2.default.bool,
  initialLoad: _propTypes2.default.bool,
  isReverse: _propTypes2.default.bool,
  loader: _propTypes2.default.node,
  loadMore: _propTypes2.default.func.isRequired,
  pageStart: _propTypes2.default.number,
  ref: _propTypes2.default.func,
  getScrollParent: _propTypes2.default.func,
  threshold: _propTypes2.default.number,
  useCapture: _propTypes2.default.bool,
  useWindow: _propTypes2.default.bool
};
InfiniteScroll.defaultProps = {
  element: 'div',
  hasMore: false,
  initialLoad: true,
  pageStart: 0,
  ref: null,
  threshold: 250,
  useWindow: true,
  isReverse: false,
  useCapture: false,
  loader: null,
  getScrollParent: null
};
exports.default = InfiniteScroll;
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/react-infinite-scroller/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-infinite-scroller/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/InfiniteScroll */ "./node_modules/react-infinite-scroller/dist/InfiniteScroll.js")


/***/ }),

/***/ "./node_modules/react-search-input/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-search-input/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(/*! ./util */ "./node_modules/react-search-input/lib/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      searchTerm: _this.props.value || ''
    };
    _this.updateSearch = _this.updateSearch.bind(_this);
    _this.filter = _this.filter.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps.value !== 'undefined' && nextProps.value !== this.props.value) {
        var e = {
          target: {
            value: nextProps.value
          }
        };
        this.updateSearch(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          onChange = _props.onChange,
          caseSensitive = _props.caseSensitive,
          sortResults = _props.sortResults,
          throttle = _props.throttle,
          filterKeys = _props.filterKeys,
          value = _props.value,
          fuzzy = _props.fuzzy,
          inputClassName = _props.inputClassName,
          inputProps = _objectWithoutProperties(_props, ['className', 'onChange', 'caseSensitive', 'sortResults', 'throttle', 'filterKeys', 'value', 'fuzzy', 'inputClassName']); // eslint-disable-line no-unused-vars


      inputProps.type = inputProps.type || 'search';
      inputProps.value = this.state.searchTerm;
      inputProps.onChange = this.updateSearch;
      inputProps.className = inputClassName;
      inputProps.placeholder = inputProps.placeholder || 'Search';
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement('input', inputProps)
      );
    }
  }, {
    key: 'updateSearch',
    value: function updateSearch(e) {
      var _this2 = this;

      var searchTerm = e.target.value;
      this.setState({
        searchTerm: searchTerm
      }, function () {
        if (_this2._throttleTimeout) {
          clearTimeout(_this2._throttleTimeout);
        }

        _this2._throttleTimeout = setTimeout(function () {
          return _this2.props.onChange(searchTerm);
        }, _this2.props.throttle);
      });
    }
  }, {
    key: 'filter',
    value: function filter(keys) {
      var _props2 = this.props,
          filterKeys = _props2.filterKeys,
          caseSensitive = _props2.caseSensitive,
          fuzzy = _props2.fuzzy,
          sortResults = _props2.sortResults;

      return (0, _util.createFilter)(this.state.searchTerm, keys || filterKeys, {
        caseSensitive: caseSensitive,
        fuzzy: fuzzy,
        sortResults: sortResults
      });
    }
  }]);

  return Search;
}(_react.Component);

Search.defaultProps = {
  className: '',
  onChange: function onChange() {},

  caseSensitive: false,
  fuzzy: false,
  throttle: 200
};

Search.propTypes = {
  className: _propTypes2.default.string,
  inputClassName: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  caseSensitive: _propTypes2.default.bool,
  sortResults: _propTypes2.default.bool,
  fuzzy: _propTypes2.default.bool,
  throttle: _propTypes2.default.number,
  filterKeys: _propTypes2.default.oneOf([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
  value: _propTypes2.default.string
};

exports.default = Search;
exports.createFilter = _util.createFilter;

/***/ }),

/***/ "./node_modules/react-search-input/lib/util.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-search-input/lib/util.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValuesForKey = getValuesForKey;
exports.searchStrings = searchStrings;
exports.createFilter = createFilter;

var _fuse = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");

var _fuse2 = _interopRequireDefault(_fuse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function flatten(array) {
  return array.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function getValuesForKey(key, item) {
  var keys = key.split('.');
  var results = [item];
  keys.forEach(function (_key) {
    var tmp = [];
    results.forEach(function (result) {
      if (result) {
        if (result instanceof Array) {
          var index = parseInt(_key, 10);
          if (!isNaN(index)) {
            return tmp.push(result[index]);
          }
          result.forEach(function (res) {
            tmp.push(res[_key]);
          });
        } else if (result && typeof result.get === 'function') {
          tmp.push(result.get(_key));
        } else {
          tmp.push(result[_key]);
        }
      }
    });

    results = tmp;
  });

  // Support arrays and Immutable lists.
  results = results.map(function (r) {
    return r && r.push && r.toArray ? r.toArray() : r;
  });
  results = flatten(results);

  return results.filter(function (r) {
    return typeof r === 'string' || typeof r === 'number';
  });
}

function searchStrings(strings, term) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      caseSensitive = _ref.caseSensitive,
      fuzzy = _ref.fuzzy,
      sortResults = _ref.sortResults,
      exactMatch = _ref.exactMatch;

  strings = strings.map(function (e) {
    return e.toString();
  });

  try {
    if (fuzzy) {
      if (typeof strings.toJS === 'function') {
        strings = strings.toJS();
      }
      var fuse = new _fuse2.default(strings.map(function (s) {
        return { id: s };
      }), { keys: ['id'], id: 'id', caseSensitive: caseSensitive, shouldSort: sortResults });
      return fuse.search(term).length;
    }
    return strings.some(function (value) {
      try {
        if (!caseSensitive) {
          value = value.toLowerCase();
        }
        if (exactMatch) {
          term = new RegExp('^' + term + '$', 'i');
        }
        if (value && value.search(term) !== -1) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    });
  } catch (e) {
    return false;
  }
}

function createFilter(term, keys) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return function (item) {
    if (term === '') {
      return true;
    }

    if (!options.caseSensitive) {
      term = term.toLowerCase();
    }

    var terms = term.split(' ');

    if (!keys) {
      return terms.every(function (term) {
        return searchStrings([item], term, options);
      });
    }

    if (typeof keys === 'string') {
      keys = [keys];
    }

    return terms.every(function (term) {
      // allow search in specific fields with the syntax `field:search`
      var currentKeys = void 0;
      if (term.indexOf(':') !== -1) {
        var searchedField = term.split(':')[0];
        term = term.split(':')[1];
        currentKeys = keys.filter(function (key) {
          return key.toLowerCase().indexOf(searchedField) > -1;
        });
      } else {
        currentKeys = keys;
      }

      return currentKeys.some(function (key) {
        var values = getValuesForKey(key, item);
        return searchStrings(values, term, options);
      });
    });
  };
}

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.6.3';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

var enableHooks = false;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
var enableStableConcurrentModeAPIs = false;

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null,
  currentDispatcher: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentOwner.currentDispatcher;
  !(dispatcher !== null) ? invariant(false, 'Hooks can only be called inside the body of a function component.') : void 0;
  return dispatcher;
}

function useContext(Context, observedBits) {
  var dispatcher = resolveDispatcher();
  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialState, initialAction) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialState, initialAction);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useMutationEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMutationEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeMethods(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeMethods(ref, create, inputs);
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  var name = void 0,
      propTypes = void 0;
  if (typeof type === 'function') {
    // Class or function component
    name = type.displayName || type.name;
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
    // ForwardRef
    var functionName = type.render.displayName || type.render.name || '';
    name = type.displayName || (functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef');
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

if (enableStableConcurrentModeAPIs) {
  React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.Profiler = REACT_PROFILER_TYPE;
} else {
  React.unstable_ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.unstable_Profiler = REACT_PROFILER_TYPE;
}

if (enableHooks) {
  React.useCallback = useCallback;
  React.useContext = useContext;
  React.useEffect = useEffect;
  React.useImperativeMethods = useImperativeMethods;
  React.useLayoutEffect = useLayoutEffect;
  React.useMemo = useMemo;
  React.useMutationEffect = useMutationEffect;
  React.useReducer = useReducer;
  React.useRef = useRef;
  React.useState = useState;
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./src/blocks/constants.js":
/*!*********************************!*\
  !*** ./src/blocks/constants.js ***!
  \*********************************/
/*! exports provided: SVG_DEFAULTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG_DEFAULTS", function() { return SVG_DEFAULTS; });
var SVG_DEFAULTS = {
  id: 'profilepic',
  primaryColor: '#6c68fb',
  paddingBottom: '100%',
  size: {
    mobile: 100,
    tablet: 100,
    desktop: 100
  },
  code: '<svg preserveAspectRatio="xMinYMin meet" id="457bf273-24a3-4fd8-a857-e9b918267d6a" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 698 698"><defs><linearGradient id="b247946c-c62f-4d08-994a-4c3d64e1e98f" x1="349" y1="698" x2="349" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray" stop-opacity="0.25"></stop><stop offset="0.54" stop-color="gray" stop-opacity="0.12"></stop><stop offset="1" stop-color="gray" stop-opacity="0.1"></stop></linearGradient></defs><title>profile pic</title><g opacity="0.5"><circle cx="349" cy="349" r="349" fill="url(#b247946c-c62f-4d08-994a-4c3d64e1e98f)"></circle></g><circle cx="349.68" cy="346.77" r="341.64" fill="#f5f5f5"></circle><path d="M601,790.76a340,340,0,0,0,187.79-56.2c-12.59-68.8-60.5-72.72-60.5-72.72H464.09s-45.21,3.71-59.33,67A340.07,340.07,0,0,0,601,790.76Z" transform="translate(-251 -101)" fill="#6c68fb"></path><circle cx="346.37" cy="339.57" r="164.9" fill="#333"></circle><path d="M293.15,476.92H398.81a0,0,0,0,1,0,0v84.53A52.83,52.83,0,0,1,346,614.28h0a52.83,52.83,0,0,1-52.83-52.83V476.92a0,0,0,0,1,0,0Z" opacity="0.1"></path><path d="M296.5,473h99a3.35,3.35,0,0,1,3.35,3.35v81.18A52.83,52.83,0,0,1,346,610.37h0a52.83,52.83,0,0,1-52.83-52.83V476.35A3.35,3.35,0,0,1,296.5,473Z" fill="#fdb797"></path><path d="M544.34,617.82a152.07,152.07,0,0,0,105.66.29v-13H544.34Z" transform="translate(-251 -101)" opacity="0.1"></path><circle cx="346.37" cy="372.44" r="151.45" fill="#fdb797"></circle><path d="M489.49,335.68S553.32,465.24,733.37,390l-41.92-65.73-74.31-26.67Z" transform="translate(-251 -101)" opacity="0.1"></path><path d="M489.49,333.78s63.83,129.56,243.88,54.3l-41.92-65.73-74.31-26.67Z" transform="translate(-251 -101)" fill="#333"></path><path d="M488.93,325a87.49,87.49,0,0,1,21.69-35.27c29.79-29.45,78.63-35.66,103.68-69.24,6,9.32,1.36,23.65-9,27.65,24-.16,51.81-2.26,65.38-22a44.89,44.89,0,0,1-7.57,47.4c21.27,1,44,15.4,45.34,36.65.92,14.16-8,27.56-19.59,35.68s-25.71,11.85-39.56,14.9C608.86,369.7,462.54,407.07,488.93,325Z" transform="translate(-251 -101)" fill="#333"></path><ellipse cx="194.86" cy="372.3" rx="14.09" ry="26.42" fill="#fdb797"></ellipse><ellipse cx="497.8" cy="372.3" rx="14.09" ry="26.42" fill="#fdb797"></ellipse></svg>'
};

/***/ }),

/***/ "./src/blocks/hooks.js":
/*!*****************************!*\
  !*** ./src/blocks/hooks.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/blocks/utils.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Attributes
// @todo don't duplicate these 2.
var name = 'illustrations-block/illustration';
var _illustrationsBlock = illustrationsBlock,
    idAttr = _illustrationsBlock.idAttr; // Hooks

var addFilter = wp.hooks.addFilter; // Utils


/**
 * Filters registered block settings, extending attributes with a new attribute for an ID
 *
 * @since   1.0.0
 * @param   {Object} settings Original block settings.
 * @returns {Object}          Filtered block settings.
 */

var addIllustrationAttr = function addIllustrationAttr(settings) {
  if (settings.name === name) {
    settings.attributes = _objectSpread({}, settings.attributes, {
      itemid: {
        type: 'string',
        source: 'attribute',
        attribute: idAttr,
        selector: '*',
        default: ''
      }
    });
  }

  return settings;
};
/**
 * Override props assigned to save component to inject ID.
 *
 * @todo    It currently saved the ID, the issue is with duplicates. In the current form
 *          it will refresh the id in this situation. Find a way to make sure it doesn't refresh
 *          the first id, just the duplicates.
 * 
 * @since   1.0.0
 * @param   {Object} extraProps Additional props applied to save element.
 * @param   {Object} blockType  Block type.
 * @param   {Object} attributes Current block attributes.
 * @returns {Object}            New extra props including the ID
 */


var addIllustrationID = function addIllustrationID(extraProps, blockType, attributes) {
  if (blockType.name === name) {
    var blocks = wp.data.select('core/block-editor').getBlocks();

    if (blocks.length && extraProps[idAttr] !== '') {
      var illstBlocks = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getAllBlocksByName"])(blocks, name);
      var multiple = illstBlocks.filter(function (el) {
        if (el.name !== name) {
          return false;
        }

        return el.attributes.itemid === attributes.itemid;
      });

      if (multiple.length < 2) {
        return extraProps;
      } else {
        extraProps[idAttr] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomID"])();
      }
    } else {
      extraProps[idAttr] = attributes.itemid === '' ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomID"])() : attributes.itemid;
    }
  }

  return extraProps;
};

addFilter('blocks.registerBlockType', 'illustrations/itemid/attribute', addIllustrationAttr);
addFilter('blocks.getSaveContent.extraProps', 'illustrations/itemid/extra-props', addIllustrationID);

/***/ }),

/***/ "./src/blocks/simple/index.js":
/*!************************************!*\
  !*** ./src/blocks/simple/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ "./src/blocks/hooks.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/blocks/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/blocks/constants.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./src/blocks/simple/sidebar/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// Block attributes
var name = 'illustrations-block/illustration';
var _illustrationsBlock = illustrationsBlock,
    idAttr = _illustrationsBlock.idAttr; // Hooks

 // 3rd party

 // Utils

 // Lodash

var _lodash = lodash,
    isEqual = _lodash.isEqual; // Constants|defaults

 // React elements

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment,
    RawHTML = _wp$element.RawHTML; // Components

var Spinner = wp.components.Spinner;
 // Blocks

var registerBlockType = wp.blocks.registerBlockType; // Compose

var _wp$compose = wp.compose,
    withState = _wp$compose.withState,
    compose = _wp$compose.compose; // Data

var withViewportMatch = wp.viewport.withViewportMatch; // Internationalization

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf; // Manifest

var manifest = {
  title: 'Illustrations',
  icon: 'slides',
  description: __('Add a SVG illustration in your content.', 'illustrations'),
  category: 'common',
  keywords: [__('svg', 'illustrations'), __('illustration', 'illustrations'), __('image', 'illustrations')],
  transform: [],
  useOnce: false,
  supports: {
    align: ['left', 'center', 'right', 'wide', 'full'],
    html: false,
    reusable: false
  } // Attributes

};
var attributes = {
  selected: {
    type: 'string',
    default: _constants__WEBPACK_IMPORTED_MODULE_3__["SVG_DEFAULTS"].id
  },
  svg: {
    source: 'html',
    selector: 'figure.illustration-svg-wrap',
    default: _constants__WEBPACK_IMPORTED_MODULE_3__["SVG_DEFAULTS"].code
  },
  primaryColor: {
    type: 'string',
    default: _constants__WEBPACK_IMPORTED_MODULE_3__["SVG_DEFAULTS"].primaryColor
  },
  paddingBottom: {
    type: 'string',
    default: _constants__WEBPACK_IMPORTED_MODULE_3__["SVG_DEFAULTS"].paddingBottom
  },
  size: {
    type: 'object',
    default: _constants__WEBPACK_IMPORTED_MODULE_3__["SVG_DEFAULTS"].size
  }
};
/**
 * Illustrations Block class
 *
 * @since   1.0.0
 * @class   IllustrationsBlock
 * @extends {Component}
 */

var IllustrationsBlock =
/*#__PURE__*/
function (_Component) {
  _inherits(IllustrationsBlock, _Component);

  /**
   * Create an instance of IllustrationsBlock.
   * 
   * @since    1.0.0
   * @memberof IllustrationsBlock
   */
  function IllustrationsBlock() {
    var _this;

    _classCallCheck(this, IllustrationsBlock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IllustrationsBlock).apply(this, arguments));
    _this.illustration = false;
    _this.setIllustration = _this.setIllustration.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setError = _this.setError.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.illustrationSave = _this.illustrationSave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.svgMarkup = _this.svgMarkup.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * After mount
   * 
   * @since    1.0.0
   * @memberof React.Component
   */


  _createClass(IllustrationsBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          clientId = _this$props.clientId,
          attributes = _this$props.attributes,
          isMobile = _this$props.isMobile,
          isTablet = _this$props.isTablet,
          isDesktop = _this$props.isDesktop;

      if (this.illustration === false) {
        this.setIllustration(this.props.attributes.selected);
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createStyleNode"])(clientId);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addStyleContents"])(clientId, attributes.size, {
        isMobile: isMobile,
        isTablet: isTablet,
        isDesktop: isDesktop
      });
    }
    /**
     * After props update, we only need the props arg
     * 
     * @memberof React.Component
     * 
     * @since 1.0.0
     * @param {Object} prevProps Previous props 
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setState = _this$props2.setState,
          clientId = _this$props2.clientId;
      var selected = attributes.selected,
          size = attributes.size;
      var _prevProps$attributes = prevProps.attributes,
          prevSelected = _prevProps$attributes.selected,
          prevSize = _prevProps$attributes.size;
      var viewport = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["viewportProps"])(this.props);
      var prevViewport = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["viewportProps"])(prevProps);

      if (selected !== prevSelected) {
        setState({
          status: 'pending'
        }, function () {
          return _this2.setIllustration(selected);
        });
      }

      if (!isEqual(size, prevSize) || !isEqual(viewport, prevViewport)) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addStyleContents"])(clientId, size, viewport);
      }
    }
    /**
     * Clean-up on block remove
     *
     * @since    1.0.0
     * @memberof React.Component
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["removeStyleNode"])(this.props.clientId);
    }
    /**
     * Makes sure we import the right illustration using dynamic imports.
     * Sets the status to `done` if all goes well and and `this.illustration` to
     * the actual SVG component.
     *
     * @memberof IllustrationsBlock
     * 
     * @since   1.0.0
     * @param   {String}       selected Currently selected illustration
     * @returns {Void|Boolean}          False and status to `error` if something goes wrong
     */

  }, {
    key: "setIllustration",
    value: function setIllustration(selected) {
      var _this3 = this;

      var illustration = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["illustrationFind"])(selected);

      if (illustration === undefined) {
        this.setError(sprintf(__('Could not find the selected illustration: %s', 'illustrations'), selected));
        return false;
      }

      __webpack_require__("./src/illustrations/svg lazy recursive ^\\.\\/.*$")("./".concat(illustration.folder)).then(function (imported) {
        _this3.illustration = imported.default;
      }).then(function () {
        _this3.props.setState({
          status: 'done'
        });
      }).catch(this.setError);
    }
    /**
     * Sets the status to error, making sure the block doesn't break
     *
     * @memberof IllustrationsBlock
     * 
     * @since  1.0.0
     * @param  {*}    error
     * @return {Void}
     */

  }, {
    key: "setError",
    value: function setError(error) {
      this.props.setState({
        status: 'error'
      }, function () {
        return console.error(error);
      });
    }
    /**
     * Converts SVG component to string.
     * 
     * Using `ReactDOMServer.renderToStaticMarkup` instead of `wp.element.renderToString` because
     * the latter messes up with the SVG markup
     * 
     * @memberof IllustrationsBlock
     * 
     * @since  1.0.0 
     * @param  {Object} props Component props
     * @return {String}       Static marup compiled by `renderToStaticMarkup`
     */

  }, {
    key: "svgMarkup",
    value: function svgMarkup() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToStaticMarkup"])(this.illustration(props));
      /** 
       * Make sure the svg doesn't have padding-bottom
       * 
       * @since 1.0.1 
       */

      var posAbs = '<svg style="position:absolute" ';

      if (!markup.includes(posAbs)) {
        markup = markup.replace('<svg ', posAbs);
      }

      return markup;
    }
    /**
     * Saves the svg markup and `selected` attribute if an illustration is
     * being selected in the modal.
     *
     * @memberof IllustrationsBlock
     * 
     * @since  1.0.0
     * @param  {Function} component React component
     * @param  {String}   selected  Selected svg name
     * @return {Void}
     */

  }, {
    key: "illustrationSave",
    value: function illustrationSave(component, selected) {
      var primaryColor = this.props.attributes.primaryColor;
      this.illustration = component;
      this.props.setAttributes({
        selected: selected,
        svg: this.svgMarkup({
          primaryColor: primaryColor
        }),
        paddingBottom: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["svgPadding"])(this.svgMarkup())
      });
    }
    /**
     * Render our content
     * 
     * @returns  {JSX}
     * @memberof React.Component
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          attributes = _this$props3.attributes,
          status = _this$props3.status,
          className = _this$props3.className;
      var primaryColor = attributes.primaryColor,
          paddingBottom = attributes.paddingBottom;
      return React.createElement(Fragment, null, React.createElement("div", {
        className: className
      }, React.createElement("div", {
        className: "illustration-svg-container"
      }, React.createElement("figure", {
        style: {
          paddingBottom: paddingBottom,
          position: 'relative'
        },
        className: "illustration-svg-wrap"
      }, status !== 'pending' || status === 'done' && status !== 'error' ? this.illustration({
        primaryColor: primaryColor
      }) : React.createElement(Spinner, null))), status === 'error' && React.createElement("p", null, __('Something went wrong, please check the console', 'illustrations'))), React.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], this));
    }
  }]);

  return IllustrationsBlock;
}(Component); // Setup


var methods = {
  edit: compose([withViewportMatch({
    isMobile: '< small',
    isTablet: '< large',
    isDesktop: '>= large'
  }), withState({
    status: 'pending'
  })])(IllustrationsBlock),
  save: function save(props) {
    var _props$attributes = props.attributes,
        itemid = _props$attributes.itemid,
        paddingBottom = _props$attributes.paddingBottom;
    /** 
     * Make sure the svg doesn't have padding-bottom
     * 
     * @since 1.0.1 
     */

    var svg = '';
    var posAbs = '<svg style="position:absolute" ';

    if (!props.attributes.svg.includes(posAbs)) {
      svg = props.attributes.svg.replace('<svg ', posAbs);
    } else {
      svg = props.attributes.svg;
    }

    return React.createElement("div", _defineProperty({}, idAttr, itemid), React.createElement("div", {
      className: "illustration-svg-container"
    }, React.createElement("figure", {
      style: {
        paddingBottom: paddingBottom,
        position: 'relative'
      },
      className: "illustration-svg-wrap"
    }, React.createElement(RawHTML, null, svg))));
  }
}; ///////////////////////////////////////////////////////////////////
// Deprecated

var deprecated = [// 1.0.0
{
  supports: _objectSpread({}, manifest.supports),
  attributes: attributes,
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        svg = _props$attributes2.svg,
        itemid = _props$attributes2.itemid,
        paddingBottom = _props$attributes2.paddingBottom;
    return React.createElement("div", _defineProperty({}, idAttr, itemid), React.createElement("div", {
      className: "illustration-svg-container"
    }, React.createElement("figure", {
      style: {
        paddingBottom: paddingBottom
      },
      className: "illustration-svg-wrap"
    }, React.createElement(RawHTML, null, svg))));
  }
}]; // Register the block

registerBlockType(name, _objectSpread({}, manifest, {
  attributes: attributes
}, methods, {
  deprecated: deprecated
}));

/***/ }),

/***/ "./src/blocks/simple/sidebar/colors.js":
/*!*********************************************!*\
  !*** ./src/blocks/simple/sidebar/colors.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Editor
var PanelColorSettings = wp.blockEditor.PanelColorSettings; // Internationalization

var __ = wp.i18n.__;
/* harmony default export */ __webpack_exports__["default"] = (function (parent) {
  var _parent$props = parent.props,
      attributes = _parent$props.attributes,
      setAttributes = _parent$props.setAttributes;
  var primaryColor = attributes.primaryColor;
  return React.createElement(PanelColorSettings, {
    title: __('Colors', 'illustrations'),
    initialOpen: false,
    colorSettings: [{
      value: primaryColor,
      label: __('Main color:', 'illustrations'),
      onChange: function onChange(primaryColor) {
        setAttributes({
          primaryColor: primaryColor,
          svg: parent.svgMarkup({
            primaryColor: primaryColor
          })
        });
      }
    }]
  });
});

/***/ }),

/***/ "./src/blocks/simple/sidebar/index.js":
/*!********************************************!*\
  !*** ./src/blocks/simple/sidebar/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _illustrations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../illustrations */ "./src/illustrations/index.js");
/* harmony import */ var _components_select_illustration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/select-illustration */ "./src/components/select-illustration/index.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors */ "./src/blocks/simple/sidebar/colors.js");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./size */ "./src/blocks/simple/sidebar/size.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Illustrations
 // Sidebar components



 // Editor

var InspectorControls = wp.blockEditor.InspectorControls;
/* harmony default export */ __webpack_exports__["default"] = (function (parent) {
  var illustrationSave = parent.illustrationSave,
      props = parent.props;
  return props.isSelected && React.createElement(InspectorControls, null, React.createElement(_components_select_illustration__WEBPACK_IMPORTED_MODULE_1__["default"], {
    illustrations: _toConsumableArray(_illustrations__WEBPACK_IMPORTED_MODULE_0__["default"]),
    setter: illustrationSave,
    svg: props.attributes.svg
  }), React.createElement(_colors__WEBPACK_IMPORTED_MODULE_2__["default"], parent), React.createElement(_size__WEBPACK_IMPORTED_MODULE_3__["default"], parent));
});

/***/ }),

/***/ "./src/blocks/simple/sidebar/size.js":
/*!*******************************************!*\
  !*** ./src/blocks/simple/sidebar/size.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 3rd party
 // Internationalization

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf; // Components

var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    PanelBody = _wp$components.PanelBody,
    Dashicon = _wp$components.Dashicon;
/* harmony default export */ __webpack_exports__["default"] = (function (parent) {
  var breakPoints = {
    desktop: __('Desktop (%)', 'illustrations'),
    tablet: __('Tablet (%)', 'illustrations'),
    mobile: __('Mobile (%)', 'illustrations')
  };

  var currentlyActive = function currentlyActive(bp) {
    var _parent$props = parent.props,
        isMobile = _parent$props.isMobile,
        isTablet = _parent$props.isTablet,
        isDesktop = _parent$props.isDesktop;
    var alingment = parent.props.attributes.align;

    var msg = __('Viewport in use.', 'illustrations');

    if (['full', 'wide'].find(function (align) {
      return align === alingment;
    })) {
      msg += ' ' + sprintf(__('The current illustration alingment (%s width) will overwrite this setting.', 'illustrations'), alingment);
    }

    if (bp === 'desktop' && isDesktop && !isTablet) return msg;
    if (bp === 'tablet' && isTablet && !isMobile) return msg;
    if (bp === 'mobile' && isMobile) return msg;
    return '';
  };

  return React.createElement(PanelBody, {
    title: __('Size', 'illustrations'),
    initialOpen: false
  }, Object.keys(breakPoints).map(function (bp) {
    var icon = bp === 'mobile' ? 'smartphone' : bp;
    var active = currentlyActive(bp);
    var classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()('illustrations-size-icon', {
      active: active
    });
    return React.createElement(RangeControl, {
      label: [React.createElement(Dashicon, {
        className: classes,
        icon: icon,
        size: 20
      }), breakPoints[bp]],
      help: active,
      value: parent.props.attributes.size[bp],
      onChange: function onChange(px) {
        return parent.props.setAttributes({
          size: _objectSpread({}, parent.props.attributes.size, _defineProperty({}, bp, px))
        });
      },
      min: 1,
      max: 100,
      step: 1
    });
  }));
});

/***/ }),

/***/ "./src/blocks/utils.js":
/*!*****************************!*\
  !*** ./src/blocks/utils.js ***!
  \*****************************/
/*! exports provided: illustrationFind, illustration, delayImport, selectNotice, removeNewLines, randomID, getSizeValues, percentageHeight, svgPadding, createStyleID, createStyleNode, addStyleContents, removeStyleNode, viewportProps, flattenBlocksArray, getBlocksUnFlatten, getAllBlocksByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "illustrationFind", function() { return illustrationFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "illustration", function() { return illustration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayImport", function() { return delayImport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNotice", function() { return selectNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNewLines", function() { return removeNewLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomID", function() { return randomID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizeValues", function() { return getSizeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentageHeight", function() { return percentageHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgPadding", function() { return svgPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleID", function() { return createStyleID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleNode", function() { return createStyleNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyleContents", function() { return addStyleContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStyleNode", function() { return removeStyleNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportProps", function() { return viewportProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenBlocksArray", function() { return flattenBlocksArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlocksUnFlatten", function() { return getBlocksUnFlatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBlocksByName", function() { return getAllBlocksByName; });
/* harmony import */ var _illustrations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../illustrations */ "./src/illustrations/index.js");
// Illustrations
 // Internationalization

var sprintf = wp.i18n.sprintf;
var illustrationFind = function illustrationFind(name) {
  return _illustrations__WEBPACK_IMPORTED_MODULE_0__["default"].find(function (illstn) {
    return illstn.value === name;
  });
};
var illustration = function illustration(name) {
  return illustrationFind(name).component;
};
var delayImport = function delayImport(ms) {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve();
    }, ms);
  });
};
var selectNotice = function selectNotice() {
  return React.createElement("div", {
    className: "illustration-notice"
  }, React.createElement("h1", null, sprintf.apply(void 0, arguments)));
};
var removeNewLines = function removeNewLines(text) {
  return text.replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, ' ');
};
var randomID = function randomID() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'i';
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return prefix + Math.random().toString(36).substr(2, length);
};
var getSizeValues = function getSizeValues(svg) {
  var matches = svg.match(/ viewBox="([^"]*)"/);
  if (!matches) return false;
  var sizes = {};
  matches[1].split(' ').map(function (el) {
    return parseFloat(el);
  }).filter(function (el) {
    return el !== 0;
  }).forEach(function (el, i) {
    return sizes[i === 0 ? 'width' : 'height'] = el;
  });
  return sizes;
};
var percentageHeight = function percentageHeight(sizes) {
  var normal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var width = sizes.width,
      height = sizes.height;

  var roundIt = function roundIt(size) {
    return Math.round(size * 10) / 10;
  };

  if (width === height) {
    return normal;
  }

  if (width > height) {
    return roundIt(height / width * normal);
  }

  if (width < height) {
    var calc = width / height * normal;
    return roundIt(normal - calc + normal);
  }
};
var svgPadding = function svgPadding(svg) {
  return "".concat(percentageHeight(getSizeValues(svg)).toString(), "%");
};
var createStyleID = function createStyleID(clientId) {
  var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "".concat(hash ? '#' : '', "style-").concat(clientId);
};
var createStyleNode = function createStyleNode(clientId) {
  var node = document.createElement('style');
  node.setAttribute('type', 'text/css');
  node.setAttribute('id', createStyleID(clientId));
  document.head.appendChild(node);
};
var addStyleContents = function addStyleContents(clientId, values, viewport) {
  var element = document.querySelector(createStyleID(clientId, true));

  var tmpl = function tmpl(clientId, size) {
    return "\n        #block-".concat(clientId, ":not([data-align]) .illustration-svg-container { \n            width: ").concat(size, "%;\n        }\n\n        #block-").concat(clientId, "[data-align=\"center\"] .illustration-svg-container { \n            margin: 0 auto; \n            width: ").concat(size, "%;\n        }\n\n        #block-").concat(clientId, "[data-align=\"right\"] .editor-block-list__block-edit,\n        #block-").concat(clientId, "[data-align=\"left\"] .editor-block-list__block-edit { width: ").concat(size, "% }\n        #block-").concat(clientId, "[data-align=\"right\"] .wp-block-illustrations-block-illustration,\n        #block-").concat(clientId, "[data-align=\"left\"] .wp-block-illustrations-block-illustration { \n            width: 100%;\n        }\n\n        #block-").concat(clientId, "[data-align=\"wide\"] .illustration-svg-container,\n        #block-").concat(clientId, "[data-align=\"full\"] .illustration-svg-container,\n        #block-").concat(clientId, "[data-align=\"wide\"] .wp-block-illustrations-block-illustration,\n        #block-").concat(clientId, "[data-align=\"full\"] .wp-block-illustrations-block-illustration { \n            width: 100%;\n        }\n    ");
  };

  element.innerHTML = '';
  var breakPoints = Object.keys(viewport);

  if (breakPoints.filter(function (bp) {
    return viewport[bp];
  }).length === 2) {
    viewport['isTablet'] = false;
  }

  Object.keys(viewport).forEach(function (vp) {
    if (viewport[vp]) {
      element.innerHTML = tmpl(clientId, values[vp.replace('is', '').toLowerCase()]);
    }
  });
};
var removeStyleNode = function removeStyleNode(clientId) {
  var element = document.querySelector(createStyleID(clientId, true));
  document.querySelector('head').removeChild(element);
};
var viewportProps = function viewportProps(props) {
  var isMobile = props.isMobile,
      isTablet = props.isTablet,
      isDesktop = props.isDesktop;
  return {
    isMobile: isMobile,
    isTablet: isTablet,
    isDesktop: isDesktop
  };
};
var flattenBlocksArray = function flattenBlocksArray(results) {
  return results.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flattenBlocksArray(toFlatten) : toFlatten);
  }, []);
};
var getBlocksUnFlatten = function getBlocksUnFlatten(blocks, name) {
  var results = [];
  blocks.forEach(function (block) {
    if (block.name === name) {
      results.push(block);
    } else {
      results.push(getBlocksUnFlatten(block.innerBlocks, name));
    }
  });
  return results;
};
var getAllBlocksByName = function getAllBlocksByName(blocks, name) {
  return flattenBlocksArray(getBlocksUnFlatten(blocks, name));
};

/***/ }),

/***/ "./src/components/select-illustration/browse-all.js":
/*!**********************************************************!*\
  !*** ./src/components/select-illustration/browse-all.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/components/select-illustration/item.js");
/* harmony import */ var _blocks_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/utils */ "./src/blocks/utils.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 3rd party
 // Components

 // Utils

 // Internationalization

var __ = wp.i18n.__; // Elements

var Fragment = wp.element.Fragment;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$parent = props.parent,
      illustrations = _props$parent.illustrations,
      loadCount = _props$parent.loadCount,
      hasMore = _props$parent.hasMore,
      filter = _props$parent.filter,
      setter = _props$parent.setter,
      setState = _props$parent.setState,
      defaults = _props$parent.defaults;
  var length = illustrations.length;

  if (filter !== 'browse') {
    return null;
  }

  var load = function load(page) {
    var onPageCount = page * 10;

    if (onPageCount > length) {
      setState({
        loadCount: onPageCount - (onPageCount - length),
        hasMore: false
      });
      return true;
    }

    if (loadCount !== onPageCount) {
      setState({
        loadCount: onPageCount
      });
      return true;
    }

    return false;
  };

  var display = function display() {
    var items = [];

    for (var index = 0; index <= loadCount; index++) {
      if (index === length) break;
      items.push(React.createElement(_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: index,
        details: _objectSpread({}, illustrations[index]),
        defaults: _objectSpread({}, defaults),
        setters: {
          setter: setter,
          setState: setState
        }
      }));
    }

    return items;
  };

  return React.createElement(Fragment, null, React.createElement(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "row",
    pageStart: 1,
    loadMore: load,
    hasMore: hasMore,
    useWindow: false,
    threshold: 100,
    getScrollParent: function getScrollParent() {
      return document.querySelector('.illustrations-select-modal');
    }
  }, display()), !hasMore && Object(_blocks_utils__WEBPACK_IMPORTED_MODULE_2__["selectNotice"])(__('%1$s There is an end to every journey %2$s', 'illustrations'), '😲', '😵'));
});

/***/ }),

/***/ "./src/components/select-illustration/header.js":
/*!******************************************************!*\
  !*** ./src/components/select-illustration/header.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_search_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-search-input */ "./node_modules/react-search-input/lib/index.js");
/* harmony import */ var react_search_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_search_input__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 3rd party

 // Internationalization

var __ = wp.i18n.__;

function SearchIn(_ref) {
  var className = _ref.className,
      parent = _ref.parent;
  var setState = parent.setState,
      filter = parent.filter;

  var _ref2 = filter === 'browse' ? // translators: ARIA label for the Document sidebar tab, selected.
  [__('Browse all (selected)', 'illustrations'), 'is-active'] : // translators: ARIA label for the Document sidebar tab, not selected.
  [__('Browse all', 'illustrations'), ''],
      _ref3 = _slicedToArray(_ref2, 2),
      browseAriaLabel = _ref3[0],
      browseActiveClass = _ref3[1];

  var _ref4 = filter === 'search' ? // translators: ARIA label for the Block sidebar tab, selected.
  [__('Search (selected)', 'illustrations'), 'is-active'] : // translators: ARIA label for the Block sidebar tab, not selected.
  [__('Search', 'illustrations'), ''],
      _ref5 = _slicedToArray(_ref4, 2),
      searchAriaLabel = _ref5[0],
      searchActiveClass = _ref5[1];

  var headerClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()('components-panel__header edit-post-sidebar-header edit-post-sidebar__panel-tabs', className);
  return React.createElement("header", {
    className: headerClasses
  }, React.createElement("ul", null, React.createElement("li", null, React.createElement("button", {
    onClick: function onClick() {
      return setState({
        filter: 'browse',
        search: ''
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('edit-post-sidebar__panel-tab', browseActiveClass),
    "aria-label": browseAriaLabel,
    "data-label": __('Browse all', 'illustrations')
  }, __('Browse all', 'illustrations'))), React.createElement("li", null, React.createElement("button", {
    onClick: function onClick() {
      return setState({
        filter: 'search',
        hasMore: true,
        loadCount: 10
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('edit-post-sidebar__panel-tab', searchActiveClass),
    "aria-label": searchAriaLabel,
    "data-label": __('Search', 'illustrations')
  }, __('Search', 'illustrations'))), filter === 'search' && React.createElement("li", {
    className: 'illustrations-select-search-field'
  }, React.createElement(react_search_input__WEBPACK_IMPORTED_MODULE_1___default.a, {
    placeholder: __('3 or more letters', 'illustrations'),
    className: 'search-input',
    onChange: function onChange(search) {
      return setState({
        search: search
      });
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchIn);

/***/ }),

/***/ "./src/components/select-illustration/index.js":
/*!*****************************************************!*\
  !*** ./src/components/select-illustration/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/components/select-illustration/header.js");
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper */ "./src/components/select-illustration/wrapper.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./src/components/select-illustration/search.js");
/* harmony import */ var _browse_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browse-all */ "./src/components/select-illustration/browse-all.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Header
 // Wrapper elements



 // Components

var _wp$components = wp.components,
    Button = _wp$components.Button,
    Modal = _wp$components.Modal,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow; // React elements

var RawHTML = wp.element.RawHTML; // Compose

var withState = wp.compose.withState; // Internationalization

var __ = wp.i18n.__;
var DEFAULTS = {
  selecting: false,
  filter: 'search',
  search: '',
  loadCount: 10,
  hasMore: true
};

function SelectIllustration(props) {
  var setState = props.setState,
      selecting = props.selecting,
      filter = props.filter,
      svg = props.svg;
  var illustrations = props.illustrations.map(function (illst) {
    return {
      label: illst.label,
      component: illst.component,
      selected: illst.value
    };
  });
  props.illustrations = illustrations;

  var elProps = _objectSpread({}, props, {
    defaults: _objectSpread({}, DEFAULTS)
  });

  var openModal = function openModal(e) {
    return setState({
      selecting: true
    });
  };

  var svgString = svg.replace('svg style="position:absolute"', 'svg');
  return React.createElement(PanelBody, {
    title: __('Illustration', 'illustrations'),
    initialOpen: false
  }, React.createElement(Button, {
    className: "editor-post-featured-image__preview illustrations-svg-select",
    onClick: openModal,
    "aria-label": __('Edit or update the image', 'illustrations')
  }, React.createElement(RawHTML, {
    className: "illustrations-svg-preview"
  }, svgString)), React.createElement(PanelRow, null, React.createElement(Button, {
    isLink: true,
    onClick: openModal
  }, __('Select Illustration', 'illustrations'))), selecting && React.createElement(Modal, {
    overlayClassName: "illustrations-select-overlay",
    className: "illustrations-select-modal",
    title: __('Select an illustration', 'illustrations'),
    onRequestClose: function onRequestClose() {
      return setState(DEFAULTS);
    }
  }, React.createElement(_header__WEBPACK_IMPORTED_MODULE_0__["default"], {
    parent: _objectSpread({}, props)
  }), React.createElement(_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    filter: filter
  }, React.createElement(_search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    parent: _objectSpread({}, elProps)
  }), React.createElement(_browse_all__WEBPACK_IMPORTED_MODULE_3__["default"], {
    parent: _objectSpread({}, elProps)
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (withState(DEFAULTS)(SelectIllustration));

/***/ }),

/***/ "./src/components/select-illustration/item.js":
/*!****************************************************!*\
  !*** ./src/components/select-illustration/item.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// React
 // Components

var _wp$components = wp.components,
    Button = _wp$components.Button,
    Spinner = _wp$components.Spinner; // Internationalization

var __ = wp.i18n.__;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$details = props.details,
      label = _props$details.label,
      component = _props$details.component,
      selected = _props$details.selected;
  var _props$setters = props.setters,
      setState = _props$setters.setState,
      setter = _props$setters.setter;
  var Preview = component;
  return React.createElement("div", {
    className: "col-xs-4"
  }, React.createElement("div", {
    className: "illustrations-select-item"
  }, React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: React.createElement("div", {
      className: "item-loading"
    }, React.createElement(Spinner, null))
  }, React.createElement("div", {
    className: "item-preview"
  }, React.createElement(Preview, {
    height: "230px"
  })), React.createElement("div", {
    className: "item-details"
  }, React.createElement("h4", null, label), React.createElement(Button, {
    isPrimary: true,
    isSmall: true,
    onClick: function onClick() {
      setState(props.defaults, function () {
        return setter(component._result, selected);
      });
    }
  }, __('Select', 'illustrations'))))));
});

/***/ }),

/***/ "./src/components/select-illustration/search.js":
/*!******************************************************!*\
  !*** ./src/components/select-illustration/search.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_search_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-search-input */ "./node_modules/react-search-input/lib/index.js");
/* harmony import */ var react_search_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_search_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/utils */ "./src/blocks/utils.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ "./src/components/select-illustration/item.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React
var Fragment = wp.element.Fragment; // Search element

 // Utils

 // Internationalization

var __ = wp.i18n.__; // Elements


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$parent = props.parent,
      illustrations = _props$parent.illustrations,
      search = _props$parent.search,
      filter = _props$parent.filter,
      setter = _props$parent.setter,
      setState = _props$parent.setState,
      defaults = _props$parent.defaults;

  if (filter !== 'search') {
    return null;
  }

  var items = illustrations.filter(Object(react_search_input__WEBPACK_IMPORTED_MODULE_0__["createFilter"])(search, ['label']));
  var length = search.length;
  return React.createElement(Fragment, null, length === 0 && Object(_blocks_utils__WEBPACK_IMPORTED_MODULE_1__["selectNotice"])(__('Type something in the search field %s', 'illustrations'), '😊'), length !== 0 && length <= 2 && Object(_blocks_utils__WEBPACK_IMPORTED_MODULE_1__["selectNotice"])(__('More letters needed %s', 'illustrations'), '🙃'), !items.length && length > 2 && Object(_blocks_utils__WEBPACK_IMPORTED_MODULE_1__["selectNotice"])(__('Could not find anything %s', 'illustrations'), '😢'), length >= 3 && items.map(function (details, index) {
    return React.createElement(_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      details: _objectSpread({}, details),
      defaults: _objectSpread({}, defaults),
      setters: {
        setter: setter,
        setState: setState
      }
    });
  }));
});

/***/ }),

/***/ "./src/components/select-illustration/wrapper.js":
/*!*******************************************************!*\
  !*** ./src/components/select-illustration/wrapper.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 3rd party

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var showRow = props.filter !== 'browse';

  var selectedClass = _defineProperty({}, "".concat(props.filter, "-selected"), true);

  return React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('illustrations-select-wrap', selectedClass)
  }, showRow ? React.createElement("div", {
    className: "row"
  }, props.children) : props.children);
});

/***/ }),

/***/ "./src/illustrations/index.js":
/*!************************************!*\
  !*** ./src/illustrations/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var illustrationsArr = ['AboutUsPage', 'AcceptTerms', 'Account', 'ActiveSupport', 'ADayAtThePark', 'AddFiles', 'Address', 'AddToCart', 'AddUser', 'Agreement', 'Airport', 'AirSupport', 'Alert', 'AlienScience', 'Analysis', 'Analytics', 'Android', 'AppInstallation', 'Appreciation', 'ArtificialIntelligence', 'ArtLover', 'Astronaut', 'AtWork', 'Autumn', 'Baby', 'BackInTheDay', 'BackToSchool', 'Basketball', 'Beach', 'BeerCelebration', 'BeforeDawn', 'BeTheHero', 'Bibliophile', 'BirthdayCake', 'Bitcoin', 'BitcoinP2P', 'BlankCanvas', 'Blogging', 'BlogPost', 'BookLover', 'Brainstorming', 'Broadcast', 'Browser', 'BrowserStats', 'Building', 'BuildingBlocks', 'BusinessDeal', 'Businessman', 'BusinessPlan', 'Businesswoman', 'BusStop', 'ByMyCar', 'Calculator', 'Calendar', 'Campfire', 'Camping', 'CautiousDog', 'Celebration', 'Charts', 'Chat', 'Chatting', 'Checklist', 'Chef', 'Chilling', 'Choose', 'CityDriver', 'CloudHosting', 'CloudSync', 'Coding', 'Collaboration', 'Collecting', 'Collection', 'Community', 'Confirmation', 'Confirmed', 'Connected', 'ConnectingTeams', 'ContainerShip', 'Contrast', 'ControlPanel', 'Conversation', 'CountrySide', 'Couple', 'Coworkers', 'CoWorking', 'Create', 'CreationProcess', 'Creativity', 'CreditCard', 'CreditCardPayment', 'CreditCardPayments', 'CryptoFlowers', 'CustomerSurvey', 'DarkAlley', 'Dashboard', 'Data', 'DataReport', 'Delivery', 'Departing', 'Depi', 'DesignCommunity', 'Designer', 'DesignerGirl', 'DesignerLife', 'DesignProcess', 'DesignTools', 'Destination', 'Development', 'Devices', 'DigitalNomad', 'Doctor', 'Documents', 'DroneDelivery', 'DroneRace', 'EasterEggHunt', 'EatingTogether', 'ElectricCar', 'EmailCapture', 'Emails', 'Empty', 'Envelope', 'Ether', 'Ethereum', 'Events', 'Everywhere', 'Experts', 'Exploring', 'FallIsComing', 'Fans', 'FastLoading', 'Fatherhood', 'FeelingBlue', 'FileSearching', 'FilingSystem', 'Filter', 'Finance', 'Firmware', 'Fishing', 'Floating', 'Focus', 'FollowMeDrone', 'Forever', 'ForgotPassword', 'ForSale', 'Freelancer', 'Friendship', 'Gaming', 'Gardening', 'Gdpr', 'GettingCoffee', 'Gift', 'GirlsJustWannaHaveFun', 'Goal', 'GoldenGateBridge', 'GoodDoggy', 'Grades', 'Graduation', 'GrandSlam', 'GroupSelfie', 'Growing', 'HangOut', 'HappyBirthday', 'HealthyHabit', 'Hello', 'HighFive', 'Hiring', 'HomeRun', 'Houses', 'HouseSearching', 'ImageFolder', 'Images', 'ImageUpload', 'InboxCleanup', 'Influencer', 'InLove', 'InstantSupport', 'InSync', 'InternetOnTheGo', 'InTheOffice', 'InThePool', 'Invite', 'JavascriptFrameworks', 'JobHunt', 'Jogging', 'Lighthouse', 'LiveCollaboration', 'Loading', 'Login', 'Lost', 'LoveIsInTheAir', 'Mail', 'Mailbox', 'MailSent', 'Maintenance', 'MakeItRain', 'MakeupArtist', 'MapDark', 'MapLight', 'Marilyn', 'MayTheForce', 'Meditation', 'Meeting', 'Messages', 'Messaging', 'Messenger', 'Mindfulness', 'MissionImpossible', 'Mobile', 'MobileApps', 'MobileBrowsers', 'MobilePayments', 'ModernWoman', 'MomentToRemember', 'MoreMusic', 'MorningEssentials', 'Motherhood', 'MovieNight', 'Music', 'Navigation', 'Nerd', 'NewMessage', 'News', 'Newsletter', 'NoData', 'Notebook', 'Notes', 'OffRoad', 'OldDay', 'Onboarding', 'Online', 'OnlineShopping', 'OnlineWorld', 'OnTheOffice', 'OnTheWay', 'Opened', 'OrderConfirmed', 'OrdinaryDay', 'OrganizePhotos', 'OrganizeResume', 'OrganizingProjects', 'OuterSpace', 'PassingBy', 'PedestrianCrossing', 'PenTool', 'PeopleSearch', 'Personalization', 'Photo', 'Photocopy', 'Photos', 'PhotoSharing', 'PieChart', 'Pilates', 'PlainCreditCard', 'PlayfulCat', 'Podcast', 'Portfolio', 'Post', 'Posts', 'Powerful', 'Preferences', 'Presentation', 'PressPlay', 'Processing', 'ProductHunt', 'ProductTeardown', 'ProductTour', 'ProfilePic', 'Programming', 'QaEngineers', 'Queue', 'ReadingList', 'RealTimeSync', 'Refreshing', 'Relaxation', 'RelaxingAtHome', 'Report', 'Responsive', 'Resume', 'ResumeFolder', 'RideABicycle', 'Rising', 'RomanticGetaway', 'RunningWild', 'Safe', 'Science', 'Search', 'SearchEngines', 'SecureData', 'SecureServer', 'SecurityOn', 'Segment', 'Segmentation', 'Select', 'Selfie', 'SelfieTime', 'Server', 'ServerStatus', 'Setup', 'SiteStats', 'SleepAnalysis', 'Sleeping', 'SmileyFace', 'Snowman', 'SocialGrowth', 'SocialIdeas', 'SocialMedia', 'SocialNetworking', 'SocialStrategy', 'SocialTree', 'Specs', 'Spreadsheets', 'Starman', 'Startled', 'StartupLife', 'StaticAssets', 'Statistics', 'StayingIn', 'StreetFood', 'Studying', 'SuccessfulPurchase', 'SunnyDay', 'Superhero', 'Surfer', 'SwipeProfiles', 'Sync', 'Tabs', 'Taken', 'TakingNotes', 'Target', 'Tasting', 'Team', 'TeamSpirit', 'Thoughts', 'ThroughTheDesert', 'TimeManagement', 'ToDoList', 'Together', 'ToTheStars', 'TrackAndField', 'TransferFiles', 'Trip', 'Tweetstorm', 'Typing', 'Upload', 'Upvote', 'Vault', 'VirtualReality', 'VrChat', 'WalkInTheCity', 'WallPost', 'Weather', 'WebDevices', 'WebsiteSetup', 'Welcome', 'Windows', 'WindowShopping', 'WinterOlympics', 'Wireframing', 'Wishes', 'Woman', 'WomenDay', 'WordOfMouth', 'WorkChat', 'Working', 'WorkingLate', 'Workout', 'WorkTime', 'Yacht', 'YoungAndHappy'];
/* harmony default export */ __webpack_exports__["default"] = (illustrationsArr.map(function (illstn) {
  var parts = illstn.split(/(?=[A-Z])/);
  return {
    label: parts.join(' '),
    value: illstn.toLowerCase(),
    folder: illstn,
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
      return __webpack_require__("./src/illustrations/svg lazy recursive ^\\.\\/.*$")("./".concat(illstn));
    }),
    keywords: parts.map(function (part) {
      return part.toLowerCase();
    })
  };
}));

/***/ }),

/***/ "./src/illustrations/svg lazy recursive ^\\.\\/.*$":
/*!**************************************************************!*\
  !*** ./src/illustrations/svg lazy ^\.\/.*$ namespace object ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ADayAtThePark": [
		"./src/illustrations/svg/ADayAtThePark/index.js",
		"illustrations/svg/ADayAtThePark"
	],
	"./ADayAtThePark/": [
		"./src/illustrations/svg/ADayAtThePark/index.js",
		"illustrations/svg/ADayAtThePark"
	],
	"./ADayAtThePark/index": [
		"./src/illustrations/svg/ADayAtThePark/index.js",
		"illustrations/svg/ADayAtThePark"
	],
	"./ADayAtThePark/index.js": [
		"./src/illustrations/svg/ADayAtThePark/index.js",
		"illustrations/svg/ADayAtThePark"
	],
	"./AboutUsPage": [
		"./src/illustrations/svg/AboutUsPage/index.js",
		"illustrations/svg/AboutUsPage"
	],
	"./AboutUsPage/": [
		"./src/illustrations/svg/AboutUsPage/index.js",
		"illustrations/svg/AboutUsPage"
	],
	"./AboutUsPage/index": [
		"./src/illustrations/svg/AboutUsPage/index.js",
		"illustrations/svg/AboutUsPage"
	],
	"./AboutUsPage/index.js": [
		"./src/illustrations/svg/AboutUsPage/index.js",
		"illustrations/svg/AboutUsPage"
	],
	"./AcceptTerms": [
		"./src/illustrations/svg/AcceptTerms/index.js",
		"illustrations/svg/AcceptTerms"
	],
	"./AcceptTerms/": [
		"./src/illustrations/svg/AcceptTerms/index.js",
		"illustrations/svg/AcceptTerms"
	],
	"./AcceptTerms/index": [
		"./src/illustrations/svg/AcceptTerms/index.js",
		"illustrations/svg/AcceptTerms"
	],
	"./AcceptTerms/index.js": [
		"./src/illustrations/svg/AcceptTerms/index.js",
		"illustrations/svg/AcceptTerms"
	],
	"./Account": [
		"./src/illustrations/svg/Account/index.js",
		"illustrations/svg/Account"
	],
	"./Account/": [
		"./src/illustrations/svg/Account/index.js",
		"illustrations/svg/Account"
	],
	"./Account/index": [
		"./src/illustrations/svg/Account/index.js",
		"illustrations/svg/Account"
	],
	"./Account/index.js": [
		"./src/illustrations/svg/Account/index.js",
		"illustrations/svg/Account"
	],
	"./ActiveSupport": [
		"./src/illustrations/svg/ActiveSupport/index.js",
		"illustrations/svg/ActiveSupport"
	],
	"./ActiveSupport/": [
		"./src/illustrations/svg/ActiveSupport/index.js",
		"illustrations/svg/ActiveSupport"
	],
	"./ActiveSupport/index": [
		"./src/illustrations/svg/ActiveSupport/index.js",
		"illustrations/svg/ActiveSupport"
	],
	"./ActiveSupport/index.js": [
		"./src/illustrations/svg/ActiveSupport/index.js",
		"illustrations/svg/ActiveSupport"
	],
	"./AddFiles": [
		"./src/illustrations/svg/AddFiles/index.js",
		"illustrations/svg/AddFiles"
	],
	"./AddFiles/": [
		"./src/illustrations/svg/AddFiles/index.js",
		"illustrations/svg/AddFiles"
	],
	"./AddFiles/index": [
		"./src/illustrations/svg/AddFiles/index.js",
		"illustrations/svg/AddFiles"
	],
	"./AddFiles/index.js": [
		"./src/illustrations/svg/AddFiles/index.js",
		"illustrations/svg/AddFiles"
	],
	"./AddToCart": [
		"./src/illustrations/svg/AddToCart/index.js",
		"illustrations/svg/AddToCart"
	],
	"./AddToCart/": [
		"./src/illustrations/svg/AddToCart/index.js",
		"illustrations/svg/AddToCart"
	],
	"./AddToCart/index": [
		"./src/illustrations/svg/AddToCart/index.js",
		"illustrations/svg/AddToCart"
	],
	"./AddToCart/index.js": [
		"./src/illustrations/svg/AddToCart/index.js",
		"illustrations/svg/AddToCart"
	],
	"./AddUser": [
		"./src/illustrations/svg/AddUser/index.js",
		"illustrations/svg/AddUser"
	],
	"./AddUser/": [
		"./src/illustrations/svg/AddUser/index.js",
		"illustrations/svg/AddUser"
	],
	"./AddUser/index": [
		"./src/illustrations/svg/AddUser/index.js",
		"illustrations/svg/AddUser"
	],
	"./AddUser/index.js": [
		"./src/illustrations/svg/AddUser/index.js",
		"illustrations/svg/AddUser"
	],
	"./Address": [
		"./src/illustrations/svg/Address/index.js",
		"illustrations/svg/Address"
	],
	"./Address/": [
		"./src/illustrations/svg/Address/index.js",
		"illustrations/svg/Address"
	],
	"./Address/index": [
		"./src/illustrations/svg/Address/index.js",
		"illustrations/svg/Address"
	],
	"./Address/index.js": [
		"./src/illustrations/svg/Address/index.js",
		"illustrations/svg/Address"
	],
	"./Agreement": [
		"./src/illustrations/svg/Agreement/index.js",
		"illustrations/svg/Agreement"
	],
	"./Agreement/": [
		"./src/illustrations/svg/Agreement/index.js",
		"illustrations/svg/Agreement"
	],
	"./Agreement/index": [
		"./src/illustrations/svg/Agreement/index.js",
		"illustrations/svg/Agreement"
	],
	"./Agreement/index.js": [
		"./src/illustrations/svg/Agreement/index.js",
		"illustrations/svg/Agreement"
	],
	"./AirSupport": [
		"./src/illustrations/svg/AirSupport/index.js",
		"illustrations/svg/AirSupport"
	],
	"./AirSupport/": [
		"./src/illustrations/svg/AirSupport/index.js",
		"illustrations/svg/AirSupport"
	],
	"./AirSupport/index": [
		"./src/illustrations/svg/AirSupport/index.js",
		"illustrations/svg/AirSupport"
	],
	"./AirSupport/index.js": [
		"./src/illustrations/svg/AirSupport/index.js",
		"illustrations/svg/AirSupport"
	],
	"./Airport": [
		"./src/illustrations/svg/Airport/index.js",
		"illustrations/svg/Airport"
	],
	"./Airport/": [
		"./src/illustrations/svg/Airport/index.js",
		"illustrations/svg/Airport"
	],
	"./Airport/index": [
		"./src/illustrations/svg/Airport/index.js",
		"illustrations/svg/Airport"
	],
	"./Airport/index.js": [
		"./src/illustrations/svg/Airport/index.js",
		"illustrations/svg/Airport"
	],
	"./Alert": [
		"./src/illustrations/svg/Alert/index.js",
		"illustrations/svg/Alert"
	],
	"./Alert/": [
		"./src/illustrations/svg/Alert/index.js",
		"illustrations/svg/Alert"
	],
	"./Alert/index": [
		"./src/illustrations/svg/Alert/index.js",
		"illustrations/svg/Alert"
	],
	"./Alert/index.js": [
		"./src/illustrations/svg/Alert/index.js",
		"illustrations/svg/Alert"
	],
	"./AlienScience": [
		"./src/illustrations/svg/AlienScience/index.js",
		"illustrations/svg/AlienScience"
	],
	"./AlienScience/": [
		"./src/illustrations/svg/AlienScience/index.js",
		"illustrations/svg/AlienScience"
	],
	"./AlienScience/index": [
		"./src/illustrations/svg/AlienScience/index.js",
		"illustrations/svg/AlienScience"
	],
	"./AlienScience/index.js": [
		"./src/illustrations/svg/AlienScience/index.js",
		"illustrations/svg/AlienScience"
	],
	"./Analysis": [
		"./src/illustrations/svg/Analysis/index.js",
		"illustrations/svg/Analysis"
	],
	"./Analysis/": [
		"./src/illustrations/svg/Analysis/index.js",
		"illustrations/svg/Analysis"
	],
	"./Analysis/index": [
		"./src/illustrations/svg/Analysis/index.js",
		"illustrations/svg/Analysis"
	],
	"./Analysis/index.js": [
		"./src/illustrations/svg/Analysis/index.js",
		"illustrations/svg/Analysis"
	],
	"./Analytics": [
		"./src/illustrations/svg/Analytics/index.js",
		"illustrations/svg/Analytics"
	],
	"./Analytics/": [
		"./src/illustrations/svg/Analytics/index.js",
		"illustrations/svg/Analytics"
	],
	"./Analytics/index": [
		"./src/illustrations/svg/Analytics/index.js",
		"illustrations/svg/Analytics"
	],
	"./Analytics/index.js": [
		"./src/illustrations/svg/Analytics/index.js",
		"illustrations/svg/Analytics"
	],
	"./Android": [
		"./src/illustrations/svg/Android/index.js",
		"illustrations/svg/Android"
	],
	"./Android/": [
		"./src/illustrations/svg/Android/index.js",
		"illustrations/svg/Android"
	],
	"./Android/index": [
		"./src/illustrations/svg/Android/index.js",
		"illustrations/svg/Android"
	],
	"./Android/index.js": [
		"./src/illustrations/svg/Android/index.js",
		"illustrations/svg/Android"
	],
	"./AppInstallation": [
		"./src/illustrations/svg/AppInstallation/index.js",
		"illustrations/svg/AppInstallation"
	],
	"./AppInstallation/": [
		"./src/illustrations/svg/AppInstallation/index.js",
		"illustrations/svg/AppInstallation"
	],
	"./AppInstallation/index": [
		"./src/illustrations/svg/AppInstallation/index.js",
		"illustrations/svg/AppInstallation"
	],
	"./AppInstallation/index.js": [
		"./src/illustrations/svg/AppInstallation/index.js",
		"illustrations/svg/AppInstallation"
	],
	"./Appreciation": [
		"./src/illustrations/svg/Appreciation/index.js",
		"illustrations/svg/Appreciation"
	],
	"./Appreciation/": [
		"./src/illustrations/svg/Appreciation/index.js",
		"illustrations/svg/Appreciation"
	],
	"./Appreciation/index": [
		"./src/illustrations/svg/Appreciation/index.js",
		"illustrations/svg/Appreciation"
	],
	"./Appreciation/index.js": [
		"./src/illustrations/svg/Appreciation/index.js",
		"illustrations/svg/Appreciation"
	],
	"./ArtLover": [
		"./src/illustrations/svg/ArtLover/index.js",
		"illustrations/svg/ArtLover"
	],
	"./ArtLover/": [
		"./src/illustrations/svg/ArtLover/index.js",
		"illustrations/svg/ArtLover"
	],
	"./ArtLover/index": [
		"./src/illustrations/svg/ArtLover/index.js",
		"illustrations/svg/ArtLover"
	],
	"./ArtLover/index.js": [
		"./src/illustrations/svg/ArtLover/index.js",
		"illustrations/svg/ArtLover"
	],
	"./ArtificialIntelligence": [
		"./src/illustrations/svg/ArtificialIntelligence/index.js",
		"illustrations/svg/ArtificialIntelligence"
	],
	"./ArtificialIntelligence/": [
		"./src/illustrations/svg/ArtificialIntelligence/index.js",
		"illustrations/svg/ArtificialIntelligence"
	],
	"./ArtificialIntelligence/index": [
		"./src/illustrations/svg/ArtificialIntelligence/index.js",
		"illustrations/svg/ArtificialIntelligence"
	],
	"./ArtificialIntelligence/index.js": [
		"./src/illustrations/svg/ArtificialIntelligence/index.js",
		"illustrations/svg/ArtificialIntelligence"
	],
	"./Astronaut": [
		"./src/illustrations/svg/Astronaut/index.js",
		"illustrations/svg/Astronaut"
	],
	"./Astronaut/": [
		"./src/illustrations/svg/Astronaut/index.js",
		"illustrations/svg/Astronaut"
	],
	"./Astronaut/index": [
		"./src/illustrations/svg/Astronaut/index.js",
		"illustrations/svg/Astronaut"
	],
	"./Astronaut/index.js": [
		"./src/illustrations/svg/Astronaut/index.js",
		"illustrations/svg/Astronaut"
	],
	"./AtWork": [
		"./src/illustrations/svg/AtWork/index.js",
		"illustrations/svg/AtWork"
	],
	"./AtWork/": [
		"./src/illustrations/svg/AtWork/index.js",
		"illustrations/svg/AtWork"
	],
	"./AtWork/index": [
		"./src/illustrations/svg/AtWork/index.js",
		"illustrations/svg/AtWork"
	],
	"./AtWork/index.js": [
		"./src/illustrations/svg/AtWork/index.js",
		"illustrations/svg/AtWork"
	],
	"./Autumn": [
		"./src/illustrations/svg/Autumn/index.js",
		"illustrations/svg/Autumn"
	],
	"./Autumn/": [
		"./src/illustrations/svg/Autumn/index.js",
		"illustrations/svg/Autumn"
	],
	"./Autumn/index": [
		"./src/illustrations/svg/Autumn/index.js",
		"illustrations/svg/Autumn"
	],
	"./Autumn/index.js": [
		"./src/illustrations/svg/Autumn/index.js",
		"illustrations/svg/Autumn"
	],
	"./Baby": [
		"./src/illustrations/svg/Baby/index.js",
		"illustrations/svg/Baby"
	],
	"./Baby/": [
		"./src/illustrations/svg/Baby/index.js",
		"illustrations/svg/Baby"
	],
	"./Baby/index": [
		"./src/illustrations/svg/Baby/index.js",
		"illustrations/svg/Baby"
	],
	"./Baby/index.js": [
		"./src/illustrations/svg/Baby/index.js",
		"illustrations/svg/Baby"
	],
	"./BackInTheDay": [
		"./src/illustrations/svg/BackInTheDay/index.js",
		"illustrations/svg/BackInTheDay"
	],
	"./BackInTheDay/": [
		"./src/illustrations/svg/BackInTheDay/index.js",
		"illustrations/svg/BackInTheDay"
	],
	"./BackInTheDay/index": [
		"./src/illustrations/svg/BackInTheDay/index.js",
		"illustrations/svg/BackInTheDay"
	],
	"./BackInTheDay/index.js": [
		"./src/illustrations/svg/BackInTheDay/index.js",
		"illustrations/svg/BackInTheDay"
	],
	"./BackToSchool": [
		"./src/illustrations/svg/BackToSchool/index.js",
		"illustrations/svg/BackToSchool"
	],
	"./BackToSchool/": [
		"./src/illustrations/svg/BackToSchool/index.js",
		"illustrations/svg/BackToSchool"
	],
	"./BackToSchool/index": [
		"./src/illustrations/svg/BackToSchool/index.js",
		"illustrations/svg/BackToSchool"
	],
	"./BackToSchool/index.js": [
		"./src/illustrations/svg/BackToSchool/index.js",
		"illustrations/svg/BackToSchool"
	],
	"./Basketball": [
		"./src/illustrations/svg/Basketball/index.js",
		"illustrations/svg/Basketball"
	],
	"./Basketball/": [
		"./src/illustrations/svg/Basketball/index.js",
		"illustrations/svg/Basketball"
	],
	"./Basketball/index": [
		"./src/illustrations/svg/Basketball/index.js",
		"illustrations/svg/Basketball"
	],
	"./Basketball/index.js": [
		"./src/illustrations/svg/Basketball/index.js",
		"illustrations/svg/Basketball"
	],
	"./BeTheHero": [
		"./src/illustrations/svg/BeTheHero/index.js",
		"illustrations/svg/BeTheHero"
	],
	"./BeTheHero/": [
		"./src/illustrations/svg/BeTheHero/index.js",
		"illustrations/svg/BeTheHero"
	],
	"./BeTheHero/index": [
		"./src/illustrations/svg/BeTheHero/index.js",
		"illustrations/svg/BeTheHero"
	],
	"./BeTheHero/index.js": [
		"./src/illustrations/svg/BeTheHero/index.js",
		"illustrations/svg/BeTheHero"
	],
	"./Beach": [
		"./src/illustrations/svg/Beach/index.js",
		"illustrations/svg/Beach"
	],
	"./Beach/": [
		"./src/illustrations/svg/Beach/index.js",
		"illustrations/svg/Beach"
	],
	"./Beach/index": [
		"./src/illustrations/svg/Beach/index.js",
		"illustrations/svg/Beach"
	],
	"./Beach/index.js": [
		"./src/illustrations/svg/Beach/index.js",
		"illustrations/svg/Beach"
	],
	"./BeerCelebration": [
		"./src/illustrations/svg/BeerCelebration/index.js",
		"illustrations/svg/BeerCelebration"
	],
	"./BeerCelebration/": [
		"./src/illustrations/svg/BeerCelebration/index.js",
		"illustrations/svg/BeerCelebration"
	],
	"./BeerCelebration/index": [
		"./src/illustrations/svg/BeerCelebration/index.js",
		"illustrations/svg/BeerCelebration"
	],
	"./BeerCelebration/index.js": [
		"./src/illustrations/svg/BeerCelebration/index.js",
		"illustrations/svg/BeerCelebration"
	],
	"./BeforeDawn": [
		"./src/illustrations/svg/BeforeDawn/index.js",
		"illustrations/svg/BeforeDawn"
	],
	"./BeforeDawn/": [
		"./src/illustrations/svg/BeforeDawn/index.js",
		"illustrations/svg/BeforeDawn"
	],
	"./BeforeDawn/index": [
		"./src/illustrations/svg/BeforeDawn/index.js",
		"illustrations/svg/BeforeDawn"
	],
	"./BeforeDawn/index.js": [
		"./src/illustrations/svg/BeforeDawn/index.js",
		"illustrations/svg/BeforeDawn"
	],
	"./Bibliophile": [
		"./src/illustrations/svg/Bibliophile/index.js",
		"illustrations/svg/Bibliophile"
	],
	"./Bibliophile/": [
		"./src/illustrations/svg/Bibliophile/index.js",
		"illustrations/svg/Bibliophile"
	],
	"./Bibliophile/index": [
		"./src/illustrations/svg/Bibliophile/index.js",
		"illustrations/svg/Bibliophile"
	],
	"./Bibliophile/index.js": [
		"./src/illustrations/svg/Bibliophile/index.js",
		"illustrations/svg/Bibliophile"
	],
	"./BirthdayCake": [
		"./src/illustrations/svg/BirthdayCake/index.js",
		"illustrations/svg/BirthdayCake"
	],
	"./BirthdayCake/": [
		"./src/illustrations/svg/BirthdayCake/index.js",
		"illustrations/svg/BirthdayCake"
	],
	"./BirthdayCake/index": [
		"./src/illustrations/svg/BirthdayCake/index.js",
		"illustrations/svg/BirthdayCake"
	],
	"./BirthdayCake/index.js": [
		"./src/illustrations/svg/BirthdayCake/index.js",
		"illustrations/svg/BirthdayCake"
	],
	"./Bitcoin": [
		"./src/illustrations/svg/Bitcoin/index.js",
		"illustrations/svg/Bitcoin"
	],
	"./Bitcoin/": [
		"./src/illustrations/svg/Bitcoin/index.js",
		"illustrations/svg/Bitcoin"
	],
	"./Bitcoin/index": [
		"./src/illustrations/svg/Bitcoin/index.js",
		"illustrations/svg/Bitcoin"
	],
	"./Bitcoin/index.js": [
		"./src/illustrations/svg/Bitcoin/index.js",
		"illustrations/svg/Bitcoin"
	],
	"./BitcoinP2P": [
		"./src/illustrations/svg/BitcoinP2P/index.js",
		"illustrations/svg/BitcoinP2P"
	],
	"./BitcoinP2P/": [
		"./src/illustrations/svg/BitcoinP2P/index.js",
		"illustrations/svg/BitcoinP2P"
	],
	"./BitcoinP2P/index": [
		"./src/illustrations/svg/BitcoinP2P/index.js",
		"illustrations/svg/BitcoinP2P"
	],
	"./BitcoinP2P/index.js": [
		"./src/illustrations/svg/BitcoinP2P/index.js",
		"illustrations/svg/BitcoinP2P"
	],
	"./BlankCanvas": [
		"./src/illustrations/svg/BlankCanvas/index.js",
		"illustrations/svg/BlankCanvas"
	],
	"./BlankCanvas/": [
		"./src/illustrations/svg/BlankCanvas/index.js",
		"illustrations/svg/BlankCanvas"
	],
	"./BlankCanvas/index": [
		"./src/illustrations/svg/BlankCanvas/index.js",
		"illustrations/svg/BlankCanvas"
	],
	"./BlankCanvas/index.js": [
		"./src/illustrations/svg/BlankCanvas/index.js",
		"illustrations/svg/BlankCanvas"
	],
	"./BlogPost": [
		"./src/illustrations/svg/BlogPost/index.js",
		"illustrations/svg/BlogPost"
	],
	"./BlogPost/": [
		"./src/illustrations/svg/BlogPost/index.js",
		"illustrations/svg/BlogPost"
	],
	"./BlogPost/index": [
		"./src/illustrations/svg/BlogPost/index.js",
		"illustrations/svg/BlogPost"
	],
	"./BlogPost/index.js": [
		"./src/illustrations/svg/BlogPost/index.js",
		"illustrations/svg/BlogPost"
	],
	"./Blogging": [
		"./src/illustrations/svg/Blogging/index.js",
		"illustrations/svg/Blogging"
	],
	"./Blogging/": [
		"./src/illustrations/svg/Blogging/index.js",
		"illustrations/svg/Blogging"
	],
	"./Blogging/index": [
		"./src/illustrations/svg/Blogging/index.js",
		"illustrations/svg/Blogging"
	],
	"./Blogging/index.js": [
		"./src/illustrations/svg/Blogging/index.js",
		"illustrations/svg/Blogging"
	],
	"./BookLover": [
		"./src/illustrations/svg/BookLover/index.js",
		"illustrations/svg/BookLover"
	],
	"./BookLover/": [
		"./src/illustrations/svg/BookLover/index.js",
		"illustrations/svg/BookLover"
	],
	"./BookLover/index": [
		"./src/illustrations/svg/BookLover/index.js",
		"illustrations/svg/BookLover"
	],
	"./BookLover/index.js": [
		"./src/illustrations/svg/BookLover/index.js",
		"illustrations/svg/BookLover"
	],
	"./Brainstorming": [
		"./src/illustrations/svg/Brainstorming/index.js",
		"illustrations/svg/Brainstorming"
	],
	"./Brainstorming/": [
		"./src/illustrations/svg/Brainstorming/index.js",
		"illustrations/svg/Brainstorming"
	],
	"./Brainstorming/index": [
		"./src/illustrations/svg/Brainstorming/index.js",
		"illustrations/svg/Brainstorming"
	],
	"./Brainstorming/index.js": [
		"./src/illustrations/svg/Brainstorming/index.js",
		"illustrations/svg/Brainstorming"
	],
	"./Broadcast": [
		"./src/illustrations/svg/Broadcast/index.js",
		"illustrations/svg/Broadcast"
	],
	"./Broadcast/": [
		"./src/illustrations/svg/Broadcast/index.js",
		"illustrations/svg/Broadcast"
	],
	"./Broadcast/index": [
		"./src/illustrations/svg/Broadcast/index.js",
		"illustrations/svg/Broadcast"
	],
	"./Broadcast/index.js": [
		"./src/illustrations/svg/Broadcast/index.js",
		"illustrations/svg/Broadcast"
	],
	"./Browser": [
		"./src/illustrations/svg/Browser/index.js",
		"illustrations/svg/Browser"
	],
	"./Browser/": [
		"./src/illustrations/svg/Browser/index.js",
		"illustrations/svg/Browser"
	],
	"./Browser/index": [
		"./src/illustrations/svg/Browser/index.js",
		"illustrations/svg/Browser"
	],
	"./Browser/index.js": [
		"./src/illustrations/svg/Browser/index.js",
		"illustrations/svg/Browser"
	],
	"./BrowserStats": [
		"./src/illustrations/svg/BrowserStats/index.js",
		"illustrations/svg/BrowserStats"
	],
	"./BrowserStats/": [
		"./src/illustrations/svg/BrowserStats/index.js",
		"illustrations/svg/BrowserStats"
	],
	"./BrowserStats/index": [
		"./src/illustrations/svg/BrowserStats/index.js",
		"illustrations/svg/BrowserStats"
	],
	"./BrowserStats/index.js": [
		"./src/illustrations/svg/BrowserStats/index.js",
		"illustrations/svg/BrowserStats"
	],
	"./Building": [
		"./src/illustrations/svg/Building/index.js",
		"illustrations/svg/Building"
	],
	"./Building/": [
		"./src/illustrations/svg/Building/index.js",
		"illustrations/svg/Building"
	],
	"./Building/index": [
		"./src/illustrations/svg/Building/index.js",
		"illustrations/svg/Building"
	],
	"./Building/index.js": [
		"./src/illustrations/svg/Building/index.js",
		"illustrations/svg/Building"
	],
	"./BuildingBlocks": [
		"./src/illustrations/svg/BuildingBlocks/index.js",
		"illustrations/svg/BuildingBlocks"
	],
	"./BuildingBlocks/": [
		"./src/illustrations/svg/BuildingBlocks/index.js",
		"illustrations/svg/BuildingBlocks"
	],
	"./BuildingBlocks/index": [
		"./src/illustrations/svg/BuildingBlocks/index.js",
		"illustrations/svg/BuildingBlocks"
	],
	"./BuildingBlocks/index.js": [
		"./src/illustrations/svg/BuildingBlocks/index.js",
		"illustrations/svg/BuildingBlocks"
	],
	"./BusStop": [
		"./src/illustrations/svg/BusStop/index.js",
		"illustrations/svg/BusStop"
	],
	"./BusStop/": [
		"./src/illustrations/svg/BusStop/index.js",
		"illustrations/svg/BusStop"
	],
	"./BusStop/index": [
		"./src/illustrations/svg/BusStop/index.js",
		"illustrations/svg/BusStop"
	],
	"./BusStop/index.js": [
		"./src/illustrations/svg/BusStop/index.js",
		"illustrations/svg/BusStop"
	],
	"./BusinessDeal": [
		"./src/illustrations/svg/BusinessDeal/index.js",
		"illustrations/svg/BusinessDeal"
	],
	"./BusinessDeal/": [
		"./src/illustrations/svg/BusinessDeal/index.js",
		"illustrations/svg/BusinessDeal"
	],
	"./BusinessDeal/index": [
		"./src/illustrations/svg/BusinessDeal/index.js",
		"illustrations/svg/BusinessDeal"
	],
	"./BusinessDeal/index.js": [
		"./src/illustrations/svg/BusinessDeal/index.js",
		"illustrations/svg/BusinessDeal"
	],
	"./BusinessPlan": [
		"./src/illustrations/svg/BusinessPlan/index.js",
		"illustrations/svg/BusinessPlan"
	],
	"./BusinessPlan/": [
		"./src/illustrations/svg/BusinessPlan/index.js",
		"illustrations/svg/BusinessPlan"
	],
	"./BusinessPlan/index": [
		"./src/illustrations/svg/BusinessPlan/index.js",
		"illustrations/svg/BusinessPlan"
	],
	"./BusinessPlan/index.js": [
		"./src/illustrations/svg/BusinessPlan/index.js",
		"illustrations/svg/BusinessPlan"
	],
	"./Businessman": [
		"./src/illustrations/svg/Businessman/index.js",
		"illustrations/svg/Businessman"
	],
	"./Businessman/": [
		"./src/illustrations/svg/Businessman/index.js",
		"illustrations/svg/Businessman"
	],
	"./Businessman/index": [
		"./src/illustrations/svg/Businessman/index.js",
		"illustrations/svg/Businessman"
	],
	"./Businessman/index.js": [
		"./src/illustrations/svg/Businessman/index.js",
		"illustrations/svg/Businessman"
	],
	"./Businesswoman": [
		"./src/illustrations/svg/Businesswoman/index.js",
		"illustrations/svg/Businesswoman"
	],
	"./Businesswoman/": [
		"./src/illustrations/svg/Businesswoman/index.js",
		"illustrations/svg/Businesswoman"
	],
	"./Businesswoman/index": [
		"./src/illustrations/svg/Businesswoman/index.js",
		"illustrations/svg/Businesswoman"
	],
	"./Businesswoman/index.js": [
		"./src/illustrations/svg/Businesswoman/index.js",
		"illustrations/svg/Businesswoman"
	],
	"./ByMyCar": [
		"./src/illustrations/svg/ByMyCar/index.js",
		"illustrations/svg/ByMyCar"
	],
	"./ByMyCar/": [
		"./src/illustrations/svg/ByMyCar/index.js",
		"illustrations/svg/ByMyCar"
	],
	"./ByMyCar/index": [
		"./src/illustrations/svg/ByMyCar/index.js",
		"illustrations/svg/ByMyCar"
	],
	"./ByMyCar/index.js": [
		"./src/illustrations/svg/ByMyCar/index.js",
		"illustrations/svg/ByMyCar"
	],
	"./Calculator": [
		"./src/illustrations/svg/Calculator/index.js",
		"illustrations/svg/Calculator"
	],
	"./Calculator/": [
		"./src/illustrations/svg/Calculator/index.js",
		"illustrations/svg/Calculator"
	],
	"./Calculator/index": [
		"./src/illustrations/svg/Calculator/index.js",
		"illustrations/svg/Calculator"
	],
	"./Calculator/index.js": [
		"./src/illustrations/svg/Calculator/index.js",
		"illustrations/svg/Calculator"
	],
	"./Calendar": [
		"./src/illustrations/svg/Calendar/index.js",
		"illustrations/svg/Calendar"
	],
	"./Calendar/": [
		"./src/illustrations/svg/Calendar/index.js",
		"illustrations/svg/Calendar"
	],
	"./Calendar/index": [
		"./src/illustrations/svg/Calendar/index.js",
		"illustrations/svg/Calendar"
	],
	"./Calendar/index.js": [
		"./src/illustrations/svg/Calendar/index.js",
		"illustrations/svg/Calendar"
	],
	"./Campfire": [
		"./src/illustrations/svg/Campfire/index.js",
		"illustrations/svg/Campfire"
	],
	"./Campfire/": [
		"./src/illustrations/svg/Campfire/index.js",
		"illustrations/svg/Campfire"
	],
	"./Campfire/index": [
		"./src/illustrations/svg/Campfire/index.js",
		"illustrations/svg/Campfire"
	],
	"./Campfire/index.js": [
		"./src/illustrations/svg/Campfire/index.js",
		"illustrations/svg/Campfire"
	],
	"./Camping": [
		"./src/illustrations/svg/Camping/index.js",
		"illustrations/svg/Camping"
	],
	"./Camping/": [
		"./src/illustrations/svg/Camping/index.js",
		"illustrations/svg/Camping"
	],
	"./Camping/index": [
		"./src/illustrations/svg/Camping/index.js",
		"illustrations/svg/Camping"
	],
	"./Camping/index.js": [
		"./src/illustrations/svg/Camping/index.js",
		"illustrations/svg/Camping"
	],
	"./CautiousDog": [
		"./src/illustrations/svg/CautiousDog/index.js",
		"illustrations/svg/CautiousDog"
	],
	"./CautiousDog/": [
		"./src/illustrations/svg/CautiousDog/index.js",
		"illustrations/svg/CautiousDog"
	],
	"./CautiousDog/index": [
		"./src/illustrations/svg/CautiousDog/index.js",
		"illustrations/svg/CautiousDog"
	],
	"./CautiousDog/index.js": [
		"./src/illustrations/svg/CautiousDog/index.js",
		"illustrations/svg/CautiousDog"
	],
	"./Celebration": [
		"./src/illustrations/svg/Celebration/index.js",
		"illustrations/svg/Celebration"
	],
	"./Celebration/": [
		"./src/illustrations/svg/Celebration/index.js",
		"illustrations/svg/Celebration"
	],
	"./Celebration/index": [
		"./src/illustrations/svg/Celebration/index.js",
		"illustrations/svg/Celebration"
	],
	"./Celebration/index.js": [
		"./src/illustrations/svg/Celebration/index.js",
		"illustrations/svg/Celebration"
	],
	"./Charts": [
		"./src/illustrations/svg/Charts/index.js",
		"illustrations/svg/Charts"
	],
	"./Charts/": [
		"./src/illustrations/svg/Charts/index.js",
		"illustrations/svg/Charts"
	],
	"./Charts/index": [
		"./src/illustrations/svg/Charts/index.js",
		"illustrations/svg/Charts"
	],
	"./Charts/index.js": [
		"./src/illustrations/svg/Charts/index.js",
		"illustrations/svg/Charts"
	],
	"./Chat": [
		"./src/illustrations/svg/Chat/index.js",
		"illustrations/svg/Chat"
	],
	"./Chat/": [
		"./src/illustrations/svg/Chat/index.js",
		"illustrations/svg/Chat"
	],
	"./Chat/index": [
		"./src/illustrations/svg/Chat/index.js",
		"illustrations/svg/Chat"
	],
	"./Chat/index.js": [
		"./src/illustrations/svg/Chat/index.js",
		"illustrations/svg/Chat"
	],
	"./Chatting": [
		"./src/illustrations/svg/Chatting/index.js",
		"illustrations/svg/Chatting"
	],
	"./Chatting/": [
		"./src/illustrations/svg/Chatting/index.js",
		"illustrations/svg/Chatting"
	],
	"./Chatting/index": [
		"./src/illustrations/svg/Chatting/index.js",
		"illustrations/svg/Chatting"
	],
	"./Chatting/index.js": [
		"./src/illustrations/svg/Chatting/index.js",
		"illustrations/svg/Chatting"
	],
	"./Checklist": [
		"./src/illustrations/svg/Checklist/index.js",
		"illustrations/svg/Checklist"
	],
	"./Checklist/": [
		"./src/illustrations/svg/Checklist/index.js",
		"illustrations/svg/Checklist"
	],
	"./Checklist/index": [
		"./src/illustrations/svg/Checklist/index.js",
		"illustrations/svg/Checklist"
	],
	"./Checklist/index.js": [
		"./src/illustrations/svg/Checklist/index.js",
		"illustrations/svg/Checklist"
	],
	"./Chef": [
		"./src/illustrations/svg/Chef/index.js",
		"illustrations/svg/Chef"
	],
	"./Chef/": [
		"./src/illustrations/svg/Chef/index.js",
		"illustrations/svg/Chef"
	],
	"./Chef/index": [
		"./src/illustrations/svg/Chef/index.js",
		"illustrations/svg/Chef"
	],
	"./Chef/index.js": [
		"./src/illustrations/svg/Chef/index.js",
		"illustrations/svg/Chef"
	],
	"./Chilling": [
		"./src/illustrations/svg/Chilling/index.js",
		"illustrations/svg/Chilling"
	],
	"./Chilling/": [
		"./src/illustrations/svg/Chilling/index.js",
		"illustrations/svg/Chilling"
	],
	"./Chilling/index": [
		"./src/illustrations/svg/Chilling/index.js",
		"illustrations/svg/Chilling"
	],
	"./Chilling/index.js": [
		"./src/illustrations/svg/Chilling/index.js",
		"illustrations/svg/Chilling"
	],
	"./Choose": [
		"./src/illustrations/svg/Choose/index.js",
		"illustrations/svg/Choose"
	],
	"./Choose/": [
		"./src/illustrations/svg/Choose/index.js",
		"illustrations/svg/Choose"
	],
	"./Choose/index": [
		"./src/illustrations/svg/Choose/index.js",
		"illustrations/svg/Choose"
	],
	"./Choose/index.js": [
		"./src/illustrations/svg/Choose/index.js",
		"illustrations/svg/Choose"
	],
	"./CityDriver": [
		"./src/illustrations/svg/CityDriver/index.js",
		"illustrations/svg/CityDriver"
	],
	"./CityDriver/": [
		"./src/illustrations/svg/CityDriver/index.js",
		"illustrations/svg/CityDriver"
	],
	"./CityDriver/index": [
		"./src/illustrations/svg/CityDriver/index.js",
		"illustrations/svg/CityDriver"
	],
	"./CityDriver/index.js": [
		"./src/illustrations/svg/CityDriver/index.js",
		"illustrations/svg/CityDriver"
	],
	"./CloudHosting": [
		"./src/illustrations/svg/CloudHosting/index.js",
		"illustrations/svg/CloudHosting"
	],
	"./CloudHosting/": [
		"./src/illustrations/svg/CloudHosting/index.js",
		"illustrations/svg/CloudHosting"
	],
	"./CloudHosting/index": [
		"./src/illustrations/svg/CloudHosting/index.js",
		"illustrations/svg/CloudHosting"
	],
	"./CloudHosting/index.js": [
		"./src/illustrations/svg/CloudHosting/index.js",
		"illustrations/svg/CloudHosting"
	],
	"./CloudSync": [
		"./src/illustrations/svg/CloudSync/index.js",
		"illustrations/svg/CloudSync"
	],
	"./CloudSync/": [
		"./src/illustrations/svg/CloudSync/index.js",
		"illustrations/svg/CloudSync"
	],
	"./CloudSync/index": [
		"./src/illustrations/svg/CloudSync/index.js",
		"illustrations/svg/CloudSync"
	],
	"./CloudSync/index.js": [
		"./src/illustrations/svg/CloudSync/index.js",
		"illustrations/svg/CloudSync"
	],
	"./CoWorking": [
		"./src/illustrations/svg/CoWorking/index.js",
		"illustrations/svg/CoWorking"
	],
	"./CoWorking/": [
		"./src/illustrations/svg/CoWorking/index.js",
		"illustrations/svg/CoWorking"
	],
	"./CoWorking/index": [
		"./src/illustrations/svg/CoWorking/index.js",
		"illustrations/svg/CoWorking"
	],
	"./CoWorking/index.js": [
		"./src/illustrations/svg/CoWorking/index.js",
		"illustrations/svg/CoWorking"
	],
	"./Coding": [
		"./src/illustrations/svg/Coding/index.js",
		"illustrations/svg/Coding"
	],
	"./Coding/": [
		"./src/illustrations/svg/Coding/index.js",
		"illustrations/svg/Coding"
	],
	"./Coding/index": [
		"./src/illustrations/svg/Coding/index.js",
		"illustrations/svg/Coding"
	],
	"./Coding/index.js": [
		"./src/illustrations/svg/Coding/index.js",
		"illustrations/svg/Coding"
	],
	"./Collaboration": [
		"./src/illustrations/svg/Collaboration/index.js",
		"illustrations/svg/Collaboration"
	],
	"./Collaboration/": [
		"./src/illustrations/svg/Collaboration/index.js",
		"illustrations/svg/Collaboration"
	],
	"./Collaboration/index": [
		"./src/illustrations/svg/Collaboration/index.js",
		"illustrations/svg/Collaboration"
	],
	"./Collaboration/index.js": [
		"./src/illustrations/svg/Collaboration/index.js",
		"illustrations/svg/Collaboration"
	],
	"./Collecting": [
		"./src/illustrations/svg/Collecting/index.js",
		"illustrations/svg/Collecting"
	],
	"./Collecting/": [
		"./src/illustrations/svg/Collecting/index.js",
		"illustrations/svg/Collecting"
	],
	"./Collecting/index": [
		"./src/illustrations/svg/Collecting/index.js",
		"illustrations/svg/Collecting"
	],
	"./Collecting/index.js": [
		"./src/illustrations/svg/Collecting/index.js",
		"illustrations/svg/Collecting"
	],
	"./Collection": [
		"./src/illustrations/svg/Collection/index.js",
		"illustrations/svg/Collection"
	],
	"./Collection/": [
		"./src/illustrations/svg/Collection/index.js",
		"illustrations/svg/Collection"
	],
	"./Collection/index": [
		"./src/illustrations/svg/Collection/index.js",
		"illustrations/svg/Collection"
	],
	"./Collection/index.js": [
		"./src/illustrations/svg/Collection/index.js",
		"illustrations/svg/Collection"
	],
	"./Community": [
		"./src/illustrations/svg/Community/index.js",
		"illustrations/svg/Community"
	],
	"./Community/": [
		"./src/illustrations/svg/Community/index.js",
		"illustrations/svg/Community"
	],
	"./Community/index": [
		"./src/illustrations/svg/Community/index.js",
		"illustrations/svg/Community"
	],
	"./Community/index.js": [
		"./src/illustrations/svg/Community/index.js",
		"illustrations/svg/Community"
	],
	"./Confirmation": [
		"./src/illustrations/svg/Confirmation/index.js",
		"illustrations/svg/Confirmation"
	],
	"./Confirmation/": [
		"./src/illustrations/svg/Confirmation/index.js",
		"illustrations/svg/Confirmation"
	],
	"./Confirmation/index": [
		"./src/illustrations/svg/Confirmation/index.js",
		"illustrations/svg/Confirmation"
	],
	"./Confirmation/index.js": [
		"./src/illustrations/svg/Confirmation/index.js",
		"illustrations/svg/Confirmation"
	],
	"./Confirmed": [
		"./src/illustrations/svg/Confirmed/index.js",
		"illustrations/svg/Confirmed"
	],
	"./Confirmed/": [
		"./src/illustrations/svg/Confirmed/index.js",
		"illustrations/svg/Confirmed"
	],
	"./Confirmed/index": [
		"./src/illustrations/svg/Confirmed/index.js",
		"illustrations/svg/Confirmed"
	],
	"./Confirmed/index.js": [
		"./src/illustrations/svg/Confirmed/index.js",
		"illustrations/svg/Confirmed"
	],
	"./Connected": [
		"./src/illustrations/svg/Connected/index.js",
		"illustrations/svg/Connected"
	],
	"./Connected/": [
		"./src/illustrations/svg/Connected/index.js",
		"illustrations/svg/Connected"
	],
	"./Connected/index": [
		"./src/illustrations/svg/Connected/index.js",
		"illustrations/svg/Connected"
	],
	"./Connected/index.js": [
		"./src/illustrations/svg/Connected/index.js",
		"illustrations/svg/Connected"
	],
	"./ConnectingTeams": [
		"./src/illustrations/svg/ConnectingTeams/index.js",
		"illustrations/svg/ConnectingTeams"
	],
	"./ConnectingTeams/": [
		"./src/illustrations/svg/ConnectingTeams/index.js",
		"illustrations/svg/ConnectingTeams"
	],
	"./ConnectingTeams/index": [
		"./src/illustrations/svg/ConnectingTeams/index.js",
		"illustrations/svg/ConnectingTeams"
	],
	"./ConnectingTeams/index.js": [
		"./src/illustrations/svg/ConnectingTeams/index.js",
		"illustrations/svg/ConnectingTeams"
	],
	"./ContainerShip": [
		"./src/illustrations/svg/ContainerShip/index.js",
		"illustrations/svg/ContainerShip"
	],
	"./ContainerShip/": [
		"./src/illustrations/svg/ContainerShip/index.js",
		"illustrations/svg/ContainerShip"
	],
	"./ContainerShip/index": [
		"./src/illustrations/svg/ContainerShip/index.js",
		"illustrations/svg/ContainerShip"
	],
	"./ContainerShip/index.js": [
		"./src/illustrations/svg/ContainerShip/index.js",
		"illustrations/svg/ContainerShip"
	],
	"./Contrast": [
		"./src/illustrations/svg/Contrast/index.js",
		"illustrations/svg/Contrast"
	],
	"./Contrast/": [
		"./src/illustrations/svg/Contrast/index.js",
		"illustrations/svg/Contrast"
	],
	"./Contrast/index": [
		"./src/illustrations/svg/Contrast/index.js",
		"illustrations/svg/Contrast"
	],
	"./Contrast/index.js": [
		"./src/illustrations/svg/Contrast/index.js",
		"illustrations/svg/Contrast"
	],
	"./ControlPanel": [
		"./src/illustrations/svg/ControlPanel/index.js",
		"illustrations/svg/ControlPanel"
	],
	"./ControlPanel/": [
		"./src/illustrations/svg/ControlPanel/index.js",
		"illustrations/svg/ControlPanel"
	],
	"./ControlPanel/index": [
		"./src/illustrations/svg/ControlPanel/index.js",
		"illustrations/svg/ControlPanel"
	],
	"./ControlPanel/index.js": [
		"./src/illustrations/svg/ControlPanel/index.js",
		"illustrations/svg/ControlPanel"
	],
	"./Conversation": [
		"./src/illustrations/svg/Conversation/index.js",
		"illustrations/svg/Conversation"
	],
	"./Conversation/": [
		"./src/illustrations/svg/Conversation/index.js",
		"illustrations/svg/Conversation"
	],
	"./Conversation/index": [
		"./src/illustrations/svg/Conversation/index.js",
		"illustrations/svg/Conversation"
	],
	"./Conversation/index.js": [
		"./src/illustrations/svg/Conversation/index.js",
		"illustrations/svg/Conversation"
	],
	"./CountrySide": [
		"./src/illustrations/svg/CountrySide/index.js",
		"illustrations/svg/CountrySide"
	],
	"./CountrySide/": [
		"./src/illustrations/svg/CountrySide/index.js",
		"illustrations/svg/CountrySide"
	],
	"./CountrySide/index": [
		"./src/illustrations/svg/CountrySide/index.js",
		"illustrations/svg/CountrySide"
	],
	"./CountrySide/index.js": [
		"./src/illustrations/svg/CountrySide/index.js",
		"illustrations/svg/CountrySide"
	],
	"./Couple": [
		"./src/illustrations/svg/Couple/index.js",
		"illustrations/svg/Couple"
	],
	"./Couple/": [
		"./src/illustrations/svg/Couple/index.js",
		"illustrations/svg/Couple"
	],
	"./Couple/index": [
		"./src/illustrations/svg/Couple/index.js",
		"illustrations/svg/Couple"
	],
	"./Couple/index.js": [
		"./src/illustrations/svg/Couple/index.js",
		"illustrations/svg/Couple"
	],
	"./Coworkers": [
		"./src/illustrations/svg/Coworkers/index.js",
		"illustrations/svg/Coworkers"
	],
	"./Coworkers/": [
		"./src/illustrations/svg/Coworkers/index.js",
		"illustrations/svg/Coworkers"
	],
	"./Coworkers/index": [
		"./src/illustrations/svg/Coworkers/index.js",
		"illustrations/svg/Coworkers"
	],
	"./Coworkers/index.js": [
		"./src/illustrations/svg/Coworkers/index.js",
		"illustrations/svg/Coworkers"
	],
	"./Create": [
		"./src/illustrations/svg/Create/index.js",
		"illustrations/svg/Create"
	],
	"./Create/": [
		"./src/illustrations/svg/Create/index.js",
		"illustrations/svg/Create"
	],
	"./Create/index": [
		"./src/illustrations/svg/Create/index.js",
		"illustrations/svg/Create"
	],
	"./Create/index.js": [
		"./src/illustrations/svg/Create/index.js",
		"illustrations/svg/Create"
	],
	"./CreationProcess": [
		"./src/illustrations/svg/CreationProcess/index.js",
		"illustrations/svg/CreationProcess"
	],
	"./CreationProcess/": [
		"./src/illustrations/svg/CreationProcess/index.js",
		"illustrations/svg/CreationProcess"
	],
	"./CreationProcess/index": [
		"./src/illustrations/svg/CreationProcess/index.js",
		"illustrations/svg/CreationProcess"
	],
	"./CreationProcess/index.js": [
		"./src/illustrations/svg/CreationProcess/index.js",
		"illustrations/svg/CreationProcess"
	],
	"./Creativity": [
		"./src/illustrations/svg/Creativity/index.js",
		"illustrations/svg/Creativity"
	],
	"./Creativity/": [
		"./src/illustrations/svg/Creativity/index.js",
		"illustrations/svg/Creativity"
	],
	"./Creativity/index": [
		"./src/illustrations/svg/Creativity/index.js",
		"illustrations/svg/Creativity"
	],
	"./Creativity/index.js": [
		"./src/illustrations/svg/Creativity/index.js",
		"illustrations/svg/Creativity"
	],
	"./CreditCard": [
		"./src/illustrations/svg/CreditCard/index.js",
		"illustrations/svg/CreditCard"
	],
	"./CreditCard/": [
		"./src/illustrations/svg/CreditCard/index.js",
		"illustrations/svg/CreditCard"
	],
	"./CreditCard/index": [
		"./src/illustrations/svg/CreditCard/index.js",
		"illustrations/svg/CreditCard"
	],
	"./CreditCard/index.js": [
		"./src/illustrations/svg/CreditCard/index.js",
		"illustrations/svg/CreditCard"
	],
	"./CreditCardPayment": [
		"./src/illustrations/svg/CreditCardPayment/index.js",
		"illustrations/svg/CreditCardPayment"
	],
	"./CreditCardPayment/": [
		"./src/illustrations/svg/CreditCardPayment/index.js",
		"illustrations/svg/CreditCardPayment"
	],
	"./CreditCardPayment/index": [
		"./src/illustrations/svg/CreditCardPayment/index.js",
		"illustrations/svg/CreditCardPayment"
	],
	"./CreditCardPayment/index.js": [
		"./src/illustrations/svg/CreditCardPayment/index.js",
		"illustrations/svg/CreditCardPayment"
	],
	"./CreditCardPayments": [
		"./src/illustrations/svg/CreditCardPayments/index.js",
		"illustrations/svg/CreditCardPayments"
	],
	"./CreditCardPayments/": [
		"./src/illustrations/svg/CreditCardPayments/index.js",
		"illustrations/svg/CreditCardPayments"
	],
	"./CreditCardPayments/index": [
		"./src/illustrations/svg/CreditCardPayments/index.js",
		"illustrations/svg/CreditCardPayments"
	],
	"./CreditCardPayments/index.js": [
		"./src/illustrations/svg/CreditCardPayments/index.js",
		"illustrations/svg/CreditCardPayments"
	],
	"./CryptoFlowers": [
		"./src/illustrations/svg/CryptoFlowers/index.js",
		"illustrations/svg/CryptoFlowers"
	],
	"./CryptoFlowers/": [
		"./src/illustrations/svg/CryptoFlowers/index.js",
		"illustrations/svg/CryptoFlowers"
	],
	"./CryptoFlowers/index": [
		"./src/illustrations/svg/CryptoFlowers/index.js",
		"illustrations/svg/CryptoFlowers"
	],
	"./CryptoFlowers/index.js": [
		"./src/illustrations/svg/CryptoFlowers/index.js",
		"illustrations/svg/CryptoFlowers"
	],
	"./CustomerSurvey": [
		"./src/illustrations/svg/CustomerSurvey/index.js",
		"illustrations/svg/CustomerSurvey"
	],
	"./CustomerSurvey/": [
		"./src/illustrations/svg/CustomerSurvey/index.js",
		"illustrations/svg/CustomerSurvey"
	],
	"./CustomerSurvey/index": [
		"./src/illustrations/svg/CustomerSurvey/index.js",
		"illustrations/svg/CustomerSurvey"
	],
	"./CustomerSurvey/index.js": [
		"./src/illustrations/svg/CustomerSurvey/index.js",
		"illustrations/svg/CustomerSurvey"
	],
	"./DarkAlley": [
		"./src/illustrations/svg/DarkAlley/index.js",
		"illustrations/svg/DarkAlley"
	],
	"./DarkAlley/": [
		"./src/illustrations/svg/DarkAlley/index.js",
		"illustrations/svg/DarkAlley"
	],
	"./DarkAlley/index": [
		"./src/illustrations/svg/DarkAlley/index.js",
		"illustrations/svg/DarkAlley"
	],
	"./DarkAlley/index.js": [
		"./src/illustrations/svg/DarkAlley/index.js",
		"illustrations/svg/DarkAlley"
	],
	"./Dashboard": [
		"./src/illustrations/svg/Dashboard/index.js",
		"illustrations/svg/Dashboard"
	],
	"./Dashboard/": [
		"./src/illustrations/svg/Dashboard/index.js",
		"illustrations/svg/Dashboard"
	],
	"./Dashboard/index": [
		"./src/illustrations/svg/Dashboard/index.js",
		"illustrations/svg/Dashboard"
	],
	"./Dashboard/index.js": [
		"./src/illustrations/svg/Dashboard/index.js",
		"illustrations/svg/Dashboard"
	],
	"./Data": [
		"./src/illustrations/svg/Data/index.js",
		"illustrations/svg/Data"
	],
	"./Data/": [
		"./src/illustrations/svg/Data/index.js",
		"illustrations/svg/Data"
	],
	"./Data/index": [
		"./src/illustrations/svg/Data/index.js",
		"illustrations/svg/Data"
	],
	"./Data/index.js": [
		"./src/illustrations/svg/Data/index.js",
		"illustrations/svg/Data"
	],
	"./DataReport": [
		"./src/illustrations/svg/DataReport/index.js",
		"illustrations/svg/DataReport"
	],
	"./DataReport/": [
		"./src/illustrations/svg/DataReport/index.js",
		"illustrations/svg/DataReport"
	],
	"./DataReport/index": [
		"./src/illustrations/svg/DataReport/index.js",
		"illustrations/svg/DataReport"
	],
	"./DataReport/index.js": [
		"./src/illustrations/svg/DataReport/index.js",
		"illustrations/svg/DataReport"
	],
	"./Delivery": [
		"./src/illustrations/svg/Delivery/index.js",
		"illustrations/svg/Delivery"
	],
	"./Delivery/": [
		"./src/illustrations/svg/Delivery/index.js",
		"illustrations/svg/Delivery"
	],
	"./Delivery/index": [
		"./src/illustrations/svg/Delivery/index.js",
		"illustrations/svg/Delivery"
	],
	"./Delivery/index.js": [
		"./src/illustrations/svg/Delivery/index.js",
		"illustrations/svg/Delivery"
	],
	"./Departing": [
		"./src/illustrations/svg/Departing/index.js",
		"illustrations/svg/Departing"
	],
	"./Departing/": [
		"./src/illustrations/svg/Departing/index.js",
		"illustrations/svg/Departing"
	],
	"./Departing/index": [
		"./src/illustrations/svg/Departing/index.js",
		"illustrations/svg/Departing"
	],
	"./Departing/index.js": [
		"./src/illustrations/svg/Departing/index.js",
		"illustrations/svg/Departing"
	],
	"./Depi": [
		"./src/illustrations/svg/Depi/index.js",
		"illustrations/svg/Depi"
	],
	"./Depi/": [
		"./src/illustrations/svg/Depi/index.js",
		"illustrations/svg/Depi"
	],
	"./Depi/index": [
		"./src/illustrations/svg/Depi/index.js",
		"illustrations/svg/Depi"
	],
	"./Depi/index.js": [
		"./src/illustrations/svg/Depi/index.js",
		"illustrations/svg/Depi"
	],
	"./DesignCommunity": [
		"./src/illustrations/svg/DesignCommunity/index.js",
		"illustrations/svg/DesignCommunity"
	],
	"./DesignCommunity/": [
		"./src/illustrations/svg/DesignCommunity/index.js",
		"illustrations/svg/DesignCommunity"
	],
	"./DesignCommunity/index": [
		"./src/illustrations/svg/DesignCommunity/index.js",
		"illustrations/svg/DesignCommunity"
	],
	"./DesignCommunity/index.js": [
		"./src/illustrations/svg/DesignCommunity/index.js",
		"illustrations/svg/DesignCommunity"
	],
	"./DesignProcess": [
		"./src/illustrations/svg/DesignProcess/index.js",
		"illustrations/svg/DesignProcess"
	],
	"./DesignProcess/": [
		"./src/illustrations/svg/DesignProcess/index.js",
		"illustrations/svg/DesignProcess"
	],
	"./DesignProcess/index": [
		"./src/illustrations/svg/DesignProcess/index.js",
		"illustrations/svg/DesignProcess"
	],
	"./DesignProcess/index.js": [
		"./src/illustrations/svg/DesignProcess/index.js",
		"illustrations/svg/DesignProcess"
	],
	"./DesignTools": [
		"./src/illustrations/svg/DesignTools/index.js",
		"illustrations/svg/DesignTools"
	],
	"./DesignTools/": [
		"./src/illustrations/svg/DesignTools/index.js",
		"illustrations/svg/DesignTools"
	],
	"./DesignTools/index": [
		"./src/illustrations/svg/DesignTools/index.js",
		"illustrations/svg/DesignTools"
	],
	"./DesignTools/index.js": [
		"./src/illustrations/svg/DesignTools/index.js",
		"illustrations/svg/DesignTools"
	],
	"./Designer": [
		"./src/illustrations/svg/Designer/index.js",
		"illustrations/svg/Designer"
	],
	"./Designer/": [
		"./src/illustrations/svg/Designer/index.js",
		"illustrations/svg/Designer"
	],
	"./Designer/index": [
		"./src/illustrations/svg/Designer/index.js",
		"illustrations/svg/Designer"
	],
	"./Designer/index.js": [
		"./src/illustrations/svg/Designer/index.js",
		"illustrations/svg/Designer"
	],
	"./DesignerGirl": [
		"./src/illustrations/svg/DesignerGirl/index.js",
		"illustrations/svg/DesignerGirl"
	],
	"./DesignerGirl/": [
		"./src/illustrations/svg/DesignerGirl/index.js",
		"illustrations/svg/DesignerGirl"
	],
	"./DesignerGirl/index": [
		"./src/illustrations/svg/DesignerGirl/index.js",
		"illustrations/svg/DesignerGirl"
	],
	"./DesignerGirl/index.js": [
		"./src/illustrations/svg/DesignerGirl/index.js",
		"illustrations/svg/DesignerGirl"
	],
	"./DesignerLife": [
		"./src/illustrations/svg/DesignerLife/index.js",
		"illustrations/svg/DesignerLife"
	],
	"./DesignerLife/": [
		"./src/illustrations/svg/DesignerLife/index.js",
		"illustrations/svg/DesignerLife"
	],
	"./DesignerLife/index": [
		"./src/illustrations/svg/DesignerLife/index.js",
		"illustrations/svg/DesignerLife"
	],
	"./DesignerLife/index.js": [
		"./src/illustrations/svg/DesignerLife/index.js",
		"illustrations/svg/DesignerLife"
	],
	"./Destination": [
		"./src/illustrations/svg/Destination/index.js",
		"illustrations/svg/Destination"
	],
	"./Destination/": [
		"./src/illustrations/svg/Destination/index.js",
		"illustrations/svg/Destination"
	],
	"./Destination/index": [
		"./src/illustrations/svg/Destination/index.js",
		"illustrations/svg/Destination"
	],
	"./Destination/index.js": [
		"./src/illustrations/svg/Destination/index.js",
		"illustrations/svg/Destination"
	],
	"./Development": [
		"./src/illustrations/svg/Development/index.js",
		"illustrations/svg/Development"
	],
	"./Development/": [
		"./src/illustrations/svg/Development/index.js",
		"illustrations/svg/Development"
	],
	"./Development/index": [
		"./src/illustrations/svg/Development/index.js",
		"illustrations/svg/Development"
	],
	"./Development/index.js": [
		"./src/illustrations/svg/Development/index.js",
		"illustrations/svg/Development"
	],
	"./Devices": [
		"./src/illustrations/svg/Devices/index.js",
		"illustrations/svg/Devices"
	],
	"./Devices/": [
		"./src/illustrations/svg/Devices/index.js",
		"illustrations/svg/Devices"
	],
	"./Devices/index": [
		"./src/illustrations/svg/Devices/index.js",
		"illustrations/svg/Devices"
	],
	"./Devices/index.js": [
		"./src/illustrations/svg/Devices/index.js",
		"illustrations/svg/Devices"
	],
	"./DigitalNomad": [
		"./src/illustrations/svg/DigitalNomad/index.js",
		"illustrations/svg/DigitalNomad"
	],
	"./DigitalNomad/": [
		"./src/illustrations/svg/DigitalNomad/index.js",
		"illustrations/svg/DigitalNomad"
	],
	"./DigitalNomad/index": [
		"./src/illustrations/svg/DigitalNomad/index.js",
		"illustrations/svg/DigitalNomad"
	],
	"./DigitalNomad/index.js": [
		"./src/illustrations/svg/DigitalNomad/index.js",
		"illustrations/svg/DigitalNomad"
	],
	"./Doctor": [
		"./src/illustrations/svg/Doctor/index.js",
		"illustrations/svg/Doctor"
	],
	"./Doctor/": [
		"./src/illustrations/svg/Doctor/index.js",
		"illustrations/svg/Doctor"
	],
	"./Doctor/index": [
		"./src/illustrations/svg/Doctor/index.js",
		"illustrations/svg/Doctor"
	],
	"./Doctor/index.js": [
		"./src/illustrations/svg/Doctor/index.js",
		"illustrations/svg/Doctor"
	],
	"./Documents": [
		"./src/illustrations/svg/Documents/index.js",
		"illustrations/svg/Documents"
	],
	"./Documents/": [
		"./src/illustrations/svg/Documents/index.js",
		"illustrations/svg/Documents"
	],
	"./Documents/index": [
		"./src/illustrations/svg/Documents/index.js",
		"illustrations/svg/Documents"
	],
	"./Documents/index.js": [
		"./src/illustrations/svg/Documents/index.js",
		"illustrations/svg/Documents"
	],
	"./DroneDelivery": [
		"./src/illustrations/svg/DroneDelivery/index.js",
		"illustrations/svg/DroneDelivery"
	],
	"./DroneDelivery/": [
		"./src/illustrations/svg/DroneDelivery/index.js",
		"illustrations/svg/DroneDelivery"
	],
	"./DroneDelivery/index": [
		"./src/illustrations/svg/DroneDelivery/index.js",
		"illustrations/svg/DroneDelivery"
	],
	"./DroneDelivery/index.js": [
		"./src/illustrations/svg/DroneDelivery/index.js",
		"illustrations/svg/DroneDelivery"
	],
	"./DroneRace": [
		"./src/illustrations/svg/DroneRace/index.js",
		"illustrations/svg/DroneRace"
	],
	"./DroneRace/": [
		"./src/illustrations/svg/DroneRace/index.js",
		"illustrations/svg/DroneRace"
	],
	"./DroneRace/index": [
		"./src/illustrations/svg/DroneRace/index.js",
		"illustrations/svg/DroneRace"
	],
	"./DroneRace/index.js": [
		"./src/illustrations/svg/DroneRace/index.js",
		"illustrations/svg/DroneRace"
	],
	"./EasterEggHunt": [
		"./src/illustrations/svg/EasterEggHunt/index.js",
		"illustrations/svg/EasterEggHunt"
	],
	"./EasterEggHunt/": [
		"./src/illustrations/svg/EasterEggHunt/index.js",
		"illustrations/svg/EasterEggHunt"
	],
	"./EasterEggHunt/index": [
		"./src/illustrations/svg/EasterEggHunt/index.js",
		"illustrations/svg/EasterEggHunt"
	],
	"./EasterEggHunt/index.js": [
		"./src/illustrations/svg/EasterEggHunt/index.js",
		"illustrations/svg/EasterEggHunt"
	],
	"./EatingTogether": [
		"./src/illustrations/svg/EatingTogether/index.js",
		"illustrations/svg/EatingTogether"
	],
	"./EatingTogether/": [
		"./src/illustrations/svg/EatingTogether/index.js",
		"illustrations/svg/EatingTogether"
	],
	"./EatingTogether/index": [
		"./src/illustrations/svg/EatingTogether/index.js",
		"illustrations/svg/EatingTogether"
	],
	"./EatingTogether/index.js": [
		"./src/illustrations/svg/EatingTogether/index.js",
		"illustrations/svg/EatingTogether"
	],
	"./ElectricCar": [
		"./src/illustrations/svg/ElectricCar/index.js",
		"illustrations/svg/ElectricCar"
	],
	"./ElectricCar/": [
		"./src/illustrations/svg/ElectricCar/index.js",
		"illustrations/svg/ElectricCar"
	],
	"./ElectricCar/index": [
		"./src/illustrations/svg/ElectricCar/index.js",
		"illustrations/svg/ElectricCar"
	],
	"./ElectricCar/index.js": [
		"./src/illustrations/svg/ElectricCar/index.js",
		"illustrations/svg/ElectricCar"
	],
	"./EmailCapture": [
		"./src/illustrations/svg/EmailCapture/index.js",
		"illustrations/svg/EmailCapture"
	],
	"./EmailCapture/": [
		"./src/illustrations/svg/EmailCapture/index.js",
		"illustrations/svg/EmailCapture"
	],
	"./EmailCapture/index": [
		"./src/illustrations/svg/EmailCapture/index.js",
		"illustrations/svg/EmailCapture"
	],
	"./EmailCapture/index.js": [
		"./src/illustrations/svg/EmailCapture/index.js",
		"illustrations/svg/EmailCapture"
	],
	"./Emails": [
		"./src/illustrations/svg/Emails/index.js",
		"illustrations/svg/Emails"
	],
	"./Emails/": [
		"./src/illustrations/svg/Emails/index.js",
		"illustrations/svg/Emails"
	],
	"./Emails/index": [
		"./src/illustrations/svg/Emails/index.js",
		"illustrations/svg/Emails"
	],
	"./Emails/index.js": [
		"./src/illustrations/svg/Emails/index.js",
		"illustrations/svg/Emails"
	],
	"./Empty": [
		"./src/illustrations/svg/Empty/index.js",
		"illustrations/svg/Empty"
	],
	"./Empty/": [
		"./src/illustrations/svg/Empty/index.js",
		"illustrations/svg/Empty"
	],
	"./Empty/index": [
		"./src/illustrations/svg/Empty/index.js",
		"illustrations/svg/Empty"
	],
	"./Empty/index.js": [
		"./src/illustrations/svg/Empty/index.js",
		"illustrations/svg/Empty"
	],
	"./Envelope": [
		"./src/illustrations/svg/Envelope/index.js",
		"illustrations/svg/Envelope"
	],
	"./Envelope/": [
		"./src/illustrations/svg/Envelope/index.js",
		"illustrations/svg/Envelope"
	],
	"./Envelope/index": [
		"./src/illustrations/svg/Envelope/index.js",
		"illustrations/svg/Envelope"
	],
	"./Envelope/index.js": [
		"./src/illustrations/svg/Envelope/index.js",
		"illustrations/svg/Envelope"
	],
	"./Ether": [
		"./src/illustrations/svg/Ether/index.js",
		"illustrations/svg/Ether"
	],
	"./Ether/": [
		"./src/illustrations/svg/Ether/index.js",
		"illustrations/svg/Ether"
	],
	"./Ether/index": [
		"./src/illustrations/svg/Ether/index.js",
		"illustrations/svg/Ether"
	],
	"./Ether/index.js": [
		"./src/illustrations/svg/Ether/index.js",
		"illustrations/svg/Ether"
	],
	"./Ethereum": [
		"./src/illustrations/svg/Ethereum/index.js",
		"illustrations/svg/Ethereum"
	],
	"./Ethereum/": [
		"./src/illustrations/svg/Ethereum/index.js",
		"illustrations/svg/Ethereum"
	],
	"./Ethereum/index": [
		"./src/illustrations/svg/Ethereum/index.js",
		"illustrations/svg/Ethereum"
	],
	"./Ethereum/index.js": [
		"./src/illustrations/svg/Ethereum/index.js",
		"illustrations/svg/Ethereum"
	],
	"./Events": [
		"./src/illustrations/svg/Events/index.js",
		"illustrations/svg/Events"
	],
	"./Events/": [
		"./src/illustrations/svg/Events/index.js",
		"illustrations/svg/Events"
	],
	"./Events/index": [
		"./src/illustrations/svg/Events/index.js",
		"illustrations/svg/Events"
	],
	"./Events/index.js": [
		"./src/illustrations/svg/Events/index.js",
		"illustrations/svg/Events"
	],
	"./Everywhere": [
		"./src/illustrations/svg/Everywhere/index.js",
		"illustrations/svg/Everywhere"
	],
	"./Everywhere/": [
		"./src/illustrations/svg/Everywhere/index.js",
		"illustrations/svg/Everywhere"
	],
	"./Everywhere/index": [
		"./src/illustrations/svg/Everywhere/index.js",
		"illustrations/svg/Everywhere"
	],
	"./Everywhere/index.js": [
		"./src/illustrations/svg/Everywhere/index.js",
		"illustrations/svg/Everywhere"
	],
	"./Experts": [
		"./src/illustrations/svg/Experts/index.js",
		"illustrations/svg/Experts"
	],
	"./Experts/": [
		"./src/illustrations/svg/Experts/index.js",
		"illustrations/svg/Experts"
	],
	"./Experts/index": [
		"./src/illustrations/svg/Experts/index.js",
		"illustrations/svg/Experts"
	],
	"./Experts/index.js": [
		"./src/illustrations/svg/Experts/index.js",
		"illustrations/svg/Experts"
	],
	"./Exploring": [
		"./src/illustrations/svg/Exploring/index.js",
		"illustrations/svg/Exploring"
	],
	"./Exploring/": [
		"./src/illustrations/svg/Exploring/index.js",
		"illustrations/svg/Exploring"
	],
	"./Exploring/index": [
		"./src/illustrations/svg/Exploring/index.js",
		"illustrations/svg/Exploring"
	],
	"./Exploring/index.js": [
		"./src/illustrations/svg/Exploring/index.js",
		"illustrations/svg/Exploring"
	],
	"./FallIsComing": [
		"./src/illustrations/svg/FallIsComing/index.js",
		"illustrations/svg/FallIsComing"
	],
	"./FallIsComing/": [
		"./src/illustrations/svg/FallIsComing/index.js",
		"illustrations/svg/FallIsComing"
	],
	"./FallIsComing/index": [
		"./src/illustrations/svg/FallIsComing/index.js",
		"illustrations/svg/FallIsComing"
	],
	"./FallIsComing/index.js": [
		"./src/illustrations/svg/FallIsComing/index.js",
		"illustrations/svg/FallIsComing"
	],
	"./Fans": [
		"./src/illustrations/svg/Fans/index.js",
		"illustrations/svg/Fans"
	],
	"./Fans/": [
		"./src/illustrations/svg/Fans/index.js",
		"illustrations/svg/Fans"
	],
	"./Fans/index": [
		"./src/illustrations/svg/Fans/index.js",
		"illustrations/svg/Fans"
	],
	"./Fans/index.js": [
		"./src/illustrations/svg/Fans/index.js",
		"illustrations/svg/Fans"
	],
	"./FastLoading": [
		"./src/illustrations/svg/FastLoading/index.js",
		"illustrations/svg/FastLoading"
	],
	"./FastLoading/": [
		"./src/illustrations/svg/FastLoading/index.js",
		"illustrations/svg/FastLoading"
	],
	"./FastLoading/index": [
		"./src/illustrations/svg/FastLoading/index.js",
		"illustrations/svg/FastLoading"
	],
	"./FastLoading/index.js": [
		"./src/illustrations/svg/FastLoading/index.js",
		"illustrations/svg/FastLoading"
	],
	"./Fatherhood": [
		"./src/illustrations/svg/Fatherhood/index.js",
		"illustrations/svg/Fatherhood"
	],
	"./Fatherhood/": [
		"./src/illustrations/svg/Fatherhood/index.js",
		"illustrations/svg/Fatherhood"
	],
	"./Fatherhood/index": [
		"./src/illustrations/svg/Fatherhood/index.js",
		"illustrations/svg/Fatherhood"
	],
	"./Fatherhood/index.js": [
		"./src/illustrations/svg/Fatherhood/index.js",
		"illustrations/svg/Fatherhood"
	],
	"./FeelingBlue": [
		"./src/illustrations/svg/FeelingBlue/index.js",
		"illustrations/svg/FeelingBlue"
	],
	"./FeelingBlue/": [
		"./src/illustrations/svg/FeelingBlue/index.js",
		"illustrations/svg/FeelingBlue"
	],
	"./FeelingBlue/index": [
		"./src/illustrations/svg/FeelingBlue/index.js",
		"illustrations/svg/FeelingBlue"
	],
	"./FeelingBlue/index.js": [
		"./src/illustrations/svg/FeelingBlue/index.js",
		"illustrations/svg/FeelingBlue"
	],
	"./FileSearching": [
		"./src/illustrations/svg/FileSearching/index.js",
		"illustrations/svg/FileSearching"
	],
	"./FileSearching/": [
		"./src/illustrations/svg/FileSearching/index.js",
		"illustrations/svg/FileSearching"
	],
	"./FileSearching/index": [
		"./src/illustrations/svg/FileSearching/index.js",
		"illustrations/svg/FileSearching"
	],
	"./FileSearching/index.js": [
		"./src/illustrations/svg/FileSearching/index.js",
		"illustrations/svg/FileSearching"
	],
	"./FilingSystem": [
		"./src/illustrations/svg/FilingSystem/index.js",
		"illustrations/svg/FilingSystem"
	],
	"./FilingSystem/": [
		"./src/illustrations/svg/FilingSystem/index.js",
		"illustrations/svg/FilingSystem"
	],
	"./FilingSystem/index": [
		"./src/illustrations/svg/FilingSystem/index.js",
		"illustrations/svg/FilingSystem"
	],
	"./FilingSystem/index.js": [
		"./src/illustrations/svg/FilingSystem/index.js",
		"illustrations/svg/FilingSystem"
	],
	"./Filter": [
		"./src/illustrations/svg/Filter/index.js",
		"illustrations/svg/Filter"
	],
	"./Filter/": [
		"./src/illustrations/svg/Filter/index.js",
		"illustrations/svg/Filter"
	],
	"./Filter/index": [
		"./src/illustrations/svg/Filter/index.js",
		"illustrations/svg/Filter"
	],
	"./Filter/index.js": [
		"./src/illustrations/svg/Filter/index.js",
		"illustrations/svg/Filter"
	],
	"./Finance": [
		"./src/illustrations/svg/Finance/index.js",
		"illustrations/svg/Finance"
	],
	"./Finance/": [
		"./src/illustrations/svg/Finance/index.js",
		"illustrations/svg/Finance"
	],
	"./Finance/index": [
		"./src/illustrations/svg/Finance/index.js",
		"illustrations/svg/Finance"
	],
	"./Finance/index.js": [
		"./src/illustrations/svg/Finance/index.js",
		"illustrations/svg/Finance"
	],
	"./Firmware": [
		"./src/illustrations/svg/Firmware/index.js",
		"illustrations/svg/Firmware"
	],
	"./Firmware/": [
		"./src/illustrations/svg/Firmware/index.js",
		"illustrations/svg/Firmware"
	],
	"./Firmware/index": [
		"./src/illustrations/svg/Firmware/index.js",
		"illustrations/svg/Firmware"
	],
	"./Firmware/index.js": [
		"./src/illustrations/svg/Firmware/index.js",
		"illustrations/svg/Firmware"
	],
	"./Fishing": [
		"./src/illustrations/svg/Fishing/index.js",
		"illustrations/svg/Fishing"
	],
	"./Fishing/": [
		"./src/illustrations/svg/Fishing/index.js",
		"illustrations/svg/Fishing"
	],
	"./Fishing/index": [
		"./src/illustrations/svg/Fishing/index.js",
		"illustrations/svg/Fishing"
	],
	"./Fishing/index.js": [
		"./src/illustrations/svg/Fishing/index.js",
		"illustrations/svg/Fishing"
	],
	"./Floating": [
		"./src/illustrations/svg/Floating/index.js",
		"illustrations/svg/Floating"
	],
	"./Floating/": [
		"./src/illustrations/svg/Floating/index.js",
		"illustrations/svg/Floating"
	],
	"./Floating/index": [
		"./src/illustrations/svg/Floating/index.js",
		"illustrations/svg/Floating"
	],
	"./Floating/index.js": [
		"./src/illustrations/svg/Floating/index.js",
		"illustrations/svg/Floating"
	],
	"./Focus": [
		"./src/illustrations/svg/Focus/index.js",
		"illustrations/svg/Focus"
	],
	"./Focus/": [
		"./src/illustrations/svg/Focus/index.js",
		"illustrations/svg/Focus"
	],
	"./Focus/index": [
		"./src/illustrations/svg/Focus/index.js",
		"illustrations/svg/Focus"
	],
	"./Focus/index.js": [
		"./src/illustrations/svg/Focus/index.js",
		"illustrations/svg/Focus"
	],
	"./FollowMeDrone": [
		"./src/illustrations/svg/FollowMeDrone/index.js",
		"illustrations/svg/FollowMeDrone"
	],
	"./FollowMeDrone/": [
		"./src/illustrations/svg/FollowMeDrone/index.js",
		"illustrations/svg/FollowMeDrone"
	],
	"./FollowMeDrone/index": [
		"./src/illustrations/svg/FollowMeDrone/index.js",
		"illustrations/svg/FollowMeDrone"
	],
	"./FollowMeDrone/index.js": [
		"./src/illustrations/svg/FollowMeDrone/index.js",
		"illustrations/svg/FollowMeDrone"
	],
	"./ForSale": [
		"./src/illustrations/svg/ForSale/index.js",
		"illustrations/svg/ForSale"
	],
	"./ForSale/": [
		"./src/illustrations/svg/ForSale/index.js",
		"illustrations/svg/ForSale"
	],
	"./ForSale/index": [
		"./src/illustrations/svg/ForSale/index.js",
		"illustrations/svg/ForSale"
	],
	"./ForSale/index.js": [
		"./src/illustrations/svg/ForSale/index.js",
		"illustrations/svg/ForSale"
	],
	"./Forever": [
		"./src/illustrations/svg/Forever/index.js",
		"illustrations/svg/Forever"
	],
	"./Forever/": [
		"./src/illustrations/svg/Forever/index.js",
		"illustrations/svg/Forever"
	],
	"./Forever/index": [
		"./src/illustrations/svg/Forever/index.js",
		"illustrations/svg/Forever"
	],
	"./Forever/index.js": [
		"./src/illustrations/svg/Forever/index.js",
		"illustrations/svg/Forever"
	],
	"./ForgotPassword": [
		"./src/illustrations/svg/ForgotPassword/index.js",
		"illustrations/svg/ForgotPassword"
	],
	"./ForgotPassword/": [
		"./src/illustrations/svg/ForgotPassword/index.js",
		"illustrations/svg/ForgotPassword"
	],
	"./ForgotPassword/index": [
		"./src/illustrations/svg/ForgotPassword/index.js",
		"illustrations/svg/ForgotPassword"
	],
	"./ForgotPassword/index.js": [
		"./src/illustrations/svg/ForgotPassword/index.js",
		"illustrations/svg/ForgotPassword"
	],
	"./Freelancer": [
		"./src/illustrations/svg/Freelancer/index.js",
		"illustrations/svg/Freelancer"
	],
	"./Freelancer/": [
		"./src/illustrations/svg/Freelancer/index.js",
		"illustrations/svg/Freelancer"
	],
	"./Freelancer/index": [
		"./src/illustrations/svg/Freelancer/index.js",
		"illustrations/svg/Freelancer"
	],
	"./Freelancer/index.js": [
		"./src/illustrations/svg/Freelancer/index.js",
		"illustrations/svg/Freelancer"
	],
	"./Friendship": [
		"./src/illustrations/svg/Friendship/index.js",
		"illustrations/svg/Friendship"
	],
	"./Friendship/": [
		"./src/illustrations/svg/Friendship/index.js",
		"illustrations/svg/Friendship"
	],
	"./Friendship/index": [
		"./src/illustrations/svg/Friendship/index.js",
		"illustrations/svg/Friendship"
	],
	"./Friendship/index.js": [
		"./src/illustrations/svg/Friendship/index.js",
		"illustrations/svg/Friendship"
	],
	"./Gaming": [
		"./src/illustrations/svg/Gaming/index.js",
		"illustrations/svg/Gaming"
	],
	"./Gaming/": [
		"./src/illustrations/svg/Gaming/index.js",
		"illustrations/svg/Gaming"
	],
	"./Gaming/index": [
		"./src/illustrations/svg/Gaming/index.js",
		"illustrations/svg/Gaming"
	],
	"./Gaming/index.js": [
		"./src/illustrations/svg/Gaming/index.js",
		"illustrations/svg/Gaming"
	],
	"./Gardening": [
		"./src/illustrations/svg/Gardening/index.js",
		"illustrations/svg/Gardening"
	],
	"./Gardening/": [
		"./src/illustrations/svg/Gardening/index.js",
		"illustrations/svg/Gardening"
	],
	"./Gardening/index": [
		"./src/illustrations/svg/Gardening/index.js",
		"illustrations/svg/Gardening"
	],
	"./Gardening/index.js": [
		"./src/illustrations/svg/Gardening/index.js",
		"illustrations/svg/Gardening"
	],
	"./Gdpr": [
		"./src/illustrations/svg/Gdpr/index.js",
		"illustrations/svg/Gdpr"
	],
	"./Gdpr/": [
		"./src/illustrations/svg/Gdpr/index.js",
		"illustrations/svg/Gdpr"
	],
	"./Gdpr/index": [
		"./src/illustrations/svg/Gdpr/index.js",
		"illustrations/svg/Gdpr"
	],
	"./Gdpr/index.js": [
		"./src/illustrations/svg/Gdpr/index.js",
		"illustrations/svg/Gdpr"
	],
	"./GettingCoffee": [
		"./src/illustrations/svg/GettingCoffee/index.js",
		"illustrations/svg/GettingCoffee"
	],
	"./GettingCoffee/": [
		"./src/illustrations/svg/GettingCoffee/index.js",
		"illustrations/svg/GettingCoffee"
	],
	"./GettingCoffee/index": [
		"./src/illustrations/svg/GettingCoffee/index.js",
		"illustrations/svg/GettingCoffee"
	],
	"./GettingCoffee/index.js": [
		"./src/illustrations/svg/GettingCoffee/index.js",
		"illustrations/svg/GettingCoffee"
	],
	"./Gift": [
		"./src/illustrations/svg/Gift/index.js",
		"illustrations/svg/Gift"
	],
	"./Gift/": [
		"./src/illustrations/svg/Gift/index.js",
		"illustrations/svg/Gift"
	],
	"./Gift/index": [
		"./src/illustrations/svg/Gift/index.js",
		"illustrations/svg/Gift"
	],
	"./Gift/index.js": [
		"./src/illustrations/svg/Gift/index.js",
		"illustrations/svg/Gift"
	],
	"./GirlsJustWannaHaveFun": [
		"./src/illustrations/svg/GirlsJustWannaHaveFun/index.js",
		"illustrations/svg/GirlsJustWannaHaveFun"
	],
	"./GirlsJustWannaHaveFun/": [
		"./src/illustrations/svg/GirlsJustWannaHaveFun/index.js",
		"illustrations/svg/GirlsJustWannaHaveFun"
	],
	"./GirlsJustWannaHaveFun/index": [
		"./src/illustrations/svg/GirlsJustWannaHaveFun/index.js",
		"illustrations/svg/GirlsJustWannaHaveFun"
	],
	"./GirlsJustWannaHaveFun/index.js": [
		"./src/illustrations/svg/GirlsJustWannaHaveFun/index.js",
		"illustrations/svg/GirlsJustWannaHaveFun"
	],
	"./Goal": [
		"./src/illustrations/svg/Goal/index.js",
		"illustrations/svg/Goal"
	],
	"./Goal/": [
		"./src/illustrations/svg/Goal/index.js",
		"illustrations/svg/Goal"
	],
	"./Goal/index": [
		"./src/illustrations/svg/Goal/index.js",
		"illustrations/svg/Goal"
	],
	"./Goal/index.js": [
		"./src/illustrations/svg/Goal/index.js",
		"illustrations/svg/Goal"
	],
	"./GoldenGateBridge": [
		"./src/illustrations/svg/GoldenGateBridge/index.js",
		"illustrations/svg/GoldenGateBridge"
	],
	"./GoldenGateBridge/": [
		"./src/illustrations/svg/GoldenGateBridge/index.js",
		"illustrations/svg/GoldenGateBridge"
	],
	"./GoldenGateBridge/index": [
		"./src/illustrations/svg/GoldenGateBridge/index.js",
		"illustrations/svg/GoldenGateBridge"
	],
	"./GoldenGateBridge/index.js": [
		"./src/illustrations/svg/GoldenGateBridge/index.js",
		"illustrations/svg/GoldenGateBridge"
	],
	"./GoodDoggy": [
		"./src/illustrations/svg/GoodDoggy/index.js",
		"illustrations/svg/GoodDoggy"
	],
	"./GoodDoggy/": [
		"./src/illustrations/svg/GoodDoggy/index.js",
		"illustrations/svg/GoodDoggy"
	],
	"./GoodDoggy/index": [
		"./src/illustrations/svg/GoodDoggy/index.js",
		"illustrations/svg/GoodDoggy"
	],
	"./GoodDoggy/index.js": [
		"./src/illustrations/svg/GoodDoggy/index.js",
		"illustrations/svg/GoodDoggy"
	],
	"./Grades": [
		"./src/illustrations/svg/Grades/index.js",
		"illustrations/svg/Grades"
	],
	"./Grades/": [
		"./src/illustrations/svg/Grades/index.js",
		"illustrations/svg/Grades"
	],
	"./Grades/index": [
		"./src/illustrations/svg/Grades/index.js",
		"illustrations/svg/Grades"
	],
	"./Grades/index.js": [
		"./src/illustrations/svg/Grades/index.js",
		"illustrations/svg/Grades"
	],
	"./Graduation": [
		"./src/illustrations/svg/Graduation/index.js",
		"illustrations/svg/Graduation"
	],
	"./Graduation/": [
		"./src/illustrations/svg/Graduation/index.js",
		"illustrations/svg/Graduation"
	],
	"./Graduation/index": [
		"./src/illustrations/svg/Graduation/index.js",
		"illustrations/svg/Graduation"
	],
	"./Graduation/index.js": [
		"./src/illustrations/svg/Graduation/index.js",
		"illustrations/svg/Graduation"
	],
	"./GrandSlam": [
		"./src/illustrations/svg/GrandSlam/index.js",
		"illustrations/svg/GrandSlam"
	],
	"./GrandSlam/": [
		"./src/illustrations/svg/GrandSlam/index.js",
		"illustrations/svg/GrandSlam"
	],
	"./GrandSlam/index": [
		"./src/illustrations/svg/GrandSlam/index.js",
		"illustrations/svg/GrandSlam"
	],
	"./GrandSlam/index.js": [
		"./src/illustrations/svg/GrandSlam/index.js",
		"illustrations/svg/GrandSlam"
	],
	"./GroupSelfie": [
		"./src/illustrations/svg/GroupSelfie/index.js",
		"illustrations/svg/GroupSelfie"
	],
	"./GroupSelfie/": [
		"./src/illustrations/svg/GroupSelfie/index.js",
		"illustrations/svg/GroupSelfie"
	],
	"./GroupSelfie/index": [
		"./src/illustrations/svg/GroupSelfie/index.js",
		"illustrations/svg/GroupSelfie"
	],
	"./GroupSelfie/index.js": [
		"./src/illustrations/svg/GroupSelfie/index.js",
		"illustrations/svg/GroupSelfie"
	],
	"./Growing": [
		"./src/illustrations/svg/Growing/index.js",
		"illustrations/svg/Growing"
	],
	"./Growing/": [
		"./src/illustrations/svg/Growing/index.js",
		"illustrations/svg/Growing"
	],
	"./Growing/index": [
		"./src/illustrations/svg/Growing/index.js",
		"illustrations/svg/Growing"
	],
	"./Growing/index.js": [
		"./src/illustrations/svg/Growing/index.js",
		"illustrations/svg/Growing"
	],
	"./HangOut": [
		"./src/illustrations/svg/HangOut/index.js",
		"illustrations/svg/HangOut"
	],
	"./HangOut/": [
		"./src/illustrations/svg/HangOut/index.js",
		"illustrations/svg/HangOut"
	],
	"./HangOut/index": [
		"./src/illustrations/svg/HangOut/index.js",
		"illustrations/svg/HangOut"
	],
	"./HangOut/index.js": [
		"./src/illustrations/svg/HangOut/index.js",
		"illustrations/svg/HangOut"
	],
	"./HappyBirthday": [
		"./src/illustrations/svg/HappyBirthday/index.js",
		"illustrations/svg/HappyBirthday"
	],
	"./HappyBirthday/": [
		"./src/illustrations/svg/HappyBirthday/index.js",
		"illustrations/svg/HappyBirthday"
	],
	"./HappyBirthday/index": [
		"./src/illustrations/svg/HappyBirthday/index.js",
		"illustrations/svg/HappyBirthday"
	],
	"./HappyBirthday/index.js": [
		"./src/illustrations/svg/HappyBirthday/index.js",
		"illustrations/svg/HappyBirthday"
	],
	"./HealthyHabit": [
		"./src/illustrations/svg/HealthyHabit/index.js",
		"illustrations/svg/HealthyHabit"
	],
	"./HealthyHabit/": [
		"./src/illustrations/svg/HealthyHabit/index.js",
		"illustrations/svg/HealthyHabit"
	],
	"./HealthyHabit/index": [
		"./src/illustrations/svg/HealthyHabit/index.js",
		"illustrations/svg/HealthyHabit"
	],
	"./HealthyHabit/index.js": [
		"./src/illustrations/svg/HealthyHabit/index.js",
		"illustrations/svg/HealthyHabit"
	],
	"./Hello": [
		"./src/illustrations/svg/Hello/index.js",
		"illustrations/svg/Hello"
	],
	"./Hello/": [
		"./src/illustrations/svg/Hello/index.js",
		"illustrations/svg/Hello"
	],
	"./Hello/index": [
		"./src/illustrations/svg/Hello/index.js",
		"illustrations/svg/Hello"
	],
	"./Hello/index.js": [
		"./src/illustrations/svg/Hello/index.js",
		"illustrations/svg/Hello"
	],
	"./HighFive": [
		"./src/illustrations/svg/HighFive/index.js",
		"illustrations/svg/HighFive"
	],
	"./HighFive/": [
		"./src/illustrations/svg/HighFive/index.js",
		"illustrations/svg/HighFive"
	],
	"./HighFive/index": [
		"./src/illustrations/svg/HighFive/index.js",
		"illustrations/svg/HighFive"
	],
	"./HighFive/index.js": [
		"./src/illustrations/svg/HighFive/index.js",
		"illustrations/svg/HighFive"
	],
	"./Hiring": [
		"./src/illustrations/svg/Hiring/index.js",
		"illustrations/svg/Hiring"
	],
	"./Hiring/": [
		"./src/illustrations/svg/Hiring/index.js",
		"illustrations/svg/Hiring"
	],
	"./Hiring/index": [
		"./src/illustrations/svg/Hiring/index.js",
		"illustrations/svg/Hiring"
	],
	"./Hiring/index.js": [
		"./src/illustrations/svg/Hiring/index.js",
		"illustrations/svg/Hiring"
	],
	"./HomeRun": [
		"./src/illustrations/svg/HomeRun/index.js",
		"illustrations/svg/HomeRun"
	],
	"./HomeRun/": [
		"./src/illustrations/svg/HomeRun/index.js",
		"illustrations/svg/HomeRun"
	],
	"./HomeRun/index": [
		"./src/illustrations/svg/HomeRun/index.js",
		"illustrations/svg/HomeRun"
	],
	"./HomeRun/index.js": [
		"./src/illustrations/svg/HomeRun/index.js",
		"illustrations/svg/HomeRun"
	],
	"./HouseSearching": [
		"./src/illustrations/svg/HouseSearching/index.js",
		"illustrations/svg/HouseSearching"
	],
	"./HouseSearching/": [
		"./src/illustrations/svg/HouseSearching/index.js",
		"illustrations/svg/HouseSearching"
	],
	"./HouseSearching/index": [
		"./src/illustrations/svg/HouseSearching/index.js",
		"illustrations/svg/HouseSearching"
	],
	"./HouseSearching/index.js": [
		"./src/illustrations/svg/HouseSearching/index.js",
		"illustrations/svg/HouseSearching"
	],
	"./Houses": [
		"./src/illustrations/svg/Houses/index.js",
		"illustrations/svg/Houses"
	],
	"./Houses/": [
		"./src/illustrations/svg/Houses/index.js",
		"illustrations/svg/Houses"
	],
	"./Houses/index": [
		"./src/illustrations/svg/Houses/index.js",
		"illustrations/svg/Houses"
	],
	"./Houses/index.js": [
		"./src/illustrations/svg/Houses/index.js",
		"illustrations/svg/Houses"
	],
	"./ImageFolder": [
		"./src/illustrations/svg/ImageFolder/index.js",
		"illustrations/svg/ImageFolder"
	],
	"./ImageFolder/": [
		"./src/illustrations/svg/ImageFolder/index.js",
		"illustrations/svg/ImageFolder"
	],
	"./ImageFolder/index": [
		"./src/illustrations/svg/ImageFolder/index.js",
		"illustrations/svg/ImageFolder"
	],
	"./ImageFolder/index.js": [
		"./src/illustrations/svg/ImageFolder/index.js",
		"illustrations/svg/ImageFolder"
	],
	"./ImageUpload": [
		"./src/illustrations/svg/ImageUpload/index.js",
		"illustrations/svg/ImageUpload"
	],
	"./ImageUpload/": [
		"./src/illustrations/svg/ImageUpload/index.js",
		"illustrations/svg/ImageUpload"
	],
	"./ImageUpload/index": [
		"./src/illustrations/svg/ImageUpload/index.js",
		"illustrations/svg/ImageUpload"
	],
	"./ImageUpload/index.js": [
		"./src/illustrations/svg/ImageUpload/index.js",
		"illustrations/svg/ImageUpload"
	],
	"./Images": [
		"./src/illustrations/svg/Images/index.js",
		"illustrations/svg/Images"
	],
	"./Images/": [
		"./src/illustrations/svg/Images/index.js",
		"illustrations/svg/Images"
	],
	"./Images/index": [
		"./src/illustrations/svg/Images/index.js",
		"illustrations/svg/Images"
	],
	"./Images/index.js": [
		"./src/illustrations/svg/Images/index.js",
		"illustrations/svg/Images"
	],
	"./InLove": [
		"./src/illustrations/svg/InLove/index.js",
		"illustrations/svg/InLove"
	],
	"./InLove/": [
		"./src/illustrations/svg/InLove/index.js",
		"illustrations/svg/InLove"
	],
	"./InLove/index": [
		"./src/illustrations/svg/InLove/index.js",
		"illustrations/svg/InLove"
	],
	"./InLove/index.js": [
		"./src/illustrations/svg/InLove/index.js",
		"illustrations/svg/InLove"
	],
	"./InSync": [
		"./src/illustrations/svg/InSync/index.js",
		"illustrations/svg/InSync"
	],
	"./InSync/": [
		"./src/illustrations/svg/InSync/index.js",
		"illustrations/svg/InSync"
	],
	"./InSync/index": [
		"./src/illustrations/svg/InSync/index.js",
		"illustrations/svg/InSync"
	],
	"./InSync/index.js": [
		"./src/illustrations/svg/InSync/index.js",
		"illustrations/svg/InSync"
	],
	"./InTheOffice": [
		"./src/illustrations/svg/InTheOffice/index.js",
		"illustrations/svg/InTheOffice"
	],
	"./InTheOffice/": [
		"./src/illustrations/svg/InTheOffice/index.js",
		"illustrations/svg/InTheOffice"
	],
	"./InTheOffice/index": [
		"./src/illustrations/svg/InTheOffice/index.js",
		"illustrations/svg/InTheOffice"
	],
	"./InTheOffice/index.js": [
		"./src/illustrations/svg/InTheOffice/index.js",
		"illustrations/svg/InTheOffice"
	],
	"./InThePool": [
		"./src/illustrations/svg/InThePool/index.js",
		"illustrations/svg/InThePool"
	],
	"./InThePool/": [
		"./src/illustrations/svg/InThePool/index.js",
		"illustrations/svg/InThePool"
	],
	"./InThePool/index": [
		"./src/illustrations/svg/InThePool/index.js",
		"illustrations/svg/InThePool"
	],
	"./InThePool/index.js": [
		"./src/illustrations/svg/InThePool/index.js",
		"illustrations/svg/InThePool"
	],
	"./InboxCleanup": [
		"./src/illustrations/svg/InboxCleanup/index.js",
		"illustrations/svg/InboxCleanup"
	],
	"./InboxCleanup/": [
		"./src/illustrations/svg/InboxCleanup/index.js",
		"illustrations/svg/InboxCleanup"
	],
	"./InboxCleanup/index": [
		"./src/illustrations/svg/InboxCleanup/index.js",
		"illustrations/svg/InboxCleanup"
	],
	"./InboxCleanup/index.js": [
		"./src/illustrations/svg/InboxCleanup/index.js",
		"illustrations/svg/InboxCleanup"
	],
	"./Influencer": [
		"./src/illustrations/svg/Influencer/index.js",
		"illustrations/svg/Influencer"
	],
	"./Influencer/": [
		"./src/illustrations/svg/Influencer/index.js",
		"illustrations/svg/Influencer"
	],
	"./Influencer/index": [
		"./src/illustrations/svg/Influencer/index.js",
		"illustrations/svg/Influencer"
	],
	"./Influencer/index.js": [
		"./src/illustrations/svg/Influencer/index.js",
		"illustrations/svg/Influencer"
	],
	"./InstantSupport": [
		"./src/illustrations/svg/InstantSupport/index.js",
		"illustrations/svg/InstantSupport"
	],
	"./InstantSupport/": [
		"./src/illustrations/svg/InstantSupport/index.js",
		"illustrations/svg/InstantSupport"
	],
	"./InstantSupport/index": [
		"./src/illustrations/svg/InstantSupport/index.js",
		"illustrations/svg/InstantSupport"
	],
	"./InstantSupport/index.js": [
		"./src/illustrations/svg/InstantSupport/index.js",
		"illustrations/svg/InstantSupport"
	],
	"./InternetOnTheGo": [
		"./src/illustrations/svg/InternetOnTheGo/index.js",
		"illustrations/svg/InternetOnTheGo"
	],
	"./InternetOnTheGo/": [
		"./src/illustrations/svg/InternetOnTheGo/index.js",
		"illustrations/svg/InternetOnTheGo"
	],
	"./InternetOnTheGo/index": [
		"./src/illustrations/svg/InternetOnTheGo/index.js",
		"illustrations/svg/InternetOnTheGo"
	],
	"./InternetOnTheGo/index.js": [
		"./src/illustrations/svg/InternetOnTheGo/index.js",
		"illustrations/svg/InternetOnTheGo"
	],
	"./Invite": [
		"./src/illustrations/svg/Invite/index.js",
		"illustrations/svg/Invite"
	],
	"./Invite/": [
		"./src/illustrations/svg/Invite/index.js",
		"illustrations/svg/Invite"
	],
	"./Invite/index": [
		"./src/illustrations/svg/Invite/index.js",
		"illustrations/svg/Invite"
	],
	"./Invite/index.js": [
		"./src/illustrations/svg/Invite/index.js",
		"illustrations/svg/Invite"
	],
	"./JavascriptFrameworks": [
		"./src/illustrations/svg/JavascriptFrameworks/index.js",
		"illustrations/svg/JavascriptFrameworks"
	],
	"./JavascriptFrameworks/": [
		"./src/illustrations/svg/JavascriptFrameworks/index.js",
		"illustrations/svg/JavascriptFrameworks"
	],
	"./JavascriptFrameworks/index": [
		"./src/illustrations/svg/JavascriptFrameworks/index.js",
		"illustrations/svg/JavascriptFrameworks"
	],
	"./JavascriptFrameworks/index.js": [
		"./src/illustrations/svg/JavascriptFrameworks/index.js",
		"illustrations/svg/JavascriptFrameworks"
	],
	"./JobHunt": [
		"./src/illustrations/svg/JobHunt/index.js",
		"illustrations/svg/JobHunt"
	],
	"./JobHunt/": [
		"./src/illustrations/svg/JobHunt/index.js",
		"illustrations/svg/JobHunt"
	],
	"./JobHunt/index": [
		"./src/illustrations/svg/JobHunt/index.js",
		"illustrations/svg/JobHunt"
	],
	"./JobHunt/index.js": [
		"./src/illustrations/svg/JobHunt/index.js",
		"illustrations/svg/JobHunt"
	],
	"./Jogging": [
		"./src/illustrations/svg/Jogging/index.js",
		"illustrations/svg/Jogging"
	],
	"./Jogging/": [
		"./src/illustrations/svg/Jogging/index.js",
		"illustrations/svg/Jogging"
	],
	"./Jogging/index": [
		"./src/illustrations/svg/Jogging/index.js",
		"illustrations/svg/Jogging"
	],
	"./Jogging/index.js": [
		"./src/illustrations/svg/Jogging/index.js",
		"illustrations/svg/Jogging"
	],
	"./Lighthouse": [
		"./src/illustrations/svg/Lighthouse/index.js",
		"illustrations/svg/Lighthouse"
	],
	"./Lighthouse/": [
		"./src/illustrations/svg/Lighthouse/index.js",
		"illustrations/svg/Lighthouse"
	],
	"./Lighthouse/index": [
		"./src/illustrations/svg/Lighthouse/index.js",
		"illustrations/svg/Lighthouse"
	],
	"./Lighthouse/index.js": [
		"./src/illustrations/svg/Lighthouse/index.js",
		"illustrations/svg/Lighthouse"
	],
	"./LiveCollaboration": [
		"./src/illustrations/svg/LiveCollaboration/index.js",
		"illustrations/svg/LiveCollaboration"
	],
	"./LiveCollaboration/": [
		"./src/illustrations/svg/LiveCollaboration/index.js",
		"illustrations/svg/LiveCollaboration"
	],
	"./LiveCollaboration/index": [
		"./src/illustrations/svg/LiveCollaboration/index.js",
		"illustrations/svg/LiveCollaboration"
	],
	"./LiveCollaboration/index.js": [
		"./src/illustrations/svg/LiveCollaboration/index.js",
		"illustrations/svg/LiveCollaboration"
	],
	"./Loading": [
		"./src/illustrations/svg/Loading/index.js",
		"illustrations/svg/Loading"
	],
	"./Loading/": [
		"./src/illustrations/svg/Loading/index.js",
		"illustrations/svg/Loading"
	],
	"./Loading/index": [
		"./src/illustrations/svg/Loading/index.js",
		"illustrations/svg/Loading"
	],
	"./Loading/index.js": [
		"./src/illustrations/svg/Loading/index.js",
		"illustrations/svg/Loading"
	],
	"./Login": [
		"./src/illustrations/svg/Login/index.js",
		"illustrations/svg/Login"
	],
	"./Login/": [
		"./src/illustrations/svg/Login/index.js",
		"illustrations/svg/Login"
	],
	"./Login/index": [
		"./src/illustrations/svg/Login/index.js",
		"illustrations/svg/Login"
	],
	"./Login/index.js": [
		"./src/illustrations/svg/Login/index.js",
		"illustrations/svg/Login"
	],
	"./Lost": [
		"./src/illustrations/svg/Lost/index.js",
		"illustrations/svg/Lost"
	],
	"./Lost/": [
		"./src/illustrations/svg/Lost/index.js",
		"illustrations/svg/Lost"
	],
	"./Lost/index": [
		"./src/illustrations/svg/Lost/index.js",
		"illustrations/svg/Lost"
	],
	"./Lost/index.js": [
		"./src/illustrations/svg/Lost/index.js",
		"illustrations/svg/Lost"
	],
	"./LoveIsInTheAir": [
		"./src/illustrations/svg/LoveIsInTheAir/index.js",
		"illustrations/svg/LoveIsInTheAir"
	],
	"./LoveIsInTheAir/": [
		"./src/illustrations/svg/LoveIsInTheAir/index.js",
		"illustrations/svg/LoveIsInTheAir"
	],
	"./LoveIsInTheAir/index": [
		"./src/illustrations/svg/LoveIsInTheAir/index.js",
		"illustrations/svg/LoveIsInTheAir"
	],
	"./LoveIsInTheAir/index.js": [
		"./src/illustrations/svg/LoveIsInTheAir/index.js",
		"illustrations/svg/LoveIsInTheAir"
	],
	"./Mail": [
		"./src/illustrations/svg/Mail/index.js",
		"illustrations/svg/Mail"
	],
	"./Mail/": [
		"./src/illustrations/svg/Mail/index.js",
		"illustrations/svg/Mail"
	],
	"./Mail/index": [
		"./src/illustrations/svg/Mail/index.js",
		"illustrations/svg/Mail"
	],
	"./Mail/index.js": [
		"./src/illustrations/svg/Mail/index.js",
		"illustrations/svg/Mail"
	],
	"./MailSent": [
		"./src/illustrations/svg/MailSent/index.js",
		"illustrations/svg/MailSent"
	],
	"./MailSent/": [
		"./src/illustrations/svg/MailSent/index.js",
		"illustrations/svg/MailSent"
	],
	"./MailSent/index": [
		"./src/illustrations/svg/MailSent/index.js",
		"illustrations/svg/MailSent"
	],
	"./MailSent/index.js": [
		"./src/illustrations/svg/MailSent/index.js",
		"illustrations/svg/MailSent"
	],
	"./Mailbox": [
		"./src/illustrations/svg/Mailbox/index.js",
		"illustrations/svg/Mailbox"
	],
	"./Mailbox/": [
		"./src/illustrations/svg/Mailbox/index.js",
		"illustrations/svg/Mailbox"
	],
	"./Mailbox/index": [
		"./src/illustrations/svg/Mailbox/index.js",
		"illustrations/svg/Mailbox"
	],
	"./Mailbox/index.js": [
		"./src/illustrations/svg/Mailbox/index.js",
		"illustrations/svg/Mailbox"
	],
	"./Maintenance": [
		"./src/illustrations/svg/Maintenance/index.js",
		"illustrations/svg/Maintenance"
	],
	"./Maintenance/": [
		"./src/illustrations/svg/Maintenance/index.js",
		"illustrations/svg/Maintenance"
	],
	"./Maintenance/index": [
		"./src/illustrations/svg/Maintenance/index.js",
		"illustrations/svg/Maintenance"
	],
	"./Maintenance/index.js": [
		"./src/illustrations/svg/Maintenance/index.js",
		"illustrations/svg/Maintenance"
	],
	"./MakeItRain": [
		"./src/illustrations/svg/MakeItRain/index.js",
		"illustrations/svg/MakeItRain"
	],
	"./MakeItRain/": [
		"./src/illustrations/svg/MakeItRain/index.js",
		"illustrations/svg/MakeItRain"
	],
	"./MakeItRain/index": [
		"./src/illustrations/svg/MakeItRain/index.js",
		"illustrations/svg/MakeItRain"
	],
	"./MakeItRain/index.js": [
		"./src/illustrations/svg/MakeItRain/index.js",
		"illustrations/svg/MakeItRain"
	],
	"./MakeupArtist": [
		"./src/illustrations/svg/MakeupArtist/index.js",
		"illustrations/svg/MakeupArtist"
	],
	"./MakeupArtist/": [
		"./src/illustrations/svg/MakeupArtist/index.js",
		"illustrations/svg/MakeupArtist"
	],
	"./MakeupArtist/index": [
		"./src/illustrations/svg/MakeupArtist/index.js",
		"illustrations/svg/MakeupArtist"
	],
	"./MakeupArtist/index.js": [
		"./src/illustrations/svg/MakeupArtist/index.js",
		"illustrations/svg/MakeupArtist"
	],
	"./MapDark": [
		"./src/illustrations/svg/MapDark/index.js",
		"illustrations/svg/MapDark"
	],
	"./MapDark/": [
		"./src/illustrations/svg/MapDark/index.js",
		"illustrations/svg/MapDark"
	],
	"./MapDark/index": [
		"./src/illustrations/svg/MapDark/index.js",
		"illustrations/svg/MapDark"
	],
	"./MapDark/index.js": [
		"./src/illustrations/svg/MapDark/index.js",
		"illustrations/svg/MapDark"
	],
	"./MapLight": [
		"./src/illustrations/svg/MapLight/index.js",
		"illustrations/svg/MapLight"
	],
	"./MapLight/": [
		"./src/illustrations/svg/MapLight/index.js",
		"illustrations/svg/MapLight"
	],
	"./MapLight/index": [
		"./src/illustrations/svg/MapLight/index.js",
		"illustrations/svg/MapLight"
	],
	"./MapLight/index.js": [
		"./src/illustrations/svg/MapLight/index.js",
		"illustrations/svg/MapLight"
	],
	"./Marilyn": [
		"./src/illustrations/svg/Marilyn/index.js",
		"illustrations/svg/Marilyn"
	],
	"./Marilyn/": [
		"./src/illustrations/svg/Marilyn/index.js",
		"illustrations/svg/Marilyn"
	],
	"./Marilyn/index": [
		"./src/illustrations/svg/Marilyn/index.js",
		"illustrations/svg/Marilyn"
	],
	"./Marilyn/index.js": [
		"./src/illustrations/svg/Marilyn/index.js",
		"illustrations/svg/Marilyn"
	],
	"./MayTheForce": [
		"./src/illustrations/svg/MayTheForce/index.js",
		"illustrations/svg/MayTheForce"
	],
	"./MayTheForce/": [
		"./src/illustrations/svg/MayTheForce/index.js",
		"illustrations/svg/MayTheForce"
	],
	"./MayTheForce/index": [
		"./src/illustrations/svg/MayTheForce/index.js",
		"illustrations/svg/MayTheForce"
	],
	"./MayTheForce/index.js": [
		"./src/illustrations/svg/MayTheForce/index.js",
		"illustrations/svg/MayTheForce"
	],
	"./Meditation": [
		"./src/illustrations/svg/Meditation/index.js",
		"illustrations/svg/Meditation"
	],
	"./Meditation/": [
		"./src/illustrations/svg/Meditation/index.js",
		"illustrations/svg/Meditation"
	],
	"./Meditation/index": [
		"./src/illustrations/svg/Meditation/index.js",
		"illustrations/svg/Meditation"
	],
	"./Meditation/index.js": [
		"./src/illustrations/svg/Meditation/index.js",
		"illustrations/svg/Meditation"
	],
	"./Meeting": [
		"./src/illustrations/svg/Meeting/index.js",
		"illustrations/svg/Meeting"
	],
	"./Meeting/": [
		"./src/illustrations/svg/Meeting/index.js",
		"illustrations/svg/Meeting"
	],
	"./Meeting/index": [
		"./src/illustrations/svg/Meeting/index.js",
		"illustrations/svg/Meeting"
	],
	"./Meeting/index.js": [
		"./src/illustrations/svg/Meeting/index.js",
		"illustrations/svg/Meeting"
	],
	"./Messages": [
		"./src/illustrations/svg/Messages/index.js",
		"illustrations/svg/Messages"
	],
	"./Messages/": [
		"./src/illustrations/svg/Messages/index.js",
		"illustrations/svg/Messages"
	],
	"./Messages/index": [
		"./src/illustrations/svg/Messages/index.js",
		"illustrations/svg/Messages"
	],
	"./Messages/index.js": [
		"./src/illustrations/svg/Messages/index.js",
		"illustrations/svg/Messages"
	],
	"./Messaging": [
		"./src/illustrations/svg/Messaging/index.js",
		"illustrations/svg/Messaging"
	],
	"./Messaging/": [
		"./src/illustrations/svg/Messaging/index.js",
		"illustrations/svg/Messaging"
	],
	"./Messaging/index": [
		"./src/illustrations/svg/Messaging/index.js",
		"illustrations/svg/Messaging"
	],
	"./Messaging/index.js": [
		"./src/illustrations/svg/Messaging/index.js",
		"illustrations/svg/Messaging"
	],
	"./Messenger": [
		"./src/illustrations/svg/Messenger/index.js",
		"illustrations/svg/Messenger"
	],
	"./Messenger/": [
		"./src/illustrations/svg/Messenger/index.js",
		"illustrations/svg/Messenger"
	],
	"./Messenger/index": [
		"./src/illustrations/svg/Messenger/index.js",
		"illustrations/svg/Messenger"
	],
	"./Messenger/index.js": [
		"./src/illustrations/svg/Messenger/index.js",
		"illustrations/svg/Messenger"
	],
	"./Mindfulness": [
		"./src/illustrations/svg/Mindfulness/index.js",
		"illustrations/svg/Mindfulness"
	],
	"./Mindfulness/": [
		"./src/illustrations/svg/Mindfulness/index.js",
		"illustrations/svg/Mindfulness"
	],
	"./Mindfulness/index": [
		"./src/illustrations/svg/Mindfulness/index.js",
		"illustrations/svg/Mindfulness"
	],
	"./Mindfulness/index.js": [
		"./src/illustrations/svg/Mindfulness/index.js",
		"illustrations/svg/Mindfulness"
	],
	"./MissionImpossible": [
		"./src/illustrations/svg/MissionImpossible/index.js",
		"illustrations/svg/MissionImpossible"
	],
	"./MissionImpossible/": [
		"./src/illustrations/svg/MissionImpossible/index.js",
		"illustrations/svg/MissionImpossible"
	],
	"./MissionImpossible/index": [
		"./src/illustrations/svg/MissionImpossible/index.js",
		"illustrations/svg/MissionImpossible"
	],
	"./MissionImpossible/index.js": [
		"./src/illustrations/svg/MissionImpossible/index.js",
		"illustrations/svg/MissionImpossible"
	],
	"./Mobile": [
		"./src/illustrations/svg/Mobile/index.js",
		"illustrations/svg/Mobile"
	],
	"./Mobile/": [
		"./src/illustrations/svg/Mobile/index.js",
		"illustrations/svg/Mobile"
	],
	"./Mobile/index": [
		"./src/illustrations/svg/Mobile/index.js",
		"illustrations/svg/Mobile"
	],
	"./Mobile/index.js": [
		"./src/illustrations/svg/Mobile/index.js",
		"illustrations/svg/Mobile"
	],
	"./MobileApps": [
		"./src/illustrations/svg/MobileApps/index.js",
		"illustrations/svg/MobileApps"
	],
	"./MobileApps/": [
		"./src/illustrations/svg/MobileApps/index.js",
		"illustrations/svg/MobileApps"
	],
	"./MobileApps/index": [
		"./src/illustrations/svg/MobileApps/index.js",
		"illustrations/svg/MobileApps"
	],
	"./MobileApps/index.js": [
		"./src/illustrations/svg/MobileApps/index.js",
		"illustrations/svg/MobileApps"
	],
	"./MobileBrowsers": [
		"./src/illustrations/svg/MobileBrowsers/index.js",
		"illustrations/svg/MobileBrowsers"
	],
	"./MobileBrowsers/": [
		"./src/illustrations/svg/MobileBrowsers/index.js",
		"illustrations/svg/MobileBrowsers"
	],
	"./MobileBrowsers/index": [
		"./src/illustrations/svg/MobileBrowsers/index.js",
		"illustrations/svg/MobileBrowsers"
	],
	"./MobileBrowsers/index.js": [
		"./src/illustrations/svg/MobileBrowsers/index.js",
		"illustrations/svg/MobileBrowsers"
	],
	"./MobilePayments": [
		"./src/illustrations/svg/MobilePayments/index.js",
		"illustrations/svg/MobilePayments"
	],
	"./MobilePayments/": [
		"./src/illustrations/svg/MobilePayments/index.js",
		"illustrations/svg/MobilePayments"
	],
	"./MobilePayments/index": [
		"./src/illustrations/svg/MobilePayments/index.js",
		"illustrations/svg/MobilePayments"
	],
	"./MobilePayments/index.js": [
		"./src/illustrations/svg/MobilePayments/index.js",
		"illustrations/svg/MobilePayments"
	],
	"./ModernWoman": [
		"./src/illustrations/svg/ModernWoman/index.js",
		"illustrations/svg/ModernWoman"
	],
	"./ModernWoman/": [
		"./src/illustrations/svg/ModernWoman/index.js",
		"illustrations/svg/ModernWoman"
	],
	"./ModernWoman/index": [
		"./src/illustrations/svg/ModernWoman/index.js",
		"illustrations/svg/ModernWoman"
	],
	"./ModernWoman/index.js": [
		"./src/illustrations/svg/ModernWoman/index.js",
		"illustrations/svg/ModernWoman"
	],
	"./MomentToRemember": [
		"./src/illustrations/svg/MomentToRemember/index.js",
		"illustrations/svg/MomentToRemember"
	],
	"./MomentToRemember/": [
		"./src/illustrations/svg/MomentToRemember/index.js",
		"illustrations/svg/MomentToRemember"
	],
	"./MomentToRemember/index": [
		"./src/illustrations/svg/MomentToRemember/index.js",
		"illustrations/svg/MomentToRemember"
	],
	"./MomentToRemember/index.js": [
		"./src/illustrations/svg/MomentToRemember/index.js",
		"illustrations/svg/MomentToRemember"
	],
	"./MoreMusic": [
		"./src/illustrations/svg/MoreMusic/index.js",
		"illustrations/svg/MoreMusic"
	],
	"./MoreMusic/": [
		"./src/illustrations/svg/MoreMusic/index.js",
		"illustrations/svg/MoreMusic"
	],
	"./MoreMusic/index": [
		"./src/illustrations/svg/MoreMusic/index.js",
		"illustrations/svg/MoreMusic"
	],
	"./MoreMusic/index.js": [
		"./src/illustrations/svg/MoreMusic/index.js",
		"illustrations/svg/MoreMusic"
	],
	"./MorningEssentials": [
		"./src/illustrations/svg/MorningEssentials/index.js",
		"illustrations/svg/MorningEssentials"
	],
	"./MorningEssentials/": [
		"./src/illustrations/svg/MorningEssentials/index.js",
		"illustrations/svg/MorningEssentials"
	],
	"./MorningEssentials/index": [
		"./src/illustrations/svg/MorningEssentials/index.js",
		"illustrations/svg/MorningEssentials"
	],
	"./MorningEssentials/index.js": [
		"./src/illustrations/svg/MorningEssentials/index.js",
		"illustrations/svg/MorningEssentials"
	],
	"./Motherhood": [
		"./src/illustrations/svg/Motherhood/index.js",
		"illustrations/svg/Motherhood"
	],
	"./Motherhood/": [
		"./src/illustrations/svg/Motherhood/index.js",
		"illustrations/svg/Motherhood"
	],
	"./Motherhood/index": [
		"./src/illustrations/svg/Motherhood/index.js",
		"illustrations/svg/Motherhood"
	],
	"./Motherhood/index.js": [
		"./src/illustrations/svg/Motherhood/index.js",
		"illustrations/svg/Motherhood"
	],
	"./MovieNight": [
		"./src/illustrations/svg/MovieNight/index.js",
		"illustrations/svg/MovieNight"
	],
	"./MovieNight/": [
		"./src/illustrations/svg/MovieNight/index.js",
		"illustrations/svg/MovieNight"
	],
	"./MovieNight/index": [
		"./src/illustrations/svg/MovieNight/index.js",
		"illustrations/svg/MovieNight"
	],
	"./MovieNight/index.js": [
		"./src/illustrations/svg/MovieNight/index.js",
		"illustrations/svg/MovieNight"
	],
	"./Music": [
		"./src/illustrations/svg/Music/index.js",
		"illustrations/svg/Music"
	],
	"./Music/": [
		"./src/illustrations/svg/Music/index.js",
		"illustrations/svg/Music"
	],
	"./Music/index": [
		"./src/illustrations/svg/Music/index.js",
		"illustrations/svg/Music"
	],
	"./Music/index.js": [
		"./src/illustrations/svg/Music/index.js",
		"illustrations/svg/Music"
	],
	"./Navigation": [
		"./src/illustrations/svg/Navigation/index.js",
		"illustrations/svg/Navigation"
	],
	"./Navigation/": [
		"./src/illustrations/svg/Navigation/index.js",
		"illustrations/svg/Navigation"
	],
	"./Navigation/index": [
		"./src/illustrations/svg/Navigation/index.js",
		"illustrations/svg/Navigation"
	],
	"./Navigation/index.js": [
		"./src/illustrations/svg/Navigation/index.js",
		"illustrations/svg/Navigation"
	],
	"./Nerd": [
		"./src/illustrations/svg/Nerd/index.js",
		"illustrations/svg/Nerd"
	],
	"./Nerd/": [
		"./src/illustrations/svg/Nerd/index.js",
		"illustrations/svg/Nerd"
	],
	"./Nerd/index": [
		"./src/illustrations/svg/Nerd/index.js",
		"illustrations/svg/Nerd"
	],
	"./Nerd/index.js": [
		"./src/illustrations/svg/Nerd/index.js",
		"illustrations/svg/Nerd"
	],
	"./NewMessage": [
		"./src/illustrations/svg/NewMessage/index.js",
		"illustrations/svg/NewMessage"
	],
	"./NewMessage/": [
		"./src/illustrations/svg/NewMessage/index.js",
		"illustrations/svg/NewMessage"
	],
	"./NewMessage/index": [
		"./src/illustrations/svg/NewMessage/index.js",
		"illustrations/svg/NewMessage"
	],
	"./NewMessage/index.js": [
		"./src/illustrations/svg/NewMessage/index.js",
		"illustrations/svg/NewMessage"
	],
	"./News": [
		"./src/illustrations/svg/News/index.js",
		"illustrations/svg/News"
	],
	"./News/": [
		"./src/illustrations/svg/News/index.js",
		"illustrations/svg/News"
	],
	"./News/index": [
		"./src/illustrations/svg/News/index.js",
		"illustrations/svg/News"
	],
	"./News/index.js": [
		"./src/illustrations/svg/News/index.js",
		"illustrations/svg/News"
	],
	"./Newsletter": [
		"./src/illustrations/svg/Newsletter/index.js",
		"illustrations/svg/Newsletter"
	],
	"./Newsletter/": [
		"./src/illustrations/svg/Newsletter/index.js",
		"illustrations/svg/Newsletter"
	],
	"./Newsletter/index": [
		"./src/illustrations/svg/Newsletter/index.js",
		"illustrations/svg/Newsletter"
	],
	"./Newsletter/index.js": [
		"./src/illustrations/svg/Newsletter/index.js",
		"illustrations/svg/Newsletter"
	],
	"./NoData": [
		"./src/illustrations/svg/NoData/index.js",
		"illustrations/svg/NoData"
	],
	"./NoData/": [
		"./src/illustrations/svg/NoData/index.js",
		"illustrations/svg/NoData"
	],
	"./NoData/index": [
		"./src/illustrations/svg/NoData/index.js",
		"illustrations/svg/NoData"
	],
	"./NoData/index.js": [
		"./src/illustrations/svg/NoData/index.js",
		"illustrations/svg/NoData"
	],
	"./Notebook": [
		"./src/illustrations/svg/Notebook/index.js",
		"illustrations/svg/Notebook"
	],
	"./Notebook/": [
		"./src/illustrations/svg/Notebook/index.js",
		"illustrations/svg/Notebook"
	],
	"./Notebook/index": [
		"./src/illustrations/svg/Notebook/index.js",
		"illustrations/svg/Notebook"
	],
	"./Notebook/index.js": [
		"./src/illustrations/svg/Notebook/index.js",
		"illustrations/svg/Notebook"
	],
	"./Notes": [
		"./src/illustrations/svg/Notes/index.js",
		"illustrations/svg/Notes"
	],
	"./Notes/": [
		"./src/illustrations/svg/Notes/index.js",
		"illustrations/svg/Notes"
	],
	"./Notes/index": [
		"./src/illustrations/svg/Notes/index.js",
		"illustrations/svg/Notes"
	],
	"./Notes/index.js": [
		"./src/illustrations/svg/Notes/index.js",
		"illustrations/svg/Notes"
	],
	"./OffRoad": [
		"./src/illustrations/svg/OffRoad/index.js",
		"illustrations/svg/OffRoad"
	],
	"./OffRoad/": [
		"./src/illustrations/svg/OffRoad/index.js",
		"illustrations/svg/OffRoad"
	],
	"./OffRoad/index": [
		"./src/illustrations/svg/OffRoad/index.js",
		"illustrations/svg/OffRoad"
	],
	"./OffRoad/index.js": [
		"./src/illustrations/svg/OffRoad/index.js",
		"illustrations/svg/OffRoad"
	],
	"./OldDay": [
		"./src/illustrations/svg/OldDay/index.js",
		"illustrations/svg/OldDay"
	],
	"./OldDay/": [
		"./src/illustrations/svg/OldDay/index.js",
		"illustrations/svg/OldDay"
	],
	"./OldDay/index": [
		"./src/illustrations/svg/OldDay/index.js",
		"illustrations/svg/OldDay"
	],
	"./OldDay/index.js": [
		"./src/illustrations/svg/OldDay/index.js",
		"illustrations/svg/OldDay"
	],
	"./OnTheOffice": [
		"./src/illustrations/svg/OnTheOffice/index.js",
		"illustrations/svg/OnTheOffice"
	],
	"./OnTheOffice/": [
		"./src/illustrations/svg/OnTheOffice/index.js",
		"illustrations/svg/OnTheOffice"
	],
	"./OnTheOffice/index": [
		"./src/illustrations/svg/OnTheOffice/index.js",
		"illustrations/svg/OnTheOffice"
	],
	"./OnTheOffice/index.js": [
		"./src/illustrations/svg/OnTheOffice/index.js",
		"illustrations/svg/OnTheOffice"
	],
	"./OnTheWay": [
		"./src/illustrations/svg/OnTheWay/index.js",
		"illustrations/svg/OnTheWay"
	],
	"./OnTheWay/": [
		"./src/illustrations/svg/OnTheWay/index.js",
		"illustrations/svg/OnTheWay"
	],
	"./OnTheWay/index": [
		"./src/illustrations/svg/OnTheWay/index.js",
		"illustrations/svg/OnTheWay"
	],
	"./OnTheWay/index.js": [
		"./src/illustrations/svg/OnTheWay/index.js",
		"illustrations/svg/OnTheWay"
	],
	"./Onboarding": [
		"./src/illustrations/svg/Onboarding/index.js",
		"illustrations/svg/Onboarding"
	],
	"./Onboarding/": [
		"./src/illustrations/svg/Onboarding/index.js",
		"illustrations/svg/Onboarding"
	],
	"./Onboarding/index": [
		"./src/illustrations/svg/Onboarding/index.js",
		"illustrations/svg/Onboarding"
	],
	"./Onboarding/index.js": [
		"./src/illustrations/svg/Onboarding/index.js",
		"illustrations/svg/Onboarding"
	],
	"./Online": [
		"./src/illustrations/svg/Online/index.js",
		"illustrations/svg/Online"
	],
	"./Online/": [
		"./src/illustrations/svg/Online/index.js",
		"illustrations/svg/Online"
	],
	"./Online/index": [
		"./src/illustrations/svg/Online/index.js",
		"illustrations/svg/Online"
	],
	"./Online/index.js": [
		"./src/illustrations/svg/Online/index.js",
		"illustrations/svg/Online"
	],
	"./OnlineShopping": [
		"./src/illustrations/svg/OnlineShopping/index.js",
		"illustrations/svg/OnlineShopping"
	],
	"./OnlineShopping/": [
		"./src/illustrations/svg/OnlineShopping/index.js",
		"illustrations/svg/OnlineShopping"
	],
	"./OnlineShopping/index": [
		"./src/illustrations/svg/OnlineShopping/index.js",
		"illustrations/svg/OnlineShopping"
	],
	"./OnlineShopping/index.js": [
		"./src/illustrations/svg/OnlineShopping/index.js",
		"illustrations/svg/OnlineShopping"
	],
	"./OnlineWorld": [
		"./src/illustrations/svg/OnlineWorld/index.js",
		"illustrations/svg/OnlineWorld"
	],
	"./OnlineWorld/": [
		"./src/illustrations/svg/OnlineWorld/index.js",
		"illustrations/svg/OnlineWorld"
	],
	"./OnlineWorld/index": [
		"./src/illustrations/svg/OnlineWorld/index.js",
		"illustrations/svg/OnlineWorld"
	],
	"./OnlineWorld/index.js": [
		"./src/illustrations/svg/OnlineWorld/index.js",
		"illustrations/svg/OnlineWorld"
	],
	"./Opened": [
		"./src/illustrations/svg/Opened/index.js",
		"illustrations/svg/Opened"
	],
	"./Opened/": [
		"./src/illustrations/svg/Opened/index.js",
		"illustrations/svg/Opened"
	],
	"./Opened/index": [
		"./src/illustrations/svg/Opened/index.js",
		"illustrations/svg/Opened"
	],
	"./Opened/index.js": [
		"./src/illustrations/svg/Opened/index.js",
		"illustrations/svg/Opened"
	],
	"./OrderConfirmed": [
		"./src/illustrations/svg/OrderConfirmed/index.js",
		"illustrations/svg/OrderConfirmed"
	],
	"./OrderConfirmed/": [
		"./src/illustrations/svg/OrderConfirmed/index.js",
		"illustrations/svg/OrderConfirmed"
	],
	"./OrderConfirmed/index": [
		"./src/illustrations/svg/OrderConfirmed/index.js",
		"illustrations/svg/OrderConfirmed"
	],
	"./OrderConfirmed/index.js": [
		"./src/illustrations/svg/OrderConfirmed/index.js",
		"illustrations/svg/OrderConfirmed"
	],
	"./OrdinaryDay": [
		"./src/illustrations/svg/OrdinaryDay/index.js",
		"illustrations/svg/OrdinaryDay"
	],
	"./OrdinaryDay/": [
		"./src/illustrations/svg/OrdinaryDay/index.js",
		"illustrations/svg/OrdinaryDay"
	],
	"./OrdinaryDay/index": [
		"./src/illustrations/svg/OrdinaryDay/index.js",
		"illustrations/svg/OrdinaryDay"
	],
	"./OrdinaryDay/index.js": [
		"./src/illustrations/svg/OrdinaryDay/index.js",
		"illustrations/svg/OrdinaryDay"
	],
	"./OrganizePhotos": [
		"./src/illustrations/svg/OrganizePhotos/index.js",
		"illustrations/svg/OrganizePhotos"
	],
	"./OrganizePhotos/": [
		"./src/illustrations/svg/OrganizePhotos/index.js",
		"illustrations/svg/OrganizePhotos"
	],
	"./OrganizePhotos/index": [
		"./src/illustrations/svg/OrganizePhotos/index.js",
		"illustrations/svg/OrganizePhotos"
	],
	"./OrganizePhotos/index.js": [
		"./src/illustrations/svg/OrganizePhotos/index.js",
		"illustrations/svg/OrganizePhotos"
	],
	"./OrganizeResume": [
		"./src/illustrations/svg/OrganizeResume/index.js",
		"illustrations/svg/OrganizeResume"
	],
	"./OrganizeResume/": [
		"./src/illustrations/svg/OrganizeResume/index.js",
		"illustrations/svg/OrganizeResume"
	],
	"./OrganizeResume/index": [
		"./src/illustrations/svg/OrganizeResume/index.js",
		"illustrations/svg/OrganizeResume"
	],
	"./OrganizeResume/index.js": [
		"./src/illustrations/svg/OrganizeResume/index.js",
		"illustrations/svg/OrganizeResume"
	],
	"./OrganizingProjects": [
		"./src/illustrations/svg/OrganizingProjects/index.js",
		"illustrations/svg/OrganizingProjects"
	],
	"./OrganizingProjects/": [
		"./src/illustrations/svg/OrganizingProjects/index.js",
		"illustrations/svg/OrganizingProjects"
	],
	"./OrganizingProjects/index": [
		"./src/illustrations/svg/OrganizingProjects/index.js",
		"illustrations/svg/OrganizingProjects"
	],
	"./OrganizingProjects/index.js": [
		"./src/illustrations/svg/OrganizingProjects/index.js",
		"illustrations/svg/OrganizingProjects"
	],
	"./OuterSpace": [
		"./src/illustrations/svg/OuterSpace/index.js",
		"illustrations/svg/OuterSpace"
	],
	"./OuterSpace/": [
		"./src/illustrations/svg/OuterSpace/index.js",
		"illustrations/svg/OuterSpace"
	],
	"./OuterSpace/index": [
		"./src/illustrations/svg/OuterSpace/index.js",
		"illustrations/svg/OuterSpace"
	],
	"./OuterSpace/index.js": [
		"./src/illustrations/svg/OuterSpace/index.js",
		"illustrations/svg/OuterSpace"
	],
	"./PassingBy": [
		"./src/illustrations/svg/PassingBy/index.js",
		"illustrations/svg/PassingBy"
	],
	"./PassingBy/": [
		"./src/illustrations/svg/PassingBy/index.js",
		"illustrations/svg/PassingBy"
	],
	"./PassingBy/index": [
		"./src/illustrations/svg/PassingBy/index.js",
		"illustrations/svg/PassingBy"
	],
	"./PassingBy/index.js": [
		"./src/illustrations/svg/PassingBy/index.js",
		"illustrations/svg/PassingBy"
	],
	"./PedestrianCrossing": [
		"./src/illustrations/svg/PedestrianCrossing/index.js",
		"illustrations/svg/PedestrianCrossing"
	],
	"./PedestrianCrossing/": [
		"./src/illustrations/svg/PedestrianCrossing/index.js",
		"illustrations/svg/PedestrianCrossing"
	],
	"./PedestrianCrossing/index": [
		"./src/illustrations/svg/PedestrianCrossing/index.js",
		"illustrations/svg/PedestrianCrossing"
	],
	"./PedestrianCrossing/index.js": [
		"./src/illustrations/svg/PedestrianCrossing/index.js",
		"illustrations/svg/PedestrianCrossing"
	],
	"./PenTool": [
		"./src/illustrations/svg/PenTool/index.js",
		"illustrations/svg/PenTool"
	],
	"./PenTool/": [
		"./src/illustrations/svg/PenTool/index.js",
		"illustrations/svg/PenTool"
	],
	"./PenTool/index": [
		"./src/illustrations/svg/PenTool/index.js",
		"illustrations/svg/PenTool"
	],
	"./PenTool/index.js": [
		"./src/illustrations/svg/PenTool/index.js",
		"illustrations/svg/PenTool"
	],
	"./PeopleSearch": [
		"./src/illustrations/svg/PeopleSearch/index.js",
		"illustrations/svg/PeopleSearch"
	],
	"./PeopleSearch/": [
		"./src/illustrations/svg/PeopleSearch/index.js",
		"illustrations/svg/PeopleSearch"
	],
	"./PeopleSearch/index": [
		"./src/illustrations/svg/PeopleSearch/index.js",
		"illustrations/svg/PeopleSearch"
	],
	"./PeopleSearch/index.js": [
		"./src/illustrations/svg/PeopleSearch/index.js",
		"illustrations/svg/PeopleSearch"
	],
	"./Personalization": [
		"./src/illustrations/svg/Personalization/index.js",
		"illustrations/svg/Personalization"
	],
	"./Personalization/": [
		"./src/illustrations/svg/Personalization/index.js",
		"illustrations/svg/Personalization"
	],
	"./Personalization/index": [
		"./src/illustrations/svg/Personalization/index.js",
		"illustrations/svg/Personalization"
	],
	"./Personalization/index.js": [
		"./src/illustrations/svg/Personalization/index.js",
		"illustrations/svg/Personalization"
	],
	"./Photo": [
		"./src/illustrations/svg/Photo/index.js",
		"illustrations/svg/Photo"
	],
	"./Photo/": [
		"./src/illustrations/svg/Photo/index.js",
		"illustrations/svg/Photo"
	],
	"./Photo/index": [
		"./src/illustrations/svg/Photo/index.js",
		"illustrations/svg/Photo"
	],
	"./Photo/index.js": [
		"./src/illustrations/svg/Photo/index.js",
		"illustrations/svg/Photo"
	],
	"./PhotoSharing": [
		"./src/illustrations/svg/PhotoSharing/index.js",
		"illustrations/svg/PhotoSharing"
	],
	"./PhotoSharing/": [
		"./src/illustrations/svg/PhotoSharing/index.js",
		"illustrations/svg/PhotoSharing"
	],
	"./PhotoSharing/index": [
		"./src/illustrations/svg/PhotoSharing/index.js",
		"illustrations/svg/PhotoSharing"
	],
	"./PhotoSharing/index.js": [
		"./src/illustrations/svg/PhotoSharing/index.js",
		"illustrations/svg/PhotoSharing"
	],
	"./Photocopy": [
		"./src/illustrations/svg/Photocopy/index.js",
		"illustrations/svg/Photocopy"
	],
	"./Photocopy/": [
		"./src/illustrations/svg/Photocopy/index.js",
		"illustrations/svg/Photocopy"
	],
	"./Photocopy/index": [
		"./src/illustrations/svg/Photocopy/index.js",
		"illustrations/svg/Photocopy"
	],
	"./Photocopy/index.js": [
		"./src/illustrations/svg/Photocopy/index.js",
		"illustrations/svg/Photocopy"
	],
	"./Photos": [
		"./src/illustrations/svg/Photos/index.js",
		"illustrations/svg/Photos"
	],
	"./Photos/": [
		"./src/illustrations/svg/Photos/index.js",
		"illustrations/svg/Photos"
	],
	"./Photos/index": [
		"./src/illustrations/svg/Photos/index.js",
		"illustrations/svg/Photos"
	],
	"./Photos/index.js": [
		"./src/illustrations/svg/Photos/index.js",
		"illustrations/svg/Photos"
	],
	"./PieChart": [
		"./src/illustrations/svg/PieChart/index.js",
		"illustrations/svg/PieChart"
	],
	"./PieChart/": [
		"./src/illustrations/svg/PieChart/index.js",
		"illustrations/svg/PieChart"
	],
	"./PieChart/index": [
		"./src/illustrations/svg/PieChart/index.js",
		"illustrations/svg/PieChart"
	],
	"./PieChart/index.js": [
		"./src/illustrations/svg/PieChart/index.js",
		"illustrations/svg/PieChart"
	],
	"./Pilates": [
		"./src/illustrations/svg/Pilates/index.js",
		"illustrations/svg/Pilates"
	],
	"./Pilates/": [
		"./src/illustrations/svg/Pilates/index.js",
		"illustrations/svg/Pilates"
	],
	"./Pilates/index": [
		"./src/illustrations/svg/Pilates/index.js",
		"illustrations/svg/Pilates"
	],
	"./Pilates/index.js": [
		"./src/illustrations/svg/Pilates/index.js",
		"illustrations/svg/Pilates"
	],
	"./PlainCreditCard": [
		"./src/illustrations/svg/PlainCreditCard/index.js",
		"illustrations/svg/PlainCreditCard"
	],
	"./PlainCreditCard/": [
		"./src/illustrations/svg/PlainCreditCard/index.js",
		"illustrations/svg/PlainCreditCard"
	],
	"./PlainCreditCard/index": [
		"./src/illustrations/svg/PlainCreditCard/index.js",
		"illustrations/svg/PlainCreditCard"
	],
	"./PlainCreditCard/index.js": [
		"./src/illustrations/svg/PlainCreditCard/index.js",
		"illustrations/svg/PlainCreditCard"
	],
	"./PlayfulCat": [
		"./src/illustrations/svg/PlayfulCat/index.js",
		"illustrations/svg/PlayfulCat"
	],
	"./PlayfulCat/": [
		"./src/illustrations/svg/PlayfulCat/index.js",
		"illustrations/svg/PlayfulCat"
	],
	"./PlayfulCat/index": [
		"./src/illustrations/svg/PlayfulCat/index.js",
		"illustrations/svg/PlayfulCat"
	],
	"./PlayfulCat/index.js": [
		"./src/illustrations/svg/PlayfulCat/index.js",
		"illustrations/svg/PlayfulCat"
	],
	"./Podcast": [
		"./src/illustrations/svg/Podcast/index.js",
		"illustrations/svg/Podcast"
	],
	"./Podcast/": [
		"./src/illustrations/svg/Podcast/index.js",
		"illustrations/svg/Podcast"
	],
	"./Podcast/index": [
		"./src/illustrations/svg/Podcast/index.js",
		"illustrations/svg/Podcast"
	],
	"./Podcast/index.js": [
		"./src/illustrations/svg/Podcast/index.js",
		"illustrations/svg/Podcast"
	],
	"./Portfolio": [
		"./src/illustrations/svg/Portfolio/index.js",
		"illustrations/svg/Portfolio"
	],
	"./Portfolio/": [
		"./src/illustrations/svg/Portfolio/index.js",
		"illustrations/svg/Portfolio"
	],
	"./Portfolio/index": [
		"./src/illustrations/svg/Portfolio/index.js",
		"illustrations/svg/Portfolio"
	],
	"./Portfolio/index.js": [
		"./src/illustrations/svg/Portfolio/index.js",
		"illustrations/svg/Portfolio"
	],
	"./Post": [
		"./src/illustrations/svg/Post/index.js",
		"illustrations/svg/Post"
	],
	"./Post/": [
		"./src/illustrations/svg/Post/index.js",
		"illustrations/svg/Post"
	],
	"./Post/index": [
		"./src/illustrations/svg/Post/index.js",
		"illustrations/svg/Post"
	],
	"./Post/index.js": [
		"./src/illustrations/svg/Post/index.js",
		"illustrations/svg/Post"
	],
	"./Posts": [
		"./src/illustrations/svg/Posts/index.js",
		"illustrations/svg/Posts"
	],
	"./Posts/": [
		"./src/illustrations/svg/Posts/index.js",
		"illustrations/svg/Posts"
	],
	"./Posts/index": [
		"./src/illustrations/svg/Posts/index.js",
		"illustrations/svg/Posts"
	],
	"./Posts/index.js": [
		"./src/illustrations/svg/Posts/index.js",
		"illustrations/svg/Posts"
	],
	"./Powerful": [
		"./src/illustrations/svg/Powerful/index.js",
		"illustrations/svg/Powerful"
	],
	"./Powerful/": [
		"./src/illustrations/svg/Powerful/index.js",
		"illustrations/svg/Powerful"
	],
	"./Powerful/index": [
		"./src/illustrations/svg/Powerful/index.js",
		"illustrations/svg/Powerful"
	],
	"./Powerful/index.js": [
		"./src/illustrations/svg/Powerful/index.js",
		"illustrations/svg/Powerful"
	],
	"./Preferences": [
		"./src/illustrations/svg/Preferences/index.js",
		"illustrations/svg/Preferences"
	],
	"./Preferences/": [
		"./src/illustrations/svg/Preferences/index.js",
		"illustrations/svg/Preferences"
	],
	"./Preferences/index": [
		"./src/illustrations/svg/Preferences/index.js",
		"illustrations/svg/Preferences"
	],
	"./Preferences/index.js": [
		"./src/illustrations/svg/Preferences/index.js",
		"illustrations/svg/Preferences"
	],
	"./Presentation": [
		"./src/illustrations/svg/Presentation/index.js",
		"illustrations/svg/Presentation"
	],
	"./Presentation/": [
		"./src/illustrations/svg/Presentation/index.js",
		"illustrations/svg/Presentation"
	],
	"./Presentation/index": [
		"./src/illustrations/svg/Presentation/index.js",
		"illustrations/svg/Presentation"
	],
	"./Presentation/index.js": [
		"./src/illustrations/svg/Presentation/index.js",
		"illustrations/svg/Presentation"
	],
	"./PressPlay": [
		"./src/illustrations/svg/PressPlay/index.js",
		"illustrations/svg/PressPlay"
	],
	"./PressPlay/": [
		"./src/illustrations/svg/PressPlay/index.js",
		"illustrations/svg/PressPlay"
	],
	"./PressPlay/index": [
		"./src/illustrations/svg/PressPlay/index.js",
		"illustrations/svg/PressPlay"
	],
	"./PressPlay/index.js": [
		"./src/illustrations/svg/PressPlay/index.js",
		"illustrations/svg/PressPlay"
	],
	"./Processing": [
		"./src/illustrations/svg/Processing/index.js",
		"illustrations/svg/Processing"
	],
	"./Processing/": [
		"./src/illustrations/svg/Processing/index.js",
		"illustrations/svg/Processing"
	],
	"./Processing/index": [
		"./src/illustrations/svg/Processing/index.js",
		"illustrations/svg/Processing"
	],
	"./Processing/index.js": [
		"./src/illustrations/svg/Processing/index.js",
		"illustrations/svg/Processing"
	],
	"./ProductHunt": [
		"./src/illustrations/svg/ProductHunt/index.js",
		"illustrations/svg/ProductHunt"
	],
	"./ProductHunt/": [
		"./src/illustrations/svg/ProductHunt/index.js",
		"illustrations/svg/ProductHunt"
	],
	"./ProductHunt/index": [
		"./src/illustrations/svg/ProductHunt/index.js",
		"illustrations/svg/ProductHunt"
	],
	"./ProductHunt/index.js": [
		"./src/illustrations/svg/ProductHunt/index.js",
		"illustrations/svg/ProductHunt"
	],
	"./ProductTeardown": [
		"./src/illustrations/svg/ProductTeardown/index.js",
		"illustrations/svg/ProductTeardown"
	],
	"./ProductTeardown/": [
		"./src/illustrations/svg/ProductTeardown/index.js",
		"illustrations/svg/ProductTeardown"
	],
	"./ProductTeardown/index": [
		"./src/illustrations/svg/ProductTeardown/index.js",
		"illustrations/svg/ProductTeardown"
	],
	"./ProductTeardown/index.js": [
		"./src/illustrations/svg/ProductTeardown/index.js",
		"illustrations/svg/ProductTeardown"
	],
	"./ProductTour": [
		"./src/illustrations/svg/ProductTour/index.js",
		"illustrations/svg/ProductTour"
	],
	"./ProductTour/": [
		"./src/illustrations/svg/ProductTour/index.js",
		"illustrations/svg/ProductTour"
	],
	"./ProductTour/index": [
		"./src/illustrations/svg/ProductTour/index.js",
		"illustrations/svg/ProductTour"
	],
	"./ProductTour/index.js": [
		"./src/illustrations/svg/ProductTour/index.js",
		"illustrations/svg/ProductTour"
	],
	"./ProfilePic": [
		"./src/illustrations/svg/ProfilePic/index.js",
		"illustrations/svg/ProfilePic"
	],
	"./ProfilePic/": [
		"./src/illustrations/svg/ProfilePic/index.js",
		"illustrations/svg/ProfilePic"
	],
	"./ProfilePic/index": [
		"./src/illustrations/svg/ProfilePic/index.js",
		"illustrations/svg/ProfilePic"
	],
	"./ProfilePic/index.js": [
		"./src/illustrations/svg/ProfilePic/index.js",
		"illustrations/svg/ProfilePic"
	],
	"./Programming": [
		"./src/illustrations/svg/Programming/index.js",
		"illustrations/svg/Programming"
	],
	"./Programming/": [
		"./src/illustrations/svg/Programming/index.js",
		"illustrations/svg/Programming"
	],
	"./Programming/index": [
		"./src/illustrations/svg/Programming/index.js",
		"illustrations/svg/Programming"
	],
	"./Programming/index.js": [
		"./src/illustrations/svg/Programming/index.js",
		"illustrations/svg/Programming"
	],
	"./QaEngineers": [
		"./src/illustrations/svg/QaEngineers/index.js",
		"illustrations/svg/QaEngineers"
	],
	"./QaEngineers/": [
		"./src/illustrations/svg/QaEngineers/index.js",
		"illustrations/svg/QaEngineers"
	],
	"./QaEngineers/index": [
		"./src/illustrations/svg/QaEngineers/index.js",
		"illustrations/svg/QaEngineers"
	],
	"./QaEngineers/index.js": [
		"./src/illustrations/svg/QaEngineers/index.js",
		"illustrations/svg/QaEngineers"
	],
	"./Queue": [
		"./src/illustrations/svg/Queue/index.js",
		"illustrations/svg/Queue"
	],
	"./Queue/": [
		"./src/illustrations/svg/Queue/index.js",
		"illustrations/svg/Queue"
	],
	"./Queue/index": [
		"./src/illustrations/svg/Queue/index.js",
		"illustrations/svg/Queue"
	],
	"./Queue/index.js": [
		"./src/illustrations/svg/Queue/index.js",
		"illustrations/svg/Queue"
	],
	"./ReadingList": [
		"./src/illustrations/svg/ReadingList/index.js",
		"illustrations/svg/ReadingList"
	],
	"./ReadingList/": [
		"./src/illustrations/svg/ReadingList/index.js",
		"illustrations/svg/ReadingList"
	],
	"./ReadingList/index": [
		"./src/illustrations/svg/ReadingList/index.js",
		"illustrations/svg/ReadingList"
	],
	"./ReadingList/index.js": [
		"./src/illustrations/svg/ReadingList/index.js",
		"illustrations/svg/ReadingList"
	],
	"./RealTimeSync": [
		"./src/illustrations/svg/RealTimeSync/index.js",
		"illustrations/svg/RealTimeSync"
	],
	"./RealTimeSync/": [
		"./src/illustrations/svg/RealTimeSync/index.js",
		"illustrations/svg/RealTimeSync"
	],
	"./RealTimeSync/index": [
		"./src/illustrations/svg/RealTimeSync/index.js",
		"illustrations/svg/RealTimeSync"
	],
	"./RealTimeSync/index.js": [
		"./src/illustrations/svg/RealTimeSync/index.js",
		"illustrations/svg/RealTimeSync"
	],
	"./Refreshing": [
		"./src/illustrations/svg/Refreshing/index.js",
		"illustrations/svg/Refreshing"
	],
	"./Refreshing/": [
		"./src/illustrations/svg/Refreshing/index.js",
		"illustrations/svg/Refreshing"
	],
	"./Refreshing/index": [
		"./src/illustrations/svg/Refreshing/index.js",
		"illustrations/svg/Refreshing"
	],
	"./Refreshing/index.js": [
		"./src/illustrations/svg/Refreshing/index.js",
		"illustrations/svg/Refreshing"
	],
	"./Relaxation": [
		"./src/illustrations/svg/Relaxation/index.js",
		"illustrations/svg/Relaxation"
	],
	"./Relaxation/": [
		"./src/illustrations/svg/Relaxation/index.js",
		"illustrations/svg/Relaxation"
	],
	"./Relaxation/index": [
		"./src/illustrations/svg/Relaxation/index.js",
		"illustrations/svg/Relaxation"
	],
	"./Relaxation/index.js": [
		"./src/illustrations/svg/Relaxation/index.js",
		"illustrations/svg/Relaxation"
	],
	"./RelaxingAtHome": [
		"./src/illustrations/svg/RelaxingAtHome/index.js",
		"illustrations/svg/RelaxingAtHome"
	],
	"./RelaxingAtHome/": [
		"./src/illustrations/svg/RelaxingAtHome/index.js",
		"illustrations/svg/RelaxingAtHome"
	],
	"./RelaxingAtHome/index": [
		"./src/illustrations/svg/RelaxingAtHome/index.js",
		"illustrations/svg/RelaxingAtHome"
	],
	"./RelaxingAtHome/index.js": [
		"./src/illustrations/svg/RelaxingAtHome/index.js",
		"illustrations/svg/RelaxingAtHome"
	],
	"./Report": [
		"./src/illustrations/svg/Report/index.js",
		"illustrations/svg/Report"
	],
	"./Report/": [
		"./src/illustrations/svg/Report/index.js",
		"illustrations/svg/Report"
	],
	"./Report/index": [
		"./src/illustrations/svg/Report/index.js",
		"illustrations/svg/Report"
	],
	"./Report/index.js": [
		"./src/illustrations/svg/Report/index.js",
		"illustrations/svg/Report"
	],
	"./Responsive": [
		"./src/illustrations/svg/Responsive/index.js",
		"illustrations/svg/Responsive"
	],
	"./Responsive/": [
		"./src/illustrations/svg/Responsive/index.js",
		"illustrations/svg/Responsive"
	],
	"./Responsive/index": [
		"./src/illustrations/svg/Responsive/index.js",
		"illustrations/svg/Responsive"
	],
	"./Responsive/index.js": [
		"./src/illustrations/svg/Responsive/index.js",
		"illustrations/svg/Responsive"
	],
	"./Resume": [
		"./src/illustrations/svg/Resume/index.js",
		"illustrations/svg/Resume"
	],
	"./Resume/": [
		"./src/illustrations/svg/Resume/index.js",
		"illustrations/svg/Resume"
	],
	"./Resume/index": [
		"./src/illustrations/svg/Resume/index.js",
		"illustrations/svg/Resume"
	],
	"./Resume/index.js": [
		"./src/illustrations/svg/Resume/index.js",
		"illustrations/svg/Resume"
	],
	"./ResumeFolder": [
		"./src/illustrations/svg/ResumeFolder/index.js",
		"illustrations/svg/ResumeFolder"
	],
	"./ResumeFolder/": [
		"./src/illustrations/svg/ResumeFolder/index.js",
		"illustrations/svg/ResumeFolder"
	],
	"./ResumeFolder/index": [
		"./src/illustrations/svg/ResumeFolder/index.js",
		"illustrations/svg/ResumeFolder"
	],
	"./ResumeFolder/index.js": [
		"./src/illustrations/svg/ResumeFolder/index.js",
		"illustrations/svg/ResumeFolder"
	],
	"./RideABicycle": [
		"./src/illustrations/svg/RideABicycle/index.js",
		"illustrations/svg/RideABicycle"
	],
	"./RideABicycle/": [
		"./src/illustrations/svg/RideABicycle/index.js",
		"illustrations/svg/RideABicycle"
	],
	"./RideABicycle/index": [
		"./src/illustrations/svg/RideABicycle/index.js",
		"illustrations/svg/RideABicycle"
	],
	"./RideABicycle/index.js": [
		"./src/illustrations/svg/RideABicycle/index.js",
		"illustrations/svg/RideABicycle"
	],
	"./Rising": [
		"./src/illustrations/svg/Rising/index.js",
		"illustrations/svg/Rising"
	],
	"./Rising/": [
		"./src/illustrations/svg/Rising/index.js",
		"illustrations/svg/Rising"
	],
	"./Rising/index": [
		"./src/illustrations/svg/Rising/index.js",
		"illustrations/svg/Rising"
	],
	"./Rising/index.js": [
		"./src/illustrations/svg/Rising/index.js",
		"illustrations/svg/Rising"
	],
	"./RomanticGetaway": [
		"./src/illustrations/svg/RomanticGetaway/index.js",
		"illustrations/svg/RomanticGetaway"
	],
	"./RomanticGetaway/": [
		"./src/illustrations/svg/RomanticGetaway/index.js",
		"illustrations/svg/RomanticGetaway"
	],
	"./RomanticGetaway/index": [
		"./src/illustrations/svg/RomanticGetaway/index.js",
		"illustrations/svg/RomanticGetaway"
	],
	"./RomanticGetaway/index.js": [
		"./src/illustrations/svg/RomanticGetaway/index.js",
		"illustrations/svg/RomanticGetaway"
	],
	"./RunningWild": [
		"./src/illustrations/svg/RunningWild/index.js",
		"illustrations/svg/RunningWild"
	],
	"./RunningWild/": [
		"./src/illustrations/svg/RunningWild/index.js",
		"illustrations/svg/RunningWild"
	],
	"./RunningWild/index": [
		"./src/illustrations/svg/RunningWild/index.js",
		"illustrations/svg/RunningWild"
	],
	"./RunningWild/index.js": [
		"./src/illustrations/svg/RunningWild/index.js",
		"illustrations/svg/RunningWild"
	],
	"./Safe": [
		"./src/illustrations/svg/Safe/index.js",
		"illustrations/svg/Safe"
	],
	"./Safe/": [
		"./src/illustrations/svg/Safe/index.js",
		"illustrations/svg/Safe"
	],
	"./Safe/index": [
		"./src/illustrations/svg/Safe/index.js",
		"illustrations/svg/Safe"
	],
	"./Safe/index.js": [
		"./src/illustrations/svg/Safe/index.js",
		"illustrations/svg/Safe"
	],
	"./Science": [
		"./src/illustrations/svg/Science/index.js",
		"illustrations/svg/Science"
	],
	"./Science/": [
		"./src/illustrations/svg/Science/index.js",
		"illustrations/svg/Science"
	],
	"./Science/index": [
		"./src/illustrations/svg/Science/index.js",
		"illustrations/svg/Science"
	],
	"./Science/index.js": [
		"./src/illustrations/svg/Science/index.js",
		"illustrations/svg/Science"
	],
	"./Search": [
		"./src/illustrations/svg/Search/index.js",
		"illustrations/svg/Search"
	],
	"./Search/": [
		"./src/illustrations/svg/Search/index.js",
		"illustrations/svg/Search"
	],
	"./Search/index": [
		"./src/illustrations/svg/Search/index.js",
		"illustrations/svg/Search"
	],
	"./Search/index.js": [
		"./src/illustrations/svg/Search/index.js",
		"illustrations/svg/Search"
	],
	"./SearchEngines": [
		"./src/illustrations/svg/SearchEngines/index.js",
		"illustrations/svg/SearchEngines"
	],
	"./SearchEngines/": [
		"./src/illustrations/svg/SearchEngines/index.js",
		"illustrations/svg/SearchEngines"
	],
	"./SearchEngines/index": [
		"./src/illustrations/svg/SearchEngines/index.js",
		"illustrations/svg/SearchEngines"
	],
	"./SearchEngines/index.js": [
		"./src/illustrations/svg/SearchEngines/index.js",
		"illustrations/svg/SearchEngines"
	],
	"./SecureData": [
		"./src/illustrations/svg/SecureData/index.js",
		"illustrations/svg/SecureData"
	],
	"./SecureData/": [
		"./src/illustrations/svg/SecureData/index.js",
		"illustrations/svg/SecureData"
	],
	"./SecureData/index": [
		"./src/illustrations/svg/SecureData/index.js",
		"illustrations/svg/SecureData"
	],
	"./SecureData/index.js": [
		"./src/illustrations/svg/SecureData/index.js",
		"illustrations/svg/SecureData"
	],
	"./SecureServer": [
		"./src/illustrations/svg/SecureServer/index.js",
		"illustrations/svg/SecureServer"
	],
	"./SecureServer/": [
		"./src/illustrations/svg/SecureServer/index.js",
		"illustrations/svg/SecureServer"
	],
	"./SecureServer/index": [
		"./src/illustrations/svg/SecureServer/index.js",
		"illustrations/svg/SecureServer"
	],
	"./SecureServer/index.js": [
		"./src/illustrations/svg/SecureServer/index.js",
		"illustrations/svg/SecureServer"
	],
	"./SecurityOn": [
		"./src/illustrations/svg/SecurityOn/index.js",
		"illustrations/svg/SecurityOn"
	],
	"./SecurityOn/": [
		"./src/illustrations/svg/SecurityOn/index.js",
		"illustrations/svg/SecurityOn"
	],
	"./SecurityOn/index": [
		"./src/illustrations/svg/SecurityOn/index.js",
		"illustrations/svg/SecurityOn"
	],
	"./SecurityOn/index.js": [
		"./src/illustrations/svg/SecurityOn/index.js",
		"illustrations/svg/SecurityOn"
	],
	"./Segment": [
		"./src/illustrations/svg/Segment/index.js",
		"illustrations/svg/Segment"
	],
	"./Segment/": [
		"./src/illustrations/svg/Segment/index.js",
		"illustrations/svg/Segment"
	],
	"./Segment/index": [
		"./src/illustrations/svg/Segment/index.js",
		"illustrations/svg/Segment"
	],
	"./Segment/index.js": [
		"./src/illustrations/svg/Segment/index.js",
		"illustrations/svg/Segment"
	],
	"./Segmentation": [
		"./src/illustrations/svg/Segmentation/index.js",
		"illustrations/svg/Segmentation"
	],
	"./Segmentation/": [
		"./src/illustrations/svg/Segmentation/index.js",
		"illustrations/svg/Segmentation"
	],
	"./Segmentation/index": [
		"./src/illustrations/svg/Segmentation/index.js",
		"illustrations/svg/Segmentation"
	],
	"./Segmentation/index.js": [
		"./src/illustrations/svg/Segmentation/index.js",
		"illustrations/svg/Segmentation"
	],
	"./Select": [
		"./src/illustrations/svg/Select/index.js",
		"illustrations/svg/Select"
	],
	"./Select/": [
		"./src/illustrations/svg/Select/index.js",
		"illustrations/svg/Select"
	],
	"./Select/index": [
		"./src/illustrations/svg/Select/index.js",
		"illustrations/svg/Select"
	],
	"./Select/index.js": [
		"./src/illustrations/svg/Select/index.js",
		"illustrations/svg/Select"
	],
	"./Selfie": [
		"./src/illustrations/svg/Selfie/index.js",
		"illustrations/svg/Selfie"
	],
	"./Selfie/": [
		"./src/illustrations/svg/Selfie/index.js",
		"illustrations/svg/Selfie"
	],
	"./Selfie/index": [
		"./src/illustrations/svg/Selfie/index.js",
		"illustrations/svg/Selfie"
	],
	"./Selfie/index.js": [
		"./src/illustrations/svg/Selfie/index.js",
		"illustrations/svg/Selfie"
	],
	"./SelfieTime": [
		"./src/illustrations/svg/SelfieTime/index.js",
		"illustrations/svg/SelfieTime"
	],
	"./SelfieTime/": [
		"./src/illustrations/svg/SelfieTime/index.js",
		"illustrations/svg/SelfieTime"
	],
	"./SelfieTime/index": [
		"./src/illustrations/svg/SelfieTime/index.js",
		"illustrations/svg/SelfieTime"
	],
	"./SelfieTime/index.js": [
		"./src/illustrations/svg/SelfieTime/index.js",
		"illustrations/svg/SelfieTime"
	],
	"./Server": [
		"./src/illustrations/svg/Server/index.js",
		"illustrations/svg/Server"
	],
	"./Server/": [
		"./src/illustrations/svg/Server/index.js",
		"illustrations/svg/Server"
	],
	"./Server/index": [
		"./src/illustrations/svg/Server/index.js",
		"illustrations/svg/Server"
	],
	"./Server/index.js": [
		"./src/illustrations/svg/Server/index.js",
		"illustrations/svg/Server"
	],
	"./ServerStatus": [
		"./src/illustrations/svg/ServerStatus/index.js",
		"illustrations/svg/ServerStatus"
	],
	"./ServerStatus/": [
		"./src/illustrations/svg/ServerStatus/index.js",
		"illustrations/svg/ServerStatus"
	],
	"./ServerStatus/index": [
		"./src/illustrations/svg/ServerStatus/index.js",
		"illustrations/svg/ServerStatus"
	],
	"./ServerStatus/index.js": [
		"./src/illustrations/svg/ServerStatus/index.js",
		"illustrations/svg/ServerStatus"
	],
	"./Setup": [
		"./src/illustrations/svg/Setup/index.js",
		"illustrations/svg/Setup"
	],
	"./Setup/": [
		"./src/illustrations/svg/Setup/index.js",
		"illustrations/svg/Setup"
	],
	"./Setup/index": [
		"./src/illustrations/svg/Setup/index.js",
		"illustrations/svg/Setup"
	],
	"./Setup/index.js": [
		"./src/illustrations/svg/Setup/index.js",
		"illustrations/svg/Setup"
	],
	"./SiteStats": [
		"./src/illustrations/svg/SiteStats/index.js",
		"illustrations/svg/SiteStats"
	],
	"./SiteStats/": [
		"./src/illustrations/svg/SiteStats/index.js",
		"illustrations/svg/SiteStats"
	],
	"./SiteStats/index": [
		"./src/illustrations/svg/SiteStats/index.js",
		"illustrations/svg/SiteStats"
	],
	"./SiteStats/index.js": [
		"./src/illustrations/svg/SiteStats/index.js",
		"illustrations/svg/SiteStats"
	],
	"./SleepAnalysis": [
		"./src/illustrations/svg/SleepAnalysis/index.js",
		"illustrations/svg/SleepAnalysis"
	],
	"./SleepAnalysis/": [
		"./src/illustrations/svg/SleepAnalysis/index.js",
		"illustrations/svg/SleepAnalysis"
	],
	"./SleepAnalysis/index": [
		"./src/illustrations/svg/SleepAnalysis/index.js",
		"illustrations/svg/SleepAnalysis"
	],
	"./SleepAnalysis/index.js": [
		"./src/illustrations/svg/SleepAnalysis/index.js",
		"illustrations/svg/SleepAnalysis"
	],
	"./Sleeping": [
		"./src/illustrations/svg/Sleeping/index.js",
		"illustrations/svg/Sleeping"
	],
	"./Sleeping/": [
		"./src/illustrations/svg/Sleeping/index.js",
		"illustrations/svg/Sleeping"
	],
	"./Sleeping/index": [
		"./src/illustrations/svg/Sleeping/index.js",
		"illustrations/svg/Sleeping"
	],
	"./Sleeping/index.js": [
		"./src/illustrations/svg/Sleeping/index.js",
		"illustrations/svg/Sleeping"
	],
	"./SmileyFace": [
		"./src/illustrations/svg/SmileyFace/index.js",
		"illustrations/svg/SmileyFace"
	],
	"./SmileyFace/": [
		"./src/illustrations/svg/SmileyFace/index.js",
		"illustrations/svg/SmileyFace"
	],
	"./SmileyFace/index": [
		"./src/illustrations/svg/SmileyFace/index.js",
		"illustrations/svg/SmileyFace"
	],
	"./SmileyFace/index.js": [
		"./src/illustrations/svg/SmileyFace/index.js",
		"illustrations/svg/SmileyFace"
	],
	"./Snowman": [
		"./src/illustrations/svg/Snowman/index.js",
		"illustrations/svg/Snowman"
	],
	"./Snowman/": [
		"./src/illustrations/svg/Snowman/index.js",
		"illustrations/svg/Snowman"
	],
	"./Snowman/index": [
		"./src/illustrations/svg/Snowman/index.js",
		"illustrations/svg/Snowman"
	],
	"./Snowman/index.js": [
		"./src/illustrations/svg/Snowman/index.js",
		"illustrations/svg/Snowman"
	],
	"./SocialGrowth": [
		"./src/illustrations/svg/SocialGrowth/index.js",
		"illustrations/svg/SocialGrowth"
	],
	"./SocialGrowth/": [
		"./src/illustrations/svg/SocialGrowth/index.js",
		"illustrations/svg/SocialGrowth"
	],
	"./SocialGrowth/index": [
		"./src/illustrations/svg/SocialGrowth/index.js",
		"illustrations/svg/SocialGrowth"
	],
	"./SocialGrowth/index.js": [
		"./src/illustrations/svg/SocialGrowth/index.js",
		"illustrations/svg/SocialGrowth"
	],
	"./SocialIdeas": [
		"./src/illustrations/svg/SocialIdeas/index.js",
		"illustrations/svg/SocialIdeas"
	],
	"./SocialIdeas/": [
		"./src/illustrations/svg/SocialIdeas/index.js",
		"illustrations/svg/SocialIdeas"
	],
	"./SocialIdeas/index": [
		"./src/illustrations/svg/SocialIdeas/index.js",
		"illustrations/svg/SocialIdeas"
	],
	"./SocialIdeas/index.js": [
		"./src/illustrations/svg/SocialIdeas/index.js",
		"illustrations/svg/SocialIdeas"
	],
	"./SocialMedia": [
		"./src/illustrations/svg/SocialMedia/index.js",
		"illustrations/svg/SocialMedia"
	],
	"./SocialMedia/": [
		"./src/illustrations/svg/SocialMedia/index.js",
		"illustrations/svg/SocialMedia"
	],
	"./SocialMedia/index": [
		"./src/illustrations/svg/SocialMedia/index.js",
		"illustrations/svg/SocialMedia"
	],
	"./SocialMedia/index.js": [
		"./src/illustrations/svg/SocialMedia/index.js",
		"illustrations/svg/SocialMedia"
	],
	"./SocialNetworking": [
		"./src/illustrations/svg/SocialNetworking/index.js",
		"illustrations/svg/SocialNetworking"
	],
	"./SocialNetworking/": [
		"./src/illustrations/svg/SocialNetworking/index.js",
		"illustrations/svg/SocialNetworking"
	],
	"./SocialNetworking/index": [
		"./src/illustrations/svg/SocialNetworking/index.js",
		"illustrations/svg/SocialNetworking"
	],
	"./SocialNetworking/index.js": [
		"./src/illustrations/svg/SocialNetworking/index.js",
		"illustrations/svg/SocialNetworking"
	],
	"./SocialStrategy": [
		"./src/illustrations/svg/SocialStrategy/index.js",
		"illustrations/svg/SocialStrategy"
	],
	"./SocialStrategy/": [
		"./src/illustrations/svg/SocialStrategy/index.js",
		"illustrations/svg/SocialStrategy"
	],
	"./SocialStrategy/index": [
		"./src/illustrations/svg/SocialStrategy/index.js",
		"illustrations/svg/SocialStrategy"
	],
	"./SocialStrategy/index.js": [
		"./src/illustrations/svg/SocialStrategy/index.js",
		"illustrations/svg/SocialStrategy"
	],
	"./SocialTree": [
		"./src/illustrations/svg/SocialTree/index.js",
		"illustrations/svg/SocialTree"
	],
	"./SocialTree/": [
		"./src/illustrations/svg/SocialTree/index.js",
		"illustrations/svg/SocialTree"
	],
	"./SocialTree/index": [
		"./src/illustrations/svg/SocialTree/index.js",
		"illustrations/svg/SocialTree"
	],
	"./SocialTree/index.js": [
		"./src/illustrations/svg/SocialTree/index.js",
		"illustrations/svg/SocialTree"
	],
	"./Specs": [
		"./src/illustrations/svg/Specs/index.js",
		"illustrations/svg/Specs"
	],
	"./Specs/": [
		"./src/illustrations/svg/Specs/index.js",
		"illustrations/svg/Specs"
	],
	"./Specs/index": [
		"./src/illustrations/svg/Specs/index.js",
		"illustrations/svg/Specs"
	],
	"./Specs/index.js": [
		"./src/illustrations/svg/Specs/index.js",
		"illustrations/svg/Specs"
	],
	"./Spreadsheets": [
		"./src/illustrations/svg/Spreadsheets/index.js",
		"illustrations/svg/Spreadsheets"
	],
	"./Spreadsheets/": [
		"./src/illustrations/svg/Spreadsheets/index.js",
		"illustrations/svg/Spreadsheets"
	],
	"./Spreadsheets/index": [
		"./src/illustrations/svg/Spreadsheets/index.js",
		"illustrations/svg/Spreadsheets"
	],
	"./Spreadsheets/index.js": [
		"./src/illustrations/svg/Spreadsheets/index.js",
		"illustrations/svg/Spreadsheets"
	],
	"./Starman": [
		"./src/illustrations/svg/Starman/index.js",
		"illustrations/svg/Starman"
	],
	"./Starman/": [
		"./src/illustrations/svg/Starman/index.js",
		"illustrations/svg/Starman"
	],
	"./Starman/index": [
		"./src/illustrations/svg/Starman/index.js",
		"illustrations/svg/Starman"
	],
	"./Starman/index.js": [
		"./src/illustrations/svg/Starman/index.js",
		"illustrations/svg/Starman"
	],
	"./Startled": [
		"./src/illustrations/svg/Startled/index.js",
		"illustrations/svg/Startled"
	],
	"./Startled/": [
		"./src/illustrations/svg/Startled/index.js",
		"illustrations/svg/Startled"
	],
	"./Startled/index": [
		"./src/illustrations/svg/Startled/index.js",
		"illustrations/svg/Startled"
	],
	"./Startled/index.js": [
		"./src/illustrations/svg/Startled/index.js",
		"illustrations/svg/Startled"
	],
	"./StartupLife": [
		"./src/illustrations/svg/StartupLife/index.js",
		"illustrations/svg/StartupLife"
	],
	"./StartupLife/": [
		"./src/illustrations/svg/StartupLife/index.js",
		"illustrations/svg/StartupLife"
	],
	"./StartupLife/index": [
		"./src/illustrations/svg/StartupLife/index.js",
		"illustrations/svg/StartupLife"
	],
	"./StartupLife/index.js": [
		"./src/illustrations/svg/StartupLife/index.js",
		"illustrations/svg/StartupLife"
	],
	"./StaticAssets": [
		"./src/illustrations/svg/StaticAssets/index.js",
		"illustrations/svg/StaticAssets"
	],
	"./StaticAssets/": [
		"./src/illustrations/svg/StaticAssets/index.js",
		"illustrations/svg/StaticAssets"
	],
	"./StaticAssets/index": [
		"./src/illustrations/svg/StaticAssets/index.js",
		"illustrations/svg/StaticAssets"
	],
	"./StaticAssets/index.js": [
		"./src/illustrations/svg/StaticAssets/index.js",
		"illustrations/svg/StaticAssets"
	],
	"./Statistics": [
		"./src/illustrations/svg/Statistics/index.js",
		"illustrations/svg/Statistics"
	],
	"./Statistics/": [
		"./src/illustrations/svg/Statistics/index.js",
		"illustrations/svg/Statistics"
	],
	"./Statistics/index": [
		"./src/illustrations/svg/Statistics/index.js",
		"illustrations/svg/Statistics"
	],
	"./Statistics/index.js": [
		"./src/illustrations/svg/Statistics/index.js",
		"illustrations/svg/Statistics"
	],
	"./StayingIn": [
		"./src/illustrations/svg/StayingIn/index.js",
		"illustrations/svg/StayingIn"
	],
	"./StayingIn/": [
		"./src/illustrations/svg/StayingIn/index.js",
		"illustrations/svg/StayingIn"
	],
	"./StayingIn/index": [
		"./src/illustrations/svg/StayingIn/index.js",
		"illustrations/svg/StayingIn"
	],
	"./StayingIn/index.js": [
		"./src/illustrations/svg/StayingIn/index.js",
		"illustrations/svg/StayingIn"
	],
	"./StreetFood": [
		"./src/illustrations/svg/StreetFood/index.js",
		"illustrations/svg/StreetFood"
	],
	"./StreetFood/": [
		"./src/illustrations/svg/StreetFood/index.js",
		"illustrations/svg/StreetFood"
	],
	"./StreetFood/index": [
		"./src/illustrations/svg/StreetFood/index.js",
		"illustrations/svg/StreetFood"
	],
	"./StreetFood/index.js": [
		"./src/illustrations/svg/StreetFood/index.js",
		"illustrations/svg/StreetFood"
	],
	"./Studying": [
		"./src/illustrations/svg/Studying/index.js",
		"illustrations/svg/Studying"
	],
	"./Studying/": [
		"./src/illustrations/svg/Studying/index.js",
		"illustrations/svg/Studying"
	],
	"./Studying/index": [
		"./src/illustrations/svg/Studying/index.js",
		"illustrations/svg/Studying"
	],
	"./Studying/index.js": [
		"./src/illustrations/svg/Studying/index.js",
		"illustrations/svg/Studying"
	],
	"./SuccessfulPurchase": [
		"./src/illustrations/svg/SuccessfulPurchase/index.js",
		"illustrations/svg/SuccessfulPurchase"
	],
	"./SuccessfulPurchase/": [
		"./src/illustrations/svg/SuccessfulPurchase/index.js",
		"illustrations/svg/SuccessfulPurchase"
	],
	"./SuccessfulPurchase/index": [
		"./src/illustrations/svg/SuccessfulPurchase/index.js",
		"illustrations/svg/SuccessfulPurchase"
	],
	"./SuccessfulPurchase/index.js": [
		"./src/illustrations/svg/SuccessfulPurchase/index.js",
		"illustrations/svg/SuccessfulPurchase"
	],
	"./SunnyDay": [
		"./src/illustrations/svg/SunnyDay/index.js",
		"illustrations/svg/SunnyDay"
	],
	"./SunnyDay/": [
		"./src/illustrations/svg/SunnyDay/index.js",
		"illustrations/svg/SunnyDay"
	],
	"./SunnyDay/index": [
		"./src/illustrations/svg/SunnyDay/index.js",
		"illustrations/svg/SunnyDay"
	],
	"./SunnyDay/index.js": [
		"./src/illustrations/svg/SunnyDay/index.js",
		"illustrations/svg/SunnyDay"
	],
	"./Superhero": [
		"./src/illustrations/svg/Superhero/index.js",
		"illustrations/svg/Superhero"
	],
	"./Superhero/": [
		"./src/illustrations/svg/Superhero/index.js",
		"illustrations/svg/Superhero"
	],
	"./Superhero/index": [
		"./src/illustrations/svg/Superhero/index.js",
		"illustrations/svg/Superhero"
	],
	"./Superhero/index.js": [
		"./src/illustrations/svg/Superhero/index.js",
		"illustrations/svg/Superhero"
	],
	"./Surfer": [
		"./src/illustrations/svg/Surfer/index.js",
		"illustrations/svg/Surfer"
	],
	"./Surfer/": [
		"./src/illustrations/svg/Surfer/index.js",
		"illustrations/svg/Surfer"
	],
	"./Surfer/index": [
		"./src/illustrations/svg/Surfer/index.js",
		"illustrations/svg/Surfer"
	],
	"./Surfer/index.js": [
		"./src/illustrations/svg/Surfer/index.js",
		"illustrations/svg/Surfer"
	],
	"./SwipeProfiles": [
		"./src/illustrations/svg/SwipeProfiles/index.js",
		"illustrations/svg/SwipeProfiles"
	],
	"./SwipeProfiles/": [
		"./src/illustrations/svg/SwipeProfiles/index.js",
		"illustrations/svg/SwipeProfiles"
	],
	"./SwipeProfiles/index": [
		"./src/illustrations/svg/SwipeProfiles/index.js",
		"illustrations/svg/SwipeProfiles"
	],
	"./SwipeProfiles/index.js": [
		"./src/illustrations/svg/SwipeProfiles/index.js",
		"illustrations/svg/SwipeProfiles"
	],
	"./Sync": [
		"./src/illustrations/svg/Sync/index.js",
		"illustrations/svg/Sync"
	],
	"./Sync/": [
		"./src/illustrations/svg/Sync/index.js",
		"illustrations/svg/Sync"
	],
	"./Sync/index": [
		"./src/illustrations/svg/Sync/index.js",
		"illustrations/svg/Sync"
	],
	"./Sync/index.js": [
		"./src/illustrations/svg/Sync/index.js",
		"illustrations/svg/Sync"
	],
	"./Tabs": [
		"./src/illustrations/svg/Tabs/index.js",
		"illustrations/svg/Tabs"
	],
	"./Tabs/": [
		"./src/illustrations/svg/Tabs/index.js",
		"illustrations/svg/Tabs"
	],
	"./Tabs/index": [
		"./src/illustrations/svg/Tabs/index.js",
		"illustrations/svg/Tabs"
	],
	"./Tabs/index.js": [
		"./src/illustrations/svg/Tabs/index.js",
		"illustrations/svg/Tabs"
	],
	"./Taken": [
		"./src/illustrations/svg/Taken/index.js",
		"illustrations/svg/Taken"
	],
	"./Taken/": [
		"./src/illustrations/svg/Taken/index.js",
		"illustrations/svg/Taken"
	],
	"./Taken/index": [
		"./src/illustrations/svg/Taken/index.js",
		"illustrations/svg/Taken"
	],
	"./Taken/index.js": [
		"./src/illustrations/svg/Taken/index.js",
		"illustrations/svg/Taken"
	],
	"./TakingNotes": [
		"./src/illustrations/svg/TakingNotes/index.js",
		"illustrations/svg/TakingNotes"
	],
	"./TakingNotes/": [
		"./src/illustrations/svg/TakingNotes/index.js",
		"illustrations/svg/TakingNotes"
	],
	"./TakingNotes/index": [
		"./src/illustrations/svg/TakingNotes/index.js",
		"illustrations/svg/TakingNotes"
	],
	"./TakingNotes/index.js": [
		"./src/illustrations/svg/TakingNotes/index.js",
		"illustrations/svg/TakingNotes"
	],
	"./Target": [
		"./src/illustrations/svg/Target/index.js",
		"illustrations/svg/Target"
	],
	"./Target/": [
		"./src/illustrations/svg/Target/index.js",
		"illustrations/svg/Target"
	],
	"./Target/index": [
		"./src/illustrations/svg/Target/index.js",
		"illustrations/svg/Target"
	],
	"./Target/index.js": [
		"./src/illustrations/svg/Target/index.js",
		"illustrations/svg/Target"
	],
	"./Tasting": [
		"./src/illustrations/svg/Tasting/index.js",
		"illustrations/svg/Tasting"
	],
	"./Tasting/": [
		"./src/illustrations/svg/Tasting/index.js",
		"illustrations/svg/Tasting"
	],
	"./Tasting/index": [
		"./src/illustrations/svg/Tasting/index.js",
		"illustrations/svg/Tasting"
	],
	"./Tasting/index.js": [
		"./src/illustrations/svg/Tasting/index.js",
		"illustrations/svg/Tasting"
	],
	"./Team": [
		"./src/illustrations/svg/Team/index.js",
		"illustrations/svg/Team"
	],
	"./Team/": [
		"./src/illustrations/svg/Team/index.js",
		"illustrations/svg/Team"
	],
	"./Team/index": [
		"./src/illustrations/svg/Team/index.js",
		"illustrations/svg/Team"
	],
	"./Team/index.js": [
		"./src/illustrations/svg/Team/index.js",
		"illustrations/svg/Team"
	],
	"./TeamSpirit": [
		"./src/illustrations/svg/TeamSpirit/index.js",
		"illustrations/svg/TeamSpirit"
	],
	"./TeamSpirit/": [
		"./src/illustrations/svg/TeamSpirit/index.js",
		"illustrations/svg/TeamSpirit"
	],
	"./TeamSpirit/index": [
		"./src/illustrations/svg/TeamSpirit/index.js",
		"illustrations/svg/TeamSpirit"
	],
	"./TeamSpirit/index.js": [
		"./src/illustrations/svg/TeamSpirit/index.js",
		"illustrations/svg/TeamSpirit"
	],
	"./Thoughts": [
		"./src/illustrations/svg/Thoughts/index.js",
		"illustrations/svg/Thoughts"
	],
	"./Thoughts/": [
		"./src/illustrations/svg/Thoughts/index.js",
		"illustrations/svg/Thoughts"
	],
	"./Thoughts/index": [
		"./src/illustrations/svg/Thoughts/index.js",
		"illustrations/svg/Thoughts"
	],
	"./Thoughts/index.js": [
		"./src/illustrations/svg/Thoughts/index.js",
		"illustrations/svg/Thoughts"
	],
	"./ThroughTheDesert": [
		"./src/illustrations/svg/ThroughTheDesert/index.js",
		"illustrations/svg/ThroughTheDesert"
	],
	"./ThroughTheDesert/": [
		"./src/illustrations/svg/ThroughTheDesert/index.js",
		"illustrations/svg/ThroughTheDesert"
	],
	"./ThroughTheDesert/index": [
		"./src/illustrations/svg/ThroughTheDesert/index.js",
		"illustrations/svg/ThroughTheDesert"
	],
	"./ThroughTheDesert/index.js": [
		"./src/illustrations/svg/ThroughTheDesert/index.js",
		"illustrations/svg/ThroughTheDesert"
	],
	"./TimeManagement": [
		"./src/illustrations/svg/TimeManagement/index.js",
		"illustrations/svg/TimeManagement"
	],
	"./TimeManagement/": [
		"./src/illustrations/svg/TimeManagement/index.js",
		"illustrations/svg/TimeManagement"
	],
	"./TimeManagement/index": [
		"./src/illustrations/svg/TimeManagement/index.js",
		"illustrations/svg/TimeManagement"
	],
	"./TimeManagement/index.js": [
		"./src/illustrations/svg/TimeManagement/index.js",
		"illustrations/svg/TimeManagement"
	],
	"./ToDoList": [
		"./src/illustrations/svg/ToDoList/index.js",
		"illustrations/svg/ToDoList"
	],
	"./ToDoList/": [
		"./src/illustrations/svg/ToDoList/index.js",
		"illustrations/svg/ToDoList"
	],
	"./ToDoList/index": [
		"./src/illustrations/svg/ToDoList/index.js",
		"illustrations/svg/ToDoList"
	],
	"./ToDoList/index.js": [
		"./src/illustrations/svg/ToDoList/index.js",
		"illustrations/svg/ToDoList"
	],
	"./ToTheStars": [
		"./src/illustrations/svg/ToTheStars/index.js",
		"illustrations/svg/ToTheStars"
	],
	"./ToTheStars/": [
		"./src/illustrations/svg/ToTheStars/index.js",
		"illustrations/svg/ToTheStars"
	],
	"./ToTheStars/index": [
		"./src/illustrations/svg/ToTheStars/index.js",
		"illustrations/svg/ToTheStars"
	],
	"./ToTheStars/index.js": [
		"./src/illustrations/svg/ToTheStars/index.js",
		"illustrations/svg/ToTheStars"
	],
	"./Together": [
		"./src/illustrations/svg/Together/index.js",
		"illustrations/svg/Together"
	],
	"./Together/": [
		"./src/illustrations/svg/Together/index.js",
		"illustrations/svg/Together"
	],
	"./Together/index": [
		"./src/illustrations/svg/Together/index.js",
		"illustrations/svg/Together"
	],
	"./Together/index.js": [
		"./src/illustrations/svg/Together/index.js",
		"illustrations/svg/Together"
	],
	"./TrackAndField": [
		"./src/illustrations/svg/TrackAndField/index.js",
		"illustrations/svg/TrackAndField"
	],
	"./TrackAndField/": [
		"./src/illustrations/svg/TrackAndField/index.js",
		"illustrations/svg/TrackAndField"
	],
	"./TrackAndField/index": [
		"./src/illustrations/svg/TrackAndField/index.js",
		"illustrations/svg/TrackAndField"
	],
	"./TrackAndField/index.js": [
		"./src/illustrations/svg/TrackAndField/index.js",
		"illustrations/svg/TrackAndField"
	],
	"./TransferFiles": [
		"./src/illustrations/svg/TransferFiles/index.js",
		"illustrations/svg/TransferFiles"
	],
	"./TransferFiles/": [
		"./src/illustrations/svg/TransferFiles/index.js",
		"illustrations/svg/TransferFiles"
	],
	"./TransferFiles/index": [
		"./src/illustrations/svg/TransferFiles/index.js",
		"illustrations/svg/TransferFiles"
	],
	"./TransferFiles/index.js": [
		"./src/illustrations/svg/TransferFiles/index.js",
		"illustrations/svg/TransferFiles"
	],
	"./Trip": [
		"./src/illustrations/svg/Trip/index.js",
		"illustrations/svg/Trip"
	],
	"./Trip/": [
		"./src/illustrations/svg/Trip/index.js",
		"illustrations/svg/Trip"
	],
	"./Trip/index": [
		"./src/illustrations/svg/Trip/index.js",
		"illustrations/svg/Trip"
	],
	"./Trip/index.js": [
		"./src/illustrations/svg/Trip/index.js",
		"illustrations/svg/Trip"
	],
	"./Tweetstorm": [
		"./src/illustrations/svg/Tweetstorm/index.js",
		"illustrations/svg/Tweetstorm"
	],
	"./Tweetstorm/": [
		"./src/illustrations/svg/Tweetstorm/index.js",
		"illustrations/svg/Tweetstorm"
	],
	"./Tweetstorm/index": [
		"./src/illustrations/svg/Tweetstorm/index.js",
		"illustrations/svg/Tweetstorm"
	],
	"./Tweetstorm/index.js": [
		"./src/illustrations/svg/Tweetstorm/index.js",
		"illustrations/svg/Tweetstorm"
	],
	"./Typing": [
		"./src/illustrations/svg/Typing/index.js",
		"illustrations/svg/Typing"
	],
	"./Typing/": [
		"./src/illustrations/svg/Typing/index.js",
		"illustrations/svg/Typing"
	],
	"./Typing/index": [
		"./src/illustrations/svg/Typing/index.js",
		"illustrations/svg/Typing"
	],
	"./Typing/index.js": [
		"./src/illustrations/svg/Typing/index.js",
		"illustrations/svg/Typing"
	],
	"./Upload": [
		"./src/illustrations/svg/Upload/index.js",
		"illustrations/svg/Upload"
	],
	"./Upload/": [
		"./src/illustrations/svg/Upload/index.js",
		"illustrations/svg/Upload"
	],
	"./Upload/index": [
		"./src/illustrations/svg/Upload/index.js",
		"illustrations/svg/Upload"
	],
	"./Upload/index.js": [
		"./src/illustrations/svg/Upload/index.js",
		"illustrations/svg/Upload"
	],
	"./Upvote": [
		"./src/illustrations/svg/Upvote/index.js",
		"illustrations/svg/Upvote"
	],
	"./Upvote/": [
		"./src/illustrations/svg/Upvote/index.js",
		"illustrations/svg/Upvote"
	],
	"./Upvote/index": [
		"./src/illustrations/svg/Upvote/index.js",
		"illustrations/svg/Upvote"
	],
	"./Upvote/index.js": [
		"./src/illustrations/svg/Upvote/index.js",
		"illustrations/svg/Upvote"
	],
	"./Vault": [
		"./src/illustrations/svg/Vault/index.js",
		"illustrations/svg/Vault"
	],
	"./Vault/": [
		"./src/illustrations/svg/Vault/index.js",
		"illustrations/svg/Vault"
	],
	"./Vault/index": [
		"./src/illustrations/svg/Vault/index.js",
		"illustrations/svg/Vault"
	],
	"./Vault/index.js": [
		"./src/illustrations/svg/Vault/index.js",
		"illustrations/svg/Vault"
	],
	"./VirtualReality": [
		"./src/illustrations/svg/VirtualReality/index.js",
		"illustrations/svg/VirtualReality"
	],
	"./VirtualReality/": [
		"./src/illustrations/svg/VirtualReality/index.js",
		"illustrations/svg/VirtualReality"
	],
	"./VirtualReality/index": [
		"./src/illustrations/svg/VirtualReality/index.js",
		"illustrations/svg/VirtualReality"
	],
	"./VirtualReality/index.js": [
		"./src/illustrations/svg/VirtualReality/index.js",
		"illustrations/svg/VirtualReality"
	],
	"./VrChat": [
		"./src/illustrations/svg/VrChat/index.js",
		"illustrations/svg/VrChat"
	],
	"./VrChat/": [
		"./src/illustrations/svg/VrChat/index.js",
		"illustrations/svg/VrChat"
	],
	"./VrChat/index": [
		"./src/illustrations/svg/VrChat/index.js",
		"illustrations/svg/VrChat"
	],
	"./VrChat/index.js": [
		"./src/illustrations/svg/VrChat/index.js",
		"illustrations/svg/VrChat"
	],
	"./WalkInTheCity": [
		"./src/illustrations/svg/WalkInTheCity/index.js",
		"illustrations/svg/WalkInTheCity"
	],
	"./WalkInTheCity/": [
		"./src/illustrations/svg/WalkInTheCity/index.js",
		"illustrations/svg/WalkInTheCity"
	],
	"./WalkInTheCity/index": [
		"./src/illustrations/svg/WalkInTheCity/index.js",
		"illustrations/svg/WalkInTheCity"
	],
	"./WalkInTheCity/index.js": [
		"./src/illustrations/svg/WalkInTheCity/index.js",
		"illustrations/svg/WalkInTheCity"
	],
	"./WallPost": [
		"./src/illustrations/svg/WallPost/index.js",
		"illustrations/svg/WallPost"
	],
	"./WallPost/": [
		"./src/illustrations/svg/WallPost/index.js",
		"illustrations/svg/WallPost"
	],
	"./WallPost/index": [
		"./src/illustrations/svg/WallPost/index.js",
		"illustrations/svg/WallPost"
	],
	"./WallPost/index.js": [
		"./src/illustrations/svg/WallPost/index.js",
		"illustrations/svg/WallPost"
	],
	"./Weather": [
		"./src/illustrations/svg/Weather/index.js",
		"illustrations/svg/Weather"
	],
	"./Weather/": [
		"./src/illustrations/svg/Weather/index.js",
		"illustrations/svg/Weather"
	],
	"./Weather/index": [
		"./src/illustrations/svg/Weather/index.js",
		"illustrations/svg/Weather"
	],
	"./Weather/index.js": [
		"./src/illustrations/svg/Weather/index.js",
		"illustrations/svg/Weather"
	],
	"./WebDevices": [
		"./src/illustrations/svg/WebDevices/index.js",
		"illustrations/svg/WebDevices"
	],
	"./WebDevices/": [
		"./src/illustrations/svg/WebDevices/index.js",
		"illustrations/svg/WebDevices"
	],
	"./WebDevices/index": [
		"./src/illustrations/svg/WebDevices/index.js",
		"illustrations/svg/WebDevices"
	],
	"./WebDevices/index.js": [
		"./src/illustrations/svg/WebDevices/index.js",
		"illustrations/svg/WebDevices"
	],
	"./WebsiteSetup": [
		"./src/illustrations/svg/WebsiteSetup/index.js",
		"illustrations/svg/WebsiteSetup"
	],
	"./WebsiteSetup/": [
		"./src/illustrations/svg/WebsiteSetup/index.js",
		"illustrations/svg/WebsiteSetup"
	],
	"./WebsiteSetup/index": [
		"./src/illustrations/svg/WebsiteSetup/index.js",
		"illustrations/svg/WebsiteSetup"
	],
	"./WebsiteSetup/index.js": [
		"./src/illustrations/svg/WebsiteSetup/index.js",
		"illustrations/svg/WebsiteSetup"
	],
	"./Welcome": [
		"./src/illustrations/svg/Welcome/index.js",
		"illustrations/svg/Welcome"
	],
	"./Welcome/": [
		"./src/illustrations/svg/Welcome/index.js",
		"illustrations/svg/Welcome"
	],
	"./Welcome/index": [
		"./src/illustrations/svg/Welcome/index.js",
		"illustrations/svg/Welcome"
	],
	"./Welcome/index.js": [
		"./src/illustrations/svg/Welcome/index.js",
		"illustrations/svg/Welcome"
	],
	"./WindowShopping": [
		"./src/illustrations/svg/WindowShopping/index.js",
		"illustrations/svg/WindowShopping"
	],
	"./WindowShopping/": [
		"./src/illustrations/svg/WindowShopping/index.js",
		"illustrations/svg/WindowShopping"
	],
	"./WindowShopping/index": [
		"./src/illustrations/svg/WindowShopping/index.js",
		"illustrations/svg/WindowShopping"
	],
	"./WindowShopping/index.js": [
		"./src/illustrations/svg/WindowShopping/index.js",
		"illustrations/svg/WindowShopping"
	],
	"./Windows": [
		"./src/illustrations/svg/Windows/index.js",
		"illustrations/svg/Windows"
	],
	"./Windows/": [
		"./src/illustrations/svg/Windows/index.js",
		"illustrations/svg/Windows"
	],
	"./Windows/index": [
		"./src/illustrations/svg/Windows/index.js",
		"illustrations/svg/Windows"
	],
	"./Windows/index.js": [
		"./src/illustrations/svg/Windows/index.js",
		"illustrations/svg/Windows"
	],
	"./WinterOlympics": [
		"./src/illustrations/svg/WinterOlympics/index.js",
		"illustrations/svg/WinterOlympics"
	],
	"./WinterOlympics/": [
		"./src/illustrations/svg/WinterOlympics/index.js",
		"illustrations/svg/WinterOlympics"
	],
	"./WinterOlympics/index": [
		"./src/illustrations/svg/WinterOlympics/index.js",
		"illustrations/svg/WinterOlympics"
	],
	"./WinterOlympics/index.js": [
		"./src/illustrations/svg/WinterOlympics/index.js",
		"illustrations/svg/WinterOlympics"
	],
	"./Wireframing": [
		"./src/illustrations/svg/Wireframing/index.js",
		"illustrations/svg/Wireframing"
	],
	"./Wireframing/": [
		"./src/illustrations/svg/Wireframing/index.js",
		"illustrations/svg/Wireframing"
	],
	"./Wireframing/index": [
		"./src/illustrations/svg/Wireframing/index.js",
		"illustrations/svg/Wireframing"
	],
	"./Wireframing/index.js": [
		"./src/illustrations/svg/Wireframing/index.js",
		"illustrations/svg/Wireframing"
	],
	"./Wishes": [
		"./src/illustrations/svg/Wishes/index.js",
		"illustrations/svg/Wishes"
	],
	"./Wishes/": [
		"./src/illustrations/svg/Wishes/index.js",
		"illustrations/svg/Wishes"
	],
	"./Wishes/index": [
		"./src/illustrations/svg/Wishes/index.js",
		"illustrations/svg/Wishes"
	],
	"./Wishes/index.js": [
		"./src/illustrations/svg/Wishes/index.js",
		"illustrations/svg/Wishes"
	],
	"./Woman": [
		"./src/illustrations/svg/Woman/index.js",
		"illustrations/svg/Woman"
	],
	"./Woman/": [
		"./src/illustrations/svg/Woman/index.js",
		"illustrations/svg/Woman"
	],
	"./Woman/index": [
		"./src/illustrations/svg/Woman/index.js",
		"illustrations/svg/Woman"
	],
	"./Woman/index.js": [
		"./src/illustrations/svg/Woman/index.js",
		"illustrations/svg/Woman"
	],
	"./WomenDay": [
		"./src/illustrations/svg/WomenDay/index.js",
		"illustrations/svg/WomenDay"
	],
	"./WomenDay/": [
		"./src/illustrations/svg/WomenDay/index.js",
		"illustrations/svg/WomenDay"
	],
	"./WomenDay/index": [
		"./src/illustrations/svg/WomenDay/index.js",
		"illustrations/svg/WomenDay"
	],
	"./WomenDay/index.js": [
		"./src/illustrations/svg/WomenDay/index.js",
		"illustrations/svg/WomenDay"
	],
	"./WordOfMouth": [
		"./src/illustrations/svg/WordOfMouth/index.js",
		"illustrations/svg/WordOfMouth"
	],
	"./WordOfMouth/": [
		"./src/illustrations/svg/WordOfMouth/index.js",
		"illustrations/svg/WordOfMouth"
	],
	"./WordOfMouth/index": [
		"./src/illustrations/svg/WordOfMouth/index.js",
		"illustrations/svg/WordOfMouth"
	],
	"./WordOfMouth/index.js": [
		"./src/illustrations/svg/WordOfMouth/index.js",
		"illustrations/svg/WordOfMouth"
	],
	"./WorkChat": [
		"./src/illustrations/svg/WorkChat/index.js",
		"illustrations/svg/WorkChat"
	],
	"./WorkChat/": [
		"./src/illustrations/svg/WorkChat/index.js",
		"illustrations/svg/WorkChat"
	],
	"./WorkChat/index": [
		"./src/illustrations/svg/WorkChat/index.js",
		"illustrations/svg/WorkChat"
	],
	"./WorkChat/index.js": [
		"./src/illustrations/svg/WorkChat/index.js",
		"illustrations/svg/WorkChat"
	],
	"./WorkTime": [
		"./src/illustrations/svg/WorkTime/index.js",
		"illustrations/svg/WorkTime"
	],
	"./WorkTime/": [
		"./src/illustrations/svg/WorkTime/index.js",
		"illustrations/svg/WorkTime"
	],
	"./WorkTime/index": [
		"./src/illustrations/svg/WorkTime/index.js",
		"illustrations/svg/WorkTime"
	],
	"./WorkTime/index.js": [
		"./src/illustrations/svg/WorkTime/index.js",
		"illustrations/svg/WorkTime"
	],
	"./Working": [
		"./src/illustrations/svg/Working/index.js",
		"illustrations/svg/Working"
	],
	"./Working/": [
		"./src/illustrations/svg/Working/index.js",
		"illustrations/svg/Working"
	],
	"./Working/index": [
		"./src/illustrations/svg/Working/index.js",
		"illustrations/svg/Working"
	],
	"./Working/index.js": [
		"./src/illustrations/svg/Working/index.js",
		"illustrations/svg/Working"
	],
	"./WorkingLate": [
		"./src/illustrations/svg/WorkingLate/index.js",
		"illustrations/svg/WorkingLate"
	],
	"./WorkingLate/": [
		"./src/illustrations/svg/WorkingLate/index.js",
		"illustrations/svg/WorkingLate"
	],
	"./WorkingLate/index": [
		"./src/illustrations/svg/WorkingLate/index.js",
		"illustrations/svg/WorkingLate"
	],
	"./WorkingLate/index.js": [
		"./src/illustrations/svg/WorkingLate/index.js",
		"illustrations/svg/WorkingLate"
	],
	"./Workout": [
		"./src/illustrations/svg/Workout/index.js",
		"illustrations/svg/Workout"
	],
	"./Workout/": [
		"./src/illustrations/svg/Workout/index.js",
		"illustrations/svg/Workout"
	],
	"./Workout/index": [
		"./src/illustrations/svg/Workout/index.js",
		"illustrations/svg/Workout"
	],
	"./Workout/index.js": [
		"./src/illustrations/svg/Workout/index.js",
		"illustrations/svg/Workout"
	],
	"./Yacht": [
		"./src/illustrations/svg/Yacht/index.js",
		"illustrations/svg/Yacht"
	],
	"./Yacht/": [
		"./src/illustrations/svg/Yacht/index.js",
		"illustrations/svg/Yacht"
	],
	"./Yacht/index": [
		"./src/illustrations/svg/Yacht/index.js",
		"illustrations/svg/Yacht"
	],
	"./Yacht/index.js": [
		"./src/illustrations/svg/Yacht/index.js",
		"illustrations/svg/Yacht"
	],
	"./YoungAndHappy": [
		"./src/illustrations/svg/YoungAndHappy/index.js",
		"illustrations/svg/YoungAndHappy"
	],
	"./YoungAndHappy/": [
		"./src/illustrations/svg/YoungAndHappy/index.js",
		"illustrations/svg/YoungAndHappy"
	],
	"./YoungAndHappy/index": [
		"./src/illustrations/svg/YoungAndHappy/index.js",
		"illustrations/svg/YoungAndHappy"
	],
	"./YoungAndHappy/index.js": [
		"./src/illustrations/svg/YoungAndHappy/index.js",
		"illustrations/svg/YoungAndHappy"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/illustrations/svg lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Cosmin\xampp\htdocs\wp\wp-content\plugins\illustrations\index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=plugin.bundle.js.map