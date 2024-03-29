import React from 'react'

class Clock extends React.Component {
    render() {
        // Set the date we're counting down to
        var countDownDate = new Date("Apr 2, 2023 8:00:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();
                
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
                
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            // Output the result in an element with id="countdown"
            if (seconds < 10) {
                seconds = "0"+seconds
            }
            if (minutes < 10) {
                minutes = "0"+minutes
            }
            if (hours < 10) {
                hours = "0"+hours
            }
            if (days < 10) {
                days = "0"+days
            }
            document.getElementById("countdown").innerHTML = days + ":" + hours + ":"
            + minutes + ":" + seconds;
                
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "And she's off!";
            }
        }, 1000);

        return (
            <div className='clock flex flex-justify-center'>
                <div className='clock-padding'>
                    <div id="countdown"></div>
                </div>
            </div>
        )
    }
}

export default Clock