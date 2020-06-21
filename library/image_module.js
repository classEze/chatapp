const imageArray=[
	'Eze.jpg',
	'lois.jpg',
	'jess.jpg',
	'asudo.jpg',
	'chat.jpg',
	'Eze1.jpg',
];

exports.getImage=()=>{
    
    let thisImage= imageArray[Math.floor(Math.random() * imageArray.length)]
    return thisImage;
}
