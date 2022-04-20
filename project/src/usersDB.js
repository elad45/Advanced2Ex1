import Message from "./Message"

var usersList = [
    {
        avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
    },
    {username: "Michael",
     password: "abcde",
     nickname: "Michael12",
     avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
     friends: ["Elad56","Moshe45","Boaz34","Yossi90","Yaakov91"],    
     chats: [new Message("Hello", new Date(),"text","Michael12","Boaz34"),new Message("Hello", new Date(),"text","Boaz34","Michael12")],
     lastMessages: new Map()
    },

    {username: "Boaz",
     password: "12345",
     nickname: "Boaz34",
     avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
     friends: ["Elad56","Moshe45","Michael12"],    
     chats: [new Message("Hello", new Date(),"text","Elad56","Michael12"),new Message("Hello", new Date(),"text","Elad56","Boaz34")],
     lastMessages: new Map()
    },

    {username: "Moshe",
     password: "abc",
     nickname: "Moshe45",
     avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
     friends: ["Elad56","Boaz34"],    
     chats: [new Message("Hello how are you", new Date(),"text","Moshe45","Boaz34"),new Message("Hello", new Date(),"text","Boaz34","Moshe45")],
     lastMessages: new Map()
    },

    {username: "Elad",
     password: "12",
     nickname: "Elad56",
     avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
     friends: ["Moshe45","Michael12"],    
     chats: [new Message("Hello", new Date(),"text","Elad56","Moshe45"),new Message("Hello", new Date(),"text","Moshe45","Elad56")],
     lastMessages: new Map()
    },

    {username: "Yossi",
     password: "11",
     nickname: "Yossi90",
     avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
     friends: ["Moshe45","Michael12","Elad56"],    
     chats: [new Message("Hello Moshe45", new Date(),"text","Yossi90","Moshe45"),new Message("Hello Elad56", new Date(),"text","Yossi90","Elad56")],
     lastMessages: new Map()
    },

    {username: "Yaakov",
     password: "125",
     nickname: "Yaakov91",
     avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
     friends: ["Moshe45","Michael12"],    
     chats: [new Message("Hello", new Date(),"text","Yaakov91","Moshe45"),new Message("Hello", new Date(),"text","Moshe45","Yaakov91"),
     new Message("Hello Michael12", new Date(),"text","Yaakov91","Michael12"), new Message("Hello Yaakov91", new Date(),"text","Michael12","Yaakov91")],
     lastMessages: new Map()
    },

    {username: "11",
     password: "125",
     nickname: "11",
     avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
     friends: ["Moshe45","Michael12"],    
     chats: [new Message("Hello", new Date(),"text","Yaakov91","Moshe45"),new Message("Hello", new Date(),"text","Moshe45","Yaakov91"),
     new Message("Hello Michael12", new Date(),"text","Yaakov91","Michael12"), new Message("Hello Yaakov91", new Date(),"text","Michael12","Yaakov91")],
     lastMessages: new Map()
    },
    {username: "22",
     password: "125",
     nickname: "22",
     avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
     friends: ["Moshe45","Michael12"],    
     chats: [new Message("Hello", new Date(),"text","Yaakov91","Moshe45"),new Message("Hello", new Date(),"text","Moshe45","Yaakov91"),
     new Message("Hello Michael12", new Date(),"text","Yaakov91","Michael12"), new Message("Hello Yaakov91", new Date(),"text","Michael12","Yaakov91")],
     lastMessages: new Map()
    },
    {username: "33",
     password: "125",
     nickname: "33",
     avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
     friends: ["Moshe45","Michael12"],    
     chats: [new Message("Hello", new Date(),"text","Yaakov91","Moshe45"),new Message("Hello", new Date(),"text","Moshe45","Yaakov91"),
     new Message("Hello Michael12", new Date(),"text","Yaakov91","Michael12"), new Message("Hello Yaakov91", new Date(),"text","Michael12","Yaakov91")],
     lastMessages: new Map()
    },
    {username: "44",
     password: "125",
     nickname: "44",
     avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
     friends: ["Moshe45","Michael12"],    
     chats: [new Message("Hello", new Date(),"text","Yaakov91","Moshe45"),new Message("Hello", new Date(),"text","Moshe45","Yaakov91"),
     new Message("Hello Michael12", new Date(),"text","Yaakov91","Michael12"), new Message("Hello Yaakov91", new Date(),"text","Michael12","Yaakov91")],
     lastMessages: new Map()
    }
]

export default usersList