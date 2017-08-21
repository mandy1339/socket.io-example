// Initialize socket object
var socket = io.connect('http://localhost:3000');

// Upon receiving a message
socket.on("connectionEstablished", function(data) {
    console.log("Message from the server arrived")
    console.log(data);
    $('#fromServer').append('<div>' + data.field1 + '</div>');
})

$('#submitBtn').click(submitFunction);

function submitFunction() {
    var textFromInput = $('#toServer').val();
    
    $('#toServer').val('');
}













            
            // $(function(){
            //     $('#submit').click(function(){ /*listening to the button click using Jquery listener*/
            //         var data = { /*creating a Js ojbect to be sent to the server*/ 
            //             message:$('#message').val(), /*getting the text input data      */
            //             author:'karthic'                
            //         }
            //         socket.send(JSON.stringify(data)); 
            //         /*Data can be sent to server very easily by using socket.send() method 
            //         The data has to be changed to a JSON before sending
            //                               it (JSON.stringify() does this job )*/
            //         /* This triggers a message event on the server side 
            //         and the event handler obtains the data sent */ 
 
            //         $('#message').val('');
            //         //Emptying the text box value using jquery 
 
            //     });
            // });