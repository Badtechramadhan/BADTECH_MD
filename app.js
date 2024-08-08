{
  "name": "badtech-md@1.3.9",
  "description": "I am Badtech-Md Whatsapp Chuddy Buddy built in NodeJs to make experience better\n\t if Any Problem : www.youtube.com/SuhailTechInfo",
  "logo": "https://github.com/Badtechramadhan/BADTECH_MD/blob/main/lib/assets/suhail.jpg?raw=true",
  "keywords": ["whatsappbot", "BadtechMd", "Badtech Md bot", "Badtech-Md", "BadtechMdWhatsaooBot", "BadtechWaBot","BadtechMD","BADTECH Md Whatsapp Bot","multi device"],
  "success_url": "/suhail/",
  "app_url": "/qr/",
  "stack":"container",
  "env": {
    "OWNER_NAME": {
      "description": "Name for Bot Owner",    
      "value": "Badtech Ser",
      "required" :true
    },   
     
    "CAN_WELCOME": {
      "description": "put 'false' or 'true' to enable & disable WELCOME ",
      "value": "true",
      "required" :false
    },
     
    "CAN_GOODBYE": {
      "description": "put 'false' or 'true' to enable & disable GOODBYE ",
      "value": "false",
      "required" :false
    },
    "BOT_NAME": {
      "description": " NAME FOR BOT",
      "required" :false,    
      "value": "sᴜʜᴀɪʟ-ᴍᴅ"
    }, 
    "TZ": {
      "description": "Put TIME_ZONE according to your location",
      "required" :false,    
      "value": "Africa/Uganda"
    },  
    "FLUSH": {
      "description": " Make it 'true' if bot connected but not responed (After deployement!)",
      "required" :false,    
      "value": "false"
    },
    "WARN_COUNT": {
      "description": " Warn count for users to kick/block when warn limit exceed!",
      "required" :false,    
      "value": "3"
    },
    "HEROKU_API_KEY": {
      "description": "Put Your Heroku Api Key Here",
      "value": "",
      "required" :true 
    },   
    "HEROKU_APP_NAME": {
      "description": "Put Your Heroku App Name Here",
      "value": "",
    "required" :true
    }, 
    "MSGS_IN_LOG": {
      "description": "Fill the value -true- if you want to see Messages in logs.",
      "required" :false,
      "value": "false"
    },
    "PREFIX": {
      "description": "Enter your desired prefix for bot. you can set `all | . | .!*`",
      "value": "."
    },
    "OWNER_NUMBER": {
      "description": "The phone numbers of the users who you want to be admin for the bot (should be in international format without + and multiple numbers must be separated by a comma \",\")",
      "value": "923184474176"
    },
    "SESSION_ID": {
      "description": "put your SESSION_ID here.",
      "value": ""
  
    },
    "OPENAI_API_KEY": {
      "description": "put your OPENAI api key here.Get it from beta.openai.com ",
      "value": "",
      "required" :false
    }, 
    "ELEVENLAB_API_KEY": {
      "description": "Put your ElevenLab api key here for Aitts. Watch tutorial from https://youtu.be/HCDcdPtkwg4 ",
      "value": "",
      "required" :false
    }, 
    "REMOVE_BG_KEY": {
      "description": "put your REMOVE BG KEY here.Get it from removeBg.com ",
      "value": "",
      "required" :false
    },
    "MODE": {
      "description": "Worktype of your bot. Use public/private, if private then only bot number can use it. If public then everyone can use it.",
      "value": "public"
    },
    "PACK_NAME": {
      "description": "Put Sticker Pack_Name.",
      "value": "Suhail Md",
      "required": false 
    },
    "PACK_AUTHER": {
      "description": "Put Sticker Author_Name.",
      "value": "",
      "required": false 
    }
  }, 
  "addons": [{ "plan": "heroku-postgresql:essential-1" }],
  "buildpacks": [
    { "url": "https://github.com/heroku/heroku-buildpack-nodejs#latest" },
    { "url": "https://github.com/carlosdommor/heroku-buildpack-ffmpeg-latest" }
  ]
        }
