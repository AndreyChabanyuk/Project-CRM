
const arr = [
    
     {
        name:'Анастасия Атрахимвоич', 
        phone:420772551797, 
        email:'anastasiaAtr@gmail.com', 
        product:'course-html',
        everything: 'everything',
        status: 'new',
        
    },
    {
        name:'Андрей Чабанюк', 
        phone:42023421297, 
        email:'chabanyuk@gmail.com', 
        product:'course-js',
        everything: 'everything',
        status: 'new',
        
    },
     {
        name:'Анастасия Хорькова', 
        phone:420772556743, 
        email:'chorx@gmail.com', 
        product:'course-wordpress',
        everything: 'everything',
        status: 'new',
        
     },
     {
        name:'Владислав Печеневский',
        phone:4207721351783, 
        email:'Pechen@gmail.com', 
        product:'course-php',
        everything: 'everything',
        status: 'new',
        
     },
     {
        name:'Александр Терехин', 
        phone:426782551765, 
        email:'terexin@gmail.com', 
        product:'course-html',
        everything: 'everything',
        status: 'new',
        
     },
     {
        name:'Кирилл Жаров', 
        phone:42275343797, 
        email:'zharov@gmail.com', 
        product:'course-vue',
        everything: 'everything',
        status: 'new',
        
    },
    {
        name:'Вячеслав Федосеев', 
        phone:432163267890, 
        email:'fedoseev@gmail.com', 
        product:'course-js',
        everything: 'everything',
        status: 'new',
        
    },
];



const randomValue = (max) => {
    return Math.floor(Math.random() * max);
  };
  
 export const randomData = () => {
    const i = randomValue(arr.length)
    return arr[i];
}


