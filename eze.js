const path=require('path');
const http=require('http');
const Express=require('express');
const fileSystem=require('fs')
const expressHolder=Express();
const handlebars = require('express3-handlebars');
const getImageModule=require('./library/image_module')
expressHolder.use(Express.static(__dirname + '/public'));
const handlebarsHolder=handlebars.create({ defaultLayout:'main' });
expressHolder.engine('handlebars', handlebarsHolder.engine);
expressHolder.set('view engine', 'handlebars');
expressHolder.set('port',process.env.PORT||3931)


expressHolder.get('/',(request,response)=>{
	response.render('home')
} )


expressHolder.get('/about',(request,response)=>{
	response.render('about')
} )


expressHolder.get('/display', (req,res)=>{
	console.log(getImageModule.getImage())
	res.render('display', { fortune: getImageModule.getImage() });
	
} );


	expressHolder.use(function(req, res){
res.status(404);
res.render('404');
});


// custom 500 page
expressHolder.use(function(err, req, res, next){
res.status(500);
res.render('500');
});


expressHolder.listen(expressHolder.get('port'),()=>{
	console.log(`Server started on port ${expressHolder.get('port')}, Press ctrl C to stop server.`)
} )

