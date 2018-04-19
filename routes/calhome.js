var ejs = require("ejs");

function calhome(req,res) {

	ejs.renderFile('./views/calhome.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}
function addition(req,res){

	console.log("addition");
	var result=parseFloat(req.param("num1"))+parseFloat(req.param("num2"));
	ejs.renderFile('./views/result.ejs', { data: [result,req.param("num1"),req.param("num2")] } , function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
	
}
function substraction(req,res){
	var result=req.param("num1")-req.param("num2");
	ejs.renderFile('./views/result.ejs', { data: [result,req.param("num1"),req.param("num2")] } , function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });

}
function multiplication(req,res){
	var result=req.param("num1")*req.param("num2");
	ejs.renderFile('./views/result.ejs', { data: [result,req.param("num1"),req.param("num2")] } , function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });

}
function division(req,res){
	var result=req.param("num1")/req.param("num2");
	ejs.renderFile('./views/result.ejs', { data: [result,req.param("num1"),req.param("num2")]} , function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });

}
exports.calhome=calhome;
exports.addition=addition;
exports.substraction=substraction;
exports.multiplication=multiplication;
exports.division=division;