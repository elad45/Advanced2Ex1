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
     chats: [new Message("Hello", new Date(),"Michael12","Boaz34"),new Message("Hello", new Date(),"Boaz34","Michael12"), new Message("Hello", new Date(),"Boaz34","Michael12"), new Message("Hello", new Date(),"Boaz34","Michael12"), new Message("Hello", new Date(),"Boaz34","Michael12"), new Message("Hello", new Date(),"Boaz34","Michael12"), new Message("Hello", new Date(),"Boaz34","Michael12"), new Message("Hello", new Date(),"Boaz34","Michael12"), new Message("Hello", new Date(),"Boaz34","Michael12"), new Message("Hello", new Date(),"Boaz34","Michael12"), new Message("Hello", new Date(),"Boaz34","Michael12")]
    },

    {username: "Boaz",
     password: "12345",
     nickname: "Boaz34",
     avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
     friends: ["Elad56","Moshe45","Michael12"],    
     chats: [new Message("Hello", new Date(),"Elad56","Michael12"),new Message("Hello", new Date(),"Elad56","Boaz34")]
    },

    {username: "Moshe",
     password: "abc",
     nickname: "Moshe45",
     avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
     friends: ["Elad56","Boaz34"],    
     chats: [new Message("Hello how are you", new Date(),"Moshe45","Boaz34"),new Message("Hello", new Date(),"Boaz34","Moshe45")]
    },

    {username: "Elad",
     password: "12",
     nickname: "Elad56",
     avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
     friends: ["Moshe45","Michael12"],    
     chats: [new Message("Hello", new Date(),"Elad56","Moshe45"),new Message("Hello", new Date(),"Moshe45","Elad56")]
    },

    {username: "Yossi",
     password: "11",
     nickname: "Yossi90",
     avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
     friends: ["Moshe45","Michael12"],    
     chats: [new Message("Hello", new Date(),"Yossi90","Moshe45"),new Message("Hello", new Date(),"Yossi90","Elad56")]
    },

    {username: "Yaakov",
     password: "125",
     nickname: "Yaakov91",
     avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
     friends: ["Moshe45","Michael12"],    
     chats: [new Message("Hello", new Date(),"Yaakov91","Moshe45"),new Message("Hello", new Date(),"Moshe45","Yaakov91")]
    }
]

export default usersList